// v2 per-state research increment — security-guard
// Merged from 4 research fragment(s) on 2026-10-20
// by the state-pages flagship program (see reports/STATE-PAGES-FLAGSHIP-PLAN-2026-10-20.md).
// Wages: BLS OEWS May 2025 state tables via O*NET OnLine localwages pages.
// Field contract: src/data/examCatalog/RESEARCH_SCHEMA.md ("v2 per-state research increment").

export default {
  key: 'security-guard',
  compiledOn: '2026-10-20',
  states: {
  "AL": {
    "agency": "Alabama Security Regulatory Board (ASRB)",
    "agencyUrl": "https://asrb.alabama.gov/",
    "exam": null,
    "education": {
      "hours": "8",
      "breakdown": "Minimum 8 hours of board-approved basic security officer training from an ASRB-certified trainer, including use of force, required before licensure under Code of Alabama Section 34-27C-8. Armed officers complete additional firearms classroom training and must qualify with their firearm at least once each calendar year.",
      "onlineAllowed": "No. Training must be delivered in person by a trainer certified by the Board.",
      "apprenticeship": null,
      "sourceUrl": "https://asrb.alabama.gov/training"
    },
    "experience": "No security experience is required for an individual security guard license. Applicants must apply within 30 days of being hired by a licensed contract security company.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or legal resident (proof of age/citizenship such as a driver's license is submitted with the application)",
      "education": "No education requirement is published.",
      "other": "Applicants must carry no disqualifying criminal history; armed officers (21 or older) must also hold a pistol permit issued by the sheriff of their county of residence."
    },
    "background": {
      "method": "Two applicant fingerprint cards submitted with the paper application to the Board",
      "fee": "$37 background check fee (state ABI and FBI review)",
      "disqualifiers": "Felony or disqualifying misdemeanor convictions disclosed on the application; the Board reviews criminal history from the Alabama Bureau of Investigation and the FBI.",
      "sourceUrl": "https://asrb.alabama.gov/wp-content/uploads/2023/09/Full-QA-Application-9-19-23.pdf"
    },
    "fees": [
      {
        "item": "Personal application and license fee",
        "fee": "$75 (effective July 1, 2025)",
        "sourceUrl": "https://asrb.alabama.gov/"
      },
      {
        "item": "Background check",
        "fee": "$37",
        "sourceUrl": "https://asrb.alabama.gov/"
      },
      {
        "item": "Total due with initial application",
        "fee": "$112",
        "sourceUrl": "https://asrb.alabama.gov/"
      },
      {
        "item": "Renewal (2 years)",
        "fee": "$75",
        "sourceUrl": "https://legalclarity.org/how-much-does-an-alabama-security-license-cost"
      }
    ],
    "application": {
      "portal": "Paper application by mail (no online portal)",
      "portalUrl": "https://asrb.alabama.gov/forms",
      "steps": [
        "Complete 8 hours of training with an ASRB-certified trainer and obtain the certification of training.",
        "Complete the ASRB Personal License Application, listing 10 years of residence and employment history, criminal history, and three unrelated references.",
        "Attach two passport-style color photos, proof of age and citizenship, the authorization for release of information, the certification of experience/training, the ALEA criminal history release form, and two fingerprint cards.",
        "Submit the packet with a check for $112 payable to the ASRB; applications must be typed or printed in ink and incomplete packets are returned without consideration.",
        "There is no written examination; licensure is based on the completed packet, training certification, and the ABI/FBI background check. Officers typically work on a temporary basis while the Board processes the application."
      ],
      "processingTime": "Weeks; the Board processes after the criminal history report is received",
      "sourceUrl": "https://asrb.alabama.gov/wp-content/uploads/2023/09/Full-QA-Application-9-19-23.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "Refresher training from a certified trainer is required at renewal; armed officers complete an annual armed refresher and must qualify with their firearm each calendar year.",
      "fee": "$75",
      "late": "A late fee applies; the Board's current form lists a $25 late fee for qualifying agents.",
      "sourceUrl": "https://asrb.alabama.gov/wp-content/uploads/2023/09/Full-QA-Application-9-19-23.pdf"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$33,720",
      "p25": "$28,060",
      "p75": "$37,420",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=AL"
    },
    "localNuance": "State law (Section 34-27C-18) preempts city and county security licensing, so there is no separate Birmingham or Mobile guard card, but armed officers must obtain a county sheriff's pistol permit. Occasional staff who perform regulated work fewer than 30 calendar days in a year are exempt from individual licensure.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "Effective July 1, 2025, the personal application and license fee rose to $75 plus the $37 background fee, for a total of $112 per license application.",
        "sourceUrl": "https://asrb.alabama.gov/"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does an Alabama guard card cost?",
        "a": "The ASRB charges $75 for the personal application and license plus a $37 background check fee, $112 total, effective July 1, 2025. The 8-hour training course is paid separately to a certified trainer, typically $150 to $200."
      },
      {
        "q": "Is there a written exam for the Alabama security guard license?",
        "a": "No. Alabama does not administer a state examination for individual guards. Licensure turns on completing board-approved training, the application packet, and the ABI and FBI fingerprint review."
      },
      {
        "q": "How long is an Alabama security guard license valid?",
        "a": "Individual licenses are issued for two years from the date of issuance and renew on the anniversary for $75. No renewal photos are required, but refresher training documentation from a certified trainer is."
      },
      {
        "q": "Can I carry a firearm as an Alabama security officer?",
        "a": "Only with additional board firearms training, annual firearms qualification, and a pistol permit from the sheriff of the county where you live. The armed minimum age is 21, compared to 18 for unarmed officers."
      },
      {
        "q": "Do I need a license before my first shift?",
        "a": "You must apply within 30 days of being hired by a licensed contract security company. Applications filed after the 30th day draw a late fee, and working unregistered beyond that window exposes both the officer and the company to Board action."
      }
    ],
    "sources": [
      {
        "label": "Alabama Security Regulatory Board - Home (fee notice)",
        "url": "https://asrb.alabama.gov/",
        "checkedOn": "2026-10"
      },
      {
        "label": "ASRB Qualifying Agent / Guard License Checklist and Application (PDF)",
        "url": "https://asrb.alabama.gov/wp-content/uploads/2023/09/Full-QA-Application-9-19-23.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "ASRB Forms and Applications",
        "url": "https://asrb.alabama.gov/forms",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - Alabama Security License Costs (renewal fee, training cost range)",
        "url": "https://legalclarity.org/how-much-does-an-alabama-security-license-cost",
        "checkedOn": "2026-10"
      },
      {
        "label": "CGuardPro - Alabama Security Guard Company License Guide (age rules, 30-day rule, preemption)",
        "url": "https://cguardpro.com/en/blog/alabama-security-guard-company-license",
        "checkedOn": "2026-10"
      }
    ]
  },
  "AK": {
    "agency": "Alaska Department of Public Safety (DPS), Division of Statewide Services - Permits and Licensing",
    "agencyUrl": "https://dps.alaska.gov/statewide/permits-licensing/",
    "exam": null,
    "education": {
      "hours": "8 pre-assignment + 40 in-service + 8 annual refresher",
      "breakdown": "At least 8 hours of general pre-assignment training before a temporary permit or application (13 AAC 60.110(a)); at least 40 hours of in-service training within 180 days after employment covering law of arrest, search and seizure, duties to employer and client, fire prevention, first aid, and patrol techniques (13 AAC 60.110(b)); and an annual refresher course of at least 8 hours on the same topics (13 AAC 60.110(c)).",
      "onlineAllowed": "The regulation does not restrict delivery format; training is arranged through the employing licensed agency.",
      "apprenticeship": null,
      "sourceUrl": "https://regulations.justia.com/states/alaska/title-13/part-3/chapter-60/article-3/section-13-aac-60-110"
    },
    "experience": "No prior experience is required. The application asks for five years of residence and employment history and three character references, at least one an Alaska resident.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or resident alien holding a valid work permit",
      "education": "No education requirement is published.",
      "other": "Applicants must not be dependent on alcohol or narcotics, must be free of any mental condition impairing memory, reason, judgment, or perception, and must have no felony conviction within the 10 years before application unless pardoned."
    },
    "background": {
      "method": "One set of classifiable fingerprints submitted with the paper application; DPS conducts state and FBI criminal history checks",
      "fee": "$47 fingerprint fee payable to the State of Alaska",
      "disqualifiers": "Felony conviction, crime of moral turpitude, or any crime preventing firearm possession within 10 years of application unless a full pardon was granted; domestic violence convictions and protective orders are separately screened on the form.",
      "sourceUrl": "http://dps.alaska.gov/getmedia/d072286d-0041-4aac-94a3-e3dc9d58d433/12-183-0-SGL-NEW-APP-(rev-1-2025).pdf"
    },
    "fees": [
      {
        "item": "Security guard license application",
        "fee": "$50",
        "sourceUrl": "http://dps.alaska.gov/getmedia/d072286d-0041-4aac-94a3-e3dc9d58d433/12-183-0-SGL-NEW-APP-(rev-1-2025).pdf"
      },
      {
        "item": "Fingerprint processing",
        "fee": "$47",
        "sourceUrl": "http://dps.alaska.gov/getmedia/d072286d-0041-4aac-94a3-e3dc9d58d433/12-183-0-SGL-NEW-APP-(rev-1-2025).pdf"
      },
      {
        "item": "Renewal (2 years)",
        "fee": "$50",
        "sourceUrl": "https://www.dps.alaska.gov/getmedia/fb417f16-1d13-48a5-9a8f-5bccb30cd64c/Security-Guard-License-Renewal-Application-12-183-1-09-2023.pdf"
      }
    ],
    "application": {
      "portal": "Paper application (DPS form 12-183) submitted through the employing security guard agency",
      "portalUrl": "https://dps.alaska.gov/statewide/permits-licensing/",
      "steps": [
        "Complete 8 hours of pre-assignment training through the agency before applying.",
        "Complete the notarized DPS application (form 12-183, revised January 2025) with a waist-up photo taken within 30 days, one classifiable fingerprint set, and proof of the bond or insurance required by 13 AAC 60.120.",
        "Attach the $50 license fee and $47 fingerprint fee, each by check or money order payable to the State of Alaska.",
        "Armed applicants attach firearm qualification or certification documents from an instructor certified under 13 AAC 60.110(f).",
        "There is no written state examination; a licensed agency may employ a new hire on a temporary basis for up to 30 days once the completed application and fee are submitted (13 AAC 60.130)."
      ],
      "processingTime": "Not published; the department processes after fingerprint results clear",
      "sourceUrl": "http://dps.alaska.gov/getmedia/d072286d-0041-4aac-94a3-e3dc9d58d433/12-183-0-SGL-NEW-APP-(rev-1-2025).pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "Renewal applications must certify completion of the annual 8-hour refresher course required by 13 AAC 60.110(c), and armed guards must document current firearm competence.",
      "fee": "$50",
      "late": "Renewal applications should reach DPS at least 30 days before expiration (13 AAC 60.040).",
      "sourceUrl": "https://www.dps.alaska.gov/getmedia/fb417f16-1d13-48a5-9a8f-5bccb30cd64c/Security-Guard-License-Renewal-Application-12-183-1-09-2023.pdf"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$47,480",
      "p25": "$44,370",
      "p75": "$60,400",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=AK"
    },
    "localNuance": "The license is employment-tied: guards report a change of employer to DPS within five days, and agencies file semiannual guard rosters with DPS by March 31 and September 30 (13 AAC 60.140). Alaska also has daily overtime law (AS 23.10.060), time and a half after 8 hours in a day, which shapes guard scheduling. A CCW permit does not authorize armed guard work.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://dps.alaska.gov/statewide/permits-licensing/"
      }
    ],
    "stateFaqs": [
      {
        "q": "How many training hours does an Alaska security guard need?",
        "a": "Three layers: 8 hours of pre-assignment training before applying, 40 hours of in-service training within 180 days of hire covering arrest law, search and seizure, first aid, fire prevention, and patrol, and an 8-hour refresher every year. Failing the refresher can be grounds for revocation."
      },
      {
        "q": "What does an Alaska guard license cost?",
        "a": "The DPS application form requires a $50 license fee plus a $47 fingerprint fee, both payable to the State of Alaska, along with proof of the required bond or insurance. Renewal is $50 every two years."
      },
      {
        "q": "Can I start working before my Alaska guard license arrives?",
        "a": "Yes. Under 13 AAC 60.130 a licensed agency may employ a guard on a temporary basis for up to 30 days once the completed application and fee have been submitted and the agency has made reasonable inquiries into qualifications."
      },
      {
        "q": "What are the armed security requirements in Alaska?",
        "a": "Armed guards need at least 8 hours of pre-assignment firearms training from an instructor certified by a law enforcement agency or a nationally recognized organization, must demonstrate competence with the specific firearm issued, and must pass an annual practice firing review. A concealed carry permit does not substitute."
      },
      {
        "q": "Who is disqualified from an Alaska guard license?",
        "a": "Anyone with a felony, crime of moral turpitude, or firearm-prohibiting conviction within the previous 10 years unless pardoned, anyone dependent on alcohol or narcotics, and anyone with a mental condition impairing judgment or perception. The application also screens for domestic violence orders and convictions."
      }
    ],
    "sources": [
      {
        "label": "Alaska DPS - Permits and Licensing (Security Guard License)",
        "url": "https://dps.alaska.gov/statewide/permits-licensing/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Alaska DPS Security Guard License Application 12-183 (rev. 1/2025, PDF)",
        "url": "http://dps.alaska.gov/getmedia/d072286d-0041-4aac-94a3-e3dc9d58d433/12-183-0-SGL-NEW-APP-(rev-1-2025).pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Alaska DPS Security Guard Renewal Application 12-183-1 (PDF)",
        "url": "https://www.dps.alaska.gov/getmedia/fb417f16-1d13-48a5-9a8f-5bccb30cd64c/Security-Guard-License-Renewal-Application-12-183-1-09-2023.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "13 AAC 60.110 - Training required (regulation text)",
        "url": "https://regulations.justia.com/states/alaska/title-13/part-3/chapter-60/article-3/section-13-aac-60-110",
        "checkedOn": "2026-10"
      },
      {
        "label": "CGuardPro - Alaska Security Guard Company License Guide (temporary employment, rosters, insurance)",
        "url": "https://cguardpro.com/en/blog/alaska-security-guard-company-license",
        "checkedOn": "2026-10"
      }
    ]
  },
  "AZ": {
    "agency": "Arizona Department of Public Safety (AZDPS), Security Guard and Private Investigator Licensing Unit",
    "agencyUrl": "https://www.azdps.gov/services/public-services-center/licensing",
    "exam": null,
    "education": {
      "hours": "8 (unarmed) plus 16 firearms (armed)",
      "breakdown": "Unarmed applicants complete the 8-hour required curriculum - orientation, criminal law, communications, use of force, general procedures, crime scene, ethics, and first response - from a DPS-registered training instructor. Armed applicants add a 16-hour firearms training course, and armed renewal requires an 8-hour firearms continuing training course. DPS publishes the syllabus and lesson plans on its licensing page.",
      "onlineAllowed": "Yes, provided the course is delivered by an instructor registered with DPS and approved to teach the required curriculum.",
      "apprenticeship": null,
      "sourceUrl": "https://www.azdps.gov/node/109"
    },
    "experience": "No experience requirement for individual guard registration.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Not restricted by citizenship, but fingerprints drive an FBI criminal history review",
      "education": "No education requirement is published.",
      "other": "Precluding offenses are defined in A.R.S. Section 32-2622. A first-time-applicant fee waiver is available for veterans discharged within two years, active-duty military spouses, and applicants whose family income is at or below 200 percent of the federal poverty level (A.R.S. 41-1080.01); the $22 fingerprint fee still applies."
    },
    "background": {
      "method": "Fingerprints plus a fingerprint affidavit; electronic prints via Fieldprint kiosks or paper cards mailed to the Licensing Unit with the PSP reference number",
      "fee": "$22 fingerprint processing fee",
      "disqualifiers": "The precluding offenses listed in A.R.S. Section 32-2622 disqualify guard registrations.",
      "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
    },
    "fees": [
      {
        "item": "Unarmed Security Guard (new / renew)",
        "fee": "$50",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      },
      {
        "item": "Armed Security Guard (new / renew)",
        "fee": "$100",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      },
      {
        "item": "Upgrade to armed (one-time)",
        "fee": "$50",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      },
      {
        "item": "Fingerprint processing",
        "fee": "$22",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      },
      {
        "item": "Replacement card",
        "fee": "$10",
        "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
      }
    ],
    "application": {
      "portal": "Public Services Portal (PSP)",
      "portalUrl": "https://www.azdps.gov/services/public-services-center/licensing",
      "steps": [
        "Create a secure PSP account and submit the unarmed or armed security guard application online.",
        "After submission, use the reference number provided in the PSP message center for electronic fingerprinting at a Fieldprint kiosk or mail a completed paper fingerprint card to the Licensing Unit.",
        "Include the $22 fingerprint processing fee with every application; fees must be by cashier's check, certified check, credit card, or money order payable to the Arizona Department of Public Safety.",
        "Provide the training verification form documenting the 8-hour curriculum completed with a DPS-registered instructor.",
        "Allow at least 15 business days before checking status; approved identification cards are generally mailed within about two business days of printing."
      ],
      "processingTime": "At least 15 business days after submission",
      "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
    },
    "renewal": {
      "cycle": "4 years for certificates received on or after September 26, 2025 (2 years for those received before that date)",
      "ce": "An 8-hour refresher through the employing agency using the DPS-approved curriculum is required before renewal; armed guards use the 8-hour firearms continuing training lesson plan.",
      "fee": "$50 unarmed / $100 armed",
      "late": "A $100 late fee applies to agency renewals; renewal applications are accepted up to 180 days before expiration.",
      "sourceUrl": "https://www.azdps.gov/node/109"
    },
    "reciprocity": {
      "rule": "Arizona does not transfer guard registrations. Per the DPS licensing FAQ, security guard registrations are not transferable between states or persons, so out-of-state guards must meet Arizona requirements.",
      "agreements": null,
      "sourceUrl": "https://www.azdps.gov/services/public-services-center/licensing"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$38,290",
      "p25": "$35,670",
      "p75": "$44,010",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=AZ"
    },
    "localNuance": "Correspondence and identification cards go directly between the applicant and DPS, so an employer's address cannot be used as the mailing address. Registration cards are not proof on their own - DPS posts validity on the Public Services Portal, and photocopies are not accepted as evidence of registration.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "Licenses and registration certificates received on or after September 26, 2025 are valid for a four-year term rather than two years, per recent legislation (A.R.S. 32-2624).",
        "sourceUrl": "https://www.azdps.gov/node/109"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much is an Arizona guard card?",
        "a": "Unarmed registration is $50 new or renewing, armed registration is $100, and the fingerprint processing fee of $22 applies to every application. An unarmed-to-armed upgrade is a one-time $50."
      },
      {
        "q": "How long is an Arizona security guard registration valid?",
        "a": "Certificates received on or after September 26, 2025 run four years under A.R.S. 32-2624; those issued before that date run two years. The expiration date printed on the card controls."
      },
      {
        "q": "What training do I need before applying in Arizona?",
        "a": "The 8-hour DPS-required curriculum covering orientation, criminal law, communications, use of force, procedures, crime scene, ethics, and first response, delivered by a DPS-registered instructor. Armed applicants add a 16-hour firearms course; renewals add an 8-hour refresher."
      },
      {
        "q": "Can I transfer my security guard registration from another state to Arizona?",
        "a": "No. DPS states plainly that security guard registrations are not transferable between states or persons; you must complete Arizona's registration process, including the training, fingerprints, and fees."
      },
      {
        "q": "Do any applicants get the fee waived?",
        "a": "First-time applicants who are honorably discharged veterans within two years, active-duty military spouses, or whose family income is at or below 200 percent of the federal poverty level can have initial licensing fees waived under A.R.S. 41-1080.01, though the $22 fingerprint fee still applies."
      }
    ],
    "sources": [
      {
        "label": "Arizona DPS - Licensing (fees and FAQ)",
        "url": "https://www.azdps.gov/services/public-services-center/licensing",
        "checkedOn": "2026-10"
      },
      {
        "label": "Arizona DPS - Security Guard and Private Investigator Licensing (forms, term change, training syllabi)",
        "url": "https://www.azdps.gov/node/109",
        "checkedOn": "2026-10"
      },
      {
        "label": "Arizona DPS Licensing - Fee schedule and waiver program",
        "url": "https://licensing.azdps.gov/contact-0",
        "checkedOn": "2026-10"
      },
      {
        "label": "GuardTraining.net - State-by-state guard requirements (AZ training curriculum)",
        "url": "https://guardtraining.net/?p=987521631/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "AR": {
    "agency": "Arkansas State Police, Regulatory Services Division (Arkansas Board of Private Investigators and Private Security Agencies)",
    "agencyUrl": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf",
    "exam": {
      "vendor": "state board (administered through the approved training program)",
      "vendorUrl": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf",
      "parts": [
        {
          "name": "Private Security Officer exam (Phase I topics)",
          "questions": "At least 70 questions on Phase I subjects",
          "time": "Not published",
          "pass": "70%"
        }
      ],
      "fee": "Included with the initial application fee; a $50 re-examination fee applies if the exam is administered by the State Police",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://licensenavigator.ai/blog/security-guard-license-cost-arkansas",
      "sourceNote": "17 CAR 350-1017, as summarized by secondary sources"
    },
    "education": {
      "hours": "8 (unarmed PSO) plus 16 firearms (armed CSO)",
      "breakdown": "Private Security Officers complete Phase I training of at least 8 hours covering legal authority, Arkansas private security rules, and note taking and report writing, with a test on each area (17 CAR 350-1004). Commissioned (armed) officers add Phase II firearms training of 16 hours, split 8 classroom and 8 range (17 CAR 350-1005). Current certified law enforcement officers are exempt from training with documentation (17 CAR 350-1007).",
      "onlineAllowed": "Not addressed in the rules summarized here.",
      "apprenticeship": null,
      "sourceUrl": "https://licensenavigator.ai/blog/security-guard-license-cost-arkansas"
    },
    "experience": "No experience requirement for individual credentials. The application must reach the State Police within 14 calendar days of hire, and the applicant may work under line-of-sight supervision by a licensee or credential holder until processed.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Non-US citizens must attach current, valid proof of eligibility to work in the United States",
      "education": "No education requirement is published.",
      "other": "Commissioned (armed) officers must be 21. Applicants must disclose all arrests, pending charges, pleas, and convictions for listed offenses - including sealed or expunged records with the sealing order and original judgment attached."
    },
    "background": {
      "method": "Two classifiable fingerprint cards submitted with the application for Arkansas State Police and FBI checks",
      "fee": "$22 state background check plus $13 in federal background check line items ($10 + $1 + $2)",
      "disqualifiers": "Convictions or guilty/nolo pleas to offenses listed in A.C.A. 17-39-202, 17-39-206, 17-39-304, 17-40-306, or 17-40-337; armed officers must not be barred from firearm possession under state or federal law.",
      "sourceUrl": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf"
    },
    "fees": [
      {
        "item": "Security officer credential (unarmed or commissioned)",
        "fee": "$40",
        "sourceUrl": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf"
      },
      {
        "item": "State background check",
        "fee": "$22",
        "sourceUrl": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf"
      },
      {
        "item": "Federal background check (three line items)",
        "fee": "$13",
        "sourceUrl": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf"
      },
      {
        "item": "Total due with application",
        "fee": "$75",
        "sourceUrl": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf"
      },
      {
        "item": "Employer transfer",
        "fee": "$20",
        "sourceUrl": "https://legalclarity.org/arkansas-security-guard-training-and-license-requirements/"
      }
    ],
    "application": {
      "portal": "Paper application submitted to the Arkansas State Police Private Security Section, generally through the employing agency",
      "portalUrl": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf",
      "steps": [
        "Get hired by a licensed Arkansas security agency and complete Phase I training (and Phase II firearms training for a commission) with a board-approved trainer.",
        "Pass the written exam at the end of the training program; the initial fee covers one attempt.",
        "Complete the notarized application with two passport-style photos and full disclosure of criminal history, including sealed or expunged matters.",
        "Attach two classifiable fingerprint cards and pay the $75 total ($40 credential + $22 state check + $13 federal fees).",
        "Submit to the State Police within 14 calendar days of hire; until processed, you may work only under the immediate line-of-sight supervision of a licensee or credential holder."
      ],
      "processingTime": "Not published; processing follows the state and FBI fingerprint results",
      "sourceUrl": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "Renewal training must be completed within the 12 months before expiration: at least 6 hours for PSOs and 12 hours for CSOs including range requalification and a safety course. CSOs also complete 12 hours of refresher training annually.",
      "fee": "$40",
      "late": "Renewal is allowed within 90 days before expiration; a lapsed credential cannot be used to work.",
      "sourceUrl": "https://legalclarity.org/arkansas-security-license-requirements-application-and-renewal"
    },
    "reciprocity": {
      "rule": "Rule 2.4 of the State Police rules allows an applicant holding a substantially similar license from another US state, territory, or the District of Columbia to apply for a reciprocal or temporary Arkansas credential, evaluated case by case based on comparable requirements, good standing, and no adverse disciplinary history. Arkansas does not publish a list of specific agreement states.",
      "agreements": null,
      "sourceUrl": "https://legalclarity.org/arkansas-security-license-requirements-application-and-renewal"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$35,770",
      "p25": "$29,750",
      "p75": "$41,210",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=AR"
    },
    "localNuance": "Uniforms and vehicle markings that could be confused with the Arkansas State Police - including similar design or color schemes - are prohibited under A.C.A. 12-8-121. Credentials are employer-tied, so changing companies requires a $20 transfer application with new background check fees.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does an Arkansas security license cost?",
        "a": "The State Police collect $75 with the application: a $40 credential fee, $22 state background check, and $13 in federal check fees. Renewal is $40 every two years, and transferring the credential to a new employer costs $20."
      },
      {
        "q": "What is the difference between a PSO and a CSO in Arkansas?",
        "a": "A Private Security Officer is the unarmed credential requiring 8 hours of Phase I training; a Commissioned Security Officer is the armed credential requiring age 21, an additional 16 hours of firearms training split between classroom and range, and stricter felony disqualification rules."
      },
      {
        "q": "Is there an exam?",
        "a": "Yes. Applicants pass a written exam on Phase I topics with at least 70 percent, administered as part of the approved training program. The initial application fee covers one attempt; a State Police-administered re-exam carries a $50 fee."
      },
      {
        "q": "Can I work while my Arkansas application is pending?",
        "a": "Only under direct supervision: a current licensee or credential holder must watch and direct your activities while remaining within line-of-sight proximity at all times. The application must also be filed within 14 calendar days of your hire date."
      },
      {
        "q": "Does Arkansas recognize out-of-state guard licenses?",
        "a": "Partially. Rule 2.4 provides a case-by-case reciprocal or temporary licensing path for holders of substantially similar licenses in good standing, but Arkansas publishes no list of agreement states."
      }
    ],
    "sources": [
      {
        "label": "Arkansas DPS - Commissioned Security Officer Application (rev. 02/2026, PDF)",
        "url": "https://media.ark.org/dps/PI_Security_Commissioned_Security_Officer_Application_02272026.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Licensing Navigator - Arkansas Security Guard License Costs (17 CAR citations)",
        "url": "https://licensenavigator.ai/blog/security-guard-license-cost-arkansas",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - Arkansas Security License Requirements, Fees, and Renewal",
        "url": "https://legalclarity.org/arkansas-security-license-requirements-application-and-renewal",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - Arkansas Security Guard Training and License Requirements (renewal training, transfer fee)",
        "url": "https://legalclarity.org/arkansas-security-guard-training-and-license-requirements/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Security Dogma - Arkansas Security Guard Requirements (credential structure)",
        "url": "https://securitydogma.com/licensing/arkansas",
        "checkedOn": "2026-10"
      }
    ]
  },
  "CA": {
    "agency": "California Bureau of Security and Investigative Services (BSIS)",
    "agencyUrl": "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml",
    "exam": {
      "vendor": "state board (exam delivered by BSIS-approved training schools at the end of the course)",
      "vendorUrl": "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml",
      "parts": [
        {
          "name": "Power to Arrest and Appropriate Use of Force examination",
          "questions": "Not published by BSIS",
          "time": "Untimed",
          "pass": "100% (retakes permitted)"
        }
      ],
      "fee": "Included in the training course cost; BSIS does not charge a separate exam fee",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://www.preppass.org/en/guard-card/guide",
      "sourceNote": "16 CCR 628(b) passing standard as documented by secondary sources"
    },
    "education": {
      "hours": "8 before registration + 32 within 6 months + 8 annually",
      "breakdown": "The 8-hour Power to Arrest and Appropriate Use of Force course must be completed before registration issues (BPC 7583.6 and 7583.8). Thirty-two hours of security officer skills training must be completed within the first six months of registration - 16 hours within the first 30 days and 16 more by six months. Eight hours of continuing training is required every year thereafter (BPC 7583.6, CCR 643).",
      "onlineAllowed": "Training may be administered by the employing private patrol operator, a BSIS-certified training facility, or a BSIS-approved course provider; under SB 652 (effective January 1, 2026) the initial 8-hour course must come from a single licensed provider and be completed within 6 months before applying.",
      "apprenticeship": null,
      "sourceUrl": "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml"
    },
    "experience": "No experience requirement for guard registration.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Not restricted by citizenship; work authorization applies as with any employment",
      "education": "No education requirement is published.",
      "other": "Applicants must clear criminal history checks with the California DOJ and FBI (BPC 7581, 7583.9)."
    },
    "background": {
      "method": "Live Scan fingerprinting at a California location using the Security Guard Request for Live Scan Service form (out-of-state applicants may submit hard cards)",
      "fee": "DOJ and FBI processing fees plus the Live Scan operator's rolling fee, paid at the time of fingerprinting",
      "disqualifiers": "Criminal history determinations are made by BSIS after DOJ and FBI responses; specific statutory disqualifier lists are not published on the fact sheet.",
      "sourceUrl": "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml"
    },
    "fees": [
      {
        "item": "Registration application",
        "fee": "$60 (effective October 1, 2025; previously $50)",
        "sourceUrl": "https://www.preppass.org/en/guard-card/guide"
      },
      {
        "item": "Renewal (2 years)",
        "fee": "$44 (effective October 1, 2025; previously $35)",
        "sourceUrl": "https://www.preppass.org/en/guard-card/guide"
      },
      {
        "item": "Live Scan (DOJ + FBI + rolling fee)",
        "fee": "About $49-$124 depending on the site",
        "sourceUrl": "https://www.preppass.org/en/guard-card/guide"
      }
    ],
    "application": {
      "portal": "BreEZe (breeze.ca.gov) or paper application by mail",
      "portalUrl": "https://www.breeze.ca.gov/",
      "steps": [
        "Complete the 8-hour Power to Arrest and Appropriate Use of Force course with a BSIS-licensed provider within 6 months before applying and pass the end-of-course exam.",
        "Submit the application online in BreEZe (recommended; can cut processing by up to two weeks) or mail the paper application with the fee to BSIS in West Sacramento.",
        "Complete Live Scan fingerprinting with the correct BSIS-coded form so DOJ and FBI results route to the Bureau.",
        "Allow roughly 4-6 weeks for processing, which depends on DOJ and FBI response times.",
        "Once approved, you may work using a website printout of the Bureau's approval plus valid photo ID while waiting for the hard-copy registration card, which arrives by mail in about three weeks."
      ],
      "processingTime": "About 4-6 weeks",
      "sourceUrl": "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "8 hours of continuing training every year, administered by a private patrol operator, BSIS-certified facility, or approved provider.",
      "fee": "$44",
      "late": "Renewal fee schedule published by BSIS; a lapsed registration cannot be used for guard work.",
      "sourceUrl": "https://www.preppass.org/en/guard-card/guide"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$43,240",
      "p25": "$37,180",
      "p75": "$46,760",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=CA"
    },
    "localNuance": "A guard must physically carry the registration card on duty (BPC 7583.3). Separate BSIS permits exist for exposed firearms, tear gas, and batons, each with its own training facility approval. BSIS publishes current processing timelines on its website.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "BSIS guard card fees changed effective October 1, 2025: the initial application fee rose to $60 and the renewal fee to $44.",
        "sourceUrl": "https://www.preppass.org/en/guard-card/guide"
      },
      {
        "year": 2026,
        "change": "SB 652 took effect January 1, 2026, requiring the 8-hour Power to Arrest and Use of Force course to be completed with a single BSIS-licensed provider within six months before applying.",
        "sourceUrl": "https://www.preppass.org/en/guard-card/guide"
      }
    ],
    "stateFaqs": [
      {
        "q": "How long does it take to get a California guard card?",
        "a": "About 4-6 weeks after BSIS receives the application and clears the DOJ and FBI background checks. Submitting online in BreEZe can shorten processing by up to two weeks, and the Live Scan form must carry BSIS's correct coding or processing stalls."
      },
      {
        "q": "What is the 40-hour California training structure?",
        "a": "Eight hours of Power to Arrest and Use of Force before the card issues, 32 hours of security officer skills within the first six months (16 within 30 days of employment), then 8 hours of continuing training every year the registration is held."
      },
      {
        "q": "Can I work before my physical card arrives?",
        "a": "Yes, if BSIS has approved the registration and you carry a printout of the Bureau's website approval together with valid picture identification while on duty (BPC 7583.17)."
      },
      {
        "q": "How much does a California guard card cost in total?",
        "a": "Plan for roughly $250-$300: $60 application fee, about $49-$124 in Live Scan and DOJ/FBI fees, plus the 8-hour course tuition (commonly $30-$80). Renewal is $44 every two years."
      },
      {
        "q": "What is the pass standard for the guard card exam?",
        "a": "The Power to Arrest and Appropriate Use of Force exam administered at the end of the 8-hour course requires 100 percent under 16 CCR 628(b), with retakes permitted. BSIS does not publish the question count."
      }
    ],
    "sources": [
      {
        "label": "BSIS - Security Guard Registration Fact Sheet",
        "url": "https://www.bsis.ca.gov/forms_pubs/guard_fact.shtml",
        "checkedOn": "2026-10"
      },
      {
        "label": "BSIS - Security Guard Registration Fact Sheet (PDF, rev. Oct 2025)",
        "url": "http://bsis.ca.gov/forms_pubs/guard_fact.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "PrepPass - California Guard Card Guide (2025 fee schedule and SB 652 summary)",
        "url": "https://www.preppass.org/en/guard-card/guide",
        "checkedOn": "2026-10"
      },
      {
        "label": "BSIS - BreEZe online application portal",
        "url": "https://www.breeze.ca.gov/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "CT": {
    "agency": "Connecticut Department of Emergency Services and Public Protection (DESPP), Special Licensing and Firearms Unit (SLFU)",
    "agencyUrl": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers",
    "exam": null,
    "education": {
      "hours": "8",
      "breakdown": "At least 8 hours of classroom instruction from a DESPP-approved instructor covering basic first aid, search and seizure, use of force, and basic criminal justice and public safety issues, required by CGS 29-161q. The instructor signs the reverse of application form DPS-135-C on completion.",
      "onlineAllowed": "The statute requires a course of instruction approved by the Commissioner; DESPP publishes a list of approved instructors.",
      "apprenticeship": null,
      "sourceUrl": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers"
    },
    "experience": "No experience requirement for the security officer identification card.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "No citizenship requirement is stated for the card; naturalization papers are requested if applicable",
      "education": "No education requirement is published.",
      "other": "Armed security officers must be 21. No person convicted of a felony, any sexual offense, or any crime questioning honesty and integrity may be certified. Active military and those honorably separated within two years qualify for a waiver of both the training course and the $100 fee under Public Act 14-131."
    },
    "background": {
      "method": "Fingerprint fees paid online in advance through the Connecticut FlexCheck portal (ct.flexcheck.us.idemia.io/cchrspreenroll); the fingerprint card and a copy of the applicant tracking number accompany the application",
      "fee": "About $75 state criminal history check plus $13.25 FBI check, paid online before submission",
      "disqualifiers": "Felony convictions, sexual offenses, crimes of moral turpitude, prior security license denial (except for lack of experience), and police decertification all bar certification under CGS 29-161q.",
      "sourceUrl": "https://legalclarity.org/ct-security-license-requirements-and-application-steps"
    },
    "fees": [
      {
        "item": "Security Officer Training Certification Identification Card application",
        "fee": "$100 (payable to Treasurer, State of Connecticut)",
        "sourceUrl": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers"
      },
      {
        "item": "State and FBI criminal history checks",
        "fee": "About $88.25 combined, paid online before fingerprinting",
        "sourceUrl": "https://legalclarity.org/ct-security-license-requirements-and-application-steps"
      },
      {
        "item": "Employer registration of each licensed officer",
        "fee": "$40",
        "sourceUrl": "https://cguardpro.com/en/blog/connecticut-security-guard-company-license"
      }
    ],
    "application": {
      "portal": "Paper application (DPS-135-C) mailed to the Special Licensing and Firearms Unit",
      "portalUrl": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers",
      "steps": [
        "Complete the 8-hour DESPP-approved course with a public instructor; the instructor signs the DPS-135-C application form.",
        "Pay fingerprint fees online at the FlexCheck portal and keep the applicant tracking number or receipt.",
        "Mail the completed DPS-135-C with the $100 check or money order payable to Treasurer, State of Connecticut, one 2-inch by 2-inch color photo on a solid background, the fingerprint card, a copy of your Connecticut driver's license, and the signed FBI Privacy Act statement to SLFU in Middletown.",
        "There is no separate written state examination - the 8-hour course is the qualifying requirement.",
        "Once issued, the Security Officer Training Certification Identification Card is valid for five years unless suspended or revoked, and the employer then registers the officer with SLFU."
      ],
      "processingTime": "Not published; incomplete or incorrect packets are returned",
      "sourceUrl": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers"
    },
    "renewal": {
      "cycle": "5 years",
      "ce": "No continuing education requirement for unarmed officers is set in the statute; armed officers must complete an annual firearms refresher course.",
      "fee": "Not published on the SLFU page; a late renewal carries an additional $25 and a license expired more than 90 days cannot be renewed",
      "late": "The license remains valid for 90 days after expiration, and DESPP sends notice at least 90 days ahead.",
      "sourceUrl": "https://cguardpro.com/en/blog/connecticut-security-guard-company-license"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$39,920",
      "p25": "$36,100",
      "p75": "$47,510",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=CT"
    },
    "localNuance": "Connecticut runs a two-step system: the officer's personal five-year card from SLFU, then the Security Service Agency registers each officer ($40). Pending applicants may work only if the employer ran its own state and national background check, and never at preschools, K-12 schools, or licensed child care centers. Armed officers additionally need a permit under CGS 29-161z plus annual refresher training.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does a Connecticut guard card cost?",
        "a": "The SLFU application fee is $100, payable to the Treasurer, State of Connecticut, plus roughly $88 in state and FBI fingerprint check fees paid online before submission. The 8-hour training course is paid separately to the private instructor."
      },
      {
        "q": "Is there an exam for the Connecticut security officer card?",
        "a": "No state examination is administered. Qualification rests on completing the 8-hour DESPP-approved course in first aid, search and seizure, use of force, and criminal justice topics, with the instructor signing the application."
      },
      {
        "q": "How long is the Connecticut card valid?",
        "a": "Five years unless suspended or revoked. DESPP mails renewal notice at least 90 days ahead, the license stays valid for 90 days after expiration, late renewal adds $25, and a license expired more than 90 days cannot be renewed at all."
      },
      {
        "q": "Can I work while my Connecticut application is pending?",
        "a": "Only if the employing Security Service Agency runs a state and national criminal history check and finds you qualified, you completed the 8-hour training, and you are not a decertified officer. Pending applicants may not work at preschools, K-12 schools, or licensed child care centers."
      },
      {
        "q": "What disqualifies a Connecticut security officer applicant?",
        "a": "Any felony conviction, any sexual offense, any crime that questions honesty or integrity, a prior security service license denial (unless based on lack of experience), and revocation or refusal of police certification. Only Commissioner-approved badges and insignia may be worn."
      }
    ],
    "sources": [
      {
        "label": "Connecticut DESPP SLFU - How do I get licensed as a security officer?",
        "url": "https://portal.ct.gov/despp/knowledge-base/articles/frequently-asked-questions/slfu/security-officers",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - CT Security License Requirements and Application Steps",
        "url": "https://legalclarity.org/ct-security-license-requirements-and-application-steps",
        "checkedOn": "2026-10"
      },
      {
        "label": "CGuardPro - Connecticut Security Guard Company License Guide (renewal, armed permit, registration fee)",
        "url": "https://cguardpro.com/en/blog/connecticut-security-guard-company-license",
        "checkedOn": "2026-10"
      },
      {
        "label": "Connecticut FlexCheck fingerprint pre-enrollment portal",
        "url": "https://ct.flexcheck.us.idemia.io/cchrspreenroll",
        "checkedOn": "2026-10"
      }
    ]
  },
  "DE": {
    "agency": "Delaware State Police, Professional Licensing Section (Board of Examiners of Private Investigators and Private Security Agencies)",
    "agencyUrl": "https://dsp.delaware.gov/security-guard-faqs/",
    "exam": {
      "vendor": "Delaware Technical and Community College (DTCC)",
      "vendorUrl": "https://dsp.delaware.gov/security-guard-faqs/",
      "parts": [
        {
          "name": "Security guard exam",
          "questions": "Not published by DSP",
          "time": "Not published",
          "pass": "Not published by DSP"
        }
      ],
      "fee": "$49",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://dsp.delaware.gov/security-guard-faqs/"
    },
    "education": {
      "hours": "16 (unarmed) plus 40 firearms (armed)",
      "breakdown": "Unarmed applicants must complete a 16-hour training course with a DSP-approved instructor before applying; armed (Red Card) applicants must complete a 40-hour firearms course including daylight and low-light shoot certifications. The Professional Licensing Section may waive the 40-hour firearms requirement for applicants with prior law enforcement credentials who demonstrate proficiency.",
      "onlineAllowed": "Not addressed; instructors must be individually approved by the Professional Licensing Section.",
      "apprenticeship": null,
      "sourceUrl": "https://dsp.delaware.gov/security-guard-faqs/"
    },
    "experience": "No experience requirement for the security guard license.",
    "eligibility": {
      "minAge": 21,
      "citizenship": "Not stated on the DSP FAQ pages",
      "education": "No education requirement is published.",
      "other": "The unarmed card requires no stated minimum age on the DSP FAQ; 21 is the stated minimum for the armed (Red Card) endorsement, which also requires a valid unarmed license and legally compliant firearm possession under the Gun Control Act."
    },
    "background": {
      "method": "Fingerprint registration through IdentoGO; the State and federal criminal history check runs through the State Bureau of Identification as part of the $105 application payment",
      "fee": "Included in the $105 license fee paid when registering with IdentoGO",
      "disqualifiers": "Disqualifying charges are listed in Title 24, Chapter 13, Section 1314 of the Delaware Code; an arrest for a potentially disqualifying offense must be reported to the Professional Licensing Section within 5 business days.",
      "sourceUrl": "https://dsp.delaware.gov/security-guard-faqs/"
    },
    "fees": [
      {
        "item": "Security guard license (initial, includes fingerprinting)",
        "fee": "$105",
        "sourceUrl": "https://legalclarity.org/how-to-get-your-delaware-security-guard-license"
      },
      {
        "item": "DTCC security guard exam",
        "fee": "$49",
        "sourceUrl": "https://dsp.delaware.gov/security-guard-faqs/"
      },
      {
        "item": "Renewal (5 years, includes fingerprinting)",
        "fee": "$105",
        "sourceUrl": "https://legalclarity.org/how-to-get-your-delaware-security-guard-license"
      },
      {
        "item": "Replacement license",
        "fee": "$10",
        "sourceUrl": "https://dsp.delaware.gov/security-guard-faqs/"
      },
      {
        "item": "Armed (Red Card) added with the initial unarmed application",
        "fee": "No additional charge if applied for together",
        "sourceUrl": "https://dsp.delaware.gov/unarmed-security-guard-firearms-faqs/"
      }
    ],
    "application": {
      "portal": "IdentoGO fingerprint registration, then email application documents to the DSP Professional Licensing Section",
      "portalUrl": "https://dsp.delaware.gov/security-guard-faqs/",
      "steps": [
        "Complete the 16-hour training with a DSP-approved instructor and obtain the training certificate.",
        "Take the security guard exam at Delaware Technical and Community College, presenting the 16-hour certificate for admittance and paying the $49 fee.",
        "Register with IdentoGO for fingerprinting and pay the $105 application fee at that step.",
        "Email the application plus both the training certificate and the DTCC exam certification to the Professional Licensing Section - certificates are due with the application or within 30 days of fingerprinting.",
        "Processing takes a minimum of about two weeks after fingerprints; there is no reciprocity, so out-of-state guards must complete the full Delaware process."
      ],
      "processingTime": "Minimum of about two weeks after fingerprinting",
      "sourceUrl": "https://dsp.delaware.gov/security-guard-faqs/"
    },
    "renewal": {
      "cycle": "5 years",
      "ce": "No continuing education requirement is published; the armed firearms endorsement renews annually with qualifying shoots rather than with the base license.",
      "fee": "$105",
      "late": "DSP recommends starting renewal at least two months before expiration; working on an expired license is prohibited.",
      "sourceUrl": "https://legalclarity.org/how-to-get-your-delaware-security-guard-license"
    },
    "reciprocity": {
      "rule": "Delaware does not honor other states' guard licenses. The DSP FAQ states: you must apply for a Delaware license; the state has no reciprocity with any other state.",
      "agreements": null,
      "sourceUrl": "https://dsp.delaware.gov/security-guard-faqs/"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$36,360",
      "p25": "$36,000",
      "p75": "$44,450",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=DE"
    },
    "localNuance": "Armed guards hold a separate Red Card firearms endorsement valid only to the end of the calendar year, requiring three qualifying shoots per year (at least one in low light, on at least two separate days with minimum spacing). Separate certifications are required for batons, chemical sprays, and handcuffs, and DSP conducts unannounced site inspections checking for the license and credential cards.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "In November 2025 the Board of Examiners proposed amendments to 24 DE Admin. Code 1300 covering the firearms policy (professionalizing instructor requirements and adjusting shoot spacing), training requirements, and use of animals, with comments due December 1, 2025.",
        "sourceUrl": "https://regulations.delaware.gov/api/register/november2025/55744879-7f12-48e8-8bbf-bc5850ea85f8"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does a Delaware security guard license cost?",
        "a": "The license itself is $105, paid when registering with IdentoGO for fingerprints, and the DTCC exam is $49 - about $154 in state charges before the 16-hour training course tuition. Renewal after five years is another $105 with new fingerprints."
      },
      {
        "q": "Do I need an exam to become a Delaware security guard?",
        "a": "Yes. After the 16-hour approved training course, you take the security guard exam at Delaware Technical and Community College for $49, presenting your training certificate for admittance. Both certificates go to the Professional Licensing Section within 30 days of fingerprinting."
      },
      {
        "q": "Can I use my out-of-state guard license in Delaware?",
        "a": "No. The DSP Professional Licensing FAQ states plainly that Delaware has no reciprocity with any other state; every guard completes the Delaware training, exam, and background process."
      },
      {
        "q": "How does the armed (Red Card) endorsement work?",
        "a": "You must hold the unarmed Yellow Card (or apply for both together, at no extra application charge), be at least 21, and complete a 40-hour firearms course with daylight and low-light shoots. The firearms endorsement is valid for one calendar year and requires three qualifying shoots annually."
      },
      {
        "q": "What happens if I'm arrested while licensed in Delaware?",
        "a": "You must notify the Professional Licensing Section within 5 business days, excluding weekends and holidays; failure to report can result in suspension or revocation. The Section can also suspend anyone licensed under Chapter 13 arrested for an offense that could disqualify them."
      }
    ],
    "sources": [
      {
        "label": "Delaware State Police - Security Guard FAQs",
        "url": "https://dsp.delaware.gov/security-guard-faqs/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Delaware State Police - Armed (Red Card) / Firearms FAQs",
        "url": "https://dsp.delaware.gov/unarmed-security-guard-firearms-faqs/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Delaware Register of Regulations - Proposed amendments to 24 DE Admin. Code 1300 (Nov 2025)",
        "url": "https://regulations.delaware.gov/api/register/november2025/55744879-7f12-48e8-8bbf-bc5850ea85f8",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - How to Get Your Delaware Security Guard License ($105 fee, 5-year term)",
        "url": "https://legalclarity.org/how-to-get-your-delaware-security-guard-license",
        "checkedOn": "2026-10"
      }
    ]
  },
  "DC": {
    "agency": "DC Department of Licensing and Consumer Protection (Security Program), with final signoff by the Metropolitan Police Department Security Officers Management Branch (SOMB)",
    "agencyUrl": "https://mpdc.dc.gov/page/security-officers-management-branch-somb",
    "exam": {
      "vendor": "Pearson VUE",
      "vendorUrl": "https://home.pearsonvue.com/",
      "parts": [
        {
          "name": "DC security officer exam (DCMR Title 17, Chapter 21 topics)",
          "questions": "About 40 multiple-choice",
          "time": "60 minutes",
          "pass": "70%"
        }
      ],
      "fee": "$65 application fee plus $38 license fee (about $103 total), paid at Pearson VUE registration",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://open-exam-prep.com/study-guides/dc-security-guard/dc-regulations-licensing/pearson-vue-licensing-logistics",
      "sourceNote": "Fee split and format as documented by secondary sources; DLCP does not publish a candidate bulletin"
    },
    "education": {
      "hours": "24 pre-assignment + 16 on-the-job (unarmed Security Officer); 40 pre-assignment + 16 on-the-job (Special Police Officer)",
      "breakdown": "Unarmed Security Officers complete 24 hours of pre-assignment training covering basic security, legal authority, emergency response including terrorism awareness, and customer service, plus 16 hours of on-the-job training within the first 90 working days. Special Police Officers (SPOs) complete 40 hours of pre-assignment training - 16 hours on arrest powers, search and seizure, the DC Official Code, and use of force, plus 24 hours on operational skills - plus the same 16-hour on-the-job requirement. Armed SPOs add a 40-hour firearms course and equipment-specific certification for batons, handcuffs, or OC spray.",
      "onlineAllowed": "Approved providers offer the pre-assignment coursework online; firearms phases are delivered in person.",
      "apprenticeship": null,
      "sourceUrl": "https://legalclarity.org/dc-special-police-officers-authority-and-requirements"
    },
    "experience": "No experience requirement, but no one may apply for a commission without a sponsor: a licensed private security agency, DC government agency, college or university, law enforcement agency, or another employer authorized under Title 6A, Chapter 11.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Special Police Officer commissions require US citizenship (a valid INS work permit is not sufficient for SPOs); unarmed security officer applicants may document lawful status",
      "education": "No education requirement is published.",
      "other": "SPO applicants must pass a physical examination by a physician, a drug screening, and a criminal background investigation; felony convictions bar an SPO commission (training providers cite 10 years for felonies and permanent bars for crimes of violence)."
    },
    "background": {
      "method": "Fingerprinting at the MPD Civilian Fingerprint Section with the background investigation conducted by MPD SOMB",
      "fee": "$35 paid to the DC Metropolitan Police Department for fingerprinting and background investigation",
      "disqualifiers": "Felony history and crimes of violence bar SPO commissions; failed drug screens and disqualifying mental or physical findings also bar issuance.",
      "sourceUrl": "https://legalclarity.org/dc-spo-license-requirements-training-and-application"
    },
    "fees": [
      {
        "item": "Unarmed Security Officer application and license (via Pearson VUE)",
        "fee": "$103 ($65 application + $38 license)",
        "sourceUrl": "https://open-exam-prep.com/study-guides/dc-security-guard/dc-regulations-licensing/pearson-vue-licensing-logistics"
      },
      {
        "item": "Special Police Officer application",
        "fee": "$84",
        "sourceUrl": "https://legalclarity.org/dc-spo-license-requirements-training-and-application"
      },
      {
        "item": "Fingerprinting and background investigation",
        "fee": "$35",
        "sourceUrl": "https://legalclarity.org/dc-spo-license-requirements-training-and-application"
      },
      {
        "item": "SPO renewal (annual)",
        "fee": "$84",
        "sourceUrl": "https://legalclarity.org/dc-spo-license-requirements-training-and-application"
      }
    ],
    "application": {
      "portal": "DLCP Occupational and Professional Licensing (Security Programs); fingerprinting at MPD SOMB, 441 4th Street NW",
      "portalUrl": "https://mpdc.dc.gov/page/security-officers-management-branch-somb",
      "steps": [
        "Secure sponsorship from a licensed security agency or other authorized employer under Title 6A, Chapter 11.",
        "Complete the required pre-assignment training and keep the completion certificate; training proof must be submitted to SOMB within 90 calendar days or the certificate expires.",
        "Pass the Pearson VUE security officer exam (for unarmed Security Officer licensure) or complete the SPO track, and complete the physician's physical and drug screening.",
        "File the application at DLCP with the $84 SPO fee (or the $103 Pearson VUE total for security officers), sponsorship letter, physician's certificate, drug test results, photographs, and training certificates.",
        "Complete fingerprinting at the MPD Civilian Fingerprint Section; MPD SOMB gives final signoff before the commission card is issued, and no police powers may be exercised until the physical pocket card is in hand."
      ],
      "processingTime": "Several weeks at minimum, driven by FBI fingerprint results and the MPD background investigation",
      "sourceUrl": "https://mpdc.dc.gov/page/security-officers-management-branch-somb"
    },
    "renewal": {
      "cycle": "2 years for unarmed Security Officer commissions; annual for Special Police Officers",
      "ce": "SPOs complete 8 hours of in-service training annually covering DC regulation updates, laws, and use of force; armed SPOs requalify on the MPD course of fire. The District has proposed raising the in-service requirement to 24 hours.",
      "fee": "$84 for SPO renewal",
      "late": "SPO renewals should be filed at least 30 days before expiration; a lapsed commission may require restarting the full certification process.",
      "sourceUrl": "https://legalclarity.org/dc-spo-license-requirements-training-and-application"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$64,210",
      "p25": "$45,510",
      "p75": "$74,200",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=DC"
    },
    "localNuance": "DC licenses two distinct officer types. Unarmed Security Officers are regulated under DCMR Title 17, Chapter 21 with limited private-citizen authority. Special Police Officers hold arrest powers under DCMR Title 6A, Chapter 11, wear distinctive 'Special Police' full-circle patches, and their commissions specify the property they may protect. SPO uniforms must be distinctly different from MPD's, including white cap covers.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://mpdc.dc.gov/page/security-officers-management-branch-somb"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does a DC security officer license cost?",
        "a": "The unarmed Security Officer route runs about $103 through Pearson VUE ($65 application plus $38 license) plus $35 to MPD for fingerprinting and background. A Special Police Officer commission costs $84 to apply, the same $84 annually to renew, plus the $35 background fee, drug screening, and physician exam."
      },
      {
        "q": "What is the difference between a Security Officer and a Special Police Officer in DC?",
        "a": "Security Officers work unarmed with limited private authority under DCMR Title 17, Chapter 21. SPOs hold arrest powers under Title 6A, Chapter 11, need US citizenship, complete 40 pre-assignment hours plus firearms training if armed, and their commission authorizes them only for the specific property named on it."
      },
      {
        "q": "What exam must DC security officers pass?",
        "a": "The Pearson VUE computer-based exam covering DCMR Title 17 Chapter 21 topics: about 40 multiple-choice questions in 60 minutes with a 70 percent minimum passing score. Retakes are allowed after a waiting period and require repurchasing the exam portion."
      },
      {
        "q": "Can I apply for a DC security license without a job offer?",
        "a": "No. A sponsor is mandatory - a licensed private security agency, DC government agency, university, law enforcement agency, or other employer authorized under Title 6A Chapter 11. Private citizens cannot petition for a commission on their own."
      },
      {
        "q": "How often do DC commissions renew?",
        "a": "Unarmed Security Officer commissions renew every two years. SPO commissions renew annually with the $84 fee and 8 hours of in-service training; armed SPOs also requalify twice a year on the MPD firearms course of fire."
      }
    ],
    "sources": [
      {
        "label": "MPD - Security Officers Management Branch (SOMB)",
        "url": "https://mpdc.dc.gov/page/security-officers-management-branch-somb",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - DC SPO License Requirements, Training, and Application",
        "url": "https://legalclarity.org/dc-spo-license-requirements-training-and-application",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - DC Special Police Officers: Authority and Requirements",
        "url": "https://legalclarity.org/dc-special-police-officers-authority-and-requirements",
        "checkedOn": "2026-10"
      },
      {
        "label": "OpenExamPrep - Pearson VUE Exam and Licensing Logistics (DC security officer)",
        "url": "https://open-exam-prep.com/study-guides/dc-security-guard/dc-regulations-licensing/pearson-vue-licensing-logistics",
        "checkedOn": "2026-10"
      }
    ]
  },
  "FL": {
    "agency": "Florida Department of Agriculture and Consumer Services (FDACS), Division of Licensing",
    "agencyUrl": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf",
    "exam": {
      "vendor": "state board (exam administered by the FDACS-licensed school at the end of the Class D course)",
      "vendorUrl": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf",
      "parts": [
        {
          "name": "Class D security officer course exam",
          "questions": "170 (no more than half true/false)",
          "time": "At least 2 hours",
          "pass": "128 correct (about 75%)"
        }
      ],
      "fee": "Included in the school's course tuition; FDACS charges no separate exam fee",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://securitydogma.com/?p=1699",
      "sourceNote": "Exam structure per FDACS rule 5N-1.140 as summarized by secondary sources"
    },
    "education": {
      "hours": "40 (Class D) plus 28 firearms (Class G)",
      "breakdown": "The Class D Security Officer License requires 40 hours of professional training at a school holding a Class DS license, taught by a Class DI instructor, following the state curriculum covering legal limits of authority, emergency procedures, patrol and observation, access control, report writing, interviewing, terrorism awareness, and professional conduct. The Class G Statewide Firearm License requires an additional 28 hours of classroom and range training from a Class K firearms instructor (up to 20 hours may be live online) with a 144-round qualification course of fire, plus 4 hours of annual requalification.",
      "onlineAllowed": "Yes for the Class D course if taught live in real time by a licensed school with identity checks - self-paced video does not qualify (rule 5N-1.140). Class G training may be up to 20 hours live online, with at least 8 hours in person on the range.",
      "apprenticeship": null,
      "sourceUrl": "https://securitydogma.com/?p=1699"
    },
    "experience": "No experience requirement for the Class D license.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen, permanent legal resident alien, or holder of federal work authorization; non-citizens submit immigration documents with the application",
      "education": "No education requirement is published.",
      "other": "Applicants must disclose physical and mental health history on the application. A Class D holder must be 21 to carry a concealed firearm on duty under a Class G; a Class G applicant must not be barred from firearm possession under state or federal law."
    },
    "background": {
      "method": "Electronic fingerprint submission through an FDLE-registered Live Scan provider; results route to FDACS",
      "fee": "$42 fingerprint processing plus $10.75 fingerprint retention fee (one set of prints covers simultaneous applications for multiple Chapter 493 license classes)",
      "disqualifiers": "Felony convictions bar issuance unless civil rights are restored and at least 10 years have passed since final release from supervision (Section 493.6118); violent, dishonesty, or weapons misdemeanors and disqualifying drug or alcohol history can also bar issuance, and an undisclosed record is itself grounds for denial.",
      "sourceUrl": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf"
    },
    "fees": [
      {
        "item": "Class D license fee",
        "fee": "$45",
        "sourceUrl": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf"
      },
      {
        "item": "Fingerprint processing",
        "fee": "$42",
        "sourceUrl": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf"
      },
      {
        "item": "Fingerprint retention",
        "fee": "$10.75",
        "sourceUrl": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf"
      },
      {
        "item": "Class D total due at application",
        "fee": "$97.75",
        "sourceUrl": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf"
      },
      {
        "item": "Class G statewide firearm license (plus the same $52.75 fingerprint fees)",
        "fee": "$112",
        "sourceUrl": "https://legalclarity.org/how-much-is-a-class-g-security-license-in-florida"
      }
    ],
    "application": {
      "portal": "FDACS Division of Licensing online portal (laso.fdacs.gov), by mail, or in person at a regional office",
      "portalUrl": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf",
      "steps": [
        "Complete 40 hours of Class D training at an FDACS-licensed school and obtain the Certificate of Security Officer Training (form FDACS-16103), which the school must issue within three business days of passing the exam.",
        "Submit the application with proof of training, a color photograph meeting the specifications, and fingerprints via a registered Live Scan provider.",
        "Pay the $97.75 total ($45 license + $42 fingerprint processing + $10.75 retention); fees are nonrefundable and the initial license fee is waived for eligible veterans and active-duty members with a DD-214.",
        "Once a complete application is filed, you may begin working as an unarmed officer for a licensed agency while the background investigation proceeds; if the application is deemed incomplete, employment must stop until errors are fixed.",
        "For armed work, apply for the Class G in parallel (one fingerprint set covers both) and complete the 28-hour firearms course, physical, and mental health screening; the Class G does not replace the Class D."
      ],
      "processingTime": "Several weeks for the background investigation; Live Scan results can take up to five days to reach the department",
      "sourceUrl": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "Class G holders must complete 4 hours of firearms requalification training every year, including a passing 48-round qualification course of fire; the Class D has no continuing education requirement.",
      "fee": "$45 for Class D renewal plus a $16.75 fingerprint retention fee",
      "late": "A 90-day grace window applies after expiration with a late fee equal to the renewal fee; after 90 days a new application is required, and working on an expired license is a criminal offense.",
      "sourceUrl": "https://legalclarity.org/florida-security-license-class-d-and-g-requirements"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$35,900",
      "p25": "$32,340",
      "p75": "$39,510",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=FL"
    },
    "localNuance": "A Class D licensee must own or work for a Class B security agency, Class BB or AB branch office, or fall under a Section 493.6102 exemption - some proprietary officers hold a Class D solely to support a Class G. Applicants denied or revoked for the same license class are ineligible to reapply for at least one year after final agency action.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does a Florida Class D security license cost?",
        "a": "The state total is $97.75: a $45 license fee, $42 fingerprint processing, and $10.75 fingerprint retention. The mandatory 40-hour course is paid separately to the licensed school, typically $100 to $150."
      },
      {
        "q": "Can I work while my Florida Class D application is pending?",
        "a": "Yes. You may begin unarmed work upon submission of a complete application, but if FDACS sends a Notice of Errors or Omissions, your employment must stop until the deficiencies are resolved. In-person applicants at regional offices may receive a temporary license the same day."
      },
      {
        "q": "What is the Florida Class D exam like?",
        "a": "The school administers the exam during or after the 40-hour course: 170 questions, no more than half true/false, at least two hours long, with 128 correct answers (about 75 percent) needed to pass. The school issues the training certificate within three business days."
      },
      {
        "q": "What does the Class G armed license require?",
        "a": "Twenty-eight hours of classroom and range training from a Class K firearms instructor with a 144-round qualification, plus a physical exam and mental health screening. State fees are $112 plus the $52.75 fingerprint fees, and 4 hours of annual requalification are required to keep the endorsement active."
      },
      {
        "q": "What criminal history bars a Florida security license?",
        "a": "FDACS must deny applicants convicted of a felony unless civil rights were restored and at least 10 years have passed since final release from supervision. Violent, dishonesty, or weapons-related misdemeanors can also lead to denial, and failing to disclose a record is independently grounds for denial."
      }
    ],
    "sources": [
      {
        "label": "FDACS - Class D Application Instructions (official fees and work-pending rules, PDF)",
        "url": "https://laso.fdacs.gov/documents/D_App_Instructions.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Security Dogma - Florida Class D and Class G Requirements (course and exam detail)",
        "url": "https://securitydogma.com/?p=1699",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - Class G Security License Costs (Class G fees, requalification)",
        "url": "https://legalclarity.org/how-much-is-a-class-g-security-license-in-florida",
        "checkedOn": "2026-10"
      },
      {
        "label": "LegalClarity - Florida Class D and Class G Requirements (renewal, grace period)",
        "url": "https://legalclarity.org/florida-security-license-class-d-and-g-requirements",
        "checkedOn": "2026-10"
      },
      {
        "label": "GuardTraining.net - State-by-state guard requirements (FL renewal fees)",
        "url": "https://guardtraining.net/?p=987521631/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "GA": {
    "agency": "Georgia Board of Private Detective and Security Agencies (Secretary of State, Professional Licensing Boards Division)",
    "agencyUrl": "https://sos.ga.gov/index.php/licensing/plb/42",
    "exam": {
      "vendor": "Board-licensed firearms instructor (armed weapon permit applicants only)",
      "vendorUrl": "https://codes.findlaw.com/ga/title-43-professions-and-businesses/ga-code-sect-43-38-7-1.html",
      "parts": [
        {
          "name": "Firearms written exam (armed registration only)",
          "questions": "Not published",
          "time": "Not published",
          "pass": "80%"
        },
        {
          "name": "Range qualification (48-round course of fire, fired twice)",
          "questions": "Not applicable",
          "time": "8 hours of the 15-hour firearms course",
          "pass": "80%"
        }
      ],
      "fee": "Included in instructor course cost; the board sets no exam fee",
      "practical": "Range qualification: 24 rounds at 3 yards, 18 at 7 yards, 6 at 15 yards",
      "languages": [
        "English"
      ],
      "sourceUrl": "https://securitydogma.com/?p=1710",
      "sourceNote": "Board Rule 509-3 firearms curriculum: 15 hours (deadly force 1 hr, liability 2 hrs, ballistics 1 hr, handgun types 3 hrs, range 8 hrs)"
    },
    "education": {
      "hours": "24",
      "breakdown": "Board-mandated basic security officer training (Rule 509-3-.02) before providing security services: role of private security, legal aspects (arrest, use of force, liability), patrol and observation, incident response, customer service, first aid overview. Armed employees add a 15-hour firearms course under Rule 509-3-.10. Effective January 1, 2022.",
      "onlineAllowed": "Instructors must be licensed by the board; the employer keeps training certificates on file for 5 years",
      "apprenticeship": "No apprenticeship path; training is delivered by board-licensed instructors",
      "sourceUrl": "https://codes.findlaw.com/ga/title-43-professions-and-businesses/ga-code-sect-43-38-7-1.html"
    },
    "experience": "No experience requirement for security employee registration; unarmed guards are not registered at all and armed registrations are filed by the licensed employer.",
    "eligibility": {
      "minAge": "18 (21 for armed registration and weapon permit)",
      "citizenship": "US citizen, legal permanent resident, or qualified alien with DHS-issued alien number; secure and verifiable document required",
      "education": "No education requirement published",
      "other": "Good moral character; no felony, no crime involving illegal use of a dangerous weapon, no crime of moral turpitude; 5 years of address and employment history with no gaps"
    },
    "background": {
      "method": "GAPS (Georgia Applicant Processing Service) electronic fingerprint submission, scheduled through Fieldprint; results come from GCIC/GBI and FBI, typically within about 48 hours of printing",
      "fee": "Paid to the fingerprint vendor at scheduling (third-party summaries list about $52.75: $44.25 state and federal plus $8.50 GAPS fee)",
      "disqualifiers": "Felony conviction, crime involving illegal use or possession of a dangerous weapon, or crime of moral turpitude may bar registration, though the board may approve case by case; no weapon permit may issue to a felon without a pardon or rights restoration specifically restoring the right to carry firearms",
      "sourceUrl": "https://www.padlockpatrol.com/security-guard-georgia/"
    },
    "fees": [
      {
        "item": "Armed security employee registration",
        "fee": "$70 plus $5 online processing surcharge ($10 paper)",
        "sourceUrl": "https://licensenavigator.ai/blog/security-guard-license-cost-georgia"
      },
      {
        "item": "Registration renewal",
        "fee": "$65 (late fee $80)",
        "sourceUrl": "https://licensenavigator.ai/blog/security-guard-license-cost-georgia"
      },
      {
        "item": "Additional weapon or change of weapon type",
        "fee": "$25",
        "sourceUrl": "https://www.padlockpatrol.com/security-guard-georgia/"
      },
      {
        "item": "Replacement registration card",
        "fee": "$25",
        "sourceUrl": "https://www.padlockpatrol.com/security-guard-georgia/"
      },
      {
        "item": "Fingerprint background check",
        "fee": "Vendor-set (about $52.75 per third-party summaries)",
        "sourceUrl": "https://www.padlockpatrol.com/security-guard-georgia/"
      }
    ],
    "application": {
      "portal": "Georgia SOS Professional Licensing Boards (employer files for the employee)",
      "portalUrl": "https://sos.ga.gov/index.php/licensing/plb/42",
      "steps": [
        "Complete 24 hours of board-mandated basic training with a board-licensed instructor before working",
        "Be hired by a company licensed by the board as a private security agency",
        "For armed work, complete the 15-hour firearms course and pass the 80% written exam and 80% range qualification",
        "The licensed employer files the armed employee registration and weapon permit application with the board, including two fingerprint sets and a photo",
        "Schedule GAPS fingerprinting through Fieldprint and pay the vendor fee",
        "Do not work armed until the registration card and weapon permit are issued"
      ],
      "processingTime": "About 25 business days per third-party summaries",
      "sourceUrl": "https://www.padlockpatrol.com/security-guard-georgia/"
    },
    "renewal": {
      "cycle": "2 years; employee registrations and weapon permits expire August 31 of odd-numbered years",
      "ce": "8 hours of continuing education per renewal period for registered security employees; first renewal exempt (Rule 509-3-.12). Weapon permit holders must qualify annually with the carried weapon.",
      "fee": "$65",
      "late": "$80 late renewal fee",
      "sourceUrl": "https://licensenavigator.ai/blog/security-guard-license-cost-georgia"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$34,980",
      "p25": "$30,920",
      "p75": "$39,060",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=GA"
    },
    "localNuance": "Georgia licenses security companies and registers armed employees, but unarmed security guards are NOT individually registered with the board. Unarmed guards must still complete the 24-hour board-standard training and work for a licensed company, which keeps their training and registration records (O.C.G.A. 43-38-7.1). Armed guards must be registered by their employer and hold a board-issued weapon permit; the registration is valid only for the listed employer, so changing companies requires a new application and fee. In-house proprietary security forces (guards employed directly by a company for its own property) are exempt from the chapter under O.C.G.A. 43-38-14(c). A Georgia weapons carry license does not qualify a guard to carry armed on duty.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://sos.ga.gov/index.php/licensing/plb/42"
      }
    ],
    "stateFaqs": [
      {
        "q": "Do unarmed security guards need a license in Georgia?",
        "a": "No. Unarmed guards are not registered with the board, but they must complete 24 hours of board-standard training before working and may only work for a board-licensed security company, which keeps their training records."
      },
      {
        "q": "What does armed guard registration cost?",
        "a": "The licensed employer files the registration: $70 to the board plus a $5 online processing surcharge ($10 on paper), plus the fingerprint vendor fee. Renewal is $65 every two years, and an additional-weapon or weapon-change filing is $25."
      },
      {
        "q": "What firearms training is required for a Georgia weapon permit?",
        "a": "15 hours beyond the 24-hour basic course, including 8 hours of range qualification. Applicants must score at least 80% on both the written exam and the 48-round course of fire, and must requalify annually with the weapon carried."
      },
      {
        "q": "When do Georgia registrations renew?",
        "a": "All employee registrations and weapon permits expire August 31 of odd-numbered years. On-time renewal is $65 with 8 hours of continuing education (first renewal exempt); the late fee is $80."
      },
      {
        "q": "Can a felon become a registered armed guard in Georgia?",
        "a": "The board may register someone with a felony or moral-turpitude conviction at its discretion after reviewing the circumstances, but it cannot issue a weapon permit to a felon without proof of a pardon or restoration that specifically restores the right to carry firearms."
      }
    ],
    "sources": [
      {
        "label": "O.C.G.A. § 43-38-7.1 - Registration records and training for unarmed guards",
        "url": "https://codes.findlaw.com/ga/title-43-professions-and-businesses/ga-code-sect-43-38-7-1.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "Georgia Board Rules 509-2-.03 - Issuance of Licenses and Registrations",
        "url": "https://regulations.justia.com/states/georgia/department-509/chapter-509-2/rule-509-2-03",
        "checkedOn": "2026-10"
      },
      {
        "label": "Georgia Security Guard License: Requirements and Fees (Security Dogma)",
        "url": "https://securitydogma.com/?p=1710",
        "checkedOn": "2026-10"
      },
      {
        "label": "Georgia Security Guard License Costs (License Navigator)",
        "url": "https://licensenavigator.ai/blog/security-guard-license-cost-georgia",
        "checkedOn": "2026-10"
      },
      {
        "label": "Georgia Armed Security Guard Registration Guide (Padlock Patrol)",
        "url": "https://www.padlockpatrol.com/security-guard-georgia/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "HI": {
    "agency": "Hawaii Board of Private Detectives and Guards (DCCA Professional and Vocational Licensing Division)",
    "agencyUrl": "https://cca.hawaii.gov/pvl/boards/private/",
    "exam": {
      "vendor": "Hawaii DCCA PVL - Board of Private Detectives and Guards (individual Guard (GD) and Private Detective license applicants only)",
      "vendorUrl": "https://cca.hawaii.gov/pvl/boards/private/application-deadline-examination-dates/",
      "parts": [
        {
          "name": "Board licensing examination for individual Guard license",
          "questions": "Not published",
          "time": "Not published",
          "pass": "Not published"
        }
      ],
      "fee": "$50 examination fee for principal/sole proprietor applicants",
      "practical": null,
      "languages": [
        "English"
      ],
      "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf",
      "sourceNote": "Guard EMPLOYEE registrations (GDE) require no examination; the exam applies to individual Guard and Private Detective license applicants"
    },
    "education": {
      "hours": "8",
      "breakdown": "Guard employee applicants must complete 8 hours of classroom instruction with a board-approved instructor and curriculum before registration, covering power to arrest, access control, fire detection and reporting, emergency response, observation and reporting, patrol, ethics and conduct",
      "onlineAllowed": "Board-approved instructors and curriculum providers may use remote technologies for the 8-hour initial and 4-hour continuing education courses",
      "apprenticeship": "No apprenticeship path",
      "sourceUrl": "https://cca.hawaii.gov/wp-content/uploads/2026/01/PDG-190718-Private-Detectives-Guards.pdf"
    },
    "experience": "No experience requirement for guard employee registration. Individual Guard (GD) license and agency principal applicants must document 4 years of full-time guard work experience; the board does not accept education in lieu of it.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "No citizenship requirement published; criminal history record check required",
      "education": "High school education or equivalent",
      "other": "No psychiatric or psychological disorder; no conviction reflecting unfavorably on fitness to act as a guard; history of honesty, truthfulness, financial integrity and fair dealing"
    },
    "background": {
      "method": "Fingerprinting through Fieldprint; FBI and State of Hawaii criminal history record checks",
      "fee": "$17.50 Fieldprint + $16.50 FBI + $30.00 State of Hawaii criminal history",
      "disqualifiers": "Conviction of a crime reflecting unfavorably on fitness to act as a guard; assessed case by case by the board",
      "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
    },
    "fees": [
      {
        "item": "Guard employee registration application",
        "fee": "$151 in year 1 of the triennium, $116 in year 2, $81 in year 3 (triennium began July 1, 2024)",
        "sourceUrl": "https://guardtraining.net/?p=987521631/"
      },
      {
        "item": "Guard employee renewal (3 years)",
        "fee": "$105 active status / $12 inactive status",
        "sourceUrl": "https://cca.hawaii.gov/pvl/boards/private/"
      },
      {
        "item": "Late renewal (restore within 1 year)",
        "fee": "$120 active / $27 inactive",
        "sourceUrl": "https://cca.hawaii.gov/pvl/boards/private/"
      },
      {
        "item": "Guard agency license application",
        "fee": "$100 entity / $50 principal or sole proprietor",
        "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      },
      {
        "item": "Guard agency license fee",
        "fee": "$260 (licensed July 1 even year - June 30 odd year) or $105 (licensed July 1 odd year - June 30 even year)",
        "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
      }
    ],
    "application": {
      "portal": "MyPVL (Hawaii DCCA online licensing)",
      "portalUrl": "https://mypvl.dcca.hawaii.gov/",
      "steps": [
        "Complete 8 hours of classroom instruction with a board-approved instructor and obtain the training certificate",
        "Submit the guard employee registration application through MyPVL or on the PDG forms from the board's application publications page",
        "Complete Fieldprint fingerprinting and the FBI and state criminal history record checks",
        "The employing guard agency must be licensed; the principal guard reports employees to the board on the semiannual PDG-16a employee registration form (Jan-June due July 31, July-Dec due Jan 31)",
        "Receive the registration before beginning guard work"
      ],
      "processingTime": "Not published by the board",
      "sourceUrl": "https://cca.hawaii.gov/pvl/boards/private/"
    },
    "renewal": {
      "cycle": "3 years; guard employee registrations renew by June 30 every third year (2024, 2027, 2030)",
      "ce": "4 hours of board-approved continuing competency training from an approved provider before renewal",
      "fee": "$105 active / $12 inactive",
      "late": "Restore within 1 year after expiration: $120 active / $27 inactive; forfeited licenses not restored within 1 year are terminated",
      "sourceUrl": "https://cca.hawaii.gov/pvl/boards/private/"
    },
    "reciprocity": {
      "rule": "Hawaii has no reciprocal agreements with other states; all applicants must meet the same licensing and examination requirements. Out-of-state experience counts only as guard work experience toward a license.",
      "agreements": null,
      "sourceUrl": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$42,820",
      "p25": "$37,140",
      "p75": "$46,160",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=HI"
    },
    "localNuance": "Hawaii issues several credentials: guard employee (GDE) registration for line officers, individual Guard (GD) licenses, and Guard Agency (GDA) licenses. Individual GD applicants and agency principals pass a board examination and interview before the board; agency licensees must post a $5,000 surety bond and maintain a definite place of business (a PO box is not acceptable). Uniform, badge, and emblem photographs require approval from the board and from the police department of each county where the uniform will be used, and no uniform may resemble a government law enforcement agency. The principal guard must file an employee registration report semiannually even if no employees were hired or terminated.",
    "recentChanges": [
      {
        "year": 2024,
        "change": "Guard employee registrations renew on a three-year cycle by June 30 (the 2024 cycle ran with the 4-hour continuing education requirement; the next renewal is June 30, 2027, with a $105 on-time fee).",
        "sourceUrl": "https://cca.hawaii.gov/pvl/boards/private/"
      }
    ],
    "stateFaqs": [
      {
        "q": "What is the difference between a guard employee registration and a Guard license in Hawaii?",
        "a": "A guard employee (GDE) registration requires 8 hours of board-approved training, a high school education or equivalent, and a criminal history record check - no exam. An individual Guard (GD) license requires 4 years of full-time guard experience, a $50 board examination, and a board interview, and it allows working as a principal or sole proprietor."
      },
      {
        "q": "How much does a Hawaii guard employee registration cost?",
        "a": "The application fee depends on where you are in the three-year licensing triennium that began July 1, 2024: $151 in the first year, $116 in the second, and $81 in the third. Renewal is $105 every three years, and fingerprint and criminal history checks add $64 in state and vendor fees."
      },
      {
        "q": "Does Hawaii accept security licenses from other states?",
        "a": "No. The Board of Private Detectives and Guards states it has no reciprocal agreements, so every applicant must meet Hawaii's training, experience, and examination requirements directly."
      },
      {
        "q": "What continuing education do Hawaii guards need?",
        "a": "Guard employees must complete 4 hours of board-approved continuing competency training before each triennial renewal. Approved providers may deliver the course remotely, and the board publishes lists of approved instructors and curricula."
      },
      {
        "q": "Who registers Hawaii guard employees with the board?",
        "a": "The licensed guard agency's principal guard does. Employee registration forms (PDG-16a) are due semiannually - January-June hires by July 31 and July-December hires by January 31 - and must be filed even when no employees were hired or terminated."
      }
    ],
    "sources": [
      {
        "label": "Hawaii Board of Private Detectives and Guards (DCCA PVL)",
        "url": "https://cca.hawaii.gov/pvl/boards/private/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Hawaii PDG Frequently Asked Questions (fees, bonds, reciprocity)",
        "url": "https://files.hawaii.gov/dcca/pvl/faqs/pdg_faqs.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Hawaii Private Detectives and Guards licensing brochure (requirements)",
        "url": "https://cca.hawaii.gov/wp-content/uploads/2026/01/PDG-190718-Private-Detectives-Guards.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Hawaii Guard or Private Detective requirements and instructions packet",
        "url": "https://cca.hawaii.gov/pvl/files/2013/06/Require-Instruct-App-for-Guard-or-Private-Detective_12.16R.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "US Security Guard Licensing Requirements (Guard Training.net, Hawaii section)",
        "url": "https://guardtraining.net/?p=987521631/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "IL": {
    "agency": "Illinois Department of Financial and Professional Regulation (IDFPR) - Security Professions",
    "agencyUrl": "https://idfpr.illinois.gov/profs/securitycont.html",
    "education": {
      "hours": "20",
      "breakdown": "20 hours of basic training from an IDFPR-approved program within 30 days of employment (225 ILCS 447/25-20), plus 8 additional hours within 6 months of hire, plus an 8-hour annual refresher each calendar year after the first employment anniversary. Armed officers complete a 48-hour firearm course (20 hrs core + 8 hrs live fire + 20 hrs legal and safety topics) under 225 ILCS 447/35-40.",
      "onlineAllowed": "Training must use an IDFPR-approved program and qualified instructor; the department publishes the list of approved 20-hour basic training providers",
      "apprenticeship": "No apprenticeship path",
      "sourceUrl": "https://idfpr.illinois.gov/profs/securitycont.html"
    },
    "experience": "No experience requirement for a PERC; the PERC is an employee registration. Licensed Private Security Contractor Agencies must have a qualifying license holder meeting the Act's experience requirements.",
    "eligibility": {
      "minAge": "18 for a PERC (21 for armed work and the Firearm Control Card)",
      "citizenship": "US citizen or legally authorized to work in the United States",
      "education": "No education requirement published",
      "other": "IDFPR may refuse a PERC for disqualifying convictions under 225 ILCS 447/35-30, including a presumption of unfitness for felonies involving bodily harm, weapons, violence or theft within the past 10 years; registered sex offenders are barred; rehabilitation evidence is considered"
    },
    "background": {
      "method": "Live-scan electronic fingerprints through an IDFPR-licensed fingerprint vendor, submitted to the Illinois State Police and FBI; applicants confirm the prints posted to IDFPR before applying",
      "fee": "Vendor-set; the state publishes no fixed amount (68 Ill. Adm. Code 1240.570(c)(2))",
      "disqualifiers": "Felony convictions involving bodily harm, weapons, violence or theft within 10 years create a rebuttable presumption of unfitness; registered sex offenders are disqualified; other convictions reviewed case by case with rehabilitation evidence considered",
      "sourceUrl": "https://idfpr.illinois.gov/profs/securitycont.html"
    },
    "fees": [
      {
        "item": "PERC application (Permanent Employee Registration Card)",
        "fee": "$55",
        "sourceUrl": "https://licensenavigator.ai/blog/security-guard-license-cost-illinois"
      },
      {
        "item": "PERC renewal (every 3 years)",
        "fee": "$45",
        "sourceUrl": "https://licensenavigator.ai/blog/security-guard-license-cost-illinois"
      },
      {
        "item": "Firearm Control Card (armed only)",
        "fee": "$75 (renewal $45)",
        "sourceUrl": "https://licensenavigator.ai/blog/security-guard-license-cost-illinois"
      },
      {
        "item": "FOID card (armed only, Illinois State Police)",
        "fee": "$10",
        "sourceUrl": "https://licensenavigator.ai/blog/security-guard-license-cost-illinois"
      }
    ],
    "application": {
      "portal": "IDFPR CORE online licensing system",
      "portalUrl": "https://idfpr.illinois.gov/profs/securitycont.html",
      "steps": [
        "Complete the 20-hour basic training course with an IDFPR-approved provider and keep the certificate",
        "Register on IDFPR's online system and get live-scan fingerprinted at an IDFPR-approved vendor for the purpose of Security Guards",
        "Confirm IDFPR received the fingerprint results before submitting the application",
        "Submit the PERC application under the Detective, Security Fingerprint and Alarm Contractor Board category and pay the $55 fee",
        "There is no state examination for the PERC; armed officers separately obtain a FOID card ($10, Illinois State Police) and a Firearm Control Card ($75) after the 48-hour firearm course",
        "Work as an employee of a licensed Private Security Contractor Agency"
      ],
      "processingTime": "Not published by IDFPR",
      "sourceUrl": "https://www.americansecurityservices.com/wp-content/uploads/2025/09/Applying-for-your-PERC-WEB.pdf"
    },
    "renewal": {
      "cycle": "3 years; PERC expires May 31 on the three-year cycle",
      "ce": "8 hours of refresher training every calendar year after the first employment anniversary (employer keeps records); armed officers complete an 8-hour firearm refresher each year",
      "fee": "$45 (Firearm Control Card renewal also $45)",
      "late": "If the renewal window is missed, the licensee must request a reinstatement application from IDFPR",
      "sourceUrl": "https://idfpr.illinois.gov/profs/securitycont.html"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$39,490",
      "p25": "$37,060",
      "p75": "$46,360",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=IL"
    },
    "localNuance": "The PERC belongs to the officer and stays valid when changing employers, but it only permits guard work while employed by or registered under a licensed Private Security Contractor Agency. The Firearm Control Card is employment-tied: renewal requires proof of continued employment with the issuing agency plus a valid FOID card. No state examination is given for the PERC - qualification is training- and background-based. Employers who knowingly hire unregistered guards face penalties under the Private Detective, Private Alarm, Private Security, Fingerprint Vendor, and Locksmith Act of 2004 (225 ILCS 447).",
    "recentChanges": [
      {
        "year": 2024,
        "change": "IDFPR launched CORE, a new online licensing system, on October 30, 2024; new applications for Private Security Contractor licenses moved to CORE, and the legacy electronic batch PERC renewal process was retired in favor of a manual batch form.",
        "sourceUrl": "https://idfpr.illinois.gov/profs/securitycont.html"
      }
    ],
    "stateFaqs": [
      {
        "q": "What is a PERC card in Illinois?",
        "a": "The Permanent Employee Registration Card is IDFPR's employee registration that every unarmed security officer needs to work for a licensed Private Security Contractor Agency. It costs $55, requires 20 hours of basic training and live-scan fingerprints, and renews every 3 years for $45."
      },
      {
        "q": "Is there an exam to become a security guard in Illinois?",
        "a": "No state exam is required for the PERC. Qualification is based on the 20-hour IDFPR-approved basic training course and a fingerprint background check. Armed officers instead complete the 48-hour firearm training course with its exam and range requirement to earn a Firearm Control Card."
      },
      {
        "q": "What extra steps apply to armed security officers?",
        "a": "Armed officers need a valid Illinois FOID card ($10 from the State Police) and a Firearm Control Card ($75) on top of the PERC, including the 48-hour firearm course with an 8-hour live-fire component. The FCC is tied to employment and renews for $45 with proof of continued agency employment and an annual 8-hour firearm refresher."
      },
      {
        "q": "How much training does an Illinois guard need in the first year?",
        "a": "20 hours of basic training within 30 days of hire, 8 more hours within 6 months, then 8 hours of refresher training each calendar year after the first employment anniversary. Employers keep the records and IDFPR can audit them."
      },
      {
        "q": "Can a felony conviction disqualify a PERC applicant?",
        "a": "A felony involving bodily harm, weapons, violence or theft within the past 10 years creates a presumption of unfitness that the applicant can try to rebut, and registered sex offenders are barred. Older or minor convictions are reviewed case by case, and Illinois law requires consideration of rehabilitation evidence."
      }
    ],
    "sources": [
      {
        "label": "IDFPR Security Professions (PERC, FCC, training program lists)",
        "url": "https://idfpr.illinois.gov/profs/securitycont.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "IDFPR news release - online PERC application transition",
        "url": "https://idfpr.illinois.gov/news/2016/11022016IDFPRTransitionOnlineAppSecPHTApplicants.asp",
        "checkedOn": "2026-10"
      },
      {
        "label": "Illinois Security Guard License Costs (License Navigator, citing 68 Ill. Adm. Code 1240)",
        "url": "https://licensenavigator.ai/blog/security-guard-license-cost-illinois",
        "checkedOn": "2026-10"
      },
      {
        "label": "Illinois Security Guard License Requirements (Security Dogma, citing 225 ILCS 447)",
        "url": "https://securitydogma.com/licensing/illinois",
        "checkedOn": "2026-10"
      },
      {
        "label": "Applying for your PERC - employer step-by-step guide (American Security Services)",
        "url": "https://www.americansecurityservices.com/wp-content/uploads/2025/09/Applying-for-your-PERC-WEB.pdf",
        "checkedOn": "2026-10"
      }
    ]
  },
  "IN": {
    "agency": "Indiana Professional Licensing Agency (PLA) - Private Investigator and Security Guard Licensing Board",
    "agencyUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/",
    "education": {
      "hours": "None set by the state",
      "breakdown": "Indiana sets no state training hours for individual guards; training is set by the employing agency or client. State training rules apply only to the agency qualifier, who must document 4,000 hours of W-2 experience or a criminal justice bachelor's degree (874 IAC 1-3-1).",
      "onlineAllowed": "At the employer's discretion",
      "apprenticeship": "No state apprenticeship path",
      "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information"
    },
    "experience": "No experience requirement for individual guards. The agency qualifier needs at least 2 years (4,000 verifiable hours) of W-2 experience in security or investigations - law enforcement, military police, and managing a proprietary force of 20+ employees qualify - or a bachelor's degree in criminal justice or a related field. 1099 experience is not accepted.",
    "eligibility": {
      "minAge": "No state minimum for line guards (employers typically require 18, and 21 for armed posts); the agency qualifier must be at least 21",
      "citizenship": "No state requirement published for line guards",
      "education": "No state requirement for line guards; a criminal justice bachelor's degree can substitute for the qualifier's experience",
      "other": "The board can deny an agency qualifier with a felony conviction, a directly related misdemeanor, an active warrant, or who is on probation or parole"
    },
    "background": {
      "method": "The licensed agency keeps a photograph (taken within 30 days of hire) and a complete set of fingerprints for each employee (IC 25-30-1.3-13). The agency qualifier submits an Indiana State Police fingerprint-based check plus criminal history records from every city, county and state of residence in the past 7 years.",
      "fee": "No state fee for line guards; qualifier background check costs paid to the issuing agencies",
      "disqualifiers": "No statutory conviction list for line guards because they are not licensed; employer and contract client standards apply. The board reviews qualifier criminal history at the agency level.",
      "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information"
    },
    "fees": [
      {
        "item": "Security Guard Agency license application",
        "fee": "$300 ($150 if applying less than 1 year before the quadrennial renewal date)",
        "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information"
      },
      {
        "item": "Agency renewal (every 4 years)",
        "fee": "$300 ($50 late fee if postmarked after expiration)",
        "sourceUrl": "https://secure.in.gov/pla/files/Generic-PISG-Renewal-Form2023.pdf"
      },
      {
        "item": "Individual guard license",
        "fee": "None - Indiana issues no individual guard license or guard card",
        "sourceUrl": "https://securitydogma.com/?p=1736"
      },
      {
        "item": "General liability insurance (agency)",
        "fee": "$100,000 minimum policy listing the State of Indiana as additional insured (IC 25-30-1.3-16)",
        "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information"
      }
    ],
    "application": {
      "portal": "MyLicense One (Access Indiana)",
      "portalUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information",
      "steps": [
        "There is no individual guard license, exam, or state application in Indiana - apply directly to licensed security guard agencies or in-house security departments",
        "Provide the agency your fingerprints, a photo, and consent to its background check; the agency keeps these on file under IC 25-30-1.3-13",
        "Complete the agency's own pre-post training (state law sets none)",
        "Aspiring agency owners file the Security Guard Agency application with $300, the 7-year criminal history checks, ISP fingerprint results, verification of experience (W-2 based), and the $100,000 liability certificate naming the State of Indiana as additional insured"
      ],
      "processingTime": "About 4 weeks for agency renewals by mail; new agency applications reviewed by the board",
      "sourceUrl": "https://secure.in.gov/pla/files/Generic-PISG-Renewal-Form2023.pdf"
    },
    "renewal": {
      "cycle": "4 years; agency licenses share a common expiration on October 1 of the quadrennial cycle (next 2027)",
      "ce": "No continuing education; renewal requires a limited criminal background check and a current insurance certificate",
      "fee": "$300 (plus $50 late fee if postmarked after expiration)",
      "late": "Reinstatement after 3 or more years expired is $600",
      "sourceUrl": "https://secure.in.gov/pla/files/Generic-PISG-Renewal-Form2023.pdf"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$36,490",
      "p25": "$31,240",
      "p75": "$44,440",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=IN"
    },
    "localNuance": "Indiana is a pure company-license state: the Private Investigator and Security Guard Licensing Board licenses Security Guard Agencies under IC 25-30-1.3 and issues nothing to line officers - no guard card, no state training hours, no exam. A licensed agency may employ as many unlicensed guards as it needs and is civilly responsible for their conduct; it must keep each employee's photo and fingerprints on file. The agency license itself does not authorize anyone to carry a weapon (IC 25-30-1.3-20); armed authority flows from Indiana's general firearms law (permitless carry since July 1, 2022), and employers and insurers typically require armed officers to be 21. In-house guards employed directly by a hospital, retailer, or factory fall outside agency licensing entirely.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/"
      }
    ],
    "stateFaqs": [
      {
        "q": "Do I need a security guard license in Indiana?",
        "a": "No. Indiana licenses security guard agencies, not individual guards. You work under the employing agency's license, which keeps your photo and fingerprints on file and is civilly responsible for your conduct on the job."
      },
      {
        "q": "Is there a state exam or training requirement for Indiana guards?",
        "a": "No. The state sets no exam and no minimum training hours for line officers; the employing agency or its clients set training. The 4,000-hour or criminal justice degree experience rule applies only to the agency qualifier."
      },
      {
        "q": "Can Indiana security guards carry weapons?",
        "a": "The security licensing chapter does not authorize carrying a weapon (IC 25-30-1.3-20). Armed work is governed by Indiana's general firearms law - permitless carry took effect July 1, 2022 - plus employer and insurer policies, which usually require armed officers to be at least 21."
      },
      {
        "q": "What does a security guard agency license cost?",
        "a": "$300 to apply ($150 if within a year of the renewal date), $300 to renew every 4 years on the October 1 cycle, and a $100,000 general liability policy naming the State of Indiana as an additional insured. Reinstatement after 3 or more years expired is $600."
      },
      {
        "q": "How do Indiana agencies vet their guards?",
        "a": "Under IC 25-30-1.3-13 the agency keeps a photograph taken within 30 days of hire and a complete set of each employee's fingerprints, and must provide a roster of unlicensed employees to the board on request. Most agencies also run state police limited criminal history checks and drug screens."
      }
    ],
    "sources": [
      {
        "label": "Indiana PLA - Private Investigator and Security Guard Licensing Information",
        "url": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-licensing-information",
        "checkedOn": "2026-10"
      },
      {
        "label": "Indiana PLA - Private Investigator and Security Guard Board",
        "url": "https://www.in.gov/pla/professions/private-investigator-and-security-guard-home/private-investigator-and-security-guard-board/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Indiana PI Firm and Security Guard Agency Renewal Form (fees, insurance)",
        "url": "https://secure.in.gov/pla/files/Generic-PISG-Renewal-Form2023.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Indiana Security Guard License Requirements (Security Dogma, citing IC 25-30-1.3)",
        "url": "https://securitydogma.com/?p=1736",
        "checkedOn": "2026-10"
      },
      {
        "label": "Indiana Security Guard Company License Guide (CGuardPro, citing 874 IAC 1)",
        "url": "https://cguardpro.com/en/blog/indiana-security-guard-company-license",
        "checkedOn": "2026-10"
      }
    ]
  },
  "LA": {
    "agency": "Louisiana State Board of Private Security Examiners (LSBPSE)",
    "agencyUrl": "http://www.lsbpse.com/security-officer-registration",
    "exam": {
      "vendor": "LSBPSE Security Officer Safety Training (S.O.S.T.) program",
      "vendorUrl": "https://www.lsbpse.com/training",
      "parts": [
        {
          "name": "S.O.S.T. 1101 and 1102 examinations",
          "questions": "Not published",
          "time": "Not published",
          "pass": "Pass required before the first work assignment"
        }
      ],
      "fee": "Included in training provider costs; the board publishes no separate exam fee",
      "practical": "Armed officers complete firearms training and range qualification per weapon type before armed duties",
      "languages": [
        "English"
      ],
      "sourceUrl": "http://www.lsbpse.com/faq-security-officer"
    },
    "education": {
      "hours": "16",
      "breakdown": "Standard first-time security officers complete S.O.S.T. 1101 and S.O.S.T. 1102 (16 hours total) and pass the required examinations before the first work assignment. Qualifying out-of-state officers may use the 4-hour S.O.S.T. pathway; retired officers 5+ years take the 4-hour S.O.S.T. 1401 course.",
      "onlineAllowed": "Not stated on the board's registration pages",
      "apprenticeship": "No apprenticeship path",
      "sourceUrl": "http://www.lsbpse.com/security-officer-registration"
    },
    "experience": "No experience requirement for security officer registration; retired law-enforcement officers receive training exemptions based on POST credentials.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Standard identification required: government photo ID, Social Security number, signed Form I-9",
      "education": "No education requirement published",
      "other": "Must be affiliated with a licensed security company; all training must be completed before the first work assignment"
    },
    "background": {
      "method": "Criminal background check through IdentoGO using LSBPSE service code 27N43R",
      "fee": "Paid to IdentoGO at scheduling; the board publishes no fixed amount on its registration page",
      "disqualifiers": "The board will not issue a registration card until its investigation confirms the applicant meets registration requirements (La. Admin. Code Title 46, Part LIX)",
      "sourceUrl": "http://www.lsbpse.com/faq-security-officer"
    },
    "fees": [
      {
        "item": "Security officer registration",
        "fee": "$75 (either the applicant or the company may pay; 3% processing fee on electronic payments)",
        "sourceUrl": "http://www.lsbpse.com/security-officer-registration"
      },
      {
        "item": "Registration renewal (2 years)",
        "fee": "$65",
        "sourceUrl": "http://www.lsbpse.com/security-officer-registration"
      },
      {
        "item": "Replacement card (lost or mutilated)",
        "fee": "$10",
        "sourceUrl": "https://www.doa.la.gov/media/a3epdzz1/46v59.pdf"
      },
      {
        "item": "Status change (unarmed to armed)",
        "fee": "Status change fee per board fee schedule; firearms training verification required first",
        "sourceUrl": "https://www.doa.la.gov/media/a3epdzz1/46v59.pdf"
      }
    ],
    "application": {
      "portal": "LSBPSE Registration and Licensing Portal",
      "portalUrl": "https://www.lsbpselicense.com/lms/public/portal#/login",
      "steps": [
        "Create a portal profile using a passport-quality photo",
        "Complete the Initial Security Officer Application and request affiliation with a licensed security company",
        "The hiring company accepts the affiliation and uploads your ID and Form I-9",
        "Complete payment, the IdentoGO background check (service code 27N43R), and the S.O.S.T. 1101/1102 training and exams before the first work assignment",
        "Receive the registration card showing the company name and issue/expiration dates - you cannot work armed or unarmed on a pending application"
      ],
      "processingTime": "Not published by the board",
      "sourceUrl": "http://www.lsbpse.com/faq-security-officer"
    },
    "renewal": {
      "cycle": "2 years from date of hire; the card displays issue and expiration dates",
      "ce": "The board's 2026 rule changes update training requirements; armed officers must maintain firearms qualification for their weapon classification",
      "fee": "$65",
      "late": "Reinstatement through the Registration and Licensing Portal under board requirements",
      "sourceUrl": "http://www.lsbpse.com/security-officer-registration"
    },
    "reciprocity": {
      "rule": "Louisiana's Welcome Home Act gives applicants who hold a security officer registration or similar credential from another state a registration pathway, potentially including the 4-hour S.O.S.T. training pathway instead of the full 16 hours.",
      "agreements": null,
      "sourceUrl": "http://www.lsbpse.com/security-officer-registration"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$32,240",
      "p25": "$29,430",
      "p75": "$38,310",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=LA"
    },
    "localNuance": "Every security officer working for a licensed Louisiana company must hold an LSBPSE registration card, which displays the employing company's name and is valid for that employer. Registration cards carry weapon classifications (revolver, 9mm, 40 caliber, 45 caliber, shotgun, straight baton, PR-24 baton, or unarmed), and moving between employers requires a reapplication; a change-of-employment window applies. Unarmed officers may work emergency assignments up to 20 calendar days in a six-month period. Active law-enforcement officers working as independent contractors within their jurisdiction are exempt from registration, but all retired officers must register.",
    "recentChanges": [
      {
        "year": 2026,
        "change": "Updated LSBPSE rules take effect October 20, 2026, touching application requirements, training, registration expiration, less-lethal device training, and employment transfers; the change-of-employment period increases from 30 to 60 days, with no new background check required solely for the move.",
        "sourceUrl": "https://www.lsbpse.com/rules-update"
      },
      {
        "year": 2025,
        "change": "Changes to Louisiana's private security law under HB 921, including employee classification requirements for employees of private contract security companies, are reflected in board updates and new applications.",
        "sourceUrl": "https://lsbpse.com/"
      }
    ],
    "stateFaqs": [
      {
        "q": "What training does a first-time Louisiana security officer need?",
        "a": "16 hours total: LSBPSE S.O.S.T. 1101 and S.O.S.T. 1102, plus the required examinations, all completed before the first work assignment. Out-of-state officers with a comparable credential may qualify for the 4-hour pathway."
      },
      {
        "q": "How much does Louisiana security officer registration cost?",
        "a": "$75 for the initial registration and $65 for the two-year renewal, payable by either the officer or the company. Electronic payments carry a 3% processing fee, and a replacement card is $10."
      },
      {
        "q": "Can I start working while my Louisiana registration is pending?",
        "a": "No. Once the company accepts your affiliation you may appear on its roster, but you cannot work until you receive a valid registration card showing the company name and your registration dates."
      },
      {
        "q": "What happens when I change security companies in Louisiana?",
        "a": "Your registration and company affiliation must be updated through the board's portal before working under the new company. Starting October 20, 2026, officers who join another licensed company within 60 days of leaving one no longer need a new background check solely because of the move."
      },
      {
        "q": "Do active or retired police officers need Louisiana registration?",
        "a": "Active officers employed by a licensed security company must register (within or outside their jurisdiction), though those working within their jurisdiction as independent contractors need not. Retired officers must always register; those retired 5 or more years also take the 4-hour S.O.S.T. 1401 course and exam."
      }
    ],
    "sources": [
      {
        "label": "LSBPSE - Security Officer Registration",
        "url": "http://www.lsbpse.com/security-officer-registration",
        "checkedOn": "2026-10"
      },
      {
        "label": "LSBPSE - Security Officers FAQ",
        "url": "http://www.lsbpse.com/faq-security-officer",
        "checkedOn": "2026-10"
      },
      {
        "label": "Louisiana Administrative Code Title 46, Part LIX - Private Security Examiners",
        "url": "https://www.doa.la.gov/media/a3epdzz1/46v59.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "LSBPSE homepage (2026 rule changes, HB 921)",
        "url": "https://lsbpse.com/",
        "checkedOn": "2026-10"
      },
      {
        "label": "LSBPSE Security Officer FAQ page (background check service code)",
        "url": "http://www.lsbpse.com/faq-security-officer",
        "checkedOn": "2026-10"
      }
    ]
  },
  "ME": {
    "agency": "Maine State Police - Special Investigations Unit, Weapons and Professional Licensing Division",
    "agencyUrl": "http://www.maine.gov/dps/msp/node/52",
    "education": {
      "hours": "None set by the state",
      "breakdown": "Chapter 93 (32 M.R.S. 9401-9418) sets no training-hour requirement for security guards and no exam; the employing contract security company sets and documents training.",
      "onlineAllowed": "At the employer's discretion",
      "apprenticeship": "No state apprenticeship path",
      "sourceUrl": "https://www.mainelegislature.org/LEGIS/STATUTES/32/title32ch93.pdf"
    },
    "experience": "No experience requirement for guards. The company license applicant must show good moral character and meet the statutory qualifications of 32 M.R.S. 9405-A; no experience, exam, or training hours are required for the license itself.",
    "eligibility": {
      "minAge": "18 (statutory qualifications for the license holder; employers set guard minimums)",
      "citizenship": "US citizen or resident alien (license qualification)",
      "education": "No education requirement published",
      "other": "No dishonorable military discharge within 5 years; no conviction punishable by 1 year or more imprisonment (with 5-year lookbacks for enumerated crimes); not a fugitive, drug abuser, or subject of specified mental health adjudications"
    },
    "background": {
      "method": "The employer notifies the Commissioner before a guard's first shift and files a signed background statement within 60 days of hire; the license applicant submits a Maine State Bureau of Identification record check plus state criminal history records from every state of residence in the past 5 years and authorizes releases (Forms P-3E and 577) for court, law enforcement, military, and mental health records.",
      "fee": "$21 State Bureau of Identification record check (included in the $121 application fee); no state fee for individual guards",
      "disqualifiers": "Conviction of a crime punishable by 1 year or more (or within 5 years, an enumerated crime under 32 M.R.S. 9412), three or more lesser convictions in 5 years, fugitive status, drug abuse, certain mental health findings, dishonorable discharge within 5 years",
      "sourceUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/CSC_New_Application_FULL23.pdf"
    },
    "fees": [
      {
        "item": "Contract Security Company license application",
        "fee": "$121 with application ($100 fee + $21 background check), then $300 due upon issuance",
        "sourceUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/CSC_New_Application_FULL23.pdf"
      },
      {
        "item": "Company license renewal (annual)",
        "fee": "$221 ($200 + $21 background check)",
        "sourceUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/CSC_New_Application_FULL23.pdf"
      },
      {
        "item": "Surety bond",
        "fee": "$10,000 for Maine residents; $50,000 for non-residents (32 M.R.S. 9409)",
        "sourceUrl": "https://safetrac.io/how-to-start-a-security-company-in-maine"
      },
      {
        "item": "Individual guard license",
        "fee": "None - Maine issues no individual guard license",
        "sourceUrl": "https://securitydogma.com/licensing/maine"
      }
    ],
    "application": {
      "portal": "Maine State Police Weapons and Professional Licensing (paper application packet)",
      "portalUrl": "http://www.maine.gov/dps/msp/node/52",
      "steps": [
        "There is no individual guard license or state exam in Maine - apply to a licensed contract security company or proprietary security organization",
        "Before your first shift, the employer notifies the Commissioner of Public Safety that you are working as a guard",
        "The employer files your signed background statement within 60 days of hire (before starting work at strike or labor dispute sites)",
        "Companies file the Contract Security Company License packet (8 pages, photo, birth certificate or resident alien card, 5 release forms, out-of-state criminal records) to State House Station 164 in Augusta with a $121 fee",
        "Do not carry a weapon on duty until the employer confirms your background statement has been filed and its firearms requirements are met"
      ],
      "processingTime": "6 to 8 weeks for the company license application",
      "sourceUrl": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/CSC_Coverletter_New.pdf"
    },
    "renewal": {
      "cycle": "1 year for the company license (guards have no license to renew)",
      "ce": "No continuing education requirement",
      "fee": "$221 company renewal plus continuation bond and a list of guards hired since the last license",
      "late": "Not published by the State Police",
      "sourceUrl": "https://safetrac.io/how-to-start-a-security-company-in-maine"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$39,100",
      "p25": "$34,760",
      "p75": "$45,360",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=ME"
    },
    "localNuance": "Maine licenses the company, not the guard: no person may act as a security guard except an employee of a licensed contract security company or a proprietary security organization (32 M.R.S. 9404). Guards have no police powers and rely on citizen's arrest and shopkeeper's privilege authority under 17-A M.R.S. 16. Carrying a dangerous weapon at a strike or labor dispute site is generally a crime, and the background investigation must be complete before working such a post. Proprietary in-house security organizations and their employees are exempt from licensing. A concealed carry permit does not create any on-duty armed authorization.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "http://www.maine.gov/dps/msp/node/52"
      }
    ],
    "stateFaqs": [
      {
        "q": "Do security guards need a license in Maine?",
        "a": "No individual license exists. The contract security company must be licensed by the Maine State Police under 32 M.R.S. Chapter 93, and the employer must report each guard to the Commissioner before the guard's first shift."
      },
      {
        "q": "How much does security licensing cost in Maine?",
        "a": "Individual guards pay nothing. The company pays $121 with the application, $300 upon issuance, and $221 to renew annually, plus a $10,000 surety bond ($50,000 if the company is not a Maine resident entity)."
      },
      {
        "q": "Is there a Maine security guard exam or training requirement?",
        "a": "No. Chapter 93 contains no exam, no experience minimum, and no mandated training hours; employers set and document their own guard training."
      },
      {
        "q": "What is the 60-day background rule?",
        "a": "The employer must file a signed background statement with the State Police within 60 days of a guard starting work. At strike or labor dispute sites the investigation must be finished before the guard starts, and being armed at such a site is generally a crime."
      },
      {
        "q": "What disqualifies someone from security work in Maine?",
        "a": "The statutory qualifications include no conviction punishable by a year or more imprisonment, no enumerated-crime conviction in the past 5 years, no dishonorable discharge within 5 years, and no fugitive, drug abuse, or specified mental health findings. Prior out-of-state licenses cannot transfer because Maine has no guard license."
      }
    ],
    "sources": [
      {
        "label": "Maine State Police - Professional Investigator and Contract Security Licenses",
        "url": "http://www.maine.gov/dps/msp/node/52",
        "checkedOn": "2026-10"
      },
      {
        "label": "Maine Contract Security Company License Application (fees, procedure)",
        "url": "https://www.maine.gov/dps/msp/sites/maine.gov.dps.msp/files/inline-files/CSC_New_Application_FULL23.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Maine Revised Statutes Title 32, Chapter 93 - Private Security Guards",
        "url": "https://www.mainelegislature.org/LEGIS/STATUTES/32/title32ch93.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Maine Security Guard License Requirements (Security Dogma)",
        "url": "https://securitydogma.com/licensing/maine",
        "checkedOn": "2026-10"
      },
      {
        "label": "How To Start A Security Company in Maine (Safetrac, bond and fee detail)",
        "url": "https://safetrac.io/how-to-start-a-security-company-in-maine",
        "checkedOn": "2026-10"
      }
    ]
  },
  "MD": {
    "agency": "Maryland State Police - Licensing Division, Professional Licensing Unit",
    "agencyUrl": "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification",
    "education": {
      "hours": "12",
      "breakdown": "12 hours of initial security training approved by the Maryland Police Training and Standards Commission before certification (or employment as a police officer within the 3 years preceding application). Renewal requires 8 hours of MPTSC-approved continuing security training every 3 years.",
      "onlineAllowed": "MPTSC-approved providers deliver the training; the commission lists approved security guard training on its site",
      "apprenticeship": "No apprenticeship path",
      "sourceUrl": "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
    },
    "experience": "No experience requirement for guard certification; applicants must be employed by or an applicant for employment with a licensed security guard agency or security guard employer.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Not expressly stated; sworn application and criminal history declarations required",
      "education": "No education requirement published",
      "other": "Good moral character and reputation; no conviction of a disqualifying crime (Public Safety § 5-101) or crime of violence (Criminal Law § 14-101); no formal excessive-force or false-statement findings for current or former police officers; armed guards must hold a valid Maryland handgun permit"
    },
    "background": {
      "method": "Live-scan fingerprints submitted to the Maryland Criminal Justice Information System (CJIS) and the FBI (agency authorization 9300000802, ORI MDMSP6000); prints are valid only 30 days, so the application must reach MSP within that window. A signed FBI Privacy Act Statement is required.",
      "fee": "Fingerprint vendor fee paid separately; the $15 application fee does not include it",
      "disqualifiers": "Conviction of a disqualifying crime under Public Safety § 5-101 or a crime of violence under Criminal Law § 14-101; COMAR 29.04.08.02 also lists crimes of violence, felonies, habitual drunkenness, fugitive status, narcotics addiction, and certain mental institutional commitments",
      "sourceUrl": "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
    },
    "fees": [
      {
        "item": "Security Guard Certification application",
        "fee": "$15 (nonrefundable)",
        "sourceUrl": "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
      },
      {
        "item": "Certification renewal (3 years)",
        "fee": "$10",
        "sourceUrl": "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
      },
      {
        "item": "Renewal late fee",
        "fee": "$5 per day, up to $150 maximum",
        "sourceUrl": "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
      },
      {
        "item": "Security Guard Agency license (for context)",
        "fee": "$200 individual unincorporated / $375 firm incorporated; renewal $200 / $400",
        "sourceUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/SecuritySystems.aspx"
      },
      {
        "item": "Ink fingerprint cards (non-Maryland residents)",
        "fee": "$30",
        "sourceUrl": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/SecuritySystems.aspx"
      }
    ],
    "application": {
      "portal": "Maryland State Police Licensing Portal",
      "portalUrl": "https://licensingportal.mdsp.maryland.gov/MspBridgeClient/#/home",
      "steps": [
        "Complete 12 hours of MPTSC-approved initial security training or document police employment within the prior 3 years",
        "Submit live-scan fingerprints to CJIS and the FBI and sign the FBI Privacy Act Statement - prints expire 30 days after submission",
        "Create a Licensing Portal account and complete the Security Guard Certification application with a passport-style photo taken within 30 days",
        "Your employing agency or security guard employer reviews and submits the application with the fees",
        "MSP reviews, completes the background investigation, and notifies you of approval within 90 days; the certification is mailed and valid 3 years"
      ],
      "processingTime": "90 days (completeness review within 5-10 business days; 15 days to respond or the application is cancelled)",
      "sourceUrl": "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
    },
    "renewal": {
      "cycle": "3 years from year of issuance",
      "ce": "8 hours of MPTSC-approved continuing security training (guards first certified without the 12-hour course must complete it for renewal)",
      "fee": "$10",
      "late": "$5 per day if the renewal is not filed at least 30 days before expiration, capped at $150; outstanding late fees block certification",
      "sourceUrl": "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
    },
    "reciprocity": {
      "rule": "None. Maryland State Police states that an out-of-state security certificate cannot be used to work in Maryland; applicants must earn a Maryland Security Guard Certification.",
      "agreements": null,
      "sourceUrl": "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$38,220",
      "p25": "$35,700",
      "p75": "$46,750",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=MD"
    },
    "localNuance": "Maryland certifies individual guards through the State Police, and since January 1, 2025 the certification requirement also covers in-house guards employed directly by businesses ('security guard employers'), not just agency guards. Employers of armed guards must carry commercial general liability insurance ($500,000 aggregate if fewer than 5 guards, $1,000,000 if 5 or more), and guards plus employers must report uses of force to MSP within 48 hours. Exemptions apply to marine guards and ship watchmen, special police officers under Public Safety Title 3, Subtitle 3, and unarmed bar, tavern, and restaurant employees. Armed guards need a separate Maryland handgun permit (wear and carry).",
    "recentChanges": [
      {
        "year": 2024,
        "change": "Senate Bill 760 (2023), delayed by Senate Bill 729 (2024) to January 1, 2025, requires all security guards - including in-house security guard employer staff - to hold MSP certification, mandates 12 hours of MPTSC-approved initial training, adds liability insurance minimums for employers, and creates use-of-force reporting.",
        "sourceUrl": "https://mdsp.maryland.gov/Organization/Documents/LD-PLU-24-001%20Senate%20Bill%20760%20%282023%29%20and%20Senate%20Bill%20729%20%282024%29%20Updates.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does Maryland security guard certification cost?",
        "a": "$15 for the initial certification and $10 for each 3-year renewal, collected electronically through the MSP Licensing Portal. Fingerprint vendor fees are separate, and late renewals accrue $5 per day up to $150."
      },
      {
        "q": "What training is required for a Maryland guard card?",
        "a": "12 hours of initial security training approved by the Maryland Police Training and Standards Commission, unless you were employed as a police officer within the 3 years before applying. Renewals need 8 hours of MPTSC-approved continuing training every 3 years."
      },
      {
        "q": "Can I use an out-of-state security license in Maryland?",
        "a": "No. The Maryland State Police states that a security guard certification issued by another state cannot be used to work in Maryland; you must earn the Maryland certification, and the agency must submit your application."
      },
      {
        "q": "Do in-house (non-agency) guards need Maryland certification?",
        "a": "Yes, as of January 1, 2025. Senate Bill 760 (2023) as delayed by SB 729 (2024) extends certification to guards employed directly by businesses and nonprofits, requires those employers to register with MSP and carry $500,000 or $1,000,000 liability insurance, and adds use-of-force reporting."
      },
      {
        "q": "How long does Maryland guard certification take?",
        "a": "MSP issues a decision within 90 days of a complete application. Live-scan fingerprints expire 30 days after submission, so the application must reach the Licensing Division inside that window, and incomplete applications are cancelled if not corrected within 15 days."
      }
    ],
    "sources": [
      {
        "label": "Maryland State Police - Security Guard Certification",
        "url": "https://mdsp.maryland.gov/firearms-permits-professional-licenses/professional-licenses/security-guard-certification",
        "checkedOn": "2026-10"
      },
      {
        "label": "COMAR 29.04.08.02 - Security Guard Certification Card",
        "url": "https://regs.maryland.gov/us/md/exec/comar/29.04.08.01",
        "checkedOn": "2026-10"
      },
      {
        "label": "Md. Code, Business Occupations and Professions § 19-402 (guard certification qualifications)",
        "url": "http://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gbo&section=19-402",
        "checkedOn": "2026-10"
      },
      {
        "label": "MSP Advisory LD-PLU-24-001 - SB 760 (2023) and SB 729 (2024)",
        "url": "https://mdsp.maryland.gov/Organization/Documents/LD-PLU-24-001%20Senate%20Bill%20760%20%282023%29%20and%20Senate%20Bill%20729%20%282024%29%20Updates.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "MDSP - Security Guard Agency License (agency fees)",
        "url": "https://mdsp.maryland.gov/Organization/Pages/CriminalInvestigationBureau/LicensingDivision/ProfessionalLicenses/SecuritySystems.aspx",
        "checkedOn": "2026-10"
      }
    ]
  },
  "MI": {
    "agency": "Michigan Department of Licensing and Regulatory Affairs (LARA) - Corporations, Securities and Commercial Licensing Bureau",
    "agencyUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards",
    "education": {
      "hours": "None set by the state",
      "breakdown": "The Private Security Business and Security Alarm Act (1968 PA 330, MCL 338.1051 et seq.) sets no pre-assignment or continuing training hours for line security employees; the employing agency sets training. Qualification requirements attach to the agency's qualifying officer.",
      "onlineAllowed": "At the employer's discretion",
      "apprenticeship": "No state apprenticeship path",
      "sourceUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards/employee-requirements"
    },
    "experience": "No experience requirement for line guards. The agency's qualifying officer must satisfy MCL 338.1056(1)(g): 4 years of supervisory-level security experience, 4 years as a certified police officer, 2 years of security experience plus a relevant bachelor's degree, military police experience with an affidavit, or other statutory routes.",
    "eligibility": {
      "minAge": "No state minimum published for line employees (employers set it); the qualifying officer must be at least 21",
      "citizenship": "Not expressly published for line employees",
      "education": "Qualifying officer needs a high school education or equivalent",
      "other": "Qualifying officer must have no felony conviction, no listed offense conviction in the prior 5 years (MCL 338.1060(1)(c)), and no insanity adjudication without restoration"
    },
    "background": {
      "method": "The agency application requires five reference statements, two passport photos of the qualifying officer, and approval of the county sheriff or chief of police AND the county prosecuting attorney where the principal office sits (MCL 338.1057(3)). Agencies file employee rosters quarterly (MCL 338.1067).",
      "fee": "No separate state fingerprint fee published for line employees",
      "disqualifiers": "Felony conviction bars the qualifying officer; the license may be revoked for good cause; employees are vetted by the employer",
      "sourceUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards/security-guard-agency-license/initial-license"
    },
    "fees": [
      {
        "item": "Security Guard Agency license (initial)",
        "fee": "$300 (2-year term)",
        "sourceUrl": "https://www.michigan.gov/securityguard"
      },
      {
        "item": "Security Guard Agency renewal",
        "fee": "$150 ($175 late renewal)",
        "sourceUrl": "https://www.michigan.gov/securityguard"
      },
      {
        "item": "Security Guard Sole Proprietor license (initial)",
        "fee": "$200 (renewal $100, late $125)",
        "sourceUrl": "https://www.michigan.gov/securityguard"
      },
      {
        "item": "Branch office license",
        "fee": "$50",
        "sourceUrl": "https://www.michigan.gov/securityguard"
      },
      {
        "item": "Surety bond or insurance",
        "fee": "$25,000 bond, or a policy naming licensee and state as coinsured ($25,000 property / $100,000 per person / $200,000 per occurrence) (MCL 338.1059(4))",
        "sourceUrl": "https://legislature.mi.gov/documents/mcl/archive/2024/June/mcl-Act-330-of-1968.pdf"
      }
    ],
    "application": {
      "portal": "MiCLEAR (LARA licensing system)",
      "portalUrl": "https://aca-prod.accela.com/MICLEAR/Default.aspx",
      "steps": [
        "There is no individual guard license or state exam in Michigan - apply to a licensed Security Guard Agency or sole proprietor",
        "The employer adds you to its quarterly employee roster filed with LARA under MCL 338.1067",
        "The employer must hold an active agency or sole proprietor license, including a $25,000 bond or qualifying insurance and local sheriff/police and prosecutor approvals",
        "Companies wanting their own license file the Security Guard Agency application in MiCLEAR with a $300 fee, a Michigan physical office, five reference statements, entity documents, and the local approvals"
      ],
      "processingTime": "LARA must issue or deny a completed application within 180 days under MCL 338.1059",
      "sourceUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards/security-guard-agency-license/initial-license"
    },
    "renewal": {
      "cycle": "2 years (MCL 338.1059(2))",
      "ce": "No continuing education requirement",
      "fee": "$150 agency / $100 sole proprietor / $50 branch",
      "late": "Late renewal: $175 agency / $125 sole proprietor / $75 branch; lapsed licenses require relicensure ($300 agency)",
      "sourceUrl": "https://www.michigan.gov/securityguard"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$37,080",
      "p25": "$34,230",
      "p75": "$46,480",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=MI"
    },
    "localNuance": "Michigan licenses security guard companies, not individual officers: the Private Security Business and Security Alarm Act (1968 PA 330, MCL 338.1051 et seq.) regulates agencies, sole proprietors, and branch offices, while line guards appear on the employer's quarterly employee roster with no personal credential. Every agency needs a qualifying officer meeting MCL 338.1056 experience routes, a $25,000 bond or equivalent insurance, and sign-off from the county sheriff or chief of police plus the prosecuting attorney. The Department of State Police administers the act for private security police and private college security forces (MCL 338.1052(1)(b)). A Michigan CPL does not by itself create on-duty armed authority.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards"
      }
    ],
    "stateFaqs": [
      {
        "q": "Do individual security guards need a license in Michigan?",
        "a": "No. Michigan licenses the company - Security Guard Agency, sole proprietor, or branch - under the Private Security Business and Security Alarm Act (MCL 338.1051 et seq.). Individual officers work under the employer's license and are listed on its quarterly employee roster."
      },
      {
        "q": "What does a Michigan security guard agency license cost?",
        "a": "$300 for the initial 2-year agency license and $150 to renew ($175 if late). Sole proprietors pay $200 initially and $100 to renew, and each branch office license is $50."
      },
      {
        "q": "Is there an exam or state training requirement for Michigan guards?",
        "a": "No. The act sets no exam and no training hours for line security employees; the employer sets training. The statutory experience routes (4 years supervisory, police service, or 2 years plus a degree) apply to the agency's qualifying officer."
      },
      {
        "q": "What makes Michigan agency applications unusual?",
        "a": "The application needs five reference statements, two passport photos of the qualifying officer, proof of a $25,000 bond or qualifying insurance, and written approval from both the county sheriff or chief of police and the county prosecuting attorney where the principal office is located."
      },
      {
        "q": "How long is a Michigan security license valid?",
        "a": "Two years. LARA must issue or deny a completed application within 180 days, and licenses not renewed by expiration move to late renewal fees or relicensure status."
      }
    ],
    "sources": [
      {
        "label": "Michigan LARA - Private Security Guard Agencies",
        "url": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards",
        "checkedOn": "2026-10"
      },
      {
        "label": "Michigan LARA - Employee Requirements of the Private Security Business and Security Alarm Act",
        "url": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards/employee-requirements",
        "checkedOn": "2026-10"
      },
      {
        "label": "Michigan LARA - Security Guard Agency Initial License (qualifying officer, documents)",
        "url": "https://www.michigan.gov/lara/bureau-list/cscl/licensing/prof/guards/security-guard-agency-license/initial-license",
        "checkedOn": "2026-10"
      },
      {
        "label": "Michigan Compiled Laws - Private Security Business and Security Alarm Act (1968 PA 330)",
        "url": "https://legislature.mi.gov/documents/mcl/archive/2024/June/mcl-Act-330-of-1968.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Michigan LARA - Private Security Guards fees page",
        "url": "https://www.michigan.gov/securityguard",
        "checkedOn": "2026-10"
      }
    ]
  },
  "MN": {
    "agency": "Minnesota Private Detective and Protective Agent Services Board (PDB), Department of Public Safety",
    "agencyUrl": "https://mn.gov/elicense/a-z/?id=1083-231155",
    "education": {
      "hours": "12",
      "breakdown": "Employees of licensed protective agents complete at least 12 hours of pre-assignment training within the first 21 days of employment (or show equivalent prior experience); someone who leaves the profession for 3 or more years must repeat it. All license holders, managers, and employees complete 6 hours of certified continuing training each year; armed personnel add 6 hours of annual firearm training with range qualification plus an annual first aid course with CPR.",
      "onlineAllowed": "The board certifies training providers; it does not publish a single format policy on the pages cited",
      "apprenticeship": "No apprenticeship path",
      "sourceUrl": "https://www.house.mn.gov/hrd/pubs/ss/sslicsprotagnt.pdf"
    },
    "experience": "No experience requirement for employees. Protective agent license applicants need at least 6,000 hours of prior security experience (Minn. Stat. 326.3382); a license holder may hire employees who are not licensed.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "Not expressly published; criminal background check required",
      "education": "No education requirement published for employees",
      "other": "No felony convictions or other statutorily listed offenses (Minn. Stat. 326.3381 subd. 3); good character, honesty and integrity; employees carry a photo identification card issued by the license holder while on duty"
    },
    "background": {
      "method": "Criminal background check required for license holders and their employees; the license holder issues a signed photo ID card containing the company name, address, and employee photograph and description, which must be carried on duty and presented on request",
      "fee": "Included in company licensing; no separate employee background fee published",
      "disqualifiers": "Felony convictions and offenses listed in Minn. Stat. 326.3381, subd. 3",
      "sourceUrl": "https://www.house.mn.gov/hrd/pubs/ss/sslicsprotagnt.pdf"
    },
    "fees": [
      {
        "item": "Protective agent license - new individual",
        "fee": "$800 (2-year term)",
        "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-231155"
      },
      {
        "item": "Protective agent license - new corporation/LLC",
        "fee": "$1,800",
        "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-231155"
      },
      {
        "item": "Protective agent license renewal (by employee count)",
        "fee": "$480 (1 employee) to $1,160 (51+ employees)",
        "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-231155"
      },
      {
        "item": "Individual employee registration",
        "fee": "None published - employees are not individually licensed; the employer issues the ID card",
        "sourceUrl": "https://www.house.mn.gov/hrd/pubs/ss/sslicsprotagnt.pdf"
      }
    ],
    "application": {
      "portal": "Minnesota eLicense / Private Detective and Protective Agents Board application packets",
      "portalUrl": "https://mn.gov/elicense/a-z/?id=1083-231155",
      "steps": [
        "There is no individual guard license or state exam in Minnesota - apply to a licensed protective agent company (or a proprietary employer's in-house security department)",
        "Complete 12 hours of pre-assignment training within your first 21 days of employment through a board-certified provider",
        "Pass the employer's criminal background check and receive the company's signed photo ID card, which you must carry on duty",
        "Companies file the PAI packet (protective agent individual) or PAC packet (corporation/LLC) with the board and pay the fee; qualifiers document 6,000 hours of security experience",
        "Armed employees are certified by the board for weapon carriage after approved firearms training"
      ],
      "processingTime": "Varies; the board says to contact the board office",
      "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-231155"
    },
    "renewal": {
      "cycle": "2 years for the protective agent license; continuing training is annual",
      "ce": "6 hours of certified continuing training each year for license holders, qualified representatives, managers, and employees; armed personnel add 6 hours of firearm training with annual range qualification and an annual first aid/CPR course",
      "fee": "$480-$1,160 depending on employee count",
      "late": "Not published on the eLicense page",
      "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-231155"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$43,380",
      "p25": "$37,020",
      "p75": "$46,110",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=MN"
    },
    "localNuance": "Minnesota licenses protective agent companies through the PDB and does not individually license line guards, who work under the company's license and carry the employer-issued photo ID card. The proprietary employer exception (Minn. Stat. 326.32, subd. 10c) lets a private business guard only its own property without a license, though it must run the same background checks; independent contractors of a proprietor must be licensed. Unarmed guards need 12 hours of pre-assignment training within 21 days of hire, and 6 hours of continuing training every year for everyone - a heavier annual CE load than most states. Carrying a firearm requires board certification plus annual firearms and first aid/CPR training. Unlicensed protective agent work is a gross misdemeanor.",
    "recentChanges": [
      {
        "year": 2026,
        "change": "The board published refreshed 2026 application packets (PDI/PAI/PDC/PAC) and updated the eLicense fee schedule for protective agent licenses, with the license detail page modified September 8, 2026.",
        "sourceUrl": "https://mn.gov/elicense/a-z/?id=1083-231155"
      }
    ],
    "stateFaqs": [
      {
        "q": "Do Minnesota security guards need a personal license?",
        "a": "No. The Private Detective and Protective Agents Services Board licenses protective agent companies; employees work under the company's license, complete 12 hours of pre-assignment training within 21 days of hire, and carry the employer-issued photo ID card on duty."
      },
      {
        "q": "How much does a Minnesota protective agent license cost?",
        "a": "New protective agent licenses are $800 for an individual and $1,800 for a corporation or LLC, renewable every 2 years on a sliding scale from $480 (1 employee) to $1,160 (51 or more employees). Line employees have no individual fee."
      },
      {
        "q": "What continuing training do Minnesota guards need?",
        "a": "6 hours of board-certified continuing training every year - an annual requirement heavier than most states. Anyone carrying a firearm adds 6 hours of annual firearms training with range qualification plus an annual first aid course with CPR certification."
      },
      {
        "q": "What experience does a protective agent license applicant need?",
        "a": "At least 6,000 hours of prior security experience, a $10,000 surety bond, proof of financial responsibility, good character, and no felony or statutorily listed convictions. Employees themselves need no experience hours, only the training and background check."
      },
      {
        "q": "Does in-house security need a Minnesota license?",
        "a": "No, under the proprietary employer exception: a business employing guards solely on its own property is not licensed, though it must conduct the same background checks. Independent contractors hired by such a business must be licensed by the board."
      }
    ],
    "sources": [
      {
        "label": "Minnesota eLicense - Protective Agent Services License (fees, forms)",
        "url": "https://mn.gov/elicense/a-z/?id=1083-231155",
        "checkedOn": "2026-10"
      },
      {
        "label": "Minnesota House Research - Licensing Authority: Protective Agents (statutes and training)",
        "url": "https://www.house.mn.gov/hrd/pubs/ss/sslicsprotagnt.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Minnesota Security Guard License Information (Guard Card Education)",
        "url": "https://www.guardcardeducation.com/minnesota-security-guard-license.shtml",
        "checkedOn": "2026-10"
      },
      {
        "label": "Minnesota Private Detective and Protective Agents Board (via eLicense requirements links)",
        "url": "https://dps.mn.gov/about-dps/associated-boards-cmtes-and-task-forces/private-detective-and-protective-agents-board",
        "checkedOn": "2026-10"
      },
      {
        "label": "How To Start Your Security Guard Career In Minnesota (Security Guard School)",
        "url": "https://securityguardschool.com/blogs/all-minnestota-security-guard-insights/how-to-start-your-security-guard-career-in-minnesota-1",
        "checkedOn": "2026-10"
      }
    ]
  },
  "MT": {
    "agency": "Montana Board of Private Security",
    "agencyUrl": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-security-guard",
    "education": {
      "hours": "16",
      "breakdown": "Applicants must complete the training program required by ARM 24.182.807 and provide written notice of satisfactory completion on a department form. The board's license page lists 16 hours of training, and proof of training must come from the employing licensed security company.",
      "sourceUrl": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-security-guard"
    },
    "experience": "Applicants must be currently employed by, or hold a contractual promise of future employment with, a licensed contract security company, proprietary security organization, or electronic security company. The employer verifies employment and the accuracy of the application (ARM 24.182.514).",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or legal permanent resident",
      "other": "No felony conviction and no conviction of a crime involving moral turpitude or the illegal use or possession of a dangerous weapon, absent a full pardon; must be of good moral character (MCA 37-60-303)."
    },
    "background": {
      "method": "Fingerprint card submitted to the Montana Department of Justice and the FBI under MCA 37-60-304 (ORI MT920073Z)",
      "fee": "$27.25 Montana DOJ processing, payable with the fingerprint card",
      "disqualifiers": "Felony convictions and crimes involving moral turpitude or illegal use or possession of a dangerous weapon, unless a full pardon or similar relief has been granted",
      "sourceUrl": "https://mca.legmt.gov/bills/2022/mca/title_0370/chapter_0600/part_0030/section_0030/0370-0600-0030-0030.html"
    },
    "fees": [
      {
        "item": "Application",
        "fee": "$100",
        "sourceUrl": "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401"
      },
      {
        "item": "Renewal",
        "fee": "$100",
        "sourceUrl": "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401"
      },
      {
        "item": "Armed endorsement",
        "fee": "$50",
        "sourceUrl": "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401"
      },
      {
        "item": "Fingerprint background check (Montana DOJ)",
        "fee": "$27.25",
        "sourceUrl": "http://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/Application_Alarm_Response_Runner.pdf?ver=2018-10-16-133203-150"
      }
    ],
    "application": {
      "portal": "Montana Board of Private Security online application",
      "portalUrl": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-security-guard",
      "steps": [
        "Secure employment or a contractual promise of employment with a licensed contract security company, proprietary security organization, or electronic security company.",
        "Complete the 16-hour board-required training program through the employer and obtain proof of satisfactory completion.",
        "Have fingerprints taken on a fingerprint card and mail it with a $27.25 check or money order to Montana Criminal Records in Helena.",
        "Submit the application with a passport-style photo, proof of age and citizenship or permanent residency, and a character reference form.",
        "Allow about 30 days for a routine application; applications requiring board review may take up to 120 days."
      ],
      "processingTime": "About 30 days for routine applications; up to 120 days for non-routine applications requiring board review",
      "sourceUrl": "http://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/Application_Alarm_Response_Runner.pdf?ver=2018-10-16-133203-150"
    },
    "renewal": {
      "cycle": "1 year",
      "fee": "$100",
      "late": "The board's license page lists a renewal window of January 1 through March 1 each year.",
      "sourceUrl": "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$38,480",
      "p25": "$35,260",
      "p75": "$46,300",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=MT"
    },
    "localNuance": "Montana licenses individual guards only in connection with a licensed employer -- the application is submitted by the sponsoring company, which documents employment and training for each guard. Guards who carry a firearm on duty need a separate $50 armed endorsement and must complete a board-certified firearms training program under MCA 37-60-303(5).",
    "recentChanges": [
      {
        "year": 2023,
        "change": "The Board of Private Security fee schedule in ARM 24.182.401 was amended effective December 9, 2023, setting the security guard application fee at $100 and the renewal fee at $100.",
        "sourceUrl": "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Montana require a written exam to become a security guard?",
        "a": "No exam is listed among the security guard license requirements on the board's license page or in ARM 24.182.514. Licensure is based on the 16-hour training program, employment with a licensed company, and the fingerprint background check. The statute allows the board to require exams for other license types, such as process servers and private investigators."
      },
      {
        "q": "How much does a Montana security guard license cost?",
        "a": "The administrative rule fee schedule lists a $100 application fee and a $100 renewal fee for security guards. Guards who carry a firearm pay an additional $50 for the armed endorsement, and the Montana DOJ fingerprint processing fee is $27.25."
      },
      {
        "q": "Can I get a Montana guard license without a job offer?",
        "a": "No. ARM 24.182.514 requires each applicant to show current employment or a contractual promise of future employment with a licensed contract security company, proprietary security organization, or electronic security company, and the employer signs and submits the application."
      },
      {
        "q": "How long does the Montana guard application take?",
        "a": "The board asks applicants to allow about 30 days of processing from the date a complete routine application is received. If the criminal history check returns a record or other irregularity, the application becomes non-routine and may take up to 120 days while the board reviews it."
      }
    ],
    "sources": [
      {
        "label": "Montana Board of Private Security - Private Security Guard license page",
        "url": "https://boards.bsd.dli.mt.gov/private-security/license-information/private-security-guard",
        "checkedOn": "2026-10"
      },
      {
        "label": "ARM 24.182.401 - Board of Private Security fee schedule",
        "url": "https://rules.mt.gov/gateway/ruleno.asp?RN=24.182.401",
        "checkedOn": "2026-10"
      },
      {
        "label": "ARM 24.182.514 - Private security guard licensure rule",
        "url": "https://rules.mt.gov/gateway/RuleNo.asp?RN=24.182.514",
        "checkedOn": "2026-10"
      },
      {
        "label": "Montana Code Annotated 37-60-303 - License or registration qualifications",
        "url": "https://mca.legmt.gov/bills/2022/mca/title_0370/chapter_0600/part_0030/section_0030/0370-0600-0030-0030.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "Montana Board of Private Security application packet (fingerprint and processing instructions)",
        "url": "http://boards.bsd.dli.mt.gov/Portals/133/Documents/psp/Application_Alarm_Response_Runner.pdf?ver=2018-10-16-133203-150",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NV": {
    "agency": "Nevada Private Investigators Licensing Board (PILB)",
    "agencyUrl": "https://pilb.nv.gov/",
    "exam": {
      "vendor": "PILB (board-administered written exam)",
      "vendorUrl": "https://pilb.nv.gov/",
      "fee": "No separate exam fee is listed on the Work Card checklist; the $85 application processing fee covers application processing.",
      "practical": null,
      "sourceUrl": "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf",
      "sourceNote": "Work Card checklist: completion of the security guard exam is required for employment with a security company. The board publishes a work card exam and study guide on pilb.nv.gov."
    },
    "education": {
      "hours": "0",
      "breakdown": "Nevada requires no pre-assignment classroom hours for the unarmed work card. Instead, the state relies on the PILB written exam covering NRS and NAC Chapter 648, and most employers provide their own orientation. Armed work requires separate PILB firearms training.",
      "onlineAllowed": "Not applicable -- no state-mandated course exists for the unarmed work card.",
      "sourceUrl": "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf"
    },
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizens and non-citizens with a permanent resident card, employment authorization card, or US visa",
      "other": "Applicants must be of good moral character; NRS 648.1493 bars registration for felony convictions, crimes involving moral turpitude, and the illegal use or possession of a dangerous weapon."
    },
    "background": {
      "method": "Live Scan electronic fingerprints through a PILB-authorized fingerprint vendor; results go to the Central Repository for Nevada Records of Criminal History and the FBI",
      "fee": "Included in the $85 application processing fee; a fingerprint card submission instead of Live Scan adds $10; fingerprint vendor and photo costs are separate",
      "disqualifiers": "Felony convictions, crimes involving moral turpitude, and illegal use or possession of a dangerous weapon (NRS 648.1493)",
      "sourceUrl": "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf"
    },
    "fees": [
      {
        "item": "Application processing (Live Scan fingerprints)",
        "fee": "$85",
        "sourceUrl": "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf"
      },
      {
        "item": "Expedited application processing",
        "fee": "$129 ($85 plus $44 expedite fee)",
        "sourceUrl": "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf"
      },
      {
        "item": "Fingerprint card submission (only if instructed)",
        "fee": "$10 additional",
        "sourceUrl": "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf"
      }
    ],
    "application": {
      "portal": "PILB online application portal",
      "portalUrl": "https://pilb.nv.gov/",
      "steps": [
        "Gather two forms of identification (driver license or state/federal ID plus Social Security card, birth certificate, or US passport) and one 2x2 inch passport-style color photo.",
        "Submit the online application and pay the $85 standard or $129 expedited processing fee before being fingerprinted.",
        "Complete Live Scan fingerprints at an authorized vendor using the payment confirmation or stamped electronic submission form.",
        "Complete the PILB security guard written exam on NRS and NAC Chapter 648; the board publishes the exam and a study guide.",
        "Receive the provisional work authorization by email after initial background review (about 2 weeks standard, 3-4 business days expedited); the permanent card follows FBI fingerprint results, which can take 30-90 days."
      ],
      "processingTime": "Provisional authorization in about 2 weeks standard or 3-4 business days expedited; permanent card 30-90 days after fingerprint results",
      "sourceUrl": "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf"
    },
    "renewal": {
      "cycle": "5 years",
      "sourceUrl": "https://pilb.nv.gov/"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$37,310",
      "p25": "$34,610",
      "p75": "$44,600",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=NV"
    },
    "localNuance": "Nevada registers guards with PILB but has no pre-assignment training mandate for the unarmed card -- the written exam carries the regulatory weight. Security work inside casinos adds a separate gaming employee registration through the Nevada Gaming Control Board. Armed work requires permanent work card status, employer sponsorship, PILB firearms training, and requalification on a recurring basis.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://pilb.nv.gov/"
      }
    ],
    "stateFaqs": [
      {
        "q": "Do I need training before applying for a Nevada guard card?",
        "a": "No. Nevada requires no classroom hours for the unarmed PILB work card. Applicants must instead pass the PILB written exam on NRS and NAC Chapter 648, and employers typically provide their own post-specific orientation after hire."
      },
      {
        "q": "How much is the Nevada work card and how fast is it?",
        "a": "The application processing fee is $85 with electronic Live Scan fingerprints, or $129 expedited ($85 plus a $44 expedite fee). PILB emails a provisional work authorization in about 2 weeks standard or 3-4 business days expedited; the permanent card waits on FBI fingerprint results, which can take 30-90 days."
      },
      {
        "q": "How long is a Nevada guard card valid?",
        "a": "The work card registration runs five years, one of the longest terms in the country. Armed certification is a separate credential that requires recurring firearms requalification in addition to the base card."
      },
      {
        "q": "Can I work casino security with just a PILB card?",
        "a": "No. Casino security positions require an additional gaming employee registration through the Nevada Gaming Control Board on top of the PILB work card. The PILB card covers contract security work under a licensed private patrol operator throughout Nevada."
      }
    ],
    "sources": [
      {
        "label": "Nevada PILB - Work Card application checklist (fees, exam, fingerprint requirements)",
        "url": "https://pilb.nv.gov/uploadedfiles/pilbnvgov/Content/Forms/WorkCardChecklist.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Nevada PILB - Applicant Work Card application and livescan vendor list",
        "url": "https://pilb.nv.gov/uploadedFiles/pilbnvgov/Content/Forms/PILB_Applicant_Work_Card_Application(1).pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "PILB main site (work card forms, exam and study guide downloads)",
        "url": "https://pilb.nv.gov/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Nevada guard card requirements overview (secondary)",
        "url": "https://novagems.com/nevada-security-guard-card-requirements/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NJ": {
    "agency": "New Jersey State Police - Private Detective Unit (Security Officer Registration Act)",
    "agencyUrl": "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml",
    "education": {
      "hours": "24 (initial); 8 (renewal refresher)",
      "breakdown": "Applicants must attend a 24-hour Security Officer Registration Act training course taught by an NJ State Police certified security officer instructor within 30 days of applying. Renewal requires an 8-hour refresher course from a certified instructor before the certification expires.",
      "onlineAllowed": "The course must be taken with an NJSP-certified instructor from the instructor registry; the registry is searchable by zip code, county, and instructor name.",
      "sourceUrl": "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf"
    },
    "eligibility": {
      "minAge": 18,
      "other": "No person convicted of a crime of the first, second, third, or fourth degree, as shown by the criminal history record background check, may be issued a security officer registration."
    },
    "background": {
      "method": "Fingerprinting through the IdentoGO link provided inside the online SORA application (out-of-state applicants within 20 miles of the border or beyond use the same link)",
      "fee": "$70.25 per the NJSP SORA FAQ",
      "disqualifiers": "Conviction of a crime of the first, second, third, or fourth degree",
      "sourceUrl": "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml"
    },
    "fees": [
      {
        "item": "Application (non-refundable)",
        "fee": "$75",
        "sourceUrl": "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf"
      },
      {
        "item": "Fingerprinting",
        "fee": "$70.25",
        "sourceUrl": "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf"
      },
      {
        "item": "Renewal (2-year security officer certification)",
        "fee": "$85.30",
        "sourceUrl": "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf"
      }
    ],
    "application": {
      "portal": "NJSP SORA online application portal (Security Officer, Instructor, Agency Owner and Bounty Hunter Applications)",
      "portalUrl": "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml",
      "steps": [
        "Review the SORA statute and the security officer rules on the NJSP SORA page, then open the online application as a first-time applicant using a desktop computer.",
        "Pay the non-refundable $75 application fee by Visa, MasterCard, or Discover and print the 30-day temporary certificate.",
        "Schedule fingerprinting through the IdentoGO link embedded in the application.",
        "Contact an NJSP-certified instructor from the registry and complete the 24-hour training course within 30 days of the application date.",
        "Both fingerprinting and the 24-hour course must be finished within 30 days or a new application and fee are required."
      ],
      "processingTime": "Certification is issued after the criminal history check, fingerprint results, and instructor-uploaded training results and photo are complete",
      "sourceUrl": "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml"
    },
    "renewal": {
      "cycle": "2 years (unarmed); 1 year (armed)",
      "ce": "8-hour refresher course from a SORA certified instructor completed before expiration; the instructor uploads training results and the photo",
      "fee": "$85.30",
      "late": "Renewal notices are emailed 90, 60, and 30 days before expiration to the address on the applicant profile.",
      "sourceUrl": "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf"
    },
    "reciprocity": {
      "rule": "No reciprocity with other states -- the NJSP states SORA registration cannot be substituted with an out-of-state security credential.",
      "agreements": null,
      "sourceUrl": "https://njsp.njoag.gov?p=5546/"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$38,880",
      "p25": "$34,770",
      "p75": "$48,120",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=NJ"
    },
    "localNuance": "New Jersey has no state licensing exam; the 24-hour SORA course is the gateway and instructors upload test results to NJSP. Armed security officers need a separate New Jersey Concealed Carry Permit or Retired Police Officers Program status -- the SORA certification alone does not authorize firearm possession -- and renew annually. Active law enforcement officers are exempt from the 24-hour course but not from fingerprinting, and lose the exemption on retirement.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml"
      }
    ],
    "stateFaqs": [
      {
        "q": "What does SORA registration cost in New Jersey?",
        "a": "The application fee is a non-refundable $75, fingerprinting costs $70.25, and renewal is $85.30 for the two-year certification. All fees are paid online by credit or debit card during the NJSP application process."
      },
      {
        "q": "Is there a state exam for New Jersey security officers?",
        "a": "No standalone state exam is administered. Instead, every applicant must complete the 24-hour SORA training course with an NJSP-certified instructor, and the instructor uploads the training results to the State Police."
      },
      {
        "q": "What happens if I miss the 30-day SORA deadline?",
        "a": "Fingerprinting and the 24-hour training course must both be completed within 30 days of the application date. If either is missed, the application lapses and a new application with a new $75 fee must be submitted."
      },
      {
        "q": "Can I carry a firearm as a New Jersey security officer?",
        "a": "Only with a separate New Jersey Concealed Carry Permit or Retired Police Officers Program status -- the SORA armed certification alone does not authorize firearm possession. Armed certifications renew every year rather than every two years, with the 8-hour refresher course required each cycle."
      }
    ],
    "sources": [
      {
        "label": "NJSP SORA / Security Officer Help Page (application, fingerprinting, renewal)",
        "url": "https://www.nj.gov/oag/njsp/private-detective/sora-help.shtml",
        "checkedOn": "2026-10"
      },
      {
        "label": "NJSP SORA FAQ (fees, 24-hour course, 30-day rule, renewal)",
        "url": "https://www.nj.gov/njsp/info/pdf/pdet/021011_sorafaqs.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "NJSP SORA qualifications page (yellow card, armed red card, disqualifiers)",
        "url": "https://njsp.njoag.gov?p=5546/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Security Officer Registration Act statute text",
        "url": "https://www.nj.gov/njsp/private-detective/pdf/sora/060106_sora.pdf",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NM": {
    "agency": "New Mexico Regulation and Licensing Department - Private Investigations Advisory Board",
    "agencyUrl": "https://www.rld.nm.gov?p=15797/",
    "exam": {
      "vendor": "New Mexico RLD (department-issued jurisprudence examination)",
      "vendorUrl": "https://www.rld.nm.gov?p=15797/",
      "fee": "No separate exam fee is listed in the registration application materials.",
      "practical": null,
      "sourceUrl": "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf",
      "sourceNote": "The security guard registration instructions list the department-issued jurisprudence examination for security guards among the mandatory submission documents. The department does not publish a question count or passing score in the application packet."
    },
    "education": {
      "hours": "8 (Level 1); 20 (Level 2); 16 additional (Level 3)",
      "breakdown": "Level 1 covers the unarmed guard role; Level 2 adds at least 20 hours plus weapons training for the specific equipment carried, such as an electronic control device; Level 3 adds at least 16 more hours with firearms training and qualification. Training is delivered by RLD-approved instructors, who complete the department's Security Guard Training Verification form.",
      "onlineAllowed": "Approved training is delivered in person by RLD-approved instructors or approved institutions.",
      "apprenticeship": "Level 3 applicants must also pass a psychological evaluation by a licensed psychologist, with the report sent directly to RLD.",
      "sourceUrl": "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf"
    },
    "eligibility": {
      "other": "Level 3 (firearm) applicants must receive a positive evaluation by a licensed psychologist determining mental suitability to carry a firearm, and must be legally eligible to possess firearms. Applications require disclosure of prior licensing, military discharge status, and impairment or substance questions under penalty of perjury."
    },
    "background": {
      "method": "Electronic fingerprinting through 3M Cogent (register online at the Gemalto NM portal first; ORI NM920250Z); FBI and New Mexico state criminal history results are sent directly to RLD",
      "fee": "$44 for the FBI and state record check",
      "disqualifiers": "The application requires sworn disclosure of criminal, licensing-discipline, and substance-related history; false or dishonest answers are grounds for denial or revocation.",
      "sourceUrl": "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf"
    },
    "fees": [
      {
        "item": "Registration application (Level 1)",
        "fee": "$75",
        "sourceUrl": "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf"
      },
      {
        "item": "Registration application (Level 2)",
        "fee": "$75",
        "sourceUrl": "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf"
      },
      {
        "item": "Registration application (Level 3)",
        "fee": "$150",
        "sourceUrl": "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf"
      },
      {
        "item": "Fingerprint background check (state and FBI)",
        "fee": "$44",
        "sourceUrl": "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf"
      }
    ],
    "application": {
      "portal": "Paper application filed with RLD Boards and Commissions Division, Private Investigations Advisory Board (Santa Fe)",
      "portalUrl": "https://www.rld.nm.gov?p=15797/",
      "steps": [
        "Choose the registration level that matches the intended work: Level 1 unarmed, Level 2 with non-lethal equipment, or Level 3 with a firearm.",
        "Complete the required in-person training with an RLD-approved instructor and obtain the Training Verification form.",
        "Register at the Gemalto/Cogent NM portal and complete electronic fingerprinting ($44) with ORI NM920250Z; the background report is valid for 90 days.",
        "Submit the application with the fee, two 2x2 inch passport-style photos stapled to the form, the jurisprudence examination, and the RLD release form.",
        "Wait for the registration card -- a guard cannot work until the card is issued and must work under the direct supervision of a licensed private patrol operator or private patrol operations manager."
      ],
      "processingTime": "Not published in the application materials",
      "sourceUrl": "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf"
    },
    "renewal": {
      "ce": "Proof of continuing education from an approved source is required for renewal; firearms requalification does not count toward the hours.",
      "sourceUrl": "https://www.rld.nm.gov?p=15797/"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$43,320",
      "p25": "$35,570",
      "p75": "$53,530",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=NM"
    },
    "localNuance": "New Mexico uses a three-level guard system rather than a simple unarmed/armed split, and the application packet states plainly that a guard cannot be placed on a post until registered and must remain under the direct supervision of a licensed private patrol operator. Level 3 is unusual nationally in requiring a psychologist's fitness evaluation before initial firearm registration.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://www.rld.nm.gov?p=15797/"
      }
    ],
    "stateFaqs": [
      {
        "q": "What are the three New Mexico security guard levels?",
        "a": "Level 1 is unarmed and requires at least 8 hours of training; Level 2 allows approved non-lethal equipment after at least 20 hours plus weapon-specific training; Level 3 permits carrying a firearm after 16 additional hours, firearms qualification, and a psychological evaluation. Guards progress through the levels as their posts require."
      },
      {
        "q": "How much does New Mexico guard registration cost?",
        "a": "The current registration form lists $75 for Level 1, $75 for Level 2, and $150 for Level 3, all non-refundable. Electronic fingerprinting for the state and FBI background check adds $44."
      },
      {
        "q": "Is there an exam for New Mexico security guards?",
        "a": "Yes. Every security guard applicant must complete the department-issued jurisprudence examination on New Mexico law and rules and submit it with the registration application. RLD does not publish a question count or passing score in the application packet."
      },
      {
        "q": "When can a New Mexico guard start working?",
        "a": "Not before the registration card arrives. The application states that a guard cannot work as a security guard until RLD has issued the registration card, and the guard must be under the direct supervision of a licensed private patrol operator or private patrol operations manager."
      }
    ],
    "sources": [
      {
        "label": "NM RLD Private Investigations overview and contacts",
        "url": "https://www.rld.nm.gov?p=15797/",
        "checkedOn": "2026-10"
      },
      {
        "label": "NM RLD Security Guard Registration initial application (Levels 1-3, fees)",
        "url": "https://www.rld.nm.gov/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/Security_Guard_Resigration_Initial_Application_05.2019.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "NM RLD Security Guard Registration instructions (levels, fingerprints, jurisprudence exam)",
        "url": "https://api.realfile.rtsclients.com/PublicFiles/1ee897135beb4b1c82715d36398de4c5/77cab23b-d931-4079-939c-775df0a79259/Security%20Guard%20Initial%20Application%20(All%20Levels).pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "NM RLD Private Patrol Operator license instructions (fingerprint process background)",
        "url": "https://www.rld.nm.gov/uploads/FileLinks/5077ccc7d0a642f4a08be63ee731793f/Complete%20PPO%20application.pdf",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NY": {
    "agency": "New York Department of State - Division of Licensing Services",
    "agencyUrl": "https://dos.ny.gov/frequently-asked-questions-security-guard",
    "education": {
      "hours": "8 + 16 + 8 annual (47 for armed)",
      "breakdown": "An 8-hour pre-assignment course at a DCJS-approved school is required before applying. After employment begins, a 16-hour on-the-job training course must be completed within 90 days. Every year afterward, guards must complete an 8-hour annual in-service course. Armed registration additionally requires a 47-hour firearms course.",
      "onlineAllowed": "Courses must be taken at security guard training schools approved by the Division of Criminal Justice Services (DCJS).",
      "sourceUrl": "https://dos.ny.gov/frequently-asked-questions-security-guard"
    },
    "eligibility": {
      "minAge": 18,
      "other": "Applicants need a current New York photo driver license or non-driver ID (or an image-only DMV photo capture) so the registration card can be produced from the DMV photo on file. A serious offense conviction as defined in General Business Law 89-f bars registration."
    },
    "background": {
      "method": "Electronic fingerprints through IdentoGO (service code 1545R1) for a state and FBI criminal history check",
      "fee": "$75 criminal justice fee plus $12 FBI fee plus the vendor's fee",
      "disqualifiers": "Conviction of a serious offense as defined in General Business Law 89-f, or a misdemeanor the Secretary of State finds directly related to security work",
      "sourceUrl": "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801"
    },
    "fees": [
      {
        "item": "Registration (2 years)",
        "fee": "$36",
        "sourceUrl": "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801"
      },
      {
        "item": "Fingerprinting (criminal justice fee + FBI fee + vendor fee)",
        "fee": "$75 + $12 + vendor charge",
        "sourceUrl": "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801"
      },
      {
        "item": "Renewal (2 years)",
        "fee": "$25",
        "sourceUrl": "https://dos.ny.gov/frequently-asked-questions-security-guard"
      },
      {
        "item": "Amendment / duplicate / change of employer",
        "fee": "$25",
        "sourceUrl": "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801"
      }
    ],
    "application": {
      "portal": "Employee Statement and Security Guard Application (DOS-1206-a), mailed to NYS Department of State, Division of Licensing Services, PO Box 22052, Albany, NY 12201-2052",
      "portalUrl": "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801",
      "steps": [
        "Complete the 8-hour pre-assignment training course at a DCJS-approved school and keep the certificate.",
        "Schedule electronic fingerprinting with IdentoGO using service code 1545R1 and keep the receipt.",
        "File the DOS-1206-a application with the 8-hour certificate, fingerprint receipt, signed DMV consent form, a current NY photo ID or DMV image-only receipt, and the $36 fee.",
        "If employment begins when the application is filed, the employer completes the Notice of Employment section.",
        "After hire, complete the 16-hour on-the-job course within 90 days, then the 8-hour annual in-service course every year."
      ],
      "processingTime": "Average processing time 3-5 days",
      "sourceUrl": "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "8-hour annual in-service training course every year, independent of the two-year renewal cycle",
      "fee": "$25",
      "late": "Renewal forms are mailed to guards 90 days before expiration and must be returned by the expiration date.",
      "sourceUrl": "https://dos.ny.gov/frequently-asked-questions-security-guard"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$44,240",
      "p25": "$37,210",
      "p75": "$51,850",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=NY"
    },
    "localNuance": "New York splits authority between two agencies: the Department of State registers guards while DCJS approves the training schools and course content. Armed registration is a separate card requiring the 47-hour firearms course plus a valid New York pistol license, and active police officers are exempt from registration while retired officers must register and complete all training.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://dos.ny.gov/frequently-asked-questions-security-guard"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does a New York security guard registration cost?",
        "a": "The state fee is $36 for a two-year registration, plus fingerprinting charges of $75 criminal justice fee, $12 FBI fee, and the IdentoGO vendor fee. Renewals cost $25 every two years."
      },
      {
        "q": "Is there a state exam for New York security guards?",
        "a": "No. New York does not administer a licensing exam for unarmed guard registration. The state instead enforces a training ladder: 8-hour pre-assignment before applying, 16-hour on-the-job within 90 days of hire, and 8 hours of in-service training annually."
      },
      {
        "q": "What does it take to be an armed guard in New York?",
        "a": "Armed work requires a separate Special Armed Guard registration: the 47-hour firearms course certificate (or a DCJS waiver) plus a valid New York pistol license. Armed guards also complete the 8-hour annual in-service training for armed guards each year."
      },
      {
        "q": "Do police officers need a New York guard registration?",
        "a": "Active police officers are exempt from registration and training when doing security work, though they must complete an Employee Statement when working for a contractual entity. Retired and separated officers are treated as civilians and must register, fingerprint where applicable, and complete all training."
      }
    ],
    "sources": [
      {
        "label": "NYS Department of State - Security Guard FAQ (training, fees, armed requirements)",
        "url": "https://dos.ny.gov/frequently-asked-questions-security-guard",
        "checkedOn": "2026-10"
      },
      {
        "label": "NY Business Express - Security Guard Application DOS1206-a (fees, processing)",
        "url": "https://www.businessexpress.ny.gov/app/answers/cms/a_id/2801",
        "checkedOn": "2026-10"
      },
      {
        "label": "Guard Card Guide - New York requirements summary (secondary)",
        "url": "https://www.guardcardguide.com/states/new-york",
        "checkedOn": "2026-10"
      },
      {
        "label": "Radiant Training - NY unarmed registration step-by-step (secondary)",
        "url": "https://www.radianttraining.com/blog/how-to-get-new-york-security-guard-license",
        "checkedOn": "2026-10"
      }
    ]
  },
  "NC": {
    "agency": "North Carolina Private Protective Services Board (NC Department of Public Safety)",
    "agencyUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration",
    "education": {
      "hours": "16 (unarmed); +20 (armed); 4 (armed renewal)",
      "breakdown": "Unarmed applicants must complete a 16-hour unarmed security guard course dated less than one year before the registration application. Armed applicants additionally complete a 20-hour armed course dated less than 90 days before applying (exemptions exist under NCGS 74C-13.1). Armed renewals require a 4-hour armed renewal course dated less than 180 days before the renewal application.",
      "onlineAllowed": "Instruction is delivered by Board-certified trainers; a searchable list of certified trainers is published by the Board.",
      "sourceUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration"
    },
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or resident alien",
      "other": "Applicants must be of good moral character and temperate habits. Under 14B NCAC 16 .0703, convictions within the last five years involving firearms, controlled substances, felonious assault or violence, breaking and entering, burglary, larceny, or addiction are prima facie evidence against good moral character."
    },
    "background": {
      "method": "Completed FD-258 fingerprint card mailed to the Board office plus an Authority for Release of Information (fingerprints) form; a 60-month online criminal history record check from CRC.com dated less than 60 days before the application",
      "fee": "$38 fingerprint fee (new registrations)",
      "disqualifiers": "Recent convictions involving firearms, drugs, violent offenses, burglary or larceny, judicial findings of incompetence, involuntary commitment, or prior revocation of a registration (14B NCAC 16 .0703)",
      "sourceUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration"
    },
    "fees": [
      {
        "item": "Unarmed guard - new registration",
        "fee": "$30 application + $38 fingerprint",
        "sourceUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration"
      },
      {
        "item": "Unarmed guard - renewal",
        "fee": "$30",
        "sourceUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration"
      },
      {
        "item": "Unarmed guard - late renewal (within 90 days of expiration)",
        "fee": "$25 late fee in addition to the renewal fee",
        "sourceUrl": "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
      },
      {
        "item": "Unarmed guard - transfer",
        "fee": "$15 ($45 for transfer and renew combined)",
        "sourceUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration"
      },
      {
        "item": "Armed guard - new registration",
        "fee": "$45 application + $38 fingerprint",
        "sourceUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration"
      }
    ],
    "application": {
      "portal": "Permitium online registration application, submitted by the employing licensed company",
      "portalUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration",
      "steps": [
        "Get hired by a licensed private protective services company -- individuals cannot submit their own registration applications.",
        "Complete the 16-hour unarmed course (and the 20-hour armed course for armed work) with a Board-certified trainer.",
        "The employer submits the Permitium application within 30 days of hire, uploading the digital photo, training certificate, 60-month CRC.com criminal record check, affidavit and public notice statement, and release form.",
        "Mail the completed FD-258 fingerprint card and the Permitium application receipt to the Board office.",
        "Unarmed guards may work on a probationary basis for 20 consecutive calendar days while registration is arranged; most applications are processed within 45 days and ID cards are mailed to the company within 60 days."
      ],
      "processingTime": "Most registrations processed within 45 days; ID cards mailed within 60 days (fingerprint processing by the NC SBI can extend new registrations)",
      "sourceUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/frequently-asked-questions"
    },
    "renewal": {
      "cycle": "1 year",
      "ce": "Armed renewals require a 4-hour armed security guard course dated less than 180 days before the renewal application; unarmed renewals require a current 12-month criminal record check.",
      "fee": "$30 unarmed / $45 armed",
      "late": "Unarmed late renewals are accepted within 90 days of expiration for a $25 late fee; armed registrations cannot be renewed late.",
      "sourceUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration"
    },
    "reciprocity": {
      "rule": "Out-of-state security guard registrations and licenses are not valid in North Carolina; guards from other states must be registered through a North Carolina licensee.",
      "agreements": null,
      "sourceUrl": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/frequently-asked-questions"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$35,010",
      "p25": "$30,640",
      "p75": "$43,610",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=NC"
    },
    "localNuance": "North Carolina registers the employee through the employer: the licensed company owns the guard card (it is mailed to the company and remains company property), submits every application and renewal, and must register even guards who quit within 30 days. Armed guards carrying concealed must upload a copy of a valid concealed carry permit.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "Chapter 16 rules of the Private Protective Services Board (14B NCAC 16), which govern guard registration standards and fees, were amended effective November 1, 2025, following earlier amendments effective September 1, 2024 and January 1, 2024.",
        "sourceUrl": "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does it cost to register as a security guard in North Carolina?",
        "a": "A new unarmed registration costs $30 for the application plus $38 for fingerprints (about $68 total before processing fees), and a new armed registration costs $45 plus $38 (about $83 total). Renewals are $30 unarmed and $45 armed each year."
      },
      {
        "q": "Can I apply for my own North Carolina guard registration?",
        "a": "No. Individuals cannot submit their own applications -- the licensed company a guard works for must submit the registration within 30 days of hire through Permitium. Unarmed guards may work as probationary employees for 20 consecutive calendar days first."
      },
      {
        "q": "How long does North Carolina guard registration take?",
        "a": "Most applications are processed within 45 days and ID cards are mailed to the employing company within 60 days. New registrations can take longer because the NC SBI must process the fingerprint check."
      },
      {
        "q": "Does North Carolina accept guard cards from other states?",
        "a": "No. The Board states plainly that out-of-state security guard registrations and licenses are not transferable or valid in North Carolina; guards must be registered through a North Carolina licensee."
      }
    ],
    "sources": [
      {
        "label": "NC Private Protective Services Board - Security Employee Registration (fees, training, documents)",
        "url": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/registration",
        "checkedOn": "2026-10"
      },
      {
        "label": "NC Private Protective Services Board - FAQ (processing times, probationary guards, reciprocity)",
        "url": "https://www.ncdps.gov/about-dps/boards-and-commissions/private-protective-services-board/frequently-asked-questions",
        "checkedOn": "2026-10"
      },
      {
        "label": "14B NCAC Chapter 16 - Private Protective Services Board rules (fees, minimum standards, amendment history)",
        "url": "http://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "50-state guard licensing comparison including NC training hours (secondary)",
        "url": "https://guardtraining.net/?p=987521631/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "ND": {
    "agency": "North Dakota Private Investigation and Security Board",
    "agencyUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
    "exam": {
      "vendor": "ND Private Investigation and Security Board (board-administered exam in Bismarck)",
      "vendorUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
      "fee": "$100 application and testing fee for the security provider license",
      "practical": null,
      "sourceUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
      "sourceNote": "The exam applies to the licensed security provider credential, not to individual security officer registrations. Exams are scheduled individually with the Executive Director once application requirements are met."
    },
    "education": {
      "hours": "12 (Apprentice); 32 classroom + 1,000 field (Security Officer); 80 classroom + 4,000 field (Commissioned)",
      "breakdown": "North Dakota uses a tiered officer structure: Apprentice Security Officer requires 12 hours of classroom instruction or 12 hours of field service; Security Officer requires 1,000 hours of field service and 32 classroom hours; Commissioned Security Officer requires 4,000 hours of field service and 80 classroom hours. Armed Security Officer status requires at least Security Officer level plus the weapons requirements.",
      "apprenticeship": "An applicant may qualify as a security provider without commissioned officer status with 4,000 hours of security experience and 80 classroom hours, substantiated by third-party documentation.",
      "sourceUrl": "http://www.pisb.nd.gov/licensing/application-forms"
    },
    "experience": "The tier structure doubles as the experience ladder: 12 field hours (apprentice), 1,000 field hours (security officer), and 4,000 field hours (commissioned officer). Applicants for the licensed security provider credential must be commissioned officers or document 4,000 hours of experience with 80 classroom hours.",
    "background": {
      "method": "Two legible fingerprint cards submitted with the application (the Board provides cards free on request); criminal record search through the North Dakota BCI and the FBI",
      "fee": "$40 criminal records search fee",
      "disqualifiers": "Not itemized in the application materials reviewed; applications with unreadable prints or improper codes are rejected and returned.",
      "sourceUrl": "http://www.pisb.nd.gov/licensing/application-forms"
    },
    "fees": [
      {
        "item": "Application and testing (licensed security provider)",
        "fee": "$100",
        "sourceUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
      },
      {
        "item": "Criminal records search (BCI and FBI)",
        "fee": "$40",
        "sourceUrl": "http://www.pisb.nd.gov/licensing/application-forms"
      },
      {
        "item": "Apprentice / Security / Commissioned Officer registration",
        "fee": "$45",
        "sourceUrl": "http://www.pisb.nd.gov/licensing/application-forms"
      },
      {
        "item": "Armed certification",
        "fee": "$45",
        "sourceUrl": "http://www.pisb.nd.gov/licensing/application-forms"
      },
      {
        "item": "Licensed Security Provider",
        "fee": "$225",
        "sourceUrl": "http://www.pisb.nd.gov/licensing/application-forms"
      },
      {
        "item": "Licensed Security Agency",
        "fee": "$450",
        "sourceUrl": "http://www.pisb.nd.gov/licensing/application-forms"
      },
      {
        "item": "Duplicate license or registration",
        "fee": "$30",
        "sourceUrl": "http://www.pisb.nd.gov/licensing/application-forms"
      }
    ],
    "application": {
      "portal": "Paper applications filed with the Board office in Bismarck",
      "portalUrl": "http://www.pisb.nd.gov/licensing/application-forms",
      "steps": [
        "Choose the correct tier: Apprentice Security Officer, Security Officer, or Commissioned Security Officer, and complete the matching classroom and field-service hours.",
        "Complete pages 1, 2, 2a, and 3 of the application packet and attach documentation of hours and training.",
        "Submit two legible fingerprint cards and email one passport-sized photo of the applicant to the Board's photo address when the application goes in.",
        "For the licensed security provider credential, pass the board exam in Bismarck (scheduled individually with the Executive Director) and provide proof of Secretary of State business registration, insurance, and agency status fees.",
        "Allow approximately 30 business days for processing once all applications, fees, and documentation are received."
      ],
      "processingTime": "About 30 business days with a complete application",
      "sourceUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
    },
    "renewal": {
      "cycle": "1 year",
      "fee": "Per the current fee schedule: officer registration $45, armed certification $45, licensed security provider $225, security agency $450",
      "late": "Licenses expire September 30 of each year; administrative rules provide for late fees on individual license and registration renewals.",
      "sourceUrl": "http://www.pisb.nd.gov/licensing/application-forms"
    },
    "reciprocity": {
      "rule": "North Dakota has no reciprocity -- the Board states that applicants from other states must apply for a North Dakota license and meet all qualifications.",
      "agreements": null,
      "sourceUrl": "https://www.pisb.nd.gov/licensing/frequently-asked-questions"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$39,310",
      "p25": "$34,960",
      "p75": "$45,550",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=ND"
    },
    "localNuance": "North Dakota runs a tiered officer ladder (Apprentice, Security Officer, Commissioned Security Officer) with escalating classroom and field-hour requirements, and every employee of a security agency must register with the Board individually. A concealed weapons or constitutional carry permit does not authorize carrying a weapon while providing security -- armed certification requires passing the board's weapons exam.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "The Board published a new fee schedule effective April 22, 2025, setting officer registration at $45, armed certification at $45, criminal record search at $40, licensed security provider at $225, and licensed security agency at $450.",
        "sourceUrl": "http://www.pisb.nd.gov/licensing/application-forms"
      }
    ],
    "stateFaqs": [
      {
        "q": "What are North Dakota's security officer tiers?",
        "a": "Apprentice Security Officer requires 12 hours of classroom instruction or 12 hours of field service; Security Officer requires 1,000 field hours plus 32 classroom hours; Commissioned Security Officer requires 4,000 field hours plus 80 classroom hours. Armed status is available once a guard reaches at least Security Officer level."
      },
      {
        "q": "Does a North Dakota concealed carry permit let me work armed security?",
        "a": "No. The Board states that concealed weapons and constitutional carry permits do not authorize carrying a weapon while providing security or investigative services. Armed certification requires passing the weapons exam and meeting the state's weapons requirements."
      },
      {
        "q": "Does North Dakota have reciprocity for security licenses?",
        "a": "No. The Board's FAQ answers directly that North Dakota has no reciprocity; out-of-state licensees must apply in North Dakota and meet all qualifications, including the exam for provider-level credentials."
      },
      {
        "q": "When do North Dakota security licenses expire?",
        "a": "Licenses and armed certifications expire September 30 of each year, so renewals run on an annual cycle. The Board also noted for the 2026 renewal round that it uses photos already on file rather than requiring new photographs."
      }
    ],
    "sources": [
      {
        "label": "ND Private Investigation and Security Board - FAQ (fees, exam, reciprocity, process)",
        "url": "https://www.pisb.nd.gov/licensing/frequently-asked-questions",
        "checkedOn": "2026-10"
      },
      {
        "label": "ND PISB - Application Forms and fee breakdown effective 4-22-2025",
        "url": "http://www.pisb.nd.gov/licensing/application-forms",
        "checkedOn": "2026-10"
      },
      {
        "label": "North Dakota Administrative Code 93-02-03-06 - Fees (exam and registration fees)",
        "url": "https://ndlegis.gov/admcode/arc201310350.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "N.D. Admin Code 93-02-03-06 via Cornell LII (current fee rule text)",
        "url": "https://www.law.cornell.edu/regulations/north-dakota/N-D-A-C-93-02-03-06",
        "checkedOn": "2026-10"
      }
    ]
  },
  "OH": {
    "agency": "Ohio Department of Public Safety - Private Investigator Security Guard Services (PISGS)",
    "agencyUrl": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/apply-for-a-license",
    "exam": {
      "vendor": "Ohio PISGS (qualifying agent examination)",
      "vendorUrl": "https://pisgs.ohio.gov/toolkit/ilo_program.stm",
      "fee": "$25 exam application; $25 retest fee",
      "practical": null,
      "sourceUrl": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees",
      "sourceNote": "The exam applies to the company qualifying agent under ORC 4749.03, not to individual guard employees. Individual security guard employees take no state exam; they are registered by their employer."
    },
    "experience": "The path to work runs through the employer: Ohio licenses security guard companies (Class C) and requires each company to have a Qualifying Agent with at least two continuous years of investigatory or security services work for a public agency or a licensed provider, or equivalent experience as determined by rule (ORC 4749.03).",
    "eligibility": {
      "other": "Individual officers are not separately licensed by the state. To work as a guard, a person must be employed by a PISGS-licensed provider, which registers the employee with the state and ensures the employee passes the criminal background check."
    },
    "background": {
      "method": "The company's Qualifying Agent undergoes a criminal background check and Rap Back enrollment; registered employees are monitored by the state Rapback system, which notifies PISGS of arrests",
      "fee": "$10 Rap Back fee for the qualifying agent (included in the $35 QA initial fee)",
      "disqualifiers": "Registrants must certify at each renewal that they have not been convicted of or pled guilty to a disqualifying offense defined in rule 4501:7-1-19 of the Administrative Code during the previous registration year.",
      "sourceUrl": "http://codes.ohio.gov/oac/4501:7-1-16"
    },
    "fees": [
      {
        "item": "Provider license application (Class A, B, or C)",
        "fee": "$200",
        "sourceUrl": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees"
      },
      {
        "item": "Qualifying Agent initial application ($25 + $10 Rap Back)",
        "fee": "$35",
        "sourceUrl": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees"
      },
      {
        "item": "Registrant (guard employee) initial registration",
        "fee": "$40",
        "sourceUrl": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees"
      },
      {
        "item": "Registrant renewal (annual)",
        "fee": "$25",
        "sourceUrl": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees"
      },
      {
        "item": "Firearm-bearer (FAB) endorsement",
        "fee": "$15",
        "sourceUrl": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees"
      },
      {
        "item": "Provider license renewal (2 years)",
        "fee": "$550",
        "sourceUrl": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees"
      }
    ],
    "application": {
      "portal": "PISGS Online Services (company license applications and employee registrations)",
      "portalUrl": "https://pisgs.ohio.gov/toolkit/ilo_program.stm",
      "steps": [
        "Get hired by a company licensed by PISGS for Class C security services -- providing security services without a license is a crime, and only licensed companies can register employees.",
        "The employer submits the employee registration application with the required photo and $40 fee; employees carry a current security identification card on duty.",
        "Applicants for armed work (firearm-bearer status) complete the required firearms training and documentation in addition to the FAB endorsement.",
        "The employer must register employees within the statutory window after hire, and guard registrations renew annually on the anniversary of issuance.",
        "Companies must hold comprehensive general liability insurance at all times (at least $100,000 per person and $300,000 per occurrence for bodily injury, and $100,000 property damage under ORC 4749.03)."
      ],
      "processingTime": "Not published as a fixed figure by PISGS; companies cannot work, advertise, or solicit until PISGS approval is granted",
      "sourceUrl": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/apply-for-a-license"
    },
    "renewal": {
      "cycle": "1 year (employee registration, anniversary date); 2 years (company license)",
      "ce": "No state continuing-education hours are required for individual registrants; registrants certify annually that no disqualifying offense occurred in the prior year.",
      "fee": "$25 registrant renewal; $550 company license renewal",
      "sourceUrl": "http://codes.ohio.gov/oac/4501:7-1-16"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$35,770",
      "p25": "$31,140",
      "p75": "$44,500",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=OH"
    },
    "localNuance": "Ohio is one of the states that licenses security guard companies rather than individual officers: the individual's legal credential is a PISGS employee registration obtained by the employer, renewed annually. Armed employees need the Firearm-bearer (FAB) endorsement with required training, and the state's Rapback system continuously monitors registrants for new arrests.",
    "recentChanges": [
      {
        "year": 2025,
        "change": "Legislation effective in 2025 (House Bill 238, amending ORC 4749.03) moved PISGS provider licenses to a two-year cycle; the license renewal fee increased to $550 per license plus $10 per Qualifying Agent to reflect the two-year expiration, with 2026 renewals due before March 1, 2026.",
        "sourceUrl": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/news/mid-week-minute-12032025"
      }
    ],
    "stateFaqs": [
      {
        "q": "Does Ohio license individual security guards?",
        "a": "No. Ohio licenses security guard companies (Class C license) through PISGS, and the licensed company registers each employee with the state for a $40 initial fee. The individual guard's credential is the registration identification card, which must be carried on duty and renewed annually."
      },
      {
        "q": "What does it cost a guard to register in Ohio?",
        "a": "Employee registration costs $40 initially and $25 per year to renew, paid through the employer's PISGS Online Services account. Armed employees add a $15 Firearm-bearer endorsement and must complete the required firearms training."
      },
      {
        "q": "What changed with Ohio security company licenses in 2025?",
        "a": "Legislation effective in 2025 extended PISGS provider licenses to a two-year term and raised the company renewal fee to $550 per license plus $10 per Qualifying Agent. Licenses expiring in 2026 had to be renewed before March 1, 2026, or all registered employees are terminated."
      },
      {
        "q": "How does someone become a security guard in Ohio?",
        "a": "The practical path is to apply to one of the more than 800 PISGS-licensed providers. Once hired, the company registers you with PISGS, you complete the background check and photo requirements, and you carry the state-issued security identification card. Unregistered work is not permitted."
      }
    ],
    "sources": [
      {
        "label": "Ohio PISGS - Fees page (all transaction fees)",
        "url": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/licensed-company-resources/pisgs-fees",
        "checkedOn": "2026-10"
      },
      {
        "label": "Ohio Homeland Security - Apply for a License (licensing structure, insurance, exemptions)",
        "url": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/apply-for-a-license",
        "checkedOn": "2026-10"
      },
      {
        "label": "Ohio Revised Code Chapter 4749 - Private Investigators; Security Services",
        "url": "http://codes.ohio.gov/orc/4749",
        "checkedOn": "2026-10"
      },
      {
        "label": "Ohio Administrative Code 4501:7-1-16 - Renewal of registrations",
        "url": "http://codes.ohio.gov/oac/4501:7-1-16",
        "checkedOn": "2026-10"
      },
      {
        "label": "PISGS news - License Renewal Season 2026 (two-year licenses, $550 renewal fee)",
        "url": "https://homelandsecurity.ohio.gov/private-investigators-and-security-guards/news/mid-week-minute-12032025",
        "checkedOn": "2026-10"
      }
    ]
  },
  "OK": {
    "agency": "Oklahoma Council on Law Enforcement Education and Training (CLEET) - Private Security Division",
    "agencyUrl": "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html",
    "exam": {
      "vendor": "Oklahoma CareerTech Testing Center (CLEET private security exams)",
      "vendorUrl": "https://oklahoma.gov/cleet/licensing/private-security-training-and-testing.html",
      "parts": [
        {
          "name": "Phase I & II - Unarmed Security Guard exam",
          "questions": "50 scored",
          "time": "75 minutes",
          "pass": "70%"
        },
        {
          "name": "Phase IV - Armed Security Guard firearms exam",
          "questions": "50 scored",
          "time": "75 minutes",
          "pass": "70%"
        }
      ],
      "fee": "$50 per exam (onsite at CareerTech testing locations)",
      "practical": "The armed (Phase IV) track includes firearms training with range qualification; Taser and OC training hours vary by course.",
      "languages": [
        "English"
      ],
      "sourceUrl": "https://oklahoma.gov/content/dam/ok/en/careertech/testing-centers/testing/hcp-coordinator-resources/testing-manual.pdf",
      "sourceNote": "CareerTech Health & Professional Certification Testing Manual, Private Security section: exam numbers 5101 (Phase I & II unarmed) and 5153 (Phase IV armed), three attempts with a 3-day wait between attempts."
    },
    "education": {
      "hours": "40 unarmed (20 + 20); 72 armed (+32)",
      "breakdown": "Unarmed guards complete Phase I (20 hours) and Phase II (20 hours) at a CLEET-approved training program, then pass the Phase I & II state exam. Armed guards add Phase IV firearms training (32 hours), the Phase IV exam, and Taser and OC training. Training credit may also come from approved college coursework.",
      "onlineAllowed": "CLEET-approved programs are offered at Career Tech centers and approved schools statewide; CLEET online licensee testing is available at 44 Career Tech locations.",
      "sourceUrl": "https://oklahoma.gov/cleet/licensing/private-security-training-and-testing.html"
    },
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizens and non-citizens who provide verifiable documentation of legal residence",
      "other": "Candidates must be 18 to be certified for an unarmed license and 21 for an armed license; armed applicants complete an MMPI or CLEET-approved equivalent psychological evaluation."
    },
    "background": {
      "method": "Classifiable fingerprints through an IdentoGO location, submitted within 30 days of the online application; certified court Judgment and Sentence or letter of no record for each arrest or charge; local police and sheriff record checks",
      "fee": "Nonrefundable national criminal history record with fingerprint analysis fee per 59 O.S. 1750.6 (amount set under Title 74 Section 150.9); IdentoGO vendor charges apply",
      "disqualifiers": "Felonies substantially related to security work are disqualifying; armed licenses are unavailable to persons with firearm or violent felonies or federal firearms disabilities (18 U.S.C. 922(g)(4)), consistent with the 2024 amendments to 59 O.S. 1750.6.",
      "sourceUrl": "https://www.oscn.net/applications/ocisweb/DeliverDocument.asp?CiteID=436685"
    },
    "fees": [
      {
        "item": "Unarmed security guard license (3 years)",
        "fee": "$50",
        "sourceUrl": "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html"
      },
      {
        "item": "Armed security guard license (3 years)",
        "fee": "$100",
        "sourceUrl": "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html"
      },
      {
        "item": "Armed guard + armed private investigator combination (3 years)",
        "fee": "$150",
        "sourceUrl": "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html"
      },
      {
        "item": "Renewal (matches license type)",
        "fee": "$50 unarmed / $100 armed / $150 combination",
        "sourceUrl": "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html"
      },
      {
        "item": "State exam (per phase, CareerTech)",
        "fee": "$50",
        "sourceUrl": "https://oklahoma.gov/content/dam/ok/en/careertech/testing-centers/testing/hcp-coordinator-resources/testing-manual.pdf"
      },
      {
        "item": "Late renewal",
        "fee": "$25 (one day or more late)",
        "sourceUrl": "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html"
      }
    ],
    "application": {
      "portal": "CLEET online licensing portal (Thentia); paper applications are no longer accepted",
      "portalUrl": "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html",
      "steps": [
        "Complete Phase I and Phase II training (plus Phase IV, Taser, and OC for armed) at a CLEET-approved program.",
        "Pass the state exam at an Oklahoma CareerTech testing center, bringing the certificate of completion and government-issued photo ID.",
        "Apply online through the CLEET portal, paying 20 percent of the licensing fee at submission and the remainder once approved.",
        "Get fingerprinted at an IdentoGO location within 30 days of submitting the application, and include certified court records for any arrest or charge.",
        "Once approved and fully paid, log in and print the three-year license; unarmed new hires may work up to 45 days for a licensed agency while a complete application is processed."
      ],
      "processingTime": "Not published as a fixed figure; the 45-day grace period for unarmed new hires runs from the date of employment on a complete application",
      "sourceUrl": "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html"
    },
    "renewal": {
      "cycle": "3 years",
      "ce": "8 hours of continuing education from an approved source during the licensing period (private investigators need 16 hours)",
      "fee": "$50 unarmed / $100 armed / $150 combination",
      "late": "A $25 late fee applies once the license is one day or more past expiration; a renewal application can only be used within 30 days of expiration, after which a new license application is required.",
      "sourceUrl": "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$36,270",
      "p25": "$30,980",
      "p75": "$44,670",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=OK"
    },
    "localNuance": "Oklahoma's CLEET phase system is among the most structured in the country: Phase I and II (40 hours) for unarmed, Phase IV (32 hours) plus Taser/OC and an MMPI psychological evaluation for armed, with exams delivered at 44 CareerTech testing sites. Licensed agencies may employ unarmed applicants for up to 45 days while a complete application is processed, but the grace period never covers armed work.",
    "recentChanges": [
      {
        "year": 2024,
        "change": "House Bill 3786 (2023-24 session) amended 59 O.S. 1750.6, aligning armed license disqualifiers with the federal firearms disability in 18 U.S.C. 922(g)(4) and continuing the $50 unarmed / $100 armed fee structure.",
        "sourceUrl": "https://www.oscn.net/applications/ocisweb/DeliverDocument.asp?CiteID=436685"
      }
    ],
    "stateFaqs": [
      {
        "q": "What training does Oklahoma require for security guards?",
        "a": "Unarmed guards complete Phase I (20 hours) and Phase II (20 hours) at a CLEET-approved program and pass the Phase I & II exam. Armed guards add Phase IV firearms training (32 hours), the Phase IV firearms exam, and Taser and OC training, plus an MMPI psychological evaluation."
      },
      {
        "q": "How much does an Oklahoma security guard license cost?",
        "a": "CLEET charges $50 for a three-year unarmed license and $100 for armed, with matching renewal fees and a $25 late fee. The CareerTech state exam costs $50 per phase, and fingerprinting through IdentoGO is a separate vendor charge."
      },
      {
        "q": "How long is an Oklahoma security guard license valid?",
        "a": "Individual security guard licenses are valid for three years from the issue date and renew in three-year terms. Renewal requires the application, proof of 8 hours of continuing education, and either a notice of employment or current bond and insurance."
      },
      {
        "q": "Can I work while my Oklahoma application is pending?",
        "a": "Yes, for unarmed work only. Licensed security guard agencies may employ unarmed guards for up to 45 days while a complete application (with fingerprints and fee) is processed; the grace period ends if the application is denied and never authorizes armed work."
      }
    ],
    "sources": [
      {
        "label": "CLEET - Security Guard licensing page (fees, three-year term, renewals, upgrades)",
        "url": "https://www.ok.gov/cleet/Licensing/Security_Guards/index.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "CLEET - Private Security Training and Testing (phases, hours, CE requirements)",
        "url": "https://oklahoma.gov/cleet/licensing/private-security-training-and-testing.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "Oklahoma CareerTech Testing Manual - Private Security exams (question counts, times, fees)",
        "url": "https://oklahoma.gov/content/dam/ok/en/careertech/testing-centers/testing/hcp-coordinator-resources/testing-manual.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "59 O.S. 1750.6 - Application for Licenses, Term, Renewal (Oklahoma Statutes)",
        "url": "https://www.oscn.net/applications/ocisweb/DeliverDocument.asp?CiteID=436685",
        "checkedOn": "2026-10"
      }
    ]
  },
  "OR": {
    "agency": "Oregon DPSST Private Security Program",
    "agencyUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx",
    "exam": {
      "vendor": "DPSST-approved unarmed instructor (state board)",
      "vendorUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx",
      "parts": [
        {
          "name": "Unarmed basic written examination and assessments",
          "questions": "The department does not publish a question count.",
          "time": "Administered within the 14-hour basic course",
          "pass": "85%"
        }
      ],
      "fee": "Included in course tuition paid to the instructor; no separate state exam fee",
      "practical": null,
      "sourceUrl": "https://content.govdelivery.com/attachments/ORDPSST/2025/04/29/file_attachments/3245499/Instructor%20Bulletin%202025.pdf",
      "sourceNote": "DPSST Instructor Bulletin 2025-1 describes the 85% pass standard and two-tier remediation"
    },
    "education": {
      "hours": "14",
      "breakdown": "DPSST-approved unarmed basic course covering regulatory law, criminal and civil law, patrol procedures, emergency response, and report writing; the 14 hours include the exam and assessments.",
      "onlineAllowed": "Training is delivered by DPSST-certified instructors in classroom or approved instructor-led online formats.",
      "apprenticeship": null,
      "sourceUrl": "https://www.oregon.gov/dpsst/PS/Documents1/v2.0%20Jan%202024.pdf"
    },
    "experience": "No prior experience required for unarmed certification.",
    "eligibility": {
      "minAge": 18,
      "citizenship": null,
      "education": "High school diploma, GED certificate, or a two-year or four-year post-secondary degree from an accredited institution",
      "other": "Must meet DPSST moral fitness standards, determined through a criminal records check and department investigation."
    },
    "background": {
      "method": "Fingerprints submitted to DPSST by ink, LiveScan, or electronic fingerprinting through Fieldprint",
      "fee": "$45 background check fee through September 30, 2026; $48 on or after October 1, 2026, plus vendor fingerprint charges",
      "disqualifiers": "Mandatory denial for anyone required to register as a sex offender or convicted of certain crimes listed in OAR 259-060-0300 to 259-060-0320; discretionary denial for other moral fitness violations.",
      "sourceUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx"
    },
    "fees": [
      {
        "item": "Unarmed professional certification (2 years)",
        "fee": "$104",
        "sourceUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx"
      },
      {
        "item": "Background check fee",
        "fee": "$45 through September 30, 2026; $48 on or after October 1, 2026",
        "sourceUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx"
      },
      {
        "item": "Upgrade to armed",
        "fee": "$50",
        "sourceUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx"
      },
      {
        "item": "Late fee",
        "fee": "$40",
        "sourceUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx"
      },
      {
        "item": "Replacement card",
        "fee": "$27",
        "sourceUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx"
      }
    ],
    "application": {
      "portal": "DPSST paper application packet (Form PS-1)",
      "portalUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx",
      "steps": [
        "Complete the 14-hour DPSST-approved unarmed basic course and pass the written exam and assessments with at least 85%.",
        "Obtain Form PS-6 (Training Affidavit) from your instructor; it must reach DPSST within 180 days of the course completion date.",
        "Submit the application packet to DPSST: Form PS-1, Form PS-6, fingerprints, and the nonrefundable fees (no cash or personal checks).",
        "If already hired, an employing licensed manager may issue Form PS-20 (Temporary Work Permit), which you must carry until the permanent certification card arrives.",
        "Renew every two years with Form PS-21, a 4-hour unarmed refresher course and exam, and the renewal fee; renewal may be started up to 180 days before expiration."
      ],
      "processingTime": "About one month, varying with application completeness and the background check",
      "sourceUrl": "https://www.oregon.gov/dpsst/PS/Documents1/v2.0%20Jan%202024.pdf"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "4-hour unarmed refresher course and exam (the refresher includes a 50-question closed-book exam with an 85% pass standard)",
      "fee": "$104",
      "late": "$40 late fee if the renewal packet arrives after expiration; certifications expired more than four years require retaking the full basic course",
      "sourceUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$45,500",
      "p25": "$39,680",
      "p75": "$48,420",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=OR"
    },
    "localNuance": "Oregon certifies individuals directly, but an unarmed provider must work under (or become) a DPSST-licensed executive or supervisory manager. The manager-issued PS-20 temporary work permit is valid for 120 days. Armed certification adds a 24-hour basic firearms course plus annual marksmanship qualification and armed refresher training.",
    "recentChanges": [
      {
        "year": 2026,
        "change": "DPSST 2-2026 (effective February 1, 2026) amended OAR 259-060-0120 so that failure to comply with the minimum certification standards is grounds to suspend private security professional certifications, including unarmed.",
        "sourceUrl": "https://www.oregon.gov/dpsst/Rules/SOS_Perm_TrackedChnages_OAR259Div60_PS_EmergencySuspension.pdf"
      },
      {
        "year": 2026,
        "change": "The private security background check fee rises from $45 to $48 for applications submitted on or after October 1, 2026.",
        "sourceUrl": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx"
      }
    ],
    "stateFaqs": [
      {
        "q": "How long does Oregon unarmed security certification last?",
        "a": "The DPSST unarmed private security professional certification is valid for two years. Renewal requires Form PS-21, the 4-hour refresher course and exam, and the $104 renewal fee, submitted before expiration to avoid the $40 late fee."
      },
      {
        "q": "What score do I need on the Oregon unarmed security exam?",
        "a": "DPSST sets an 85% pass standard on the unarmed basic written examination. Students scoring between 85% and 99% receive individualized remediation from the instructor on missed questions, while scores below 85% require reinstruction and a complete re-examination."
      },
      {
        "q": "Can I work while my Oregon security application is pending?",
        "a": "Yes, if your employing licensed manager issues Form PS-20 (Temporary Work Permit). You must carry it whenever performing unarmed security duties until the permanent certification card arrives, and a copy must be filed with DPSST."
      },
      {
        "q": "What education do I need to become an unarmed guard in Oregon?",
        "a": "You need a high school diploma, a GED certificate, or a two- or four-year post-secondary degree from an accredited institution recognized by the Oregon Office of Degree Authorization, plus the 14-hour DPSST basic course."
      }
    ],
    "sources": [
      {
        "label": "Oregon DPSST - Private Security Certification and Licensing Fees",
        "url": "https://www.oregon.gov/dpsst/PS/Pages/fees.aspx",
        "checkedOn": "2026-10"
      },
      {
        "label": "Oregon DPSST - Unarmed Private Security Professional Training (v2.0)",
        "url": "https://www.oregon.gov/dpsst/PS/Documents1/v2.0%20Jan%202024.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "DPSST Instructor Bulletin 2025-1 - Training Requirements and Remediation Standards",
        "url": "https://content.govdelivery.com/attachments/ORDPSST/2025/04/29/file_attachments/3245499/Instructor%20Bulletin%202025.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "DPSST Permanent Administrative Order 2-2026 (OAR 259-060 amendments)",
        "url": "https://www.oregon.gov/dpsst/Rules/SOS_Perm_TrackedChnages_OAR259Div60_PS_EmergencySuspension.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Oregon License Directory - Private Security certification requirements",
        "url": "https://apps.oregon.gov/SOS/LicenseDirectory/LicenseDetail/598",
        "checkedOn": "2026-10"
      }
    ]
  },
  "SC": {
    "agency": "SLED Private Security Regulatory Services",
    "agencyUrl": "https://sled.sc.gov/forms/security/seclicnew.pdf",
    "exam": {
      "vendor": "SLED-certified private security company training officer (employer)",
      "vendorUrl": "https://www.law.cornell.edu/regulations/south-carolina/R-73-420",
      "parts": [
        {
          "name": "Basic training written examination",
          "questions": "Questions drawn from the lesson plan performance objectives used by the certified trainer; the state does not publish a question count.",
          "time": "Administered during the 4-hour basic course",
          "pass": "Scored and documented in the employer's files before duties begin"
        }
      ],
      "fee": "No separate state exam fee",
      "practical": "Armed officers must demonstrate safe and competent use of each firearm on a supervised range; unarmed officers have no practical requirement.",
      "sourceUrl": "https://www.law.cornell.edu/regulations/south-carolina/R-73-420"
    },
    "education": {
      "hours": "4 (plus 2)",
      "breakdown": "A SLED-approved basic course of at least 4 hours delivered by a certified company training officer using South Carolina Technical College Private Security Training School material, followed by at least 2 hours of employer-specific orientation covering equipment, post duties, and employer topics.",
      "onlineAllowed": "The basic course is delivered by a certified training officer; SLED does not publish an online option for the standard course.",
      "apprenticeship": "An alternative basic course approved by SLED, developed by an accredited agency or educational institution, qualifies a holder as a Certified Private Security Officer rather than a Registered Private Security Officer.",
      "sourceUrl": "https://www.law.cornell.edu/regulations/south-carolina/R-73-420"
    },
    "experience": "No experience required for officer registration; the employing company's licensee needs two years of supervisory or administrative security experience or sworn law enforcement service.",
    "eligibility": {
      "minAge": 18,
      "citizenship": null,
      "education": null,
      "other": "Registration flows through a SLED-licensed security company, which files the officer's registration and documents required training; a SLED-approved pre-employment drug test is expected."
    },
    "background": {
      "method": "Two complete fingerprint card sets filed with SLED by the employing company",
      "fee": "Covered within the company licensing process; officer registration fees are separate",
      "disqualifiers": "SLED conducts a background investigation under S.C. Code Ann. 40-18-50(C); the agency does not publish a specific disqualifying offense list on its registration forms.",
      "sourceUrl": "https://sled.sc.gov/forms/security/seclicnew.pdf"
    },
    "fees": [
      {
        "item": "Unarmed private security officer registration (1 year)",
        "fee": "$65",
        "sourceUrl": "https://www.law.cornell.edu/regulations/south-carolina/R-73-408"
      },
      {
        "item": "Armed private security officer registration (1 year)",
        "fee": "$110",
        "sourceUrl": "https://www.law.cornell.edu/regulations/south-carolina/R-73-408"
      },
      {
        "item": "Replacement registration card",
        "fee": "$20",
        "sourceUrl": "https://www.law.cornell.edu/regulations/south-carolina/R-73-408"
      },
      {
        "item": "Contract security business license (1 year)",
        "fee": "$350 plus a $10,000 surety bond posted with SLED",
        "sourceUrl": "https://sled.sc.gov/forms/security/seclicnew.pdf"
      }
    ],
    "application": {
      "portal": "SLED Regulatory Services paper filing through the employing licensed company",
      "portalUrl": "https://sled.sc.gov/forms/security/seclicnew.pdf",
      "steps": [
        "Get hired by a SLED-licensed contract security company; officers cannot register independently.",
        "Complete the 4-hour SLED-approved basic training and the company-designed written exam, plus 2 hours of employer orientation, before working at a client site.",
        "The employer submits the officer registration application and fees to SLED with fingerprint cards and training documentation.",
        "Begin carrying the SLED registration card once issued; training records stay with the employer and the officer.",
        "Renew annually - renewal applications must reach SLED between 30 and 60 days before expiration."
      ],
      "processingTime": "The state does not publish a fixed processing time; basic training, the exam, and the registration application must all be complete before duties start at a client site.",
      "sourceUrl": "https://www.law.cornell.edu/regulations/south-carolina/R-73-420"
    },
    "renewal": {
      "cycle": "1 year",
      "ce": "No state continuing education requirement; training documentation must be maintained by the employer and re-established with a new employer",
      "fee": "$65 unarmed ($110 armed), paid with the renewal application",
      "late": "Failure to file a timely renewal renders the registration invalid; applications are accepted 30-60 days before expiration.",
      "sourceUrl": "https://www.law.cornell.edu/regulations/south-carolina/R-73-408"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$35,460",
      "p25": "$30,130",
      "p75": "$38,220",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=SC"
    },
    "localNuance": "South Carolina registers officers only through SLED-licensed security companies - there is no independent guard registration. A registration card alone is not proof of training; on a change of employer the officer must furnish training records or the new employer must repeat the required training. Rifles and shotguns are prohibited at security posts unless SLED approves the site in writing.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://sled.sc.gov/forms/security/seclicnew.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does an unarmed security registration cost in South Carolina?",
        "a": "Unarmed private security officer registration costs $65 per year, and the armed registration is $110 per year, per SLED regulation 73-408. A replacement card is $20, and the employing company pays a separate $350 annual business license plus a $10,000 bond."
      },
      {
        "q": "How long is South Carolina security officer training?",
        "a": "The standard basic course is at least 4 hours taught by a SLED-certified company training officer, ending with a written exam built from the course performance objectives. Officers also complete at least 2 hours of employer-specific orientation before working a client site."
      },
      {
        "q": "Can I apply for a SLED security registration without a job?",
        "a": "No. Registration is tied to a SLED-licensed security company, which files the application and certifies your training. If you change employers, you must provide your training records to the new employer or repeat the required training."
      },
      {
        "q": "When must I renew my South Carolina guard registration?",
        "a": "Registrations last one year. Renewal applications must be received by SLED at least 30 days but no more than 60 days before expiration; missing the window invalidates the registration and the officer must stop working under it."
      }
    ],
    "sources": [
      {
        "label": "SLED - New Contract Security Business License requirements",
        "url": "https://sled.sc.gov/forms/security/seclicnew.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "S.C. Code Regs. 73-420 - Training; Private Security Officers",
        "url": "https://www.law.cornell.edu/regulations/south-carolina/R-73-420",
        "checkedOn": "2026-10"
      },
      {
        "label": "S.C. Code Regs. 73-408 - License and Registration Period; Renewal; Fees",
        "url": "https://www.law.cornell.edu/regulations/south-carolina/R-73-408",
        "checkedOn": "2026-10"
      },
      {
        "label": "SLED - Renewal Contract Security Business License",
        "url": "https://sled.sc.gov/forms/security/seclicrenewal.pdf",
        "checkedOn": "2026-10"
      }
    ]
  },
  "TN": {
    "agency": "Tennessee Department of Commerce and Insurance - Private Protective Services",
    "agencyUrl": "https://www.tn.gov/commerce/regulatory/pps.html",
    "exam": {
      "vendor": "State-certified private protective trainer (state board)",
      "vendorUrl": "https://www.tn.gov/commerce/regulatory/pps.html",
      "parts": [
        {
          "name": "Unarmed general training examination",
          "questions": "The department does not publish a question count.",
          "time": "Administered at the end of the 4-hour course",
          "pass": "Passing score set by the certified trainer under the department's suggested curriculum"
        }
      ],
      "fee": "Included in course tuition paid to the certified trainer",
      "practical": null,
      "sourceUrl": "https://legalclarity.org/how-to-get-your-unarmed-security-license-in-tennessee"
    },
    "education": {
      "hours": "4",
      "breakdown": "Four one-hour blocks: orientation and professional conduct, legal powers and limitations of a security guard, emergency procedures, and general duties.",
      "onlineAllowed": "Yes - state-certified trainers may deliver the unarmed general course online.",
      "apprenticeship": "Recent law enforcement or correctional training completed within a year of applying may qualify for a training exemption under Tenn. Code Ann. 62-35-118(d).",
      "sourceUrl": "https://legalclarity.org/how-to-get-your-unarmed-security-license-in-tennessee"
    },
    "experience": "No prior experience required for unarmed registration.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or legal resident alien",
      "education": null,
      "other": "Good moral character required; a felony, or a misdemeanor involving weapons, assault, theft, or controlled substances, must have had its sentence or probation completed at least five years before applying."
    },
    "background": {
      "method": "Electronic fingerprinting through IdentoGO (ORI TN920120Z) for TBI and FBI checks",
      "fee": "TBI and FBI processing fees paid to IdentoGO at scheduling; the department does not publish a fixed combined amount",
      "disqualifiers": "Denial within five years of completing a sentence for a felony or listed misdemeanors; misrepresentation is grounds for denial, suspension, or revocation; working unregistered can bring civil penalties up to $2,000 per occurrence.",
      "sourceUrl": "https://legalclarity.org/how-to-get-your-unarmed-security-license-in-tennessee"
    },
    "fees": [
      {
        "item": "Unarmed application fee",
        "fee": "$75",
        "sourceUrl": "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf"
      },
      {
        "item": "Unarmed registration fee",
        "fee": "$20 (total $95 initial)",
        "sourceUrl": "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf"
      },
      {
        "item": "Unarmed timely renewal",
        "fee": "$70",
        "sourceUrl": "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf"
      },
      {
        "item": "Adding a classification to the card",
        "fee": "$25",
        "sourceUrl": "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf"
      }
    ],
    "application": {
      "portal": "TDCI CORE",
      "portalUrl": "https://core.tn.gov/",
      "steps": [
        "Complete the 4-hour general training course with a state-certified trainer and obtain the completion certificate.",
        "Schedule electronic fingerprinting at an IdentoGO location, selecting Department of Commerce and Insurance - Unarmed Guards.",
        "Create a TDCI CORE account, submit the unarmed guard application, and upload the training certificate and identification documents.",
        "Pay the $95 combined fee ($75 application + $20 registration) plus fingerprint processing.",
        "Unarmed applicants may work on unarmed assignments while the application is pending once the complete application and fee are submitted, carrying proof of submission for up to 75 business days."
      ],
      "processingTime": "Registration cards commonly arrive in about 2-4 weeks after submission; the department does not publish a fixed processing period.",
      "sourceUrl": "https://www.guardtrainingtn.blog/2026/06/how-to-get-unarmed-security-guard-license-tennessee-2026.html"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "2 hours of refresher training for unarmed guards (armed guards complete 4 hours including firearms range training)",
      "fee": "$70 timely renewal",
      "late": "$20 per month during the 3-month late renewal period; after three months expired, the guard must reapply as a new applicant.",
      "sourceUrl": "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$36,000",
      "p25": "$30,850",
      "p75": "$40,620",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=TN"
    },
    "localNuance": "Guards posted where alcohol is consumed on premises must complete de-escalation, safe restraint, first aid, and CPR training within 15 days of assignment (the Dallas Law requirement). Carrying a baton, stun gun, or chemical spray requires 4 hours of certified training per device, and armed guards assigned to schools need 8 hours of active shooter training first.",
    "recentChanges": [
      {
        "year": 2024,
        "change": "Tennessee's fee rules for security guard registrations set unarmed application and registration at $75 plus $20, armed at $100 plus $30, timely unarmed renewal at $70, and a $20-per-month late renewal penalty within the three-month grace period.",
        "sourceUrl": "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does a Tennessee unarmed guard registration cost?",
        "a": "The initial unarmed registration costs $95 total - a $75 application fee plus a $20 registration fee - paid through the TDCI CORE portal. Fingerprint processing through IdentoGO is billed separately by the TBI and FBI vendor."
      },
      {
        "q": "Can I work as an unarmed guard while my Tennessee application is pending?",
        "a": "Yes. Once the complete application and fee are submitted, unarmed applicants may work unarmed assignments carrying proof of submission for up to 75 business days. Armed applicants must wait for the physical registration card."
      },
      {
        "q": "What is the Dallas Law requirement for Tennessee guards?",
        "a": "Guards assigned to bars, nightclubs, or venues with on-premises alcohol must complete training in de-escalation, safe restraint, first aid, and CPR within 15 days of starting that assignment. Many providers offer this as a separate Dallas Law certification course."
      },
      {
        "q": "What criminal history disqualifies a Tennessee guard registration?",
        "a": "A felony, or a misdemeanor involving weapons, shoplifting, assault, or drugs, is disqualifying until at least five years have passed since the sentence or probation was completed. The clock runs from the end of the sentence, not the conviction date."
      }
    ],
    "sources": [
      {
        "label": "Tennessee Department of Commerce and Insurance - Private Protective Services",
        "url": "https://www.tn.gov/commerce/regulatory/pps.html",
        "checkedOn": "2026-10"
      },
      {
        "label": "Tennessee Rules Filing - Security Guard fee schedule (April 2024)",
        "url": "https://publications.tnsosfiles.com/rules_filings/04-14-24.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Tenn. Code Ann. 62-35-117/118 - Registration requirements and training (summary)",
        "url": "https://legalclarity.org/how-to-get-your-unarmed-security-license-in-tennessee",
        "checkedOn": "2026-10"
      },
      {
        "label": "Unarmed security guard registration guide (TDCI CORE process)",
        "url": "https://www.guardtrainingtn.blog/2026/06/how-to-get-unarmed-security-guard-license-tennessee-2026.html",
        "checkedOn": "2026-10"
      }
    ]
  },
  "TX": {
    "agency": "Texas Department of Public Safety - Private Security Program (TOPS)",
    "agencyUrl": "https://www.dps.texas.gov/section/private-security",
    "exam": {
      "vendor": "DPS-approved training school or the licensee's manager (state board)",
      "vendorUrl": "http://www.dps.texas.gov/rsd/psb/docs/adminrules.pdf",
      "parts": [
        {
          "name": "Level II training course written test",
          "questions": "The department does not publish a question count.",
          "time": "Administered within the Level II course",
          "pass": "Training schools commonly require 75%; DPS does not publish a state minimum score"
        }
      ],
      "fee": "Included in course tuition paid to the training provider",
      "practical": null,
      "sourceUrl": "http://www.dps.texas.gov/rsd/psb/docs/adminrules.pdf"
    },
    "education": {
      "hours": "Level II course (no state minimum hours published)",
      "breakdown": "Board-prepared Level II material covering the security officer role, applicable Occupations Code and Administrative Code rules, communication and conflict resolution, use of force, arrest procedures, documentation, and emergencies; a completion certificate (Form PSP-36) must accompany the application.",
      "onlineAllowed": "Yes - DPS-approved providers offer the Level II course online with a test.",
      "apprenticeship": null,
      "sourceUrl": "http://www.dps.texas.gov/rsd/psb/docs/adminrules.pdf"
    },
    "experience": "No prior experience required for a noncommissioned (unarmed) registration.",
    "eligibility": {
      "minAge": 18,
      "citizenship": null,
      "education": null,
      "other": "Disqualifying under Occupations Code 1702.113 and 37 TAC 35.4: current charges for listed offenses, sex offender registration, dishonorable military discharge, or court-declared incompetence; felony convictions generally bar for 10 years, Class A misdemeanors 5 years, Class B misdemeanors 2 years, with some offenses permanent."
    },
    "background": {
      "method": "Electronic fingerprinting through IdentoGO, scheduled by email after the TOPS application and payment are submitted",
      "fee": "$28.25 FBI fingerprint check, plus state processing charges collected through TOPS",
      "disqualifiers": "See Occupations Code 1702.113 disqualifiers above; a pending charge for a listed offense can summarily suspend an existing registration.",
      "sourceUrl": "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf"
    },
    "fees": [
      {
        "item": "Noncommissioned security officer original or renewal",
        "fee": "$37 ($30 registration + $5 pocket card + $2 subscription)",
        "sourceUrl": "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf"
      },
      {
        "item": "FBI fingerprint check",
        "fee": "$28.25",
        "sourceUrl": "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf"
      },
      {
        "item": "Late renewal (0-90 days expired)",
        "fee": "$52",
        "sourceUrl": "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf"
      },
      {
        "item": "Late renewal (90 days or more expired)",
        "fee": "$67",
        "sourceUrl": "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf"
      },
      {
        "item": "Duplicate pocket card",
        "fee": "$17",
        "sourceUrl": "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf"
      }
    ],
    "application": {
      "portal": "Texas Online Private Security (TOPS)",
      "portalUrl": "https://tops.portal.texas.gov/",
      "steps": [
        "Complete the Level II training course with a DPS-approved school or the licensee's manager and obtain the PSP-36 training certificate.",
        "Create a TOPS profile, select the noncommissioned security officer application, and complete personal information, training documentation, and criminal history disclosures.",
        "Pay the $37 total through TOPS; DPS emails IdentoGO scheduling instructions within about an hour for electronic fingerprints.",
        "Arrange employer affiliation with a DPS-licensed security company - DPS will not issue the pocket card until you are affiliated, though it will process an unaffiliated application.",
        "Once TOPS status shows ACTIVE, you may work unarmed and carry printed confirmation until the physical pocket card arrives."
      ],
      "processingTime": "Paper applications take four to eight weeks; online TOPS applications vary, and the background check is usually the longest step.",
      "sourceUrl": "https://onlinetexasltc.com/how-to-get-texas-level-ii-security-license/"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "None for noncommissioned officers - they are exempt from continuing education under 37 TAC 35.161 (commissioned officers need 6 hours plus firearms proficiency)",
      "fee": "$37 (same as original)",
      "late": "$15 more within 90 days of expiration ($52 total) and $30 more after 90 days ($67 total); after one year expired, a new original application with new fingerprints is required.",
      "sourceUrl": "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$35,980",
      "p25": "$29,290",
      "p75": "$43,630",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=TX"
    },
    "localNuance": "Texas licenses the company, not just the person: a noncommissioned registration must be affiliated with a DPS-licensed security business, and if you stay unaffiliated for two years the registration cannot be renewed. The Level II/III/IV labels are training courses; the actual credentials are the noncommissioned or commissioned (armed) registration and the personal protection officer endorsement.",
    "recentChanges": [
      {
        "year": 2024,
        "change": "DPS refreshed the private security training curriculum; certificates issued under the superseded curriculum are no longer accepted for new applications.",
        "sourceUrl": "https://securitydogma.com/?p=1698"
      }
    ],
    "stateFaqs": [
      {
        "q": "What does a Texas noncommissioned (unarmed) security registration cost?",
        "a": "The DPS fee schedule lists $37 total for an original or renewal - $30 registration plus $5 pocket card plus $2 subscription. The FBI fingerprint check adds $28.25, so budget about $65.25 before training tuition."
      },
      {
        "q": "How many hours is Texas Level II training?",
        "a": "DPS does not publish a minimum hour count for the Level II course. Providers typically run it in about six hours, in person or online, ending with a written test; the completion certificate must be submitted with the TOPS application."
      },
      {
        "q": "Do Texas unarmed guards need continuing education to renew?",
        "a": "No. Noncommissioned security officers are exempt from continuing education under 37 TAC 35.161. Renewal is the $37 fee through TOPS; only commissioned officers and personal protection officers owe 6 hours of CE and firearms proficiency."
      },
      {
        "q": "Can I work while my Texas TOPS application is pending?",
        "a": "For unarmed work, Texas allows certain applicants to work while pending, but the employer tracks the application status, fee payment, electronic fingerprints, and documented pre-employment background checks meet DPS working-before-licensure rules. A pending application never authorizes armed work."
      }
    ],
    "sources": [
      {
        "label": "Texas DPS Private Security Fee Schedule (PDF)",
        "url": "https://www.dps.texas.gov/sites/default/files/documents/rsd/psb/docs/feeschedule.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Texas Private Security Administrative Rules - 37 TAC 35.141 Training Requirements (PDF)",
        "url": "http://www.dps.texas.gov/rsd/psb/docs/adminrules.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Texas DPS TOPS Level II application walkthrough",
        "url": "https://onlinetexasltc.com/how-to-get-texas-level-ii-security-license/",
        "checkedOn": "2026-10"
      },
      {
        "label": "Texas Security Guard License Requirements (Occupations Code 1702 summary)",
        "url": "https://securitydogma.com/?p=1698",
        "checkedOn": "2026-10"
      }
    ]
  },
  "UT": {
    "agency": "Utah Division of Professional Licensing (DOPL)",
    "agencyUrl": "https://dopl.utah.gov/unar",
    "exam": {
      "vendor": "DOPL-approved basic training provider (state board)",
      "vendorUrl": "https://dopl.utah.gov/unar",
      "parts": [
        {
          "name": "Basic training final examination",
          "questions": "The department does not publish a question count.",
          "time": "Administered at the end of the 8-hour basic course",
          "pass": "80%"
        }
      ],
      "fee": "Included in course tuition paid to the approved provider",
      "practical": null,
      "sourceUrl": "https://utrules.elaws.us/uac/r156-63a-603"
    },
    "education": {
      "hours": "8",
      "breakdown": "At least 8 hours of classroom or online instruction covering the nature and role of private security, applicable state laws and rules, legal responsibilities (constitutional law, search and seizure), situational response, security ethics, use of force and de-escalation, report writing, patrol techniques, and workplace sexual harassment, ending with the final exam.",
      "onlineAllowed": "Yes - the rule allows classroom or online instruction.",
      "apprenticeship": null,
      "sourceUrl": "https://utrules.elaws.us/uac/r156-63a-603"
    },
    "experience": "No prior experience required for unarmed licensure.",
    "eligibility": {
      "minAge": 18,
      "citizenship": null,
      "education": null,
      "other": "Applicants may not have been convicted of a felony or of a crime that indicates the public interest is not served by licensure (Utah Code 58-63-302); armed applicants must be 18 or older under rule R156-63a-302e."
    },
    "background": {
      "method": "Fingerprint background check through the Utah Bureau of Criminal Identification and the FBI; Utah residents submit electronically through an authorized vendor, out-of-state residents submit two FD-258 fingerprint cards",
      "fee": "BCI and FBI processing fees collected with the application",
      "disqualifiers": "Felony convictions bar licensure; misrepresentation of history discovered in the background check can sink an application.",
      "sourceUrl": "https://le.utah.gov/xcode/Title58/Chapter63/C58-63_1800010118000101.pdf"
    },
    "fees": [
      {
        "item": "Unarmed private security officer application",
        "fee": "$60",
        "sourceUrl": "https://dopl.utah.gov/unar"
      },
      {
        "item": "Renewal fee",
        "fee": "$42",
        "sourceUrl": "https://commerce.utah.gov/dopl/security-companies-and-guards/renew-a-license/security-officer"
      }
    ],
    "application": {
      "portal": "My License One (UtahID login)",
      "portalUrl": "https://dopl.utah.gov/unar",
      "steps": [
        "Complete a DOPL-approved 8-hour basic training course and pass the final exam with at least 80%.",
        "Apply online through DOPL (My License One via UtahID) or by manual Security Officer application form.",
        "Submit fingerprints - electronic enrollment for Utah residents, two FD-258 cards for out-of-state residents - for BCI and FBI checks.",
        "Provide a working email address; DOPL communicates with security officers exclusively by email.",
        "An interim permit may be issued immediately if the application includes an official BCI report showing no criminal record."
      ],
      "processingTime": "The division does not publish a fixed processing time; interim permits under R156-63a-302g allow qualifying applicants to start sooner.",
      "sourceUrl": "https://dopl.utah.gov/unar"
    },
    "renewal": {
      "cycle": "2 years (expires November 30 of even years)",
      "ce": "32 hours of continuing education per two-year cycle (armed officers add 16 hours of firearms training in 4-hour blocks every six months)",
      "fee": "$42",
      "late": "Continuing to practice after expiration is unlawful under Utah Code 58-1-501/502; DOPL may discipline for any period worked unlicensed.",
      "sourceUrl": "https://commerce.utah.gov/dopl/security-companies-and-guards/renew-a-license/security-officer"
    },
    "reciprocity": {
      "rule": "Licensure by endorsement is available to applicants currently licensed as an unarmed private security officer in another US state, territory, or district; DOPL publishes a list of approved jurisdictions.",
      "agreements": null,
      "sourceUrl": "https://dopl.utah.gov/unar"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$42,700",
      "p25": "$36,410",
      "p75": "$45,640",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=UT"
    },
    "localNuance": "All Utah security officer licenses renew on a single statewide date - November 30 of even-numbered years - regardless of when you first licensed. Renewal requires a criminal history background check performed by the division, and working on an expired license is a criminal offense.",
    "recentChanges": [
      {
        "year": 2023,
        "change": "The Security Personnel Licensing Act (Utah Code 58-63-302) was amended by Chapter 223 of the 2023 General Session, updating the qualifications and application requirements for unarmed private security officers.",
        "sourceUrl": "https://le.utah.gov/xcode/Title58/Chapter63/C58-63_1800010118000101.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much training does Utah require for an unarmed security officer?",
        "a": "A DOPL-approved basic course of at least 8 hours, in classroom or online format, covering legal authority, use of force and de-escalation, report writing, patrol techniques, and ethics, ending with a final exam that requires at least 80% to pass."
      },
      {
        "q": "When do Utah security officer licenses expire?",
        "a": "All security officer licenses renew on November 30 of even-numbered years. The renewal fee is $42 and unarmed officers must complete 32 hours of continuing education per two-year cycle."
      },
      {
        "q": "Does Utah recognize guard cards from other states?",
        "a": "Yes, through licensure by endorsement. DOPL maintains a list of approved jurisdictions and lets current unarmed private security officer licensees from those states qualify without repeating the Utah basic course."
      },
      {
        "q": "What happens if I work unlicensed in Utah?",
        "a": "Working without a valid license is a class A misdemeanor under Utah Code 58-63-503, and DOPL can impose administrative fines - up to $1,000 for a first offense and $2,000 per day for continued violations - even after the license is later renewed."
      }
    ],
    "sources": [
      {
        "label": "Utah DOPL - Apply for an Unarmed Private Security Officer License",
        "url": "https://dopl.utah.gov/unar",
        "checkedOn": "2026-10"
      },
      {
        "label": "Utah DOPL - Renew a Security Officer License",
        "url": "https://commerce.utah.gov/dopl/security-companies-and-guards/renew-a-license/security-officer",
        "checkedOn": "2026-10"
      },
      {
        "label": "Utah Code 58-63 Security Personnel Licensing Act (PDF)",
        "url": "https://le.utah.gov/xcode/Title58/Chapter63/C58-63_1800010118000101.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Utah Admin Code R156-63a-603 - Basic Education and Training Program",
        "url": "https://utrules.elaws.us/uac/r156-63a-603",
        "checkedOn": "2026-10"
      }
    ]
  },
  "VA": {
    "agency": "Virginia Department of Criminal Justice Services (DCJS) - Private Security Services",
    "agencyUrl": "http://www.dcjs.virginia.gov/node/35",
    "exam": {
      "vendor": "DCJS-certified private security training school (state board)",
      "vendorUrl": "http://www.dcjs.virginia.gov/node/35",
      "parts": [
        {
          "name": "01E Security Officer Core Subjects written exam",
          "questions": "The department does not publish a question count.",
          "time": "Administered at the end of the 18-hour entry-level course",
          "pass": "Passing score set by the certified school under DCJS standards"
        }
      ],
      "fee": "Included in course tuition paid to the training school",
      "practical": "The 01E course includes practical exercises such as patrol, access control, and confrontation management.",
      "sourceUrl": "https://www.doublegacademy.com/event/01e-security-officer-armed-unarmed-5-2/"
    },
    "education": {
      "hours": "18",
      "breakdown": "Course 01E (Security Officer Core Subjects) covering law and DCJS regulations, report writing, courtroom behavior, use of force, communication, patrol tactics, confrontation management, emergencies, and access control.",
      "onlineAllowed": "Initial 01E entry-level training is classroom-based; the 4-hour 01I in-service refresher may be completed online.",
      "apprenticeship": "Training exemptions are available under 6VAC20-174-190 for prior private security training or qualified law enforcement experience; an entry-level training exemption application costs $25.",
      "sourceUrl": "http://www.dcjs.virginia.gov/node/35"
    },
    "experience": "No prior experience required; training completion must be within 12 months of filing the registration application.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or legal resident alien of the United States",
      "education": null,
      "other": "Registration is barred for any felony conviction or misdemeanor involving moral turpitude, assault and battery, property damage, controlled substances, prohibited sexual behavior, or firearms; the DCJS Director may waive the bar on written request."
    },
    "background": {
      "method": "Fingerprint appointment through Fieldprint Virginia (fieldprintvirginia.com or 877-614-4364); DCJS is notified automatically",
      "fee": "$50 fingerprint processing application, plus the $25 registration fee",
      "disqualifiers": "Any felony, or listed misdemeanors, in Virginia or any other jurisdiction including military court martial; applicants with convictions or protective orders must file a Criminal History Supplemental Form.",
      "sourceUrl": "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20"
    },
    "fees": [
      {
        "item": "Initial registration",
        "fee": "$25",
        "sourceUrl": "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20"
      },
      {
        "item": "Fingerprint processing application",
        "fee": "$50",
        "sourceUrl": "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20"
      },
      {
        "item": "Registration renewal",
        "fee": "$20",
        "sourceUrl": "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20"
      },
      {
        "item": "Replacement registration card",
        "fee": "$20",
        "sourceUrl": "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20"
      },
      {
        "item": "Entry-level training exemption",
        "fee": "$25",
        "sourceUrl": "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20"
      }
    ],
    "application": {
      "portal": "DCJS Online Regulatory Licensing (Lotus)",
      "portalUrl": "https://www.dcjs.virginia.gov/licensure-and-regulatory-affairs/online-regulatory-licensing",
      "steps": [
        "Complete the 18-hour 01E Security Officer Core Subjects course at a DCJS-certified school; the school reports completion to DCJS.",
        "Schedule and complete fingerprinting through Fieldprint Virginia on or before your first day of work.",
        "Apply online through DCJS Online Regulatory Licensing, including the Criminal History Processing form, and pay the nonrefundable fees.",
        "Unarmed officers may work up to 90 days while completing training if fingerprints were submitted by the hire date, and must be registered by day 120 of employment.",
        "Renew every 24 months with 4 hours of 01I in-service training completed during each registration period."
      ],
      "processingTime": "A temporary authorization is typically issued in about 30 days; DCJS does not publish a fixed total processing time.",
      "sourceUrl": "https://securitydogma.com/licensing/virginia"
    },
    "renewal": {
      "cycle": "24 months",
      "ce": "4 hours of 01I Security Officer Core Subjects in-service training per 24-month registration period",
      "fee": "$20",
      "late": "Within 60 days after expiration, reinstatement requires meeting all renewal requirements plus a reinstatement fee of 50% above the renewal fee; after 60 days, all initial requirements must be met again.",
      "sourceUrl": "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$43,640",
      "p25": "$35,990",
      "p75": "$54,850",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=VA"
    },
    "localNuance": "Virginia defines the unarmed category as an officer who does not carry or have access to a firearm on duty - touching a firearm means you need the armed registration and a firearms endorsement renewed every 12 months. Virginia does not accept other states' guard cards, but offers a $25 entry-level training exemption evaluation for prior training or law enforcement experience.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "http://www.dcjs.virginia.gov/node/35"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does a Virginia unarmed security registration cost?",
        "a": "Under 6VAC20-174-20, the initial registration is $25 and fingerprint processing is $50, so a new unarmed officer pays $75 in state fees. Renewal is $20, a replacement card is $20, and paper filings carry a $5 manual processing fee."
      },
      {
        "q": "How long is Virginia unarmed security officer training?",
        "a": "The 01E Security Officer Core Subjects entry-level course is 18 hours, taught by a DCJS-certified school. Training counts only if the registration application is filed within 12 months of completing the course."
      },
      {
        "q": "Can I work while completing Virginia unarmed training?",
        "a": "Yes - unarmed officers may work up to 90 consecutive days while finishing entry-level training, provided fingerprints were submitted on or before the hire date, and must hold the DCJS registration by their 120th day of employment."
      },
      {
        "q": "What disqualifies a DCJS registration in Virginia?",
        "a": "Any felony conviction, or a misdemeanor involving moral turpitude, assault and battery, property damage, controlled substances, prohibited sexual behavior, or firearms, bars registration in Virginia and every other jurisdiction, including military court martial. The DCJS Director may waive the bar if you request it in writing."
      }
    ],
    "sources": [
      {
        "label": "Virginia DCJS - Unarmed Security Officer/Courier",
        "url": "http://www.dcjs.virginia.gov/node/35",
        "checkedOn": "2026-10"
      },
      {
        "label": "6VAC20-174-20 - Fees (Virginia Administrative Code)",
        "url": "https://regulations.justia.com/states/virginia/title-6/agency-20/chapter-174/part-ii/section-6vac20-174-20",
        "checkedOn": "2026-10"
      },
      {
        "label": "Virginia Security Guard License Requirements (Code 9.1-139 and 6VAC20-174 summary)",
        "url": "https://securitydogma.com/licensing/virginia",
        "checkedOn": "2026-10"
      },
      {
        "label": "DCJS training presentation - Entry-level and in-service hour requirements",
        "url": "https://www.dcjs.virginia.gov/sites/dcjs.virginia.gov/files/training-events/5318/2020-15_crime_prevention_law_and_liability.pdf",
        "checkedOn": "2026-10"
      }
    ]
  },
  "WA": {
    "agency": "Washington State Department of Licensing (DOL) - Private Security Guard Program",
    "agencyUrl": "https://dol.wa.gov/professional-licenses/security-guard-unarmed",
    "exam": {
      "vendor": "DOL-certified trainer (state board)",
      "vendorUrl": "https://dol.wa.gov/professional-licenses/security-guard-unarmed",
      "parts": [
        {
          "name": "Pre-assignment training test",
          "questions": "The department does not publish a question count.",
          "time": "Administered at the end of the 8-hour pre-assignment training",
          "pass": "Passing score set by the certified trainer; a test is required"
        }
      ],
      "fee": "Included in training arranged by the employer or certified trainer",
      "practical": null,
      "sourceUrl": "https://www.diligencesecuritywa.com/post/how-to-become-a-security-officer-in-washington-state"
    },
    "education": {
      "hours": "8 pre-assignment + 8 post-assignment + 4 annual",
      "breakdown": "8 hours of pre-assignment training (at least 4 in formal classroom) with a test, delivered by a DOL-certified trainer; then 8 hours of initial post-assignment training within the statutory deadline; then at least 4 hours of annual refresher training, of which no more than 1 hour may cover customer service and at least 3 hours must cover emergency response including post orders and life safety.",
      "onlineAllowed": "The rule allows the second 4 hours of pre-assignment and post-assignment training as individual instruction; at least 4 pre-assignment hours must be formal classroom.",
      "apprenticeship": "Pre-assignment training is waived for former full-time sworn peace officers (within five years) who pass the standard examination.",
      "sourceUrl": "https://law.justia.com/codes/washington/2023/title-18/chapter-18-170/section-18-170-105"
    },
    "experience": "No prior experience required, but the applicant must be employed by or hold a job offer from a licensed private security guard company.",
    "eligibility": {
      "minAge": 18,
      "citizenship": "US citizen or resident alien",
      "education": null,
      "other": "The DOL director may withhold a license for any conviction the director finds directly related to the capacity to perform security guard duties, notwithstanding the restoration of employment rights act (RCW 18.170.030)."
    },
    "background": {
      "method": "Fingerprint-based background check through IdentoGO; unarmed applicants need the Washington State Patrol check only, armed applicants need WSP plus FBI",
      "fee": "$33.05 unarmed ($12.05 fingerprints + $21 background check); $45.05 armed",
      "disqualifiers": "Convictions the director determines directly relate to guard duties and justify withholding the license; gross misdemeanor or felony convictions within the last five years must be disclosed with an explanation.",
      "sourceUrl": "http://www.dol.wa.gov/sites/default/files/forms/690008.pdf"
    },
    "fees": [
      {
        "item": "Unarmed private security guard license",
        "fee": "$101 initial",
        "sourceUrl": "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards"
      },
      {
        "item": "License renewal",
        "fee": "$95 (late renewal $110)",
        "sourceUrl": "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards"
      },
      {
        "item": "Armed endorsement",
        "fee": "$10 additional",
        "sourceUrl": "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards"
      },
      {
        "item": "Print-and-mail license",
        "fee": "$5 per copy (self-print online is free)",
        "sourceUrl": "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards"
      }
    ],
    "application": {
      "portal": "DOL Professions Online (SecureAccess Washington)",
      "portalUrl": "https://professions.dol.wa.gov",
      "steps": [
        "Get hired by, or hold an offer from, a licensed private security guard company - the company must certify your hiring and training on the application (Form PSG-690-008).",
        "Complete 8 hours of pre-assignment training with a DOL-certified trainer and pass the test; the company attests to completion.",
        "Apply online through professions.dol.wa.gov (or by mail) and pay the $101 unarmed license fee.",
        "Complete fingerprinting through IdentoGO after the application is submitted; out-of-state applicants use a law enforcement agency.",
        "Complete 8 hours of initial post-assignment training by the statutory deadline (June 30 or December 31 of the following year, depending on licensing date), then 4 hours of refresher training each year."
      ],
      "processingTime": "Processing can take up to 60 days, driven largely by the fingerprint background check; DOL issues a temporary registration valid up to 60 days while the application is reviewed.",
      "sourceUrl": "https://www.diligencesecuritywa.com/post/how-to-become-a-security-officer-in-washington-state"
    },
    "renewal": {
      "cycle": "2 years",
      "ce": "4 hours of refresher training each year (max 1 hour customer service; at least 3 hours emergency response, post orders, and life safety)",
      "fee": "$95",
      "late": "$110 late renewal",
      "sourceUrl": "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$47,100",
      "p25": "$42,030",
      "p75": "$56,990",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=WA"
    },
    "localNuance": "Washington is employer-driven: you cannot self-license and then look for work, because the application requires company certification of hiring. In-house guards employed directly by a single non-security employer are exempt under RCW 18.170.020, as are uniform-free crowd management and guest services staff at organized events.",
    "recentChanges": [
      {
        "year": 2023,
        "change": "The Washington State Criminal Justice Training Commission clarified that DOL temporary registration cards - valid up to 60 days - no longer qualify a guard to participate in armed firearms certificate qualifications; a valid unarmed license is required first.",
        "sourceUrl": "https://www.cjtc.wa.gov/sites/default/files/2024-06/communication---update---unarmed-license-requirement-%28pspi%29.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "How much does a Washington unarmed security guard license cost?",
        "a": "The initial unarmed license is $101, renewal is $95 ($110 if late), and the armed endorsement adds $10. Fingerprints and background checks are separate: $33.05 for unarmed (WSP only) or $45.05 for armed (WSP plus FBI)."
      },
      {
        "q": "Can I get a Washington guard card without a job offer?",
        "a": "No. RCW 18.170.030 requires you to be employed by, or hold an employment offer from, a licensed private security company, and the company must sign the certification of hiring and training on your application."
      },
      {
        "q": "What training does Washington require each year for security guards?",
        "a": "After the 8-hour pre-assignment and 8-hour post-assignment courses, every guard needs at least 4 hours of refresher training annually. No more than 1 hour may be customer service content; the remaining 3 hours must cover emergency response, post orders, and life safety."
      },
      {
        "q": "How long does DOL take to issue a security guard license?",
        "a": "Expect up to 60 days, with the fingerprint background check usually the slowest step. DOL issues a temporary registration - valid up to 60 days and not valid for armed work - while the application is pending."
      }
    ],
    "sources": [
      {
        "label": "Washington DOL - Fees: Security Guards",
        "url": "https://dol.wa.gov/professional-licenses/security-guard-unarmed/fees-security-guards",
        "checkedOn": "2026-10"
      },
      {
        "label": "DOL Form PSG-690-008 - Apply for private security guard license (PDF)",
        "url": "http://www.dol.wa.gov/sites/default/files/forms/690008.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "RCW 18.170.030 - Security guard license requirements",
        "url": "https://law.justia.com/codes/washington/2023/title-18/chapter-18-170/section-18-170-030",
        "checkedOn": "2026-10"
      },
      {
        "label": "RCW 18.170.105 - Training requirements",
        "url": "https://law.justia.com/codes/washington/2023/title-18/chapter-18-170/section-18-170-105",
        "checkedOn": "2026-10"
      },
      {
        "label": "WSCJTC memo - Unarmed license requirement for firearms qualification (Nov 2023)",
        "url": "https://www.cjtc.wa.gov/sites/default/files/2024-06/communication---update---unarmed-license-requirement-%28pspi%29.pdf",
        "checkedOn": "2026-10"
      }
    ]
  },
  "WV": {
    "agency": "West Virginia Secretary of State - Private Investigator and Security Guard Licensing",
    "agencyUrl": "https://sos.wv.gov/licensing",
    "education": {
      "hours": "1 year (experience or training)",
      "breakdown": "No pre-assignment course is mandated by the state. Qualification is based on at least one year of verified full-time employment in the security guard business (or private investigation) for a licensed firm, or one year of substantially equivalent training or experience.",
      "onlineAllowed": "Not applicable - qualification is by experience or equivalent training rather than a state course.",
      "apprenticeship": null,
      "sourceUrl": "https://sos.wv.gov/media/344/download"
    },
    "experience": "At least one year of verified full-time employment conducting security guard business or private investigation business for a licensed firm, or one year of substantially equivalent training or experience, documented by a notarized employer statement or transcripts.",
    "eligibility": {
      "minAge": null,
      "citizenship": "The application requires citizenship disclosure; non-resident applicants file a separate non-resident application with higher fees",
      "education": null,
      "other": "Applicants must show good character, competency, and integrity, including character references from five reputable citizens who have known the applicant at least five years and are unrelated by blood or marriage."
    },
    "background": {
      "method": "Criminal history background check through the West Virginia State Police, authorized in the application; a full-face passport-style photo taken within one year accompanies the filing",
      "fee": "$50 nonrefundable criminal history background check fee payable to the Secretary of State",
      "disqualifiers": "The application requires disclosure of all arrests and convictions; the Secretary of State evaluates good character and integrity under W. Va. Code 30-18-6.",
      "sourceUrl": "https://code.wvlegislature.gov/30-18-6/"
    },
    "fees": [
      {
        "item": "Application processing (background check)",
        "fee": "$50 nonrefundable",
        "sourceUrl": "https://code.wvlegislature.gov/30-18-6/"
      },
      {
        "item": "Security guard license (resident individual)",
        "fee": "$100",
        "sourceUrl": "https://sos.wv.gov/media/344/download"
      },
      {
        "item": "Combined PI/SG individual license (resident)",
        "fee": "$200",
        "sourceUrl": "https://sos.wv.gov/media/344/download"
      },
      {
        "item": "Surety bond or liability insurance",
        "fee": "$5,000 surety bond conditioned on faithful and honest conduct (or sufficient liability insurance)",
        "sourceUrl": "https://code.wvlegislature.gov/30-18-6/"
      }
    ],
    "application": {
      "portal": "WV Secretary of State paper application (Form PISG_APP)",
      "portalUrl": "https://sos.wv.gov/media/344/download",
      "steps": [
        "Document one year of qualifying security guard employment or equivalent training, with a sworn notarized employer statement or coursework transcripts.",
        "Gather five character reference forms from citizens who have known you at least five years, written specifically for the application.",
        "File the initial application (Form PISG_APP) with the $50 background check fee and $100 resident individual license fee, one recent full-face photo, and the completed $5,000 surety bond form or proof of liability insurance.",
        "After approval, register with the WV State Tax Department for any required business license.",
        "The initial license is valid for two years from approval; renewals are filed with the Secretary of State thereafter."
      ],
      "processingTime": "The state does not publish a fixed processing time; review includes the State Police criminal background report.",
      "sourceUrl": "https://sos.wv.gov/media/344/download"
    },
    "renewal": {
      "cycle": "2 years (initial license valid two years from approval; renewed by filing the renewal application)",
      "ce": "The state does not publish a continuing education requirement for security guard licensees.",
      "fee": null,
      "late": "An additional late application fee applies when a renewal application is filed after the license expiration date (W. Va. Code 30-18-14).",
      "sourceUrl": "https://sos.wv.gov/media/344/download"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$28,800",
      "p25": "$20,800",
      "p75": "$35,990",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=WV"
    },
    "localNuance": "West Virginia licenses individual security guards through the Secretary of State rather than a police or commerce agency, and the filing burden is unusually personal: five five-year character references, a passport photo, and a $5,000 surety bond or liability insurance. Approved licensees must also register with the WV State Tax Department.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://sos.wv.gov/licensing"
      }
    ],
    "stateFaqs": [
      {
        "q": "What experience do I need for a West Virginia security guard license?",
        "a": "One year of verified full-time employment in the security guard or private investigation business for a licensed firm, or one year of substantially equivalent training or experience. Employers must attest in a sworn notarized statement; coursework can substitute in part via transcripts."
      },
      {
        "q": "How much does a WV security guard license cost?",
        "a": "Applicants pay a $50 nonrefundable background processing fee plus a $100 license fee for a resident individual ($200 for a combined PI/security guard individual license). A $5,000 surety bond or proof of liability insurance is also required."
      },
      {
        "q": "Does West Virginia require an exam or training course for security guards?",
        "a": "No state examination or pre-assignment course is required under W. Va. Code 30-18-6. Qualification rests on the one-year experience or training requirement, background review through the State Police, and character references."
      },
      {
        "q": "How long is a West Virginia security guard license valid?",
        "a": "The initial license is valid for two years from the date of approval by the Secretary of State. Renewal applications are filed with the Secretary of State, and a late application fee applies if the renewal is filed after expiration."
      }
    ],
    "sources": [
      {
        "label": "WV Secretary of State - Private Investigator and/or Security Guard License Initial Application (PISG_APP)",
        "url": "https://sos.wv.gov/media/344/download",
        "checkedOn": "2026-10"
      },
      {
        "label": "W. Va. Code 30-18-6 - Application requirements for a security guard license",
        "url": "https://code.wvlegislature.gov/30-18-6/",
        "checkedOn": "2026-10"
      },
      {
        "label": "WV Secretary of State - Licensing (PI and Security Guard overview)",
        "url": "https://sos.wv.gov/licensing",
        "checkedOn": "2026-10"
      },
      {
        "label": "WV Secretary of State - Homepage contact and program listing",
        "url": "https://sos.wv.gov/",
        "checkedOn": "2026-10"
      }
    ]
  },
  "WI": {
    "agency": "Wisconsin Department of Safety and Professional Services (DSPS)",
    "agencyUrl": "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf",
    "education": {
      "hours": null,
      "breakdown": "Wisconsin does not mandate pre-assignment training hours for an unarmed private security person permit. The credential is based on the application, employer sponsorship, and state and federal criminal record searches; training is set by the sponsoring licensed agency.",
      "onlineAllowed": "Not applicable - no state training course is required.",
      "apprenticeship": null,
      "sourceUrl": "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf"
    },
    "experience": "No experience requirement for a private security person permit; qualification is by application, sponsorship, and background check.",
    "eligibility": {
      "minAge": 18,
      "citizenship": null,
      "education": null,
      "other": "Applicants convicted of a felony anywhere, unless pardoned, are ineligible with no exceptions; DSPS may also refuse a permit for misdemeanor convictions or rule violations, and may deny for drug or alcohol impairment or conditions affecting fitness (SPS 31.02)."
    },
    "background": {
      "method": "Electronic fingerprints through Fieldprint (code FPWISECURITY), arranged after DSPS receives the application and the signed FBI Authorization for Release (Form 2687); a recent photograph is submitted with Form 2687",
      "fee": "$8 background check fee (included in the $45 temporary-plus-regular option)",
      "disqualifiers": "Any felony conviction without a pardon is an absolute bar; misdemeanor records are evaluated case by case and can support a Notice of Denial.",
      "sourceUrl": "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf"
    },
    "fees": [
      {
        "item": "Regular private security permit",
        "fee": "$27",
        "sourceUrl": "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf"
      },
      {
        "item": "Temporary permit (optional, added to regular permit)",
        "fee": "$10 (total $45 with temporary permit, regular permit, and $8 background check)",
        "sourceUrl": "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf"
      },
      {
        "item": "Late renewal after five or more years expired",
        "fee": "$52 ($27 credential fee + $25 late renewal fee)",
        "sourceUrl": "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf"
      }
    ],
    "application": {
      "portal": "DSPS LicensE",
      "portalUrl": "https://license.wi.gov/",
      "steps": [
        "Line up employment with a licensed private detective/security agency - the agency must complete Form 3038 certifying it will employ you and take responsibility for your conduct.",
        "Apply and pay online through LicensE; optionally request a temporary permit, which issues for 30 days if the state DOJ check shows no criminal history and does not allow carrying a firearm.",
        "Submit electronic fingerprints through Fieldprint and the signed FBI Authorization for Release of FBI Information (Form 2687) with a recent photograph.",
        "Complete Form 2254 (Convictions and Pending Charges) disclosures; DSPS runs state and federal criminal record searches.",
        "Once the background search is satisfactory, DSPS issues the regular permit; filing an application alone is not authorization to work."
      ],
      "processingTime": "The temporary permit can be issued immediately upon a clean DOJ check and expires after 30 days; the regular permit issues once the state and federal record search completes. DSPS does not publish a fixed total processing time.",
      "sourceUrl": "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf"
    },
    "renewal": {
      "cycle": "Up to 2 years (no license is issued for a longer period than 2 years under Wis. Stat. 440.26(3))",
      "ce": "The state does not publish a continuing education requirement for private security permit holders.",
      "fee": null,
      "late": "A credential expired more than five years requires a new application (Late Renewal After Five Years) with the $52 fee; the department may not renew without evidence that the required bond or liability policy remains in force.",
      "sourceUrl": "https://docs.legis.wisconsin.gov/statutes/statutes/440/ii/26/8"
    },
    "wages": {
      "soc": "33-9032",
      "socName": "Security Guards",
      "median": "$37,440",
      "p25": "$35,030",
      "p75": "$46,210",
      "national": "$38,020",
      "year": "May 2025",
      "sourceUrl": "https://www.onetonline.org/link/localwages/33-9032.00?st=WI"
    },
    "localNuance": "Wisconsin's model is employer-tied: a private security permit authorizes work only for the licensed private detective agency that sponsors it, and a new agency must notify DSPS within five days of a change of employment. Guards directly employed (W-2) by a business or industrial company for their own premises are exempt from the permit under Wis. Stat. 440.26.",
    "recentChanges": [
      {
        "year": null,
        "change": "No regulatory changes recorded as of October 2026.",
        "sourceUrl": "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf"
      }
    ],
    "stateFaqs": [
      {
        "q": "Do Wisconsin security guards need an individual license?",
        "a": "Yes. Anyone acting as a private security person - private police, guard, or watch person - for a private security agency needs a DSPS private security permit under Wis. Stat. 440.26. Only guards directly employed by a business for its own premises are exempt."
      },
      {
        "q": "How much does a Wisconsin private security permit cost?",
        "a": "The regular permit is $27. Adding the optional 30-day temporary permit brings the total to $45 ($10 temporary + $27 regular + $8 background check). A late renewal after five or more years expired costs $52."
      },
      {
        "q": "Can I work while my Wisconsin permit application is pending?",
        "a": "Only with a temporary permit. DSPS issues one for 30 days if the state DOJ check shows no criminal history, and it does not allow carrying a firearm. Filing the application alone is not authorization to practice."
      },
      {
        "q": "What criminal history bars a Wisconsin security permit?",
        "a": "A felony conviction in Wisconsin or any other state is an absolute bar unless you have been pardoned - DSPS states there are no exceptions. Misdemeanor convictions and pending charges are evaluated and can also result in a Notice of Denial."
      }
    ],
    "sources": [
      {
        "label": "Wisconsin DSPS - Private Security Permit Application Information (Form 2271)",
        "url": "https://dsps.wi.gov/Credentialing/Business/fm2271.pdf",
        "checkedOn": "2026-10"
      },
      {
        "label": "Wis. Stat. 440.26 - Private detectives, investigators and security personnel",
        "url": "https://docs.legis.wisconsin.gov/statutes/statutes/440/ii/26/8",
        "checkedOn": "2026-10"
      },
      {
        "label": "Wisconsin Security Guard License Requirements and Fees (SPS 31 summary)",
        "url": "https://legalclarity.org/wisconsin-security-guard-license-requirements-and-fees",
        "checkedOn": "2026-10"
      },
      {
        "label": "Wisconsin DSPS LicensE portal",
        "url": "https://license.wi.gov/",
        "checkedOn": "2026-10"
      }
    ]
  }
}
};
