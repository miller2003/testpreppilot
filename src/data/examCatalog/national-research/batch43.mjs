export const programs = [
  {
    "id": "comptia",
    "body": "CompTIA",
    "bodyUrl": "https://www.comptia.org",
    "about": "CompTIA (the Computing Technology Industry Association) is a leading vendor-neutral IT certification body. Its Linux+ certification is delivered worldwide through Pearson VUE, either at a physical test center or via online proctoring (OnVUE). Linux+ is ANSI-accredited to ISO/IEC 17024 and approved for U.S. Department of Defense DoD 8140 (formerly 8570) IAT Level II roles. CompTIA also sells official self-paced training (CertMaster Learn, CertMaster Practice, CertMaster Labs) and exam voucher bundles, and manages renewal through its CertCentral portal.",
    "registrationSteps": [
      {
        "title": "Create your accounts",
        "description": "Set up a free CompTIA account and a Pearson VUE account. Your CompTIA account is where the certification and CEUs are tracked; Pearson VUE handles scheduling and delivery.",
        "duration": "10 minutes",
        "note": "Use a consistent email so your exam result links to your CompTIA record."
      },
      {
        "title": "Purchase an exam voucher",
        "description": "Buy the XK0-006 voucher from the CompTIA store (standard $390 USD). Optionally choose an exam+retake bundle or add CertMaster training.",
        "subSteps": [
          "Select Linux+ (XK0-006) in the CompTIA store",
          "Choose voucher only, exam+retake bundle, or bundle with training",
          "Save the voucher code from your CompTIA account"
        ],
        "duration": "1 day"
      },
      {
        "title": "Schedule your exam",
        "description": "Go to Pearson VUE, enter your voucher code, and book a date. Choose a nearby test center or online proctoring (OnVUE).",
        "subSteps": [
          "Pick test center or OnVUE online",
          "Run the OnVUE system check if testing at home",
          "Confirm date, time, and time zone"
        ],
        "duration": "15 minutes"
      },
      {
        "title": "Prepare your ID and environment",
        "description": "Bring a government-issued photo ID to a center. For online testing, prepare a quiet private room, clear your desk, and have your webcam ready for the check-in scan.",
        "note": "Accepted ID rules follow Pearson VUE policy (typically passport or driver's license matching your account name).",
        "duration": "Test-day prep"
      },
      {
        "title": "Take the exam",
        "description": "Complete up to 90 questions in 90 minutes, including multiple-choice and performance-based items. You see a pass/fail result on screen immediately after finishing.",
        "duration": "90 minutes"
      },
      {
        "title": "Claim and maintain your certification",
        "description": "Your certification appears in CompTIA CertCentral. Log in to download the e-certificate and start tracking the 50 CEUs needed to renew within 3 years.",
        "duration": "A few days"
      }
    ],
    "proctoring": "Delivered by Pearson VUE with two options: an in-person proctored test center, or online proctoring via OnVUE with a live remote proctor (requires webcam, stable internet, and a private room).",
    "retakePolicy": "If you do not pass, you may retake XK0-006 after a 14-day waiting period. Each attempt requires a new exam voucher; there is no limit on the number of retakes. CompTIA's standard candidate agreement governs retake rules.",
    "recertification": "Linux+ is valid for 3 years from the certification date. Renew by earning 50 Continuing Education (CE) credits and paying the CE fee through CompTIA CertCentral, by earning a higher-level CompTIA certification, or by passing the current XK0-006 exam again.",
    "scoreReporting": "A pass/fail result is shown on screen immediately after the exam. A detailed score report by domain is available in your Pearson VUE account and mirrored in your CompTIA CertCentral record.",
    "refundPolicy": "Exam vouchers are generally non-refundable but may be transferable or have a defined expiry; optional CertMaster training may be refundable within a limited window per CompTIA's terms. Review voucher terms at purchase.",
    "providersNote": "Linux+ is offered exclusively through Pearson VUE worldwide (test centers and online OnVUE). CompTIA does not deliver the exam through other testing providers.",
    "comparison": {
      "title": "Linux certifications compared",
      "columns": [
        "Credential",
        "Vendor",
        "Level",
        "Exam",
        "Validity"
      ],
      "rows": [
        {
          "label": "CompTIA Linux+",
          "values": [
            "CompTIA",
            "Vendor-neutral",
            "Intermediate",
            "1 exam (XK0-006)",
            "3 years"
          ]
        },
        {
          "label": "LPIC-1",
          "values": [
            "Linux Professional Institute",
            "Vendor-neutral",
            "Entry",
            "2 exams (101 + 102)",
            "5 years"
          ]
        },
        {
          "label": "Red Hat RHCSA",
          "values": [
            "Red Hat",
            "Vendor-specific",
            "Entry",
            "1 exam (performance lab)",
            "3 years"
          ]
        }
      ]
    },
    "orgFaqs": [
      {
        "q": "Who issues the Linux+ certification?",
        "a": "CompTIA (the Computing Technology Industry Association), a vendor-neutral certifying body. The exam is delivered through Pearson VUE and the credential is ANSI-accredited to ISO/IEC 17024."
      },
      {
        "q": "How do I renew a CompTIA certification?",
        "a": "Through CompTIA CertCentral: accumulate the required Continuing Education (CE) credits (50 for Linux+) and pay the CE fee, earn a higher CompTIA cert, or retake the current exam. Most CompTIA certs follow the 3-year renewal cycle."
      },
      {
        "q": "Are CompTIA exam vouchers refundable?",
        "a": "Vouchers are typically non-refundable but may be transferable and carry an expiry date. Optional training products may have a limited refund window. Always review the terms shown at purchase in the CompTIA store."
      }
    ],
    "sourceUrl": "https://www.comptia.org/certifications/linux",
    "confidence": "high",
    "verified": true
  },
  {
    "id": "cisco",
    "body": "Cisco",
    "bodyUrl": "https://www.cisco.com",
    "about": "Cisco certifications are vendor-specific IT and cybersecurity credentials issued by Cisco Systems and delivered through Pearson VUE. They span four tiers - Entry (CCST), Associate (CCNA / CyberOps), Professional (CCNP), and Expert (CCIE) - and validate hands-on networking and security skills. Passing candidates receive a verifiable digital badge (via Credly) and a certificate; all Cisco certifications are valid for three years. Exams are proctored computer-based tests delivered at Pearson VUE test centers or online via OnVUE (CCST is delivered through Certiport/Pearson VUE).",
    "registrationSteps": [
      {
        "title": "Create a Cisco & testing account",
        "description": "Set up a free Cisco profile and a Pearson VUE (or Certiport for CCST) candidate profile to schedule and track exams.",
        "subSteps": [
          "Register at the Cisco Certification Tracking System",
          "Create a Pearson VUE / Certiport candidate profile",
          "Confirm your ID documents meet testing requirements"
        ],
        "duration": "~15 minutes"
      },
      {
        "title": "Choose your certification & exam",
        "description": "Select the target credential and note the exact exam code (e.g., 100-160, 200-201, 350-701 + a concentration).",
        "subSteps": [
          "Review the official exam blueprint and topic weights",
          "Decide self-study, Cisco U., or instructor-led training"
        ],
        "duration": "1-2 hours planning"
      },
      {
        "title": "Prepare with official training",
        "description": "Use Cisco Networking Academy, Cisco U. courses, official labs, and practice tests aligned to the blueprint.",
        "subSteps": [
          "Complete the aligned Cisco U. / NetAcad course",
          "Hands-on labs and practice exams"
        ],
        "duration": "Varies (weeks-months)"
      },
      {
        "title": "Schedule the exam via Pearson VUE",
        "description": "Book a test-center slot or online OnVUE appointment; pay the exam fee (or redeem Cisco Learning Credits).",
        "subSteps": [
          "Pick date, time, and location/time zone",
          "Pay fee (CCST $125; Associate $300; SCOR $400; concentration $300)"
        ],
        "duration": "~10 minutes"
      },
      {
        "title": "Take the proctored exam",
        "description": "Arrive with valid government ID; complete the exam at a Pearson VUE center or via online proctoring.",
        "subSteps": [
          "Check in and pass security/room scan (online)",
          "Complete the timed exam"
        ],
        "duration": "50-120 minutes"
      },
      {
        "title": "Get results & digital badge",
        "description": "Receive a pass/fail result (usually within 48 hours) and, on passing, a Credly digital badge plus certificate; track status in the Certification Tracking System.",
        "subSteps": [
          "View section-level score report",
          "Accept Credly badge and share it"
        ],
        "duration": "Within 48 hours"
      }
    ],
    "proctoring": "Delivered by Pearson VUE: at authorized test centers or online via OnVUE remote proctoring (CCST uses the Certiport/Pearson VUE platform). A government-issued photo ID is required; online tests include a room/environment scan.",
    "retakePolicy": "If you fail, Cisco requires a waiting period of 5 calendar days before you may retake the same exam. Each attempt requires full payment of the exam fee. Cisco does not cap total attempts, but some exams limit attempts within a 12-month window.",
    "recertification": "All Cisco certifications are valid for 3 years from the date earned. Recertify before expiry by (a) passing a higher-or-equal level qualifying exam, (b) earning Continuing Education (CE) credits through eligible training/activities, or (c) a combination of exam + CE. For associate-level certs 30 CE credits are required; for professional-level 40 CE credits. Certificates can also be extended via the Cisco Continuing Education program.",
    "scoreReporting": "Results are reported as pass/fail and made available online (Cisco Certification Tracking System) typically within 48 hours. A section-level performance breakdown is provided to help target further study; scaled scores use a 300-1000 range (CCNA/CCNP-style exams).",
    "refundPolicy": "Exam fees are generally non-refundable once scheduled, but Pearson VUE allows rescheduling or cancellation up to 24-48 hours before the appointment without penalty; no-shows forfeit the fee. CCST/Certiport policies may differ by region.",
    "providersNote": "Cisco exams are delivered exclusively through Pearson VUE (and Certiport for CCST). Training is available from Cisco U., Cisco Networking Academy, and authorized Cisco Learning Partners; third-party books and labs are widely used but unofficial.",
    "comparison": {
      "title": "Cisco cybersecurity certifications compared",
      "columns": [
        "Credential",
        "Level",
        "Focus",
        "Exam",
        "Validity"
      ],
      "rows": [
        {
          "label": "CCST Cybersecurity",
          "values": [
            "Foundational / Entry",
            "Entry-level security concepts & support",
            "100-160 (1 exam, ~$125)",
            "3 years"
          ]
        },
        {
          "label": "CCNA Cybersecurity",
          "values": [
            "Associate",
            "SOC analyst: monitoring, intrusion & incident analysis",
            "200-201 CBROPS (1 exam, $300)",
            "3 years"
          ]
        },
        {
          "label": "CCNP Cybersecurity",
          "values": [
            "Professional",
            "Professional security core + concentration",
            "SCOR 350-701 ($400) + 1 concentration ($300)",
            "3 years"
          ]
        }
      ]
    },
    "orgFaqs": [
      {
        "q": "How long is a Cisco certification valid, and how do I renew it?",
        "a": "Every Cisco certification is valid for 3 years. You can recertify by passing a qualifying exam at or above the current level, by earning Continuing Education credits, or by combining both before the expiry date."
      },
      {
        "q": "Where do I take Cisco exams and what ID do I need?",
        "a": "Cisco exams are delivered by Pearson VUE at test centers or online via OnVUE (CCST via Certiport/Pearson VUE). You must present a valid government-issued photo ID; online exams also require a room/environment scan."
      },
      {
        "q": "What happens if I fail a Cisco exam?",
        "a": "You must wait 5 calendar days before retaking the same exam, and each retake requires paying the full exam fee again. Your score report shows section-level feedback to guide further study."
      }
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/index.html",
    "confidence": "high",
    "verified": true
  },
  {
    "id": "microsoft",
    "body": "Microsoft",
    "bodyUrl": "https://learn.microsoft.com/credentials",
    "about": "Microsoft Certifications are role-based, fundamentals, and specialty credentials that validate cloud, AI, security, and developer skills on Microsoft Azure and related platforms. Exams are authored by Microsoft and delivered through Pearson VUE (and Certiport for academic scheduling of Fundamentals exams). Preparation is built around free, official Microsoft Learn training paths and instructor-led courses, and most role-based and specialty credentials must be renewed every 12 months via a free online assessment on Microsoft Learn. Badges are issued through Microsoft's certification profile and Credly.",
    "registrationSteps": [
      {
        "title": "Prepare with Microsoft Learn",
        "description": "Work through the free official self-paced learning paths and, optionally, instructor-led courses for your exam. Microsoft Learn is the primary, no-cost study source and maps directly to the exam skills outline.",
        "duration": "1–10 weeks depending on exam and experience"
      },
      {
        "title": "Schedule through Pearson VUE",
        "description": "Sign in with a personal Microsoft account (MSA) and schedule the exam on the Pearson VUE portal. Choose an in-person test center or online proctoring (OnVUE). Students and educators can use Certiport for Fundamentals exams.",
        "duration": "about 15 minutes",
        "note": "Microsoft recommends a personal MSA account; a work or school account can lose exam records if you leave the organization."
      },
      {
        "title": "Take the exam",
        "description": "Arrive at the test center or launch the online proctoring session. Exams are computer-based and may include multiple-choice, drag-and-drop, case studies, and performance-based lab tasks in a live environment.",
        "duration": "45–120 minutes depending on the exam"
      },
      {
        "title": "Receive results and badge",
        "description": "You see a pass/fail result on screen immediately. A detailed score report is emailed within about 24 hours and posted to your Microsoft certification profile. On passing, your digital badge is issued via Credly.",
        "duration": "score at end; badge within a few days"
      },
      {
        "title": "Renew annually",
        "description": "Most Microsoft role-based, specialty, and fundamentals certifications expire after 12 months. Renew for free by passing a shorter online renewal assessment on Microsoft Learn before the expiry date — no need to retake the full exam.",
        "duration": "about 45 minutes, once a year"
      }
    ],
    "proctoring": "Delivered by Pearson VUE. You can sit the exam at a Pearson VUE test center or take it online through OnVUE remote proctoring; the fee is the same for both. Online proctoring requires a quiet, private space, a working webcam, and a system check beforehand.",
    "retakePolicy": "If you do not pass, you may retake the exam after 24 hours. A second failed attempt requires a 14-day waiting period, and any further attempts also require a 14-day wait between them, up to a maximum of five attempts in a 12-month period.",
    "recertification": "Microsoft role-based, specialty, and fundamentals certifications are valid for 12 months from the date earned. Renew at no cost by passing the shorter online renewal assessment on Microsoft Learn before the credential expires. Retired certifications cannot be renewed and must be re-earned through the active successor if one exists.",
    "scoreReporting": "A pass/fail result is shown immediately after the exam. The official score report is emailed within about 24 hours and is also available in your Microsoft certification profile, with section-level feedback on how you performed.",
    "refundPolicy": "Exam fees are generally non-refundable once a seat is purchased, but you can cancel or reschedule through Pearson VUE at no charge if you do so at least 24–48 hours before the appointment (exact window varies by region).",
    "providersNote": "Microsoft certification exams are delivered exclusively through Pearson VUE (and Certiport for academic or student Fundamentals scheduling). No other provider is authorized to administer these exams.",
    "comparison": {
      "title": "Microsoft Azure / AI certifications compared",
      "columns": [
        "Credential",
        "Level",
        "Focus",
        "Exam fee",
        "Validity"
      ],
      "rows": [
        {
          "label": "AZ-900 Azure Fundamentals",
          "values": [
            "Fundamentals",
            "Cloud concepts",
            "$99",
            "1 year"
          ]
        },
        {
          "label": "AI-900 Azure AI Fundamentals",
          "values": [
            "Fundamentals",
            "AI concepts",
            "$99",
            "1 year (retired Jun 30 2026)"
          ]
        },
        {
          "label": "AI-901 Azure AI Fundamentals",
          "values": [
            "Fundamentals",
            "AI + Microsoft Foundry",
            "$99",
            "1 year"
          ]
        },
        {
          "label": "AZ-104 Azure Administrator",
          "values": [
            "Associate",
            "Administer Azure",
            "$165",
            "1 year"
          ]
        },
        {
          "label": "AZ-204 Azure Developer",
          "values": [
            "Associate",
            "Build cloud apps",
            "$165",
            "1 year (retired 2026)"
          ]
        },
        {
          "label": "AZ-500 Azure Security Engineer",
          "values": [
            "Associate",
            "Security operations",
            "$165",
            "1 year (retires Aug 31 2026)"
          ]
        },
        {
          "label": "AZ-700 Azure Network Engineer",
          "values": [
            "Associate",
            "Networking",
            "$165",
            "1 year"
          ]
        },
        {
          "label": "AZ-140 Azure Virtual Desktop",
          "values": [
            "Specialty",
            "Virtual desktop (AVD)",
            "$165",
            "1 year"
          ]
        },
        {
          "label": "AZ-305 Azure Solutions Architect",
          "values": [
            "Expert",
            "Solution design",
            "$165",
            "1 year"
          ]
        }
      ]
    },
    "orgFaqs": [
      {
        "q": "Can I take a Microsoft exam online from home?",
        "a": "Yes. Exams are delivered by Pearson VUE with two options: an in-person test center or OnVUE online proctoring from a private space with a webcam. The fee is identical for both."
      },
      {
        "q": "Do Microsoft certifications expire?",
        "a": "Most role-based, specialty, and fundamentals certifications are valid for 12 months. You renew for free by passing a shorter online assessment on Microsoft Learn before the expiry date."
      },
      {
        "q": "What happens if my certification is retired?",
        "a": "You keep the credential until its current expiry date, but you can no longer earn or renew it. Microsoft typically points candidates to the active successor exam or certification."
      }
    ],
    "sourceUrl": "https://learn.microsoft.com/en-us/credentials/",
    "confidence": "high",
    "verified": true
  }
];
export const exams = [
  {
    "slug": "comptia-a-plus",
    "body": "CompTIA",
    "tagline": "The industry-standard entry ticket to IT support",
    "description": "CompTIA A+ is the foundational certification for IT operational and support roles. It certifies the hardware, operating system, networking, security and troubleshooting skills needed at the service desk and field-support level, and is renewed every three years.",
    "quickAnswer": {
      "summary": "A+ is a two-exam, vendor-neutral certification (Core 1: devices and networking; Core 2: operating systems and security) that proves you can support and troubleshoot end-user technology.",
      "advantages": [
        "Recognised by the U.S. DoD 8140",
        "Vendor-neutral and broad",
        "Strong starting point for IT careers"
      ]
    },
    "prerequisites": "No formal prerequisite, but CompTIA recommends 9–12 months of hands-on support experience.",
    "eligibility": "Open to anyone; no degree required.",
    "examMeta": {
      "questions": "90 per exam",
      "time": "90 minutes per exam",
      "pass": "675 (Core 1) / 700 (Core 2) of 900",
      "fee": "$246 per exam",
      "format": "Multiple-choice and performance-based",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Mobile devices",
        "weight": "15%",
        "note": "Core 1"
      },
      {
        "name": "Networking",
        "weight": "20%",
        "note": "Core 1"
      },
      {
        "name": "Hardware",
        "weight": "25%",
        "note": "Core 1"
      },
      {
        "name": "Operating systems",
        "weight": "31%",
        "note": "Core 2"
      },
      {
        "name": "Security",
        "weight": "25%",
        "note": "Core 2"
      }
    ],
    "examEssentials": [
      [
        "Exams",
        "220-1101 + 220-1102"
      ],
      [
        "Renewal",
        "Every 3 years (CE)"
      ]
    ],
    "timeline": [
      {
        "stage": "Study the objectives",
        "duration": "8–12 weeks"
      },
      {
        "stage": "Pass Core 1 (220-1101)",
        "duration": "test day"
      },
      {
        "stage": "Pass Core 2 (220-1102)",
        "duration": "test day"
      },
      {
        "stage": "Earn the credential",
        "duration": "immediate"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Core 1 voucher",
          "fee": "$246"
        },
        {
          "item": "Core 2 voucher",
          "fee": "$246"
        },
        {
          "item": "Study materials",
          "fee": "$0–$200"
        }
      ],
      "total": "$492+",
      "footnote": "Academic pricing is lower with proof of eligibility."
    },
    "difficulty": "Moderate",
    "audience": "Aspiring IT support technicians and help-desk staff",
    "time": "2–3 months",
    "cost": "$492+",
    "salaryRange": "$40,000 – $60,000",
    "faqs": [
      {
        "q": "Is A+ worth it for a first IT job?",
        "a": "Yes. A+ is one of the most requested entry certifications for service-desk and field-support roles and signals a verified baseline of hands-on skill."
      },
      {
        "q": "Do I need both Core exams?",
        "a": "Yes. You must pass both 220-1101 and 220-1102 to earn A+; they can be taken in either order."
      },
      {
        "q": "How do I renew A+?",
        "a": "Through 20 Continuing Education credits over three years, a higher CompTIA cert, or a single renew-by-exam before it expires."
      }
    ],
    "summaryPoints": [
      "A+ is the de facto entry-level IT support certification.",
      "It is two exams covering hardware, OS, networking and security.",
      "It renews every three years through CE credits."
    ],
    "relatedSlugs": [
      "comptia-network-plus",
      "comptia-security-plus"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/a",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-network-plus",
    "body": "CompTIA",
    "tagline": "Prove you can build and troubleshoot networks",
    "description": "CompTIA Network+ validates the skills needed to design, configure, manage and troubleshoot wired and wireless networks. It is vendor-neutral and assumes about nine months of networking experience.",
    "quickAnswer": {
      "summary": "Network+ (N10-009) is a single, vendor-neutral exam covering networking concepts, implementations, operations, security and troubleshooting.",
      "advantages": [
        "Vendor-neutral",
        "Maps to DoD 8140",
        "Good step after A+"
      ]
    },
    "prerequisites": "CompTIA recommends A+ and nine months of networking experience, though neither is required.",
    "examMeta": {
      "questions": "90",
      "time": "90 minutes",
      "pass": "720 of 900",
      "fee": "$369",
      "format": "Multiple-choice and performance-based",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Networking concepts",
        "weight": "23%"
      },
      {
        "name": "Network implementations",
        "weight": "20%"
      },
      {
        "name": "Network operations",
        "weight": "19%"
      },
      {
        "name": "Network security",
        "weight": "14%"
      },
      {
        "name": "Network troubleshooting",
        "weight": "24%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "N10-009"
      ],
      [
        "Renewal",
        "Every 3 years"
      ]
    ],
    "timeline": [
      {
        "stage": "Prepare (courses + labs)",
        "duration": "8–10 weeks"
      },
      {
        "stage": "Sit N10-009",
        "duration": "test day"
      },
      {
        "stage": "Earn credential",
        "duration": "immediate"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$369"
        },
        {
          "item": "Prep",
          "fee": "$0–$200"
        }
      ],
      "total": "$369+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Moderate",
    "audience": "Junior network administrators and support staff",
    "time": "2–3 months",
    "cost": "$369+",
    "salaryRange": "$50,000 – $75,000",
    "faqs": [
      {
        "q": "Is Network+ harder than A+?",
        "a": "Most candidates find it more conceptual than A+; it assumes comfort with TCP/IP, subnetting and device configuration."
      },
      {
        "q": "Does Network+ expire?",
        "a": "Yes, after three years, renewed through CE credits or a higher certification."
      },
      {
        "q": "How does it compare to CCNA?",
        "a": "Network+ is broader and vendor-neutral; CCNA is deeper and Cisco-specific. Many use Network+ as a stepping stone to CCNA."
      }
    ],
    "summaryPoints": [
      "Network+ is a single vendor-neutral networking exam.",
      "It covers concepts, implementation, operations, security and troubleshooting.",
      "It is a common bridge from A+ toward CCNA."
    ],
    "relatedSlugs": [
      "comptia-a-plus",
      "comptia-security-plus",
      "cisco-ccna"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/network",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-security-plus",
    "body": "CompTIA",
    "tagline": "The baseline cybersecurity certification",
    "description": "CompTIA Security+ is the foundational, vendor-neutral security certification covering threat assessment, cryptography, identity, architecture and incident response. It is an approved baseline for U.S. Department of Defense 8140 roles.",
    "quickAnswer": {
      "summary": "Security+ (SY0-701) is a single exam that certifies baseline cybersecurity skills across threats, architecture, operations and governance.",
      "advantages": [
        "DoD 8140 approved",
        "Vendor-neutral",
        "Springboard to CySA+ and CISSP"
      ]
    },
    "prerequisites": "Network+ or equivalent knowledge and two years of IT administration with a security focus are recommended.",
    "examMeta": {
      "questions": "90",
      "time": "90 minutes",
      "pass": "750 of 900",
      "fee": "$404",
      "format": "Multiple-choice and performance-based",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "General security concepts",
        "weight": "12%"
      },
      {
        "name": "Threats, vulnerabilities and mitigations",
        "weight": "22%"
      },
      {
        "name": "Security architecture",
        "weight": "18%"
      },
      {
        "name": "Security operations",
        "weight": "28%"
      },
      {
        "name": "Security program management",
        "weight": "20%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "SY0-701"
      ],
      [
        "Renewal",
        "Every 3 years"
      ]
    ],
    "timeline": [
      {
        "stage": "Study (courses + labs)",
        "duration": "6–10 weeks"
      },
      {
        "stage": "Sit SY0-701",
        "duration": "test day"
      },
      {
        "stage": "Earn credential",
        "duration": "immediate"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$404"
        },
        {
          "item": "Prep",
          "fee": "$0–$200"
        }
      ],
      "total": "$404+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Moderate",
    "audience": "Entry-level security analysts and administrators",
    "time": "2–3 months",
    "cost": "$404+",
    "salaryRange": "$60,000 – $95,000",
    "faqs": [
      {
        "q": "Is Security+ enough to get a security job?",
        "a": "It qualifies you for many analyst and administrator roles and is explicitly required for numerous DoD 8140 positions; hands-on experience still matters."
      },
      {
        "q": "What comes after Security+?",
        "a": "CySA+ for defensive analysis, PenTest+ for offensive testing, or CISSP once you have the required experience."
      },
      {
        "q": "How do I renew it?",
        "a": "Through 50 CE credits over three years, a higher security cert, or a renew-by-exam."
      }
    ],
    "summaryPoints": [
      "Security+ is the baseline vendor-neutral security cert.",
      "It is required for many DoD 8140 roles.",
      "It leads toward CySA+, PenTest+ and CISSP."
    ],
    "relatedSlugs": [
      "comptia-network-plus",
      "comptia-cysa-plus",
      "comptia-pentest-plus"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/security",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-linux-plus",
    "body": "CompTIA",
    "tagline": "Prove you can actually run Linux — vendor-neutral, performance-based, and built for modern cloud and DevOps roles.",
    "description": "CompTIA Linux+ (exam XK0-006) is a vendor-neutral certification that validates real-world Linux system administration across on-premises and cloud server environments. It covers system management, security hardening, scripting, containerization, automation, and troubleshooting — the daily work of a Linux administrator rather than distribution-specific trivia. Because it is distribution-agnostic, the skills transfer across Ubuntu, Red Hat, Debian, SUSE, and the major clouds. It is frequently paired with CompTIA's A+, Network+, and Security+ or used as a stepping stone toward cloud, DevOps, and cybersecurity careers, and it is approved for DoD 8140 (formerly 8570) IAT Level II roles.",
    "quickAnswer": {
      "summary": "Linux+ (XK0-006) is a single, performance-based exam proving job-ready Linux administration: you configure, secure, script, containerize, and troubleshoot Linux systems both on-prem and in the cloud.",
      "advantages": [
        "Vendor-neutral — skills transfer across every major Linux distribution and cloud",
        "Performance-based questions (PBQs) prove hands-on command-line ability, not just memorization",
        "Maps directly to junior Linux / cloud / DevOps support engineer job roles",
        "ANSI-accredited to ISO/IEC 17024 and approved for DoD 8140 (IAT Level II) positions",
        "Renews in 3 years and stacks toward other CompTIA certifications"
      ]
    },
    "prerequisites": "CompTIA recommends at least 12 months of hands-on experience administering Linux servers, plus foundational knowledge equivalent to A+, Network+, and Server+. There is no formal eligibility requirement, but the exam assumes junior administrator-level practice.",
    "examMeta": {
      "questions": "Maximum of 90 (mix of multiple-choice and performance-based)",
      "time": "90 minutes",
      "pass": "720 (on a scale of 100–900) — CompTIA publishes a numeric passing score for Linux+",
      "fee": "$390 USD (CompTIA list; resellers often $330–369)",
      "format": "Multiple-choice and performance-based questions (PBQs)",
      "admin": "Pearson VUE (test center or online OnVUE proctoring)"
    },
    "topics": [
      {
        "name": "System Management",
        "note": "Linux fundamentals, FHS, boot process (BIOS/UEFI, GRUB2), package management (apt, dnf/yum, rpm), file permissions, storage/LVM, systemd, users/groups, networking, and kernel/process/service management.",
        "weight": "32%"
      },
      {
        "name": "Security",
        "note": "File/directory permissions (SUID/SGID/sticky bit), SELinux and AppArmor, PAM, user and group security, SSH hardening, firewalls (iptables, firewalld, ufw), encryption, and PKI basics.",
        "weight": "21%"
      },
      {
        "name": "Scripting, Containers, and Automation",
        "note": "Bash scripting (variables, conditionals, loops, functions, exit codes), regex with grep/sed/awk, Git, Docker/Podman containers, orchestration concepts, and Ansible/Infrastructure-as-Code basics.",
        "weight": "19%"
      },
      {
        "name": "Troubleshooting",
        "note": "Diagnosing CPU/memory/disk issues (top, vmstat, iostat, free, df/du), network troubleshooting (ip, ss, tcpdump), log analysis (journalctl, /var/log), and boot/hardware recovery.",
        "weight": "28%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "XK0-006"
      ],
      [
        "Questions",
        "Maximum 90 (multiple-choice + performance-based)"
      ],
      [
        "Duration",
        "90 minutes"
      ],
      [
        "Passing score",
        "720 (scale 100–900)"
      ],
      [
        "Delivery",
        "Pearson VUE (center or online)"
      ],
      [
        "Validity",
        "3 years, renewable via CE"
      ]
    ],
    "timeline": [
      [
        "Register & buy voucher",
        "1–2 days"
      ],
      [
        "Build a home lab (VM or cloud)",
        "1–2 weeks"
      ],
      [
        "Study domains & practice PBQs",
        "6–10 weeks"
      ],
      [
        "Sit XK0-006",
        "1 day (90 min)"
      ],
      [
        "Receive score & e-certificate",
        "Immediate–a few days"
      ]
    ],
    "costBreakdown": {
      "items": [
        [
          "Exam voucher (XK0-006)",
          "$390 USD"
        ],
        [
          "Exam + retake bundle (optional)",
          "Priced separately by CompTIA"
        ],
        [
          "CertMaster training/labs (optional)",
          "Priced separately by CompTIA"
        ]
      ],
      "total": "$390 USD (exam only; bundles and training billed separately)",
      "footnote": "CompTIA often sells an exam+retake bundle and CertMaster Learn/Practice/Labs separately. Academic and volume voucher pricing may differ by region."
    },
    "difficulty": "Moderate",
    "audience": "Junior Linux administrators, cloud/DevOps support engineers, systems administrators, and IT/security pros adding Linux skills.",
    "time": "2–4 months of part-time study (faster with the recommended 12 months of experience)",
    "cost": "$390+ USD (exam; optional training/bundles extra)",
    "salaryRange": "$65,000 – $95,000",
    "faqs": [
      {
        "q": "Is Linux+ the same as LPIC or RHCSA?",
        "a": "No. Linux+ is CompTIA's vendor-neutral, single-exam credential (XK0-006) that maps to ANSI/ISO 17024. LPIC-1 (Linux Professional Institute) requires two exams and is also vendor-neutral, while Red Hat RHCSA is a single performance-only, Red Hat-specific exam. They overlap in topic areas but are distinct credentials with different renewal terms."
      },
      {
        "q": "Does CompTIA publish a passing score for Linux+?",
        "a": "Yes. The official XK0-006 exam objectives state a passing score of 720 on a scale of 100–900. Results are reported as pass/fail on screen, with a detailed score report available in your CompTIA and Pearson VUE accounts."
      },
      {
        "q": "How long is Linux+ valid and how do I renew it?",
        "a": "Linux+ is valid for three years from the date of certification. You renew it by earning 50 Continuing Education (CE) credits through CompTIA CertCentral, by earning a higher-level CompTIA certification, or by retaking the exam. There is no separate annual fee while active."
      },
      {
        "q": "Is Linux+ good for cloud and DevOps careers?",
        "a": "Yes. XK0-006 explicitly covers scripting, Git, Docker/Podman containers, and Ansible/automation, which are foundational for cloud and DevOps roles. It is positioned as a junior cloud/DevOps support engineer credential and pairs well with cloud provider certifications."
      },
      {
        "q": "Can I take Linux+ online instead of at a test center?",
        "a": "Yes. Linux+ is delivered exclusively through Pearson VUE, which offers both physical test centers and online proctoring via OnVUE. Online testing requires a quiet, private room, a webcam, and a stable internet connection that passes the system check."
      }
    ],
    "summaryPoints": [
      "Linux+ (XK0-006) is a vendor-neutral, performance-based Linux administration exam — 90 minutes, up to 90 questions, pass mark 720/900.",
      "Four weighted domains: System Management 32%, Troubleshooting 28%, Security 21%, Scripting/Containers/Automation 19%.",
      "Standard exam voucher is $390 USD; the cert is valid 3 years and renewed via 50 CEUs in CertCentral.",
      "Ideal for junior Linux/cloud/DevOps roles and DoD 8140 IAT Level II; complements A+, Network+, Security+, and cloud certs."
    ],
    "relatedSlugs": [
      "lpic-1-system-administrator",
      "red-hat-certified-system-administrator"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/linux",
    "reviewed": "2026-08",
    "confidence": "high",
    "roadmap": [
      "Confirm 12 months of hands-on Linux experience (or study to close the gap)",
      "Buy the XK0-006 exam voucher from the CompTIA store",
      "Build a free lab with VirtualBox/VMware or a cloud instance",
      "Study the four weighted domains and practice PBQs daily",
      "Schedule and pass the 90-minute Pearson VUE exam",
      "Earn CEUs in CertCentral to keep the cert active for 3 years"
    ],
    "eligibility": "Open to all candidates 18+ (minors may test with parental consent per Pearson VUE policy). No mandatory prerequisite certification is required to sit the exam."
  },
  {
    "slug": "comptia-server-plus",
    "body": "CompTIA",
    "tagline": "Show you can run physical and virtual servers",
    "description": "CompTIA Server+ validates the skills to install, manage and troubleshoot on-premises and hybrid server hardware and software, including virtualization and disaster recovery.",
    "quickAnswer": {
      "summary": "Server+ (SK0-005) is a single exam covering server hardware, administration, storage, security and troubleshooting for data-center and hybrid environments.",
      "advantages": [
        "Vendor-neutral",
        "Good for data-center roles",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "CompTIA recommends 24 months of server-handling experience.",
    "examMeta": {
      "questions": "90",
      "time": "90 minutes",
      "pass": "750 of 900",
      "fee": "$404",
      "format": "Multiple-choice and performance-based",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Server hardware",
        "weight": "15%"
      },
      {
        "name": "Server administration",
        "weight": "24%"
      },
      {
        "name": "Storage",
        "weight": "16%"
      },
      {
        "name": "Security and disaster recovery",
        "weight": "24%"
      },
      {
        "name": "Troubleshooting",
        "weight": "21%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "SK0-005"
      ]
    ],
    "timeline": [
      {
        "stage": "Study + lab",
        "duration": "6–10 weeks"
      },
      {
        "stage": "Sit SK0-005",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$404"
        }
      ],
      "total": "$404+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Moderate",
    "audience": "Server and data-center technicians",
    "time": "2–3 months",
    "cost": "$404+",
    "salaryRange": "$55,000 – $85,000",
    "faqs": [
      {
        "q": "Is Server+ cloud-related?",
        "a": "It covers on-prem and hybrid server administration, including virtualization, so it complements but does not replace a cloud cert."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via CE credits or a higher cert."
      },
      {
        "q": "How do I register for comptia-server-plus?",
        "a": "You register and schedule comptia-server-plus through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the comptia-server-plus exam format?",
        "a": "The exam is delivered as Multiple-choice and performance-based, with about 90 items, in 90 minutes. The published pass mark is 750 of 900."
      },
      {
        "q": "How long is the comptia-server-plus certification valid?",
        "a": "Most CompTIA certifications are valid for three years and renewed via Continuing Education (CE) credits, a higher cert, or a single renew-by-exam."
      },
      {
        "q": "How much does comptia-server-plus cost?",
        "a": "The exam fee is $404. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "Server+ covers server hardware, admin, storage and DR.",
      "It is vendor-neutral and performance-based.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "comptia-a-plus",
      "comptia-linux-plus"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/server",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-cloud-plus",
    "body": "CompTIA",
    "tagline": "Prove baseline cloud operations competence",
    "description": "CompTIA Cloud+ validates the skills to deploy, secure and automate cloud infrastructure across vendors, focusing on operations rather than a single platform.",
    "quickAnswer": {
      "summary": "Cloud+ (CV0-004) is a single, vendor-neutral exam covering cloud architecture, deployment, operations, security and troubleshooting.",
      "advantages": [
        "Vendor-neutral",
        "Operations-focused",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "CompTIA recommends 24 months of cloud or systems administration experience.",
    "examMeta": {
      "questions": "90",
      "time": "130 minutes",
      "pass": "750 of 900",
      "fee": "$369",
      "format": "Multiple-choice and performance-based",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Cloud architecture and design",
        "weight": "13%"
      },
      {
        "name": "Deployment",
        "weight": "18%"
      },
      {
        "name": "Operations",
        "weight": "25%"
      },
      {
        "name": "Security",
        "weight": "20%"
      },
      {
        "name": "Troubleshooting",
        "weight": "24%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "CV0-004"
      ]
    ],
    "timeline": [
      {
        "stage": "Study",
        "duration": "6–10 weeks"
      },
      {
        "stage": "Sit CV0-004",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$369"
        }
      ],
      "total": "$369+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Moderate",
    "audience": "Cloud administrators and engineers",
    "time": "2–3 months",
    "cost": "$369+",
    "salaryRange": "$70,000 – $110,000",
    "faqs": [
      {
        "q": "Cloud+ vs AWS or Azure certs?",
        "a": "Cloud+ is vendor-neutral and operations-focused; AWS and Azure certs are platform-specific. Cloud+ pairs well as a conceptual base."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via CE credits or a higher cert."
      },
      {
        "q": "How do I register for comptia-cloud-plus?",
        "a": "You register and schedule comptia-cloud-plus through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the comptia-cloud-plus exam format?",
        "a": "The exam is delivered as Multiple-choice and performance-based, with about 90 items, in 130 minutes. The published pass mark is 750 of 900."
      },
      {
        "q": "How long is the comptia-cloud-plus certification valid?",
        "a": "Most CompTIA certifications are valid for three years and renewed via Continuing Education (CE) credits, a higher cert, or a single renew-by-exam."
      },
      {
        "q": "How much does comptia-cloud-plus cost?",
        "a": "The exam fee is $369. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "Cloud+ is a vendor-neutral cloud operations cert.",
      "It spans deployment, security and troubleshooting.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "google-cloud-digital-leader",
      "microsoft-az-900",
      "aws-certified-cloud-practitioner"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/cloud",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-cysa-plus",
    "body": "CompTIA",
    "tagline": "Move from defense to threat analysis",
    "description": "CompTIA Cybersecurity Analyst (CySA+) certifies the behavioral analytics and incident-response skills used in defensive security operations, including vulnerability management and threat hunting.",
    "quickAnswer": {
      "summary": "CySA+ (CS0-003) is a single exam proving you can use threat and vulnerability data to detect, analyze and respond to security incidents.",
      "advantages": [
        "Defensive focus",
        "Maps to DoD 8140",
        "Good step after Security+"
      ]
    },
    "prerequisites": "Security+ and 3–4 years of information-security experience are recommended.",
    "examMeta": {
      "questions": "85",
      "time": "165 minutes",
      "pass": "750 of 900",
      "fee": "$404",
      "format": "Multiple-choice and performance-based",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Security operations",
        "weight": "33%"
      },
      {
        "name": "Vulnerability management",
        "weight": "30%"
      },
      {
        "name": "Incident response and threat hunting",
        "weight": "20%"
      },
      {
        "name": "Compliance and reporting",
        "weight": "17%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "CS0-003"
      ]
    ],
    "timeline": [
      {
        "stage": "Study + labs",
        "duration": "8–12 weeks"
      },
      {
        "stage": "Sit CS0-003",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$404"
        }
      ],
      "total": "$404+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Hard",
    "audience": "SOC analysts and threat hunters",
    "time": "3–4 months",
    "cost": "$404+",
    "salaryRange": "$75,000 – $115,000",
    "faqs": [
      {
        "q": "Is CySA+ harder than Security+?",
        "a": "Yes. It assumes Security+ and adds behavioral analytics, threat hunting and hands-on response scenarios."
      },
      {
        "q": "Where does it sit before CISSP?",
        "a": "CySA+ is a strong intermediate defensive cert; CISSP is a broader management-level cert that needs five years of experience."
      },
      {
        "q": "How do I register for comptia-cysa-plus?",
        "a": "You register and schedule comptia-cysa-plus through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the comptia-cysa-plus exam format?",
        "a": "The exam is delivered as Multiple-choice and performance-based, with about 85 items, in 165 minutes. The published pass mark is 750 of 900."
      },
      {
        "q": "How long is the comptia-cysa-plus certification valid?",
        "a": "Most CompTIA certifications are valid for three years and renewed via Continuing Education (CE) credits, a higher cert, or a single renew-by-exam."
      },
      {
        "q": "How much does comptia-cysa-plus cost?",
        "a": "The exam fee is $404. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "CySA+ focuses on defensive analytics and response.",
      "It builds on Security+ with hands-on scenarios.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "comptia-security-plus",
      "comptia-pentest-plus"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/cybersecurity-analyst",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-pentest-plus",
    "body": "CompTIA",
    "tagline": "Prove you can think like a tester",
    "description": "CompTIA PenTest+ certifies the hands-on penetration-testing and vulnerability-management skills used to plan, scope, exploit and report on authorized security assessments.",
    "quickAnswer": {
      "summary": "PenTest+ (PT0-003) is a single performance-based exam covering planning, information gathering, attacks, reporting and compliance for penetration testing.",
      "advantages": [
        "Hands-on",
        "Maps to DoD 8140",
        "Offensive counterpart to CySA+"
      ]
    },
    "prerequisites": "Security+ and 3–4 years of IT security experience, plus baseline networking, are recommended.",
    "examMeta": {
      "questions": "85 (incl. PBQs)",
      "time": "165 minutes",
      "pass": "750 of 900",
      "fee": "$404",
      "format": "Multiple-choice and performance-based",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Planning and scoping",
        "weight": "14%"
      },
      {
        "name": "Information gathering and vulnerability identification",
        "weight": "22%"
      },
      {
        "name": "Attacks and exploits",
        "weight": "30%"
      },
      {
        "name": "Reporting and communication",
        "weight": "18%"
      },
      {
        "name": "Tools and code analysis",
        "weight": "16%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "PT0-003"
      ]
    ],
    "timeline": [
      {
        "stage": "Labs and study",
        "duration": "8–12 weeks"
      },
      {
        "stage": "Sit PT0-003",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$404"
        }
      ],
      "total": "$404+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Hard",
    "audience": "Penetration testers and security consultants",
    "time": "3–4 months",
    "cost": "$404+",
    "salaryRange": "$85,000 – $130,000",
    "faqs": [
      {
        "q": "Do I need PenTest+ before OSCP?",
        "a": "No, but PenTest+ gives a structured, certifiable baseline; OSCP is a harder, fully hands-on lab exam."
      },
      {
        "q": "Is it legal to use these skills?",
        "a": "Only within authorized, scoped engagements. The exam and the profession are strictly about permitted testing."
      },
      {
        "q": "How do I register for comptia-pentest-plus?",
        "a": "You register and schedule comptia-pentest-plus through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the comptia-pentest-plus exam format?",
        "a": "The exam is delivered as Multiple-choice and performance-based, with about 85 (incl. PBQs) items, in 165 minutes. The published pass mark is 750 of 900."
      },
      {
        "q": "How long is the comptia-pentest-plus certification valid?",
        "a": "Most CompTIA certifications are valid for three years and renewed via Continuing Education (CE) credits, a higher cert, or a single renew-by-exam."
      },
      {
        "q": "How much does comptia-pentest-plus cost?",
        "a": "The exam fee is $404. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "PenTest+ is a hands-on offensive security cert.",
      "It covers scoping, exploitation and reporting.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "comptia-security-plus",
      "comptia-cysa-plus"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/pentest",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-securityx",
    "body": "CompTIA",
    "tagline": "CompTIA advanced security expert",
    "description": "CompTIA SecurityX (formerly CASP+) is the expert-level, practitioner-focused certification for senior security architects who design and lead enterprise security solutions without the management emphasis of CISSP.",
    "quickAnswer": {
      "summary": "SecurityX is CompTIA advanced, hands-on certification for experienced security architects who build and assess enterprise cyber-defense.",
      "advantages": [
        "Expert level",
        "Hands-on",
        "Architecture focus"
      ]
    },
    "prerequisites": "CompTIA recommends 10+ years of IT experience with 5+ years of security engineering.",
    "examMeta": {
      "questions": "90 (incl. PBQs)",
      "time": "165 minutes",
      "pass": "750 of 900",
      "fee": "$466",
      "format": "Multiple-choice and performance-based",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Security architecture",
        "weight": "29%"
      },
      {
        "name": "Security operations",
        "weight": "30%"
      },
      {
        "name": "Security engineering and cryptography",
        "weight": "26%"
      },
      {
        "name": "Governance and compliance",
        "weight": "15%"
      }
    ],
    "examEssentials": [
      [
        "Level",
        "Expert"
      ],
      [
        "Renewal",
        "Every 3 years"
      ]
    ],
    "timeline": [
      {
        "stage": "Senior-level prep",
        "duration": "3–6 months"
      },
      {
        "stage": "Sit exam",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$466"
        }
      ],
      "total": "$466+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Very Hard",
    "audience": "Senior security architects and engineers",
    "time": "4–6 months",
    "cost": "$466+",
    "salaryRange": "$120,000 – $160,000",
    "faqs": [
      {
        "q": "SecurityX vs CISSP?",
        "a": "SecurityX is hands-on and architecture/engineering focused; CISSP is broader and management-oriented with an experience requirement."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via CE credits or a higher cert."
      },
      {
        "q": "How do I register for comptia-securityx?",
        "a": "You register and schedule comptia-securityx through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the comptia-securityx exam format?",
        "a": "The exam is delivered as Multiple-choice and performance-based, with about 90 (incl. PBQs) items, in 165 minutes. The published pass mark is 750 of 900."
      },
      {
        "q": "How long is the comptia-securityx certification valid?",
        "a": "Most CompTIA certifications are valid for three years and renewed via Continuing Education (CE) credits, a higher cert, or a single renew-by-exam."
      },
      {
        "q": "How much does comptia-securityx cost?",
        "a": "The exam fee is $466. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "SecurityX is CompTIA expert-level security cert.",
      "It targets architects, not managers.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "comptia-cysa-plus",
      "comptia-pentest-plus"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/securityx",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-project-plus",
    "body": "CompTIA",
    "tagline": "Project management fundamentals without the rigor",
    "description": "CompTIA Project+ certifies the foundational project-management knowledge needed to coordinate small-to-medium projects across any industry, covering the full lifecycle from initiation to close.",
    "quickAnswer": {
      "summary": "Project+ (PK0-005) is a single exam covering project life cycle, constraints, communication, risk and closeout for entry-level project coordinators.",
      "advantages": [
        "Industry-neutral",
        "Good first PM cert",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "CompTIA recommends 12 months of project-management experience.",
    "examMeta": {
      "questions": "95",
      "time": "90 minutes",
      "pass": "710 of 900",
      "fee": "$355",
      "format": "Multiple-choice and performance-based",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Project life cycle",
        "weight": "18%"
      },
      {
        "name": "Project planning",
        "weight": "34%"
      },
      {
        "name": "Project execution",
        "weight": "26%"
      },
      {
        "name": "Communication and change",
        "weight": "22%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "PK0-005"
      ]
    ],
    "timeline": [
      {
        "stage": "Study",
        "duration": "4–8 weeks"
      },
      {
        "stage": "Sit PK0-005",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$355"
        }
      ],
      "total": "$355+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Moderate",
    "audience": "Project coordinators and team leads",
    "time": "1–3 months",
    "cost": "$355+",
    "salaryRange": "$55,000 – $85,000",
    "faqs": [
      {
        "q": "Project+ vs CAPM or PMP?",
        "a": "Project+ is a lighter, industry-neutral entry cert; CAPM and PMP follow the PMI framework and PMP requires experience."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via CE credits."
      },
      {
        "q": "How do I register for comptia-project-plus?",
        "a": "You register and schedule comptia-project-plus through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the comptia-project-plus exam format?",
        "a": "The exam is delivered as Multiple-choice and performance-based, with about 95 items, in 90 minutes. The published pass mark is 710 of 900."
      },
      {
        "q": "How long is the comptia-project-plus certification valid?",
        "a": "Most CompTIA certifications are valid for three years and renewed via Continuing Education (CE) credits, a higher cert, or a single renew-by-exam."
      },
      {
        "q": "How much does comptia-project-plus cost?",
        "a": "The exam fee is $355. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "Project+ is an entry-level, vendor-neutral PM cert.",
      "It covers the full project life cycle.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "microsoft-az-900"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/project",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-data-plus",
    "body": "CompTIA",
    "tagline": "Foundational data analytics certification",
    "description": "CompTIA Data+ certifies the core data-analytics skills of sourcing, cleaning, analyzing and visualizing data, aimed at business-intelligence and reporting roles.",
    "quickAnswer": {
      "summary": "Data+ (DA0-001) is a single exam proving you can mine, manipulate, visualize and report on data to support decisions.",
      "advantages": [
        "Vendor-neutral",
        "Good BI entry cert",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "CompTIA recommends 18–24 months of experience in a reporting or analytics role.",
    "examMeta": {
      "questions": "90",
      "time": "90 minutes",
      "pass": "675 of 900",
      "fee": "$239",
      "format": "Multiple-choice and performance-based",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Data concepts and environments",
        "weight": "15%"
      },
      {
        "name": "Data mining and manipulation",
        "weight": "25%"
      },
      {
        "name": "Data analysis",
        "weight": "23%"
      },
      {
        "name": "Visualization",
        "weight": "22%"
      },
      {
        "name": "Governance and quality",
        "weight": "15%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "DA0-001"
      ]
    ],
    "timeline": [
      {
        "stage": "Study",
        "duration": "4–8 weeks"
      },
      {
        "stage": "Sit DA0-001",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$239"
        }
      ],
      "total": "$239+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Moderate",
    "audience": "BI and reporting analysts",
    "time": "1–3 months",
    "cost": "$239+",
    "salaryRange": "$60,000 – $90,000",
    "faqs": [
      {
        "q": "Is Data+ good before a tool-specific cert?",
        "a": "Yes. It teaches tool-agnostic analytics concepts that transfer to Tableau, Power BI and SQL work."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via CE credits."
      },
      {
        "q": "How do I register for comptia-data-plus?",
        "a": "You register and schedule comptia-data-plus through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the comptia-data-plus exam format?",
        "a": "The exam is delivered as Multiple-choice and performance-based, with about 90 items, in 90 minutes. The published pass mark is 675 of 900."
      },
      {
        "q": "How long is the comptia-data-plus certification valid?",
        "a": "Most CompTIA certifications are valid for three years and renewed via Continuing Education (CE) credits, a higher cert, or a single renew-by-exam."
      },
      {
        "q": "How much does comptia-data-plus cost?",
        "a": "The exam fee is $239. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "Data+ is a vendor-neutral analytics cert.",
      "It covers mining, analysis and visualization.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "tableau-certified-data-analyst",
      "microsoft-dp-900"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/data",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-it-fundamentals",
    "body": "CompTIA",
    "tagline": "Digital literacy for career starters",
    "description": "CompTIA IT Fundamentals (ITF+) introduces the essential IT concepts, terminology and basic skills for students and career changers deciding whether technology is the right path.",
    "quickAnswer": {
      "summary": "ITF+ (FC0-U61) is an entry-level exam covering IT concepts, infrastructure, software development and security awareness.",
      "advantages": [
        "True beginner level",
        "Career exploration",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "None.",
    "examMeta": {
      "questions": "75",
      "time": "60 minutes",
      "pass": "650 of 900",
      "fee": "$134",
      "format": "Multiple-choice",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "IT concepts and terminology",
        "weight": "17%"
      },
      {
        "name": "Infrastructure",
        "weight": "22%"
      },
      {
        "name": "Software and development",
        "weight": "18%"
      },
      {
        "name": "Security",
        "weight": "20%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "FC0-U61"
      ]
    ],
    "timeline": [
      {
        "stage": "Study",
        "duration": "2–4 weeks"
      },
      {
        "stage": "Sit FC0-U61",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$134"
        }
      ],
      "total": "$134+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Easy",
    "audience": "Students and career explorers",
    "time": "1 month",
    "cost": "$134+",
    "salaryRange": "n/a",
    "faqs": [
      {
        "q": "Should I take ITF+ or A+?",
        "a": "Take ITF+ if you are brand new and deciding on a tech career; move to A+ once you are committed to support work."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via CE credits."
      },
      {
        "q": "How do I register for comptia-it-fundamentals?",
        "a": "You register and schedule comptia-it-fundamentals through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the comptia-it-fundamentals exam format?",
        "a": "The exam is delivered as Multiple-choice, with about 75 items, in 60 minutes. The published pass mark is 650 of 900."
      },
      {
        "q": "How long is the comptia-it-fundamentals certification valid?",
        "a": "Most CompTIA certifications are valid for three years and renewed via Continuing Education (CE) credits, a higher cert, or a single renew-by-exam."
      },
      {
        "q": "How much does comptia-it-fundamentals cost?",
        "a": "The exam fee is $134. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "ITF+ is the starting point for tech careers.",
      "It covers concepts, infrastructure and security basics.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "comptia-a-plus",
      "comptia-tech-plus"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/it-fundamentals",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "comptia-cloud-essentials-plus",
    "body": "CompTIA",
    "tagline": "Business view of cloud adoption",
    "description": "CompTIA Cloud Essentials+ certifies the business and technical understanding needed to make sound cloud adoption and governance decisions, aimed at non-technical and hybrid stakeholders.",
    "quickAnswer": {
      "summary": "Cloud Essentials+ (CLO-002) is a single exam covering cloud concepts, business principles, governance and migration for business and technical staff.",
      "advantages": [
        "Business + tech",
        "Vendor-neutral",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "Six months of cloud business or technical experience recommended.",
    "examMeta": {
      "questions": "75",
      "time": "60 minutes",
      "pass": "720 of 900",
      "fee": "$134",
      "format": "Multiple-choice",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Cloud concepts",
        "weight": "24%"
      },
      {
        "name": "Business principles",
        "weight": "28%"
      },
      {
        "name": "Governance and risk",
        "weight": "22%"
      },
      {
        "name": "Migration and operations",
        "weight": "26%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "CLO-002"
      ]
    ],
    "timeline": [
      {
        "stage": "Study",
        "duration": "2–4 weeks"
      },
      {
        "stage": "Sit CLO-002",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam voucher",
          "fee": "$134"
        }
      ],
      "total": "$134+",
      "footnote": "Academic pricing available."
    },
    "difficulty": "Easy",
    "audience": "Business and technical cloud stakeholders",
    "time": "1 month",
    "cost": "$134+",
    "salaryRange": "$60,000 – $95,000",
    "faqs": [
      {
        "q": "Is Cloud Essentials+ technical?",
        "a": "It balances business and technical views, so it suits both managers and engineers involved in cloud decisions."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via CE credits."
      },
      {
        "q": "How do I register for comptia-cloud-essentials-plus?",
        "a": "You register and schedule comptia-cloud-essentials-plus through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the comptia-cloud-essentials-plus exam format?",
        "a": "The exam is delivered as Multiple-choice, with about 75 items, in 60 minutes. The published pass mark is 720 of 900."
      },
      {
        "q": "How long is the comptia-cloud-essentials-plus certification valid?",
        "a": "Most CompTIA certifications are valid for three years and renewed via Continuing Education (CE) credits, a higher cert, or a single renew-by-exam."
      },
      {
        "q": "How much does comptia-cloud-essentials-plus cost?",
        "a": "The exam fee is $134. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "Cloud Essentials+ covers cloud business and tech.",
      "It is vendor-neutral.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "comptia-cloud-plus",
      "microsoft-az-900"
    ],
    "sourceUrl": "https://www.comptia.org/certifications/cloud-essentials",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccna",
    "body": "Cisco",
    "tagline": "The associate networking foundation",
    "description": "The Cisco Certified Network Associate (CCNA) validates the knowledge and skills required to install, configure and operate small to medium enterprise networks, including IP services, security and automation basics.",
    "quickAnswer": {
      "summary": "CCNA (200-301) is a single associate exam covering networking fundamentals, access, IP connectivity, IP services, security and programmability.",
      "advantages": [
        "Industry-standard associate cert",
        "Strong ROI",
        "Gateway to CCNP"
      ]
    },
    "prerequisites": "No formal prerequisite, but basic IP addressing and PC skills help.",
    "examMeta": {
      "questions": "90–110",
      "time": "120 minutes",
      "pass": "~825 of 1000 (score set per exam)",
      "fee": "$300",
      "format": "Multiple-choice and lab-style items",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Network fundamentals",
        "weight": "20%"
      },
      {
        "name": "Network access",
        "weight": "20%"
      },
      {
        "name": "IP connectivity",
        "weight": "25%"
      },
      {
        "name": "IP services",
        "weight": "10%"
      },
      {
        "name": "Security fundamentals",
        "weight": "15%"
      },
      {
        "name": "Automation and programmability",
        "weight": "10%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "200-301"
      ],
      [
        "Renewal",
        "Every 3 years"
      ]
    ],
    "timeline": [
      {
        "stage": "Study + labs",
        "duration": "8–12 weeks"
      },
      {
        "stage": "Sit 200-301",
        "duration": "test day"
      },
      {
        "stage": "Earn CCNA",
        "duration": "immediate"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "$300"
        },
        {
          "item": "Prep",
          "fee": "$0–$300"
        }
      ],
      "total": "$300+",
      "footnote": "Exam-only; training is separate."
    },
    "difficulty": "Moderate",
    "audience": "Entry-level network engineers",
    "time": "2–4 months",
    "cost": "$300+",
    "salaryRange": "$60,000 – $90,000",
    "faqs": [
      {
        "q": "Is CCNA worth it?",
        "a": "For networking careers it remains one of the most recognised associate certifications and a prerequisite for many CCNP paths."
      },
      {
        "q": "How does it compare to Network+?",
        "a": "CCNA is deeper and Cisco-specific; Network+ is broader and vendor-neutral. Many learn Network+ first, then CCNA."
      },
      {
        "q": "Does CCNA expire?",
        "a": "Yes, after three years; recertify via exam, continuing education or a higher cert."
      }
    ],
    "summaryPoints": [
      "CCNA is the flagship Cisco associate cert.",
      "It covers routing, switching, security and automation.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "comptia-network-plus",
      "cisco-ccnp-enterprise"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccna/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccnp-enterprise",
    "body": "Cisco",
    "tagline": "Professional enterprise networking",
    "description": "CCNP Enterprise certifies professional-level skills across enterprise routing, switching, wireless and automation. It requires one core exam (ENCOR) plus one concentration exam.",
    "quickAnswer": {
      "summary": "CCNP Enterprise needs the ENCOR core exam (350-401) plus one concentration such as ENARSI, ENSLD or wireless.",
      "advantages": [
        "Professional level",
        "Flexible concentrations",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "No formal prerequisite, though CCNA-level knowledge is assumed.",
    "examMeta": {
      "questions": "90–110 (core)",
      "time": "120 minutes (core)",
      "pass": "~825 of 1000",
      "fee": "$400 per exam",
      "format": "Multiple-choice and simulations",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "ENCOR: architecture",
        "weight": "15%"
      },
      {
        "name": "ENCOR: virtualization",
        "weight": "10%"
      },
      {
        "name": "ENCOR: infrastructure",
        "weight": "30%"
      },
      {
        "name": "ENCOR: security",
        "weight": "20%"
      },
      {
        "name": "ENCOR: automation",
        "weight": "15%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "ENCOR 350-401"
      ],
      [
        "Plus",
        "1 concentration"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass ENCOR",
        "duration": "test day"
      },
      {
        "stage": "Pass a concentration",
        "duration": "test day"
      },
      {
        "stage": "Earn CCNP",
        "duration": "immediate"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "ENCOR",
          "fee": "$400"
        },
        {
          "item": "Concentration",
          "fee": "$300"
        }
      ],
      "total": "$700+",
      "footnote": "Each exam is paid separately."
    },
    "difficulty": "Hard",
    "audience": "Enterprise network engineers",
    "time": "4–8 months",
    "cost": "$700+",
    "salaryRange": "$80,000 – $120,000",
    "faqs": [
      {
        "q": "Which concentration should I pick?",
        "a": "ENARSI (advanced routing) is the most common; choose wireless, SD-WAN or design based on your role."
      },
      {
        "q": "Does CCNP expire?",
        "a": "Yes, after three years; recertify via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccnp-enterprise?",
        "a": "You register and schedule cisco-ccnp-enterprise through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccnp-enterprise exam format?",
        "a": "The exam is delivered as Multiple-choice and simulations, with about 90–110 (core) items, in 120 minutes (core). The published pass mark is ~825 of 1000."
      },
      {
        "q": "How long is the cisco-ccnp-enterprise certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccnp-enterprise cost?",
        "a": "The exam fee is $400 per exam. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "CCNP Enterprise = ENCOR core + 1 concentration.",
      "It is professional-level enterprise networking.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccna",
      "cisco-ccie-enterprise-infrastructure"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccnp-security",
    "body": "Cisco",
    "tagline": "Professional security engineering",
    "description": "CCNP Security certifies professional skills in securing Cisco networks, including firewall, VPN, intrusion and identity. It requires the SCOR core exam plus a concentration.",
    "quickAnswer": {
      "summary": "CCNP Security pairs the SCOR core (350-701) with a concentration such as SISE or SNCF.",
      "advantages": [
        "Professional security",
        "Maps to SecOps roles",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "CCNA-level networking and security knowledge assumed.",
    "examMeta": {
      "questions": "90–110 (core)",
      "time": "120 minutes (core)",
      "pass": "~825 of 1000",
      "fee": "$400 per exam",
      "format": "Multiple-choice and simulations",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "SCOR: perimeter security",
        "weight": "20%"
      },
      {
        "name": "SCOR: cloud/email/web security",
        "weight": "20%"
      },
      {
        "name": "SCOR: VPN and secure access",
        "weight": "20%"
      },
      {
        "name": "SCOR: analytics and visibility",
        "weight": "20%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "SCOR 350-701"
      ],
      [
        "Plus",
        "1 concentration"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass SCOR",
        "duration": "test day"
      },
      {
        "stage": "Pass a concentration",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "SCOR",
          "fee": "$400"
        },
        {
          "item": "Concentration",
          "fee": "$300"
        }
      ],
      "total": "$700+",
      "footnote": "Each exam paid separately."
    },
    "difficulty": "Hard",
    "audience": "Security engineers",
    "time": "4–8 months",
    "cost": "$700+",
    "salaryRange": "$90,000 – $130,000",
    "faqs": [
      {
        "q": "Is CCNP Security harder than CCNA?",
        "a": "Yes. It expects deeper, role-specific security knowledge and adds a concentration exam."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccnp-security?",
        "a": "You register and schedule cisco-ccnp-security through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccnp-security exam format?",
        "a": "The exam is delivered as Multiple-choice and simulations, with about 90–110 (core) items, in 120 minutes (core). The published pass mark is ~825 of 1000."
      },
      {
        "q": "How long is the cisco-ccnp-security certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccnp-security cost?",
        "a": "The exam fee is $400 per exam. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "CCNP Security = SCOR core + 1 concentration.",
      "It targets Cisco security technologies.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccna",
      "comptia-security-plus"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/security/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccnp-data-center",
    "body": "Cisco",
    "tagline": "Professional data-center networking",
    "description": "CCNP Data Center certifies skills in Cisco data-center technologies including unified computing, storage networking and automation, via the DCCOR core plus a concentration.",
    "quickAnswer": {
      "summary": "CCNP Data Center pairs the DCCOR core (350-601) with a concentration such as DCID or DCSM.",
      "advantages": [
        "Professional DC",
        "Automation included",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "CCNA-level knowledge assumed.",
    "examMeta": {
      "questions": "90–110 (core)",
      "time": "120 minutes (core)",
      "pass": "~825 of 1000",
      "fee": "$400 per exam",
      "format": "Multiple-choice and simulations",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "DCCOR: network",
        "weight": "25%"
      },
      {
        "name": "DCCOR: compute",
        "weight": "25%"
      },
      {
        "name": "DCCOR: storage",
        "weight": "20%"
      },
      {
        "name": "DCCOR: automation",
        "weight": "15%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "DCCOR 350-601"
      ],
      [
        "Plus",
        "1 concentration"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass DCCOR",
        "duration": "test day"
      },
      {
        "stage": "Pass a concentration",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "DCCOR",
          "fee": "$400"
        },
        {
          "item": "Concentration",
          "fee": "$300"
        }
      ],
      "total": "$700+",
      "footnote": "Each exam paid separately."
    },
    "difficulty": "Hard",
    "audience": "Data-center engineers",
    "time": "4–8 months",
    "cost": "$700+",
    "salaryRange": "$90,000 – $130,000",
    "faqs": [
      {
        "q": "Does it cover automation?",
        "a": "Yes, programmability and orchestration are part of the core blueprint."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccnp-data-center?",
        "a": "You register and schedule cisco-ccnp-data-center through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccnp-data-center exam format?",
        "a": "The exam is delivered as Multiple-choice and simulations, with about 90–110 (core) items, in 120 minutes (core). The published pass mark is ~825 of 1000."
      },
      {
        "q": "How long is the cisco-ccnp-data-center certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccnp-data-center cost?",
        "a": "The exam fee is $400 per exam. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "CCNP Data Center = DCCOR core + 1 concentration.",
      "It covers compute, storage and network.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccna"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/data-center/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccnp-collaboration",
    "body": "Cisco",
    "tagline": "Professional collaboration infrastructure",
    "description": "CCNP Collaboration certifies skills in Cisco collaboration technologies including unified communications, video and messaging, via the CLCOR core plus a concentration.",
    "quickAnswer": {
      "summary": "CCNP Collaboration pairs the CLCOR core (350-801) with a concentration such as CLICA or CLACCM.",
      "advantages": [
        "Professional collaboration",
        "Voice/video focus",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "CCNA-level knowledge assumed.",
    "examMeta": {
      "questions": "90–110 (core)",
      "time": "120 minutes (core)",
      "pass": "~825 of 1000",
      "fee": "$400 per exam",
      "format": "Multiple-choice and simulations",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "CLCOR: protocols",
        "weight": "25%"
      },
      {
        "name": "CLCOR: infrastructure",
        "weight": "25%"
      },
      {
        "name": "CLCOR: applications",
        "weight": "25%"
      },
      {
        "name": "CLCOR: QoS and security",
        "weight": "25%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "CLCOR 350-801"
      ],
      [
        "Plus",
        "1 concentration"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass CLCOR",
        "duration": "test day"
      },
      {
        "stage": "Pass a concentration",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "CLCOR",
          "fee": "$400"
        },
        {
          "item": "Concentration",
          "fee": "$300"
        }
      ],
      "total": "$700+",
      "footnote": "Each exam paid separately."
    },
    "difficulty": "Hard",
    "audience": "Collaboration engineers",
    "time": "4–8 months",
    "cost": "$700+",
    "salaryRange": "$85,000 – $125,000",
    "faqs": [
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccnp-collaboration?",
        "a": "You register and schedule cisco-ccnp-collaboration through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccnp-collaboration exam format?",
        "a": "The exam is delivered as Multiple-choice and simulations, with about 90–110 (core) items, in 120 minutes (core). The published pass mark is ~825 of 1000."
      },
      {
        "q": "How long is the cisco-ccnp-collaboration certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccnp-collaboration cost?",
        "a": "The exam fee is $400 per exam. Optional study materials and retakes are priced separately."
      },
      {
        "q": "Who should take cisco-ccnp-collaboration?",
        "a": "Collaboration engineers"
      }
    ],
    "summaryPoints": [
      "CCNP Collaboration = CLCOR core + 1 concentration.",
      "It covers voice, video and messaging.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccna"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/collaboration/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccnp-service-provider",
    "body": "Cisco",
    "tagline": "Professional service-provider networks",
    "description": "CCNP Service Provider certifies skills in architecting and operating service-provider networks, via the SPCOR core plus a concentration.",
    "quickAnswer": {
      "summary": "CCNP Service Provider pairs the SPCOR core (350-501) with a concentration such as SPRI or SPMOS.",
      "advantages": [
        "Professional SP",
        "Carrier-grade",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "CCNA-level knowledge assumed.",
    "examMeta": {
      "questions": "90–110 (core)",
      "time": "120 minutes (core)",
      "pass": "~825 of 1000",
      "fee": "$400 per exam",
      "format": "Multiple-choice and simulations",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "SPCOR: architecture",
        "weight": "20%"
      },
      {
        "name": "SPCOR: routing",
        "weight": "20%"
      },
      {
        "name": "SPCOR: MPLS",
        "weight": "20%"
      },
      {
        "name": "SPCOR: automation",
        "weight": "20%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "SPCOR 350-501"
      ],
      [
        "Plus",
        "1 concentration"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass SPCOR",
        "duration": "test day"
      },
      {
        "stage": "Pass a concentration",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "SPCOR",
          "fee": "$400"
        },
        {
          "item": "Concentration",
          "fee": "$300"
        }
      ],
      "total": "$700+",
      "footnote": "Each exam paid separately."
    },
    "difficulty": "Hard",
    "audience": "Service-provider engineers",
    "time": "4–8 months",
    "cost": "$700+",
    "salaryRange": "$95,000 – $135,000",
    "faqs": [
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccnp-service-provider?",
        "a": "You register and schedule cisco-ccnp-service-provider through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccnp-service-provider exam format?",
        "a": "The exam is delivered as Multiple-choice and simulations, with about 90–110 (core) items, in 120 minutes (core). The published pass mark is ~825 of 1000."
      },
      {
        "q": "How long is the cisco-ccnp-service-provider certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccnp-service-provider cost?",
        "a": "The exam fee is $400 per exam. Optional study materials and retakes are priced separately."
      },
      {
        "q": "Who should take cisco-ccnp-service-provider?",
        "a": "Service-provider engineers"
      }
    ],
    "summaryPoints": [
      "CCNP Service Provider = SPCOR core + 1 concentration.",
      "It covers MPLS and carrier routing.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccna"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/service-provider/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccnp-wireless",
    "body": "Cisco",
    "tagline": "Professional enterprise wireless",
    "description": "CCNP Enterprise with the wireless concentration (ENWLSI 300-430) certifies professional skills in Cisco wireless design, deployment and troubleshooting.",
    "quickAnswer": {
      "summary": "The wireless track is a CCNP Enterprise concentration (ENWLSI) layered on the ENCOR core, focusing on Cisco wireless LAN.",
      "advantages": [
        "Professional wireless",
        "ENCOR-based",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "CCNA-level knowledge assumed.",
    "examMeta": {
      "questions": "55–65 (concentration)",
      "time": "90 minutes",
      "pass": "~825 of 1000",
      "fee": "$300",
      "format": "Multiple-choice and simulations",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Wireless design",
        "weight": "25%"
      },
      {
        "name": "Deployment",
        "weight": "25%"
      },
      {
        "name": "Troubleshooting",
        "weight": "25%"
      },
      {
        "name": "Security",
        "weight": "25%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "ENCOR 350-401"
      ],
      [
        "Concentration",
        "ENWLSI 300-430"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass ENCOR",
        "duration": "test day"
      },
      {
        "stage": "Pass ENWLSI",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "ENCOR",
          "fee": "$400"
        },
        {
          "item": "ENWLSI",
          "fee": "$300"
        }
      ],
      "total": "$700+",
      "footnote": "Each exam paid separately."
    },
    "difficulty": "Hard",
    "audience": "Wireless network engineers",
    "time": "4–8 months",
    "cost": "$700+",
    "salaryRange": "$85,000 – $120,000",
    "faqs": [
      {
        "q": "Is wireless a separate CCNP?",
        "a": "It is a concentration within CCNP Enterprise, so you earn it alongside the ENCOR core."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccnp-wireless?",
        "a": "You register and schedule cisco-ccnp-wireless through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccnp-wireless exam format?",
        "a": "The exam is delivered as Multiple-choice and simulations, with about 55–65 (concentration) items, in 90 minutes. The published pass mark is ~825 of 1000."
      },
      {
        "q": "How long is the cisco-ccnp-wireless certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccnp-wireless cost?",
        "a": "The exam fee is $300. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "Wireless is a CCNP Enterprise concentration.",
      "It builds on the ENCOR core.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccnp-enterprise",
      "cisco-ccna"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccnp-automation",
    "body": "Cisco",
    "tagline": "Professional network automation",
    "description": "The automation concentration (ENAUTO 300-435) within CCNP Enterprise certifies software-driven network programmability and DevOps skills.",
    "quickAnswer": {
      "summary": "The automation track is a CCNP Enterprise concentration (ENAUTO) on the ENCOR core, covering programmability and model-driven APIs.",
      "advantages": [
        "Professional automation",
        "DEVNET aligned",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "CCNA-level knowledge and basic Python/API familiarity assumed.",
    "examMeta": {
      "questions": "55–65 (concentration)",
      "time": "90 minutes",
      "pass": "~825 of 1000",
      "fee": "$300",
      "format": "Multiple-choice and simulations",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Network programmability",
        "weight": "30%"
      },
      {
        "name": "Model-driven APIs",
        "weight": "30%"
      },
      {
        "name": "Telemetry and automation",
        "weight": "40%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "ENCOR 350-401"
      ],
      [
        "Concentration",
        "ENAUTO 300-435"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass ENCOR",
        "duration": "test day"
      },
      {
        "stage": "Pass ENAUTO",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "ENCOR",
          "fee": "$400"
        },
        {
          "item": "ENAUTO",
          "fee": "$300"
        }
      ],
      "total": "$700+",
      "footnote": "Each exam paid separately."
    },
    "difficulty": "Hard",
    "audience": "Network automation engineers",
    "time": "4–8 months",
    "cost": "$700+",
    "salaryRange": "$95,000 – $135,000",
    "faqs": [
      {
        "q": "Do I need coding for this?",
        "a": "Basic Python and REST/JSON API comfort help a lot; the exam is practical about programmability."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccnp-automation?",
        "a": "You register and schedule cisco-ccnp-automation through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccnp-automation exam format?",
        "a": "The exam is delivered as Multiple-choice and simulations, with about 55–65 (concentration) items, in 90 minutes. The published pass mark is ~825 of 1000."
      },
      {
        "q": "How long is the cisco-ccnp-automation certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccnp-automation cost?",
        "a": "The exam fee is $300. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "Automation is a CCNP Enterprise concentration.",
      "It builds on ENCOR with DEVNET skills.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccnp-enterprise",
      "cisco-ccna"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccnp-cybersecurity",
    "body": "Cisco",
    "tagline": "Cisco's professional-level security certification proving you can design and operate enterprise security at scale.",
    "description": "The Cisco Certified Network Professional (CCNP) Cybersecurity - built on the CCNP Security track - is Cisco's professional-level security certification. It requires passing the core exam Implementing and Operating Cisco Security Core Technologies (350-701 SCOR) plus one concentration exam (such as Securing Networks with Cisco Firepower 300-710 SNCF, Cisco Identity Services Engine 300-715 SISE, or Secure Solutions with VPNs 300-730 SVPN). SCOR validates core security technologies - security concepts, network/cloud security, secure service edge, endpoint protection, and network access/visibility - while the concentration proves depth in a chosen specialty. Earning it opens senior roles such as Security Engineer, Senior SOC Analyst, and Security Architect, and the SCOR core also satisfies the written prerequisite for the expert-level CCIE Security.",
    "quickAnswer": {
      "summary": "CCNP Cybersecurity (CCNP Security) requires two exams: the 350-701 SCOR core (120 min, US$400) plus one concentration exam (US$300). Delivered by Pearson VUE, the full certification is valid 3 years and signals professional-level security engineering expertise.",
      "advantages": [
        "Professional-tier Cisco credential recognized for senior security roles",
        "SCOR core alone earns the 'Cisco Certified Specialist - Security Core' badge",
        "SCOR also satisfies the CCIE Security written prerequisite",
        "Choose a concentration that matches your specialty (firewall, ISE, VPN, email/web, automation)",
        "Maps directly to real-world enterprise security engineering duties"
      ]
    },
    "prerequisites": "No enforced prerequisite. Cisco recommends CCNA-level networking knowledge and 3-5 years of experience implementing security technologies, but neither is required to sit the exams.",
    "examMeta": {
      "questions": "SCOR: variable multiple-choice, drag-and-drop, and performance-based questions (Cisco does not publish an exact count). Concentrations vary similarly.",
      "time": "120 minutes per exam (SCOR and each concentration)",
      "pass": "Cisco does not publish a fixed passing score; results use a scaled 300-1000 range with the statistical cut score typically around 750-850. Pass/fail is reported with a section-level breakdown.",
      "fee": "Core exam 350-701 SCOR: US$400. Each concentration exam (300-xxx): US$300. Total US$700 for the full certification (plus tax; redeemable with Cisco Learning Credits).",
      "format": "Proctored, computer-based - Pearson VUE test center or online via OnVUE",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Security Concepts (SCOR core)",
        "note": "Threats across on-prem/hybrid/cloud, vulnerabilities/exploits, cryptography, VPN types, zero trust, defense-in-depth, security APIs.",
        "weight": "20%"
      },
      {
        "name": "Network Security (SCOR core)",
        "note": "Firewalls/IPS, telemetry, L2 security, AAA, secure management, Cisco Secure Firewall (FTD) policies and VPNs.",
        "weight": "25%"
      },
      {
        "name": "Cloud Security (SCOR core)",
        "note": "Shared-responsibility models, cloud security solutions/frameworks, DevSecOps, Splunk cloud logging.",
        "weight": "15%"
      },
      {
        "name": "Secure Service Edge (SCOR core)",
        "note": "SSE/SASE concepts, Cisco Secure Access secure internet/private access, DLP and AI guardrails.",
        "weight": "10%"
      },
      {
        "name": "Endpoint Protection and Detection (SCOR core)",
        "note": "EPP vs EDR, posture assessment, Cisco Secure Endpoint/Client, email threat defense.",
        "weight": "15%"
      },
      {
        "name": "Network Access, Visibility, and Enforcement (SCOR core)",
        "note": "Identity/NAC (802.1X, MAB, ISE), exfiltration techniques, XDR/SIEM/SOAR, Cisco Duo zero trust.",
        "weight": "15%"
      }
    ],
    "examEssentials": [
      [
        "Credential",
        "Cisco Certified Network Professional (CCNP) Cybersecurity / CCNP Security"
      ],
      [
        "Required exams",
        "350-701 SCOR (core) + 1 concentration (e.g., 300-710 SNCF)"
      ],
      [
        "Level",
        "Professional"
      ],
      [
        "Duration / per exam",
        "120 minutes"
      ],
      [
        "Exam fee",
        "US$400 (core) + US$300 (concentration) = US$700"
      ],
      [
        "Validity",
        "3 years"
      ]
    ],
    "timeline": [
      [
        "Assess baseline & choose concentration",
        "1 week"
      ],
      [
        "Study & lab SCOR core",
        "8-12 weeks"
      ],
      [
        "Pass 350-701 SCOR",
        "Exam day"
      ],
      [
        "Study chosen concentration",
        "4-8 weeks"
      ],
      [
        "Pass concentration exam",
        "Exam day"
      ],
      [
        "Claim CCNP & plan renewal",
        "Within 48 hours"
      ]
    ],
    "costBreakdown": {
      "items": [
        [
          "350-701 SCOR core exam",
          "US$400"
        ],
        [
          "One concentration exam (300-xxx)",
          "US$300"
        ],
        [
          "Official Cisco U. training (optional)",
          "US$0-$1,000+"
        ],
        [
          "Retake (per exam, if needed)",
          "US$400 / US$300"
        ]
      ],
      "total": "US$700 (two exams; training optional)",
      "footnote": "Cisco Learning Credits can cover exam fees. Prices exclude tax and may vary by region. Concentration choice does not change the fee."
    },
    "difficulty": "Challenging",
    "audience": "Experienced network/security engineers, security operations engineers, and SOC analysts targeting senior or architect roles; candidates pursuing CCIE Security.",
    "time": "Approximately 4-8 months total (roughly 150-250 hours across both exams).",
    "cost": "US$700 (two exams); optional training US$0-$2,000.",
    "salaryRange": "$90,000 – $130,000",
    "faqs": [
      {
        "q": "How many exams do I need for CCNP Cybersecurity?",
        "a": "Two: the mandatory core exam 350-701 SCOR (US$400) and one concentration exam (US$300) of your choice. Passing both earns CCNP Security. The SCOR core alone earns the Cisco Certified Specialist - Security Core badge."
      },
      {
        "q": "Which concentration exam should I choose?",
        "a": "Pick the one matching your job: 300-710 SNCF (Cisco Firepower), 300-715 SISE (Identity Services Engine), 300-720 SESA (Email Security), 300-725 SWSA (Web Security), 300-730 SVPN (VPNs), or 300-735 SAUCI (security automation). All cost US$300."
      },
      {
        "q": "Is CCNA required before CCNP Security?",
        "a": "No. Cisco removed the formal CCNA prerequisite in 2020. CCNA-level networking knowledge is recommended, and 3-5 years of security implementation experience is suggested, but neither is enforced to sit the exams."
      },
      {
        "q": "How is CCNP Security different from the CCIE Security?",
        "a": "CCNP Security is the professional tier (core + one concentration, both written/computer-based). CCIE Security is the expert tier and requires passing SCOR as the qualifying written exam plus an 8-hour hands-on lab. SCOR thus feeds both."
      },
      {
        "q": "What score do I need to pass SCOR and the concentration?",
        "a": "Cisco does not publish a fixed passing score. Results use a scaled 300-1000 range with the statistical cut score typically around 750-850, reported as pass/fail with a section-level breakdown."
      }
    ],
    "summaryPoints": [
      "Professional security cert = SCOR 350-701 core (US$400) + 1 concentration (US$300) = US$700, 120 min each.",
      "SCOR v2.0 domains: Network Security heaviest at 25%; SSE lightest at 10%; total 100%.",
      "No enforced CCNA prerequisite; 3-5 years experience recommended.",
      "Valid 3 years; SCOR core also unlocks the CCIE Security written prerequisite."
    ],
    "relatedSlugs": [
      "cisco-ccnp-security",
      "comptia-cysa-plus"
    ],
    "sourceUrl": "https://learningnetwork.cisco.com/s/scor-v2-exam-topics",
    "reviewed": "2026-08",
    "confidence": "high",
    "roadmap": [
      "Confirm CCNA-level networking knowledge (recommended, not required)",
      "Pass the 350-701 SCOR core exam (US$400)",
      "Pick a concentration exam matching your role (e.g., 300-710 SNCF)",
      "Prepare with Cisco U. SCOR + concentration courses and labs",
      "Schedule and pass the concentration exam via Pearson VUE",
      "Claim CCNP Security and plan renewal/CCIE Security path"
    ],
    "eligibility": "Open to all candidates; anyone may register for the SCOR core and a concentration exam through Pearson VUE."
  },
  {
    "slug": "cisco-ccie-enterprise-infrastructure",
    "body": "Cisco",
    "tagline": "The expert-level networking credential",
    "description": "The CCIE Enterprise Infrastructure is Cisco top expert certification, proving end-to-end enterprise network design and operation through a core exam plus an eight-hour hands-on lab.",
    "quickAnswer": {
      "summary": "CCIE Enterprise Infrastructure requires the ENCOR core plus an 8-hour, hands-on lab covering routing, switching, services and automation.",
      "advantages": [
        "Expert level",
        "Hands-on lab",
        "Highest industry prestige"
      ]
    },
    "prerequisites": "No formal prerequisite, but several years of experience are expected; CCNP recommended.",
    "examMeta": {
      "questions": "Core written + 8-hour lab",
      "time": "Lab: 8 hours",
      "pass": "Core ~825/1000; lab pass set per session",
      "fee": "$450 core + ~$1,600 lab",
      "format": "Written + practical lab",
      "admin": "Pearson VUE / Cisco lab"
    },
    "topics": [
      {
        "name": "Infrastructure",
        "weight": "30%"
      },
      {
        "name": "Services",
        "weight": "25%"
      },
      {
        "name": "Automation",
        "weight": "20%"
      },
      {
        "name": "Integration",
        "weight": "25%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "ENCOR 350-401"
      ],
      [
        "Lab",
        "8 hours"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass ENCOR",
        "duration": "test day"
      },
      {
        "stage": "Train for the lab",
        "duration": "3–12 months"
      },
      {
        "stage": "Pass 8-hour lab",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Core exam",
          "fee": "$450"
        },
        {
          "item": "Lab attempt",
          "fee": "~$1,600"
        }
      ],
      "total": "~$2,050+",
      "footnote": "Each lab attempt is paid separately; retakes cost again."
    },
    "difficulty": "Very Hard",
    "audience": "Expert network architects",
    "time": "9–18 months",
    "cost": "~$2,050+",
    "salaryRange": "$130,000 – $180,000",
    "faqs": [
      {
        "q": "How hard is the CCIE lab?",
        "a": "It is one of the hardest IT exams: an eight-hour, performance-based lab requiring deep, real-world expertise."
      },
      {
        "q": "Do I need CCNP first?",
        "a": "Not required, but most candidates earn CCNP first because the lab assumes that depth."
      },
      {
        "q": "Does CCIE expire?",
        "a": "Yes, after three years; recertify via exam, continuing education or re-taking the lab."
      }
    ],
    "summaryPoints": [
      "CCIE is Cisco expert-level certification.",
      "It requires a core exam plus an 8-hour lab.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccnp-enterprise",
      "cisco-ccna"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/ccie-enterprise-infrastructure/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccie-security",
    "body": "Cisco",
    "tagline": "Expert-level security certification",
    "description": "CCIE Security certifies expert ability to design, deploy and operate Cisco security solutions end to end, via the SCOR core plus an eight-hour hands-on lab.",
    "quickAnswer": {
      "summary": "CCIE Security requires the SCOR core plus an 8-hour lab covering firewall, VPN, identity, intrusion and management.",
      "advantages": [
        "Expert security",
        "Hands-on lab",
        "Top-tier prestige"
      ]
    },
    "prerequisites": "Several years of security experience expected.",
    "examMeta": {
      "questions": "Core written + 8-hour lab",
      "time": "Lab: 8 hours",
      "pass": "Core ~825/1000; lab pass set per session",
      "fee": "$450 core + ~$1,600 lab",
      "format": "Written + practical lab",
      "admin": "Pearson VUE / Cisco lab"
    },
    "topics": [
      {
        "name": "Perimeter and core security",
        "weight": "30%"
      },
      {
        "name": "VPN and secure access",
        "weight": "25%"
      },
      {
        "name": "Identity and management",
        "weight": "25%"
      },
      {
        "name": "Automation",
        "weight": "20%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "SCOR 350-701"
      ],
      [
        "Lab",
        "8 hours"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass SCOR",
        "duration": "test day"
      },
      {
        "stage": "Lab preparation",
        "duration": "3–12 months"
      },
      {
        "stage": "Pass lab",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Core exam",
          "fee": "$450"
        },
        {
          "item": "Lab attempt",
          "fee": "~$1,600"
        }
      ],
      "total": "~$2,050+",
      "footnote": "Lab retakes are paid separately."
    },
    "difficulty": "Very Hard",
    "audience": "Expert security architects",
    "time": "9–18 months",
    "cost": "~$2,050+",
    "salaryRange": "$135,000 – $185,000",
    "faqs": [
      {
        "q": "Does CCIE Security expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How long to prepare for the lab?",
        "a": "Most candidates invest many months of lab practice on top of the core exam."
      },
      {
        "q": "How do I register for cisco-ccie-security?",
        "a": "You register and schedule cisco-ccie-security through Pearson VUE / Cisco lab. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccie-security exam format?",
        "a": "The exam is delivered as Written + practical lab, with about Core written + 8-hour lab items, in Lab: 8 hours. The published pass mark is Core ~825/1000; lab pass set per session."
      },
      {
        "q": "How long is the cisco-ccie-security certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccie-security cost?",
        "a": "The exam fee is $450 core + ~$1,600 lab. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "CCIE Security is expert-level.",
      "It needs a core exam plus an 8-hour lab.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccnp-security",
      "comptia-securityx"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/ccie-security/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccie-data-center",
    "body": "Cisco",
    "tagline": "Expert data-center certification",
    "description": "CCIE Data Center certifies expert-level design and operation of Cisco data-center solutions through the DCCOR core plus an eight-hour lab.",
    "quickAnswer": {
      "summary": "CCIE Data Center requires DCCOR plus an 8-hour lab covering compute, network, storage and automation.",
      "advantages": [
        "Expert DC",
        "Hands-on lab",
        "Top-tier prestige"
      ]
    },
    "prerequisites": "Several years of data-center experience expected.",
    "examMeta": {
      "questions": "Core written + 8-hour lab",
      "time": "Lab: 8 hours",
      "pass": "Core ~825/1000; lab pass set per session",
      "fee": "$450 core + ~$1,600 lab",
      "format": "Written + practical lab",
      "admin": "Pearson VUE / Cisco lab"
    },
    "topics": [
      {
        "name": "Compute",
        "weight": "25%"
      },
      {
        "name": "Network",
        "weight": "25%"
      },
      {
        "name": "Storage",
        "weight": "25%"
      },
      {
        "name": "Automation",
        "weight": "25%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "DCCOR 350-601"
      ],
      [
        "Lab",
        "8 hours"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass DCCOR",
        "duration": "test day"
      },
      {
        "stage": "Lab preparation",
        "duration": "3–12 months"
      },
      {
        "stage": "Pass lab",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Core exam",
          "fee": "$450"
        },
        {
          "item": "Lab attempt",
          "fee": "~$1,600"
        }
      ],
      "total": "~$2,050+",
      "footnote": "Lab retakes paid separately."
    },
    "difficulty": "Very Hard",
    "audience": "Expert data-center architects",
    "time": "9–18 months",
    "cost": "~$2,050+",
    "salaryRange": "$135,000 – $185,000",
    "faqs": [
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccie-data-center?",
        "a": "You register and schedule cisco-ccie-data-center through Pearson VUE / Cisco lab. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccie-data-center exam format?",
        "a": "The exam is delivered as Written + practical lab, with about Core written + 8-hour lab items, in Lab: 8 hours. The published pass mark is Core ~825/1000; lab pass set per session."
      },
      {
        "q": "How long is the cisco-ccie-data-center certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccie-data-center cost?",
        "a": "The exam fee is $450 core + ~$1,600 lab. Optional study materials and retakes are priced separately."
      },
      {
        "q": "Who should take cisco-ccie-data-center?",
        "a": "Expert data-center architects"
      }
    ],
    "summaryPoints": [
      "CCIE Data Center is expert-level.",
      "It needs DCCOR plus an 8-hour lab.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccnp-data-center"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/ccie-data-center/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccie-collaboration",
    "body": "Cisco",
    "tagline": "Expert collaboration certification",
    "description": "CCIE Collaboration certifies expert skills in Cisco collaboration infrastructure through the CLCOR core plus an eight-hour lab.",
    "quickAnswer": {
      "summary": "CCIE Collaboration requires CLCOR plus an 8-hour lab covering calling, messaging, video and conferencing.",
      "advantages": [
        "Expert collaboration",
        "Hands-on lab",
        "Top-tier prestige"
      ]
    },
    "prerequisites": "Several years of collaboration experience expected.",
    "examMeta": {
      "questions": "Core written + 8-hour lab",
      "time": "Lab: 8 hours",
      "pass": "Core ~825/1000; lab pass set per session",
      "fee": "$450 core + ~$1,600 lab",
      "format": "Written + practical lab",
      "admin": "Pearson VUE / Cisco lab"
    },
    "topics": [
      {
        "name": "Infrastructure",
        "weight": "30%"
      },
      {
        "name": "Call control",
        "weight": "25%"
      },
      {
        "name": "Applications",
        "weight": "25%"
      },
      {
        "name": "Troubleshooting",
        "weight": "20%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "CLCOR 350-801"
      ],
      [
        "Lab",
        "8 hours"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass CLCOR",
        "duration": "test day"
      },
      {
        "stage": "Lab preparation",
        "duration": "3–12 months"
      },
      {
        "stage": "Pass lab",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Core exam",
          "fee": "$450"
        },
        {
          "item": "Lab attempt",
          "fee": "~$1,600"
        }
      ],
      "total": "~$2,050+",
      "footnote": "Lab retakes paid separately."
    },
    "difficulty": "Very Hard",
    "audience": "Expert collaboration architects",
    "time": "9–18 months",
    "cost": "~$2,050+",
    "salaryRange": "$130,000 – $180,000",
    "faqs": [
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccie-collaboration?",
        "a": "You register and schedule cisco-ccie-collaboration through Pearson VUE / Cisco lab. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccie-collaboration exam format?",
        "a": "The exam is delivered as Written + practical lab, with about Core written + 8-hour lab items, in Lab: 8 hours. The published pass mark is Core ~825/1000; lab pass set per session."
      },
      {
        "q": "How long is the cisco-ccie-collaboration certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccie-collaboration cost?",
        "a": "The exam fee is $450 core + ~$1,600 lab. Optional study materials and retakes are priced separately."
      },
      {
        "q": "Who should take cisco-ccie-collaboration?",
        "a": "Expert collaboration architects"
      }
    ],
    "summaryPoints": [
      "CCIE Collaboration is expert-level.",
      "It needs CLCOR plus an 8-hour lab.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccnp-collaboration"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/ccie-collaboration/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccie-service-provider",
    "body": "Cisco",
    "tagline": "Expert service-provider certification",
    "description": "CCIE Service Provider certifies expert skills in carrier-grade networks through the SPCOR core plus an eight-hour lab.",
    "quickAnswer": {
      "summary": "CCIE Service Provider requires SPCOR plus an 8-hour lab covering routing, MPLS, VPN and automation at scale.",
      "advantages": [
        "Expert SP",
        "Hands-on lab",
        "Top-tier prestige"
      ]
    },
    "prerequisites": "Several years of service-provider experience expected.",
    "examMeta": {
      "questions": "Core written + 8-hour lab",
      "time": "Lab: 8 hours",
      "pass": "Core ~825/1000; lab pass set per session",
      "fee": "$450 core + ~$1,600 lab",
      "format": "Written + practical lab",
      "admin": "Pearson VUE / Cisco lab"
    },
    "topics": [
      {
        "name": "Routing",
        "weight": "30%"
      },
      {
        "name": "MPLS/VPN",
        "weight": "30%"
      },
      {
        "name": "Automation",
        "weight": "20%"
      },
      {
        "name": "Operations",
        "weight": "20%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "SPCOR 350-501"
      ],
      [
        "Lab",
        "8 hours"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass SPCOR",
        "duration": "test day"
      },
      {
        "stage": "Lab preparation",
        "duration": "3–12 months"
      },
      {
        "stage": "Pass lab",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Core exam",
          "fee": "$450"
        },
        {
          "item": "Lab attempt",
          "fee": "~$1,600"
        }
      ],
      "total": "~$2,050+",
      "footnote": "Lab retakes paid separately."
    },
    "difficulty": "Very Hard",
    "audience": "Expert SP architects",
    "time": "9–18 months",
    "cost": "~$2,050+",
    "salaryRange": "$135,000 – $185,000",
    "faqs": [
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccie-service-provider?",
        "a": "You register and schedule cisco-ccie-service-provider through Pearson VUE / Cisco lab. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccie-service-provider exam format?",
        "a": "The exam is delivered as Written + practical lab, with about Core written + 8-hour lab items, in Lab: 8 hours. The published pass mark is Core ~825/1000; lab pass set per session."
      },
      {
        "q": "How long is the cisco-ccie-service-provider certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccie-service-provider cost?",
        "a": "The exam fee is $450 core + ~$1,600 lab. Optional study materials and retakes are priced separately."
      },
      {
        "q": "Who should take cisco-ccie-service-provider?",
        "a": "Expert SP architects"
      }
    ],
    "summaryPoints": [
      "CCIE Service Provider is expert-level.",
      "It needs SPCOR plus an 8-hour lab.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccnp-service-provider"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/ccie-service-provider/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccie-enterprise-wireless",
    "body": "Cisco",
    "tagline": "Expert enterprise wireless",
    "description": "CCIE Enterprise Wireless certifies expert skills in Cisco wireless design and operation through the ENCOR core plus an eight-hour lab.",
    "quickAnswer": {
      "summary": "CCIE Enterprise Wireless requires ENCOR plus an 8-hour lab covering RF, design, deployment and troubleshooting.",
      "advantages": [
        "Expert wireless",
        "Hands-on lab",
        "Top-tier prestige"
      ]
    },
    "prerequisites": "Several years of wireless experience expected.",
    "examMeta": {
      "questions": "Core written + 8-hour lab",
      "time": "Lab: 8 hours",
      "pass": "Core ~825/1000; lab pass set per session",
      "fee": "$450 core + ~$1,600 lab",
      "format": "Written + practical lab",
      "admin": "Pearson VUE / Cisco lab"
    },
    "topics": [
      {
        "name": "RF and design",
        "weight": "30%"
      },
      {
        "name": "Deployment",
        "weight": "30%"
      },
      {
        "name": "Troubleshooting",
        "weight": "25%"
      },
      {
        "name": "Security",
        "weight": "15%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "ENCOR 350-401"
      ],
      [
        "Lab",
        "8 hours"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass ENCOR",
        "duration": "test day"
      },
      {
        "stage": "Lab preparation",
        "duration": "3–12 months"
      },
      {
        "stage": "Pass lab",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Core exam",
          "fee": "$450"
        },
        {
          "item": "Lab attempt",
          "fee": "~$1,600"
        }
      ],
      "total": "~$2,050+",
      "footnote": "Lab retakes paid separately."
    },
    "difficulty": "Very Hard",
    "audience": "Expert wireless architects",
    "time": "9–18 months",
    "cost": "~$2,050+",
    "salaryRange": "$130,000 – $180,000",
    "faqs": [
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccie-enterprise-wireless?",
        "a": "You register and schedule cisco-ccie-enterprise-wireless through Pearson VUE / Cisco lab. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccie-enterprise-wireless exam format?",
        "a": "The exam is delivered as Written + practical lab, with about Core written + 8-hour lab items, in Lab: 8 hours. The published pass mark is Core ~825/1000; lab pass set per session."
      },
      {
        "q": "How long is the cisco-ccie-enterprise-wireless certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccie-enterprise-wireless cost?",
        "a": "The exam fee is $450 core + ~$1,600 lab. Optional study materials and retakes are priced separately."
      },
      {
        "q": "Who should take cisco-ccie-enterprise-wireless?",
        "a": "Expert wireless architects"
      }
    ],
    "summaryPoints": [
      "CCIE Enterprise Wireless is expert-level.",
      "It needs ENCOR plus an 8-hour lab.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccnp-wireless",
      "cisco-ccie-enterprise-infrastructure"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/ccie-enterprise-wireless/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccie-automation",
    "body": "Cisco",
    "tagline": "Expert network automation",
    "description": "CCIE DevNet Expert certifies expert software and automation skills across Cisco platforms through a core plus an eight-hour lab.",
    "quickAnswer": {
      "summary": "CCIE DevNet Expert requires a core exam plus an 8-hour lab covering programmability, APIs and automation.",
      "advantages": [
        "Expert automation",
        "Hands-on lab",
        "Top-tier prestige"
      ]
    },
    "prerequisites": "Strong software and networking background expected.",
    "examMeta": {
      "questions": "Core written + 8-hour lab",
      "time": "Lab: 8 hours",
      "pass": "Core ~825/1000; lab pass set per session",
      "fee": "$450 core + ~$1,600 lab",
      "format": "Written + practical lab",
      "admin": "Pearson VUE / Cisco lab"
    },
    "topics": [
      {
        "name": "Software design",
        "weight": "30%"
      },
      {
        "name": "APIs",
        "weight": "30%"
      },
      {
        "name": "Automation",
        "weight": "25%"
      },
      {
        "name": "Infrastructure",
        "weight": "15%"
      }
    ],
    "examEssentials": [
      [
        "Core",
        "DEVCORE"
      ],
      [
        "Lab",
        "8 hours"
      ]
    ],
    "timeline": [
      {
        "stage": "Pass core",
        "duration": "test day"
      },
      {
        "stage": "Lab preparation",
        "duration": "3–12 months"
      },
      {
        "stage": "Pass lab",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Core exam",
          "fee": "$450"
        },
        {
          "item": "Lab attempt",
          "fee": "~$1,600"
        }
      ],
      "total": "~$2,050+",
      "footnote": "Lab retakes paid separately."
    },
    "difficulty": "Very Hard",
    "audience": "Expert network developers",
    "time": "9–18 months",
    "cost": "~$2,050+",
    "salaryRange": "$135,000 – $185,000",
    "faqs": [
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via exam or continuing education."
      },
      {
        "q": "How do I register for cisco-ccie-automation?",
        "a": "You register and schedule cisco-ccie-automation through Pearson VUE / Cisco lab. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccie-automation exam format?",
        "a": "The exam is delivered as Written + practical lab, with about Core written + 8-hour lab items, in Lab: 8 hours. The published pass mark is Core ~825/1000; lab pass set per session."
      },
      {
        "q": "How long is the cisco-ccie-automation certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccie-automation cost?",
        "a": "The exam fee is $450 core + ~$1,600 lab. Optional study materials and retakes are priced separately."
      },
      {
        "q": "Who should take cisco-ccie-automation?",
        "a": "Expert network developers"
      }
    ],
    "summaryPoints": [
      "CCIE DevNet Expert is expert-level automation.",
      "It needs a core plus an 8-hour lab.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccnp-automation"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/ccie-devnet-expert/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccst-networking",
    "body": "Cisco",
    "tagline": "Entry-level networking support",
    "description": "The Cisco Certified Support Technician (CCST) Networking validates basic networking knowledge for help-desk and technical-support roles.",
    "quickAnswer": {
      "summary": "CCST Networking (CSTN) is an entry exam covering networking fundamentals, protocols and basic troubleshooting.",
      "advantages": [
        "Entry level",
        "Good first step",
        "Renews every 3 years"
      ]
    },
    "prerequisites": "Basic computer literacy.",
    "examMeta": {
      "questions": "40–50",
      "time": "50 minutes",
      "pass": "Set per exam",
      "fee": "$125",
      "format": "Multiple-choice",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Networking fundamentals",
        "weight": "35%"
      },
      {
        "name": "Protocols",
        "weight": "30%"
      },
      {
        "name": "Troubleshooting",
        "weight": "35%"
      }
    ],
    "examEssentials": [
      [
        "Level",
        "Support Technician"
      ],
      [
        "Renewal",
        "Every 3 years"
      ]
    ],
    "timeline": [
      {
        "stage": "Study",
        "duration": "2–4 weeks"
      },
      {
        "stage": "Sit CSTN",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "$125"
        }
      ],
      "total": "$125+",
      "footnote": "Entry-level exam."
    },
    "difficulty": "Easy",
    "audience": "Help-desk and support staff",
    "time": "1 month",
    "cost": "$125+",
    "salaryRange": "$40,000 – $60,000",
    "faqs": [
      {
        "q": "Is CCST a step toward CCNA?",
        "a": "It is a good introduction; CCNA is the next, more technical step."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after three years via continuing education."
      },
      {
        "q": "How do I register for cisco-ccst-networking?",
        "a": "You register and schedule cisco-ccst-networking through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the cisco-ccst-networking exam format?",
        "a": "The exam is delivered as Multiple-choice, with about 40–50 items, in 50 minutes. The published pass mark is Set per exam."
      },
      {
        "q": "How long is the cisco-ccst-networking certification valid?",
        "a": "All Cisco certifications are valid for three years and renewed through re-examination, continuing education credits or higher-level passes."
      },
      {
        "q": "How much does cisco-ccst-networking cost?",
        "a": "The exam fee is $125. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "CCST Networking is an entry cert.",
      "It covers networking basics and support.",
      "It renews every three years."
    ],
    "relatedSlugs": [
      "cisco-ccna",
      "comptia-network-plus"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/cisco-certified-support-technician-networking/index.html",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "cisco-ccst-cybersecurity",
    "body": "Cisco",
    "tagline": "Cisco's entry-level cybersecurity credential that proves foundational security knowledge for students and career starters.",
    "description": "The Cisco Certified Support Technician (CCST) Cybersecurity - exam 100-160 - is Cisco's foundational, entry-level security certification, sitting below the Associate (CCNA/CyberOps) tier. It validates basic but practical cybersecurity concepts: essential security principles, network and endpoint security, vulnerability assessment/risk management, and incident handling. It is designed for students, career changers, and help-desk/IT-support staff with no prior experience, and it is explicitly positioned by Cisco as a first step toward the Cybersecurity Associate (CyberOps) certification. Passing it supports entry-level roles such as cybersecurity technician, Tier-1 help-desk support, and junior security analyst.",
    "quickAnswer": {
      "summary": "CCST Cybersecurity (exam 100-160) is Cisco's foundational cybersecurity certification. It is a short, 50-minute, ~50-question exam costing US$125, delivered by Pearson VUE/Certiport, with no prerequisites - ideal as a first step into a security career.",
      "advantages": [
        "Low-cost, low-barrier entry into cybersecurity (US$125, no experience required)",
        "Recognized Cisco credential that builds confidence before pricier exams",
        "Aligned to free Cisco Networking Academy introductory courses",
        "Clear stepping stone toward CyberOps Associate / CCNA Cybersecurity",
        "Available in many languages and online or at test centers"
      ]
    },
    "prerequisites": "No formal prerequisites. Cisco recommends about 150 hours of cybersecurity-related instruction or equivalent hands-on practice, but prior IT experience is not required.",
    "examMeta": {
      "questions": "Approximately 50 multiple-choice and multi-select questions (some with short case-based context)",
      "time": "50 minutes",
      "pass": "Cisco does not publish a fixed numeric passing score; candidates receive a pass/fail result. Prep providers commonly estimate a ~70% scaled threshold, but this is not an official Cisco figure.",
      "fee": "US$125 (plus applicable tax; regional pricing may differ).",
      "format": "Proctored, computer-based - Pearson VUE/Certiport test center or online proctoring",
      "admin": "Pearson VUE / Certiport"
    },
    "topics": [
      {
        "name": "Essential Security Principles",
        "note": "CIA triad, threats/vulnerabilities/risks, access management (AAA, MFA), encryption basics, ethics.",
        "weight": "22%"
      },
      {
        "name": "Basic Network Security Concepts",
        "note": "TCP/IP weaknesses, network addressing/segmentation, infrastructure (IDS/IPS, proxy, DMZ), secure wireless, ACL/firewall/VPN/NAC.",
        "weight": "20%"
      },
      {
        "name": "Endpoint Security Concepts",
        "note": "OS security (Windows/macOS/Linux), endpoint assessment tools, policy compliance, updates/patching, malware removal.",
        "weight": "19%"
      },
      {
        "name": "Vulnerability Assessment and Risk Management",
        "note": "Vulnerability management, threat intelligence (CVEs, TI feeds), risk formulas, frameworks (NIST RMF).",
        "weight": "22%"
      },
      {
        "name": "Incident Handling",
        "note": "NIST SP 800-61 IR lifecycle, evidence/chain-of-custody, order of volatility, SIEM/log review basics.",
        "weight": "17%"
      }
    ],
    "examEssentials": [
      [
        "Credential",
        "Cisco Certified Support Technician (CCST) Cybersecurity"
      ],
      [
        "Exam code",
        "100-160 CCST Cybersecurity"
      ],
      [
        "Level",
        "Foundational / Entry (below Associate)"
      ],
      [
        "Duration / Questions",
        "50 minutes / ~50 questions"
      ],
      [
        "Exam fee",
        "US$125"
      ],
      [
        "Validity",
        "3 years"
      ]
    ],
    "timeline": [
      [
        "Assess baseline & gather materials",
        "2-3 days"
      ],
      [
        "Study the 5 domains (NetAcad course)",
        "3-4 weeks"
      ],
      [
        "Practice exams & labs",
        "1 week"
      ],
      [
        "Schedule & sit the exam",
        "Exam day"
      ],
      [
        "Result & badge issuance",
        "Within 48 hours"
      ]
    ],
    "costBreakdown": {
      "items": [
        [
          "100-160 CCST Cybersecurity exam fee",
          "US$125"
        ],
        [
          "Free Cisco NetAcad intro courses",
          "US$0"
        ],
        [
          "Optional third-party practice tests/books",
          "US$0-$50"
        ],
        [
          "Retake (if needed)",
          "US$125"
        ]
      ],
      "total": "US$125 (exam only)",
      "footnote": "Free official-aligned training is available via Cisco Networking Academy. Fees exclude tax and may vary by region; Certiport delivery may have local variations."
    },
    "difficulty": "Easy",
    "audience": "High-school and community-college students, career changers with no IT background, help-desk/IT-support technicians transitioning into security, and anyone validating foundational security knowledge.",
    "time": "Approximately 3-5 weeks of part-time study (about 40-60 hours).",
    "cost": "US$125 (exam); training can be free.",
    "salaryRange": "$45,000 – $65,000",
    "faqs": [
      {
        "q": "Do I need any experience or other certifications to take CCST Cybersecurity?",
        "a": "No. There are no formal prerequisites. Cisco suggests around 150 hours of related instruction or practice, but beginners with no IT background can sit the 100-160 exam."
      },
      {
        "q": "How long is the exam and what does it cost?",
        "a": "The 100-160 exam is 50 minutes with about 50 questions and costs US$125. It is delivered online or at a Pearson VUE/Certiport test center in multiple languages."
      },
      {
        "q": "What score do I need to pass, and does Cisco publish it?",
        "a": "Cisco does not publish a fixed numeric passing score; you receive a pass/fail result. Independent prep providers often cite roughly 70%, but that is an estimate, not an official Cisco cut score."
      },
      {
        "q": "How does CCST Cybersecurity relate to CyberOps Associate / CCNA Cybersecurity?",
        "a": "Cisco positions CCST Cybersecurity as the first step toward the Cybersecurity Associate (CyberOps) credential. It covers the same foundational themes at an introductory level before the deeper SOC-analyst content of the associate exam."
      },
      {
        "q": "What jobs can CCST Cybersecurity help me get?",
        "a": "It supports entry-level roles such as cybersecurity technician, Tier-1 help-desk support, junior security analyst, NOC analyst, and cybersecurity apprentice positions."
      }
    ],
    "summaryPoints": [
      "Foundational, no-prerequisite Cisco security cert (exam 100-160), 50 minutes, ~50 questions, US$125.",
      "Five domains; Essential Security Principles and Vulnerability/Risk are the heaviest at 22% each.",
      "Designed as the on-ramp to CyberOps Associate / CCNA Cybersecurity.",
      "Valid 3 years; free aligned Cisco Networking Academy training available."
    ],
    "relatedSlugs": [
      "comptia-security-plus",
      "cisco-ccst-networking"
    ],
    "sourceUrl": "https://www.cisco.com/site/us/en/learn/training-certifications/exams/ccst-cybersecurity.html",
    "reviewed": "2026-08",
    "confidence": "medium",
    "roadmap": [
      "Confirm no prerequisites and review the 100-160 blueprint",
      "Complete Cisco NetAcad 'Introduction to Cybersecurity' or 'Cybersecurity Essentials'",
      "Practice with free labs and the Junior Cybersecurity Analyst career path",
      "Schedule the 100-160 exam via Pearson VUE/Certiport",
      "Pass the exam and claim your digital badge",
      "Continue toward CyberOps Associate / CCNA Cybersecurity"
    ],
    "eligibility": "Open to all; the exam is intended for students, career changers, and entry-level IT staff. A Certiport candidate profile is required to schedule (separate from a Cisco profile)."
  },
  {
    "slug": "microsoft-az-900",
    "body": "Microsoft",
    "tagline": "The entry-level Azure credential that proves you understand cloud and Azure fundamentals — no experience required.",
    "description": "Microsoft Certified: Azure Fundamentals (AZ-900) is Microsoft's beginner certification for cloud and Azure. It validates conceptual knowledge of cloud computing models, core Azure architectural components (compute, networking, storage, and databases), and the management and governance tooling that keeps Azure secure and organized. AZ-900 is designed for candidates who are new to cloud or starting a Microsoft certification path, including students, business stakeholders, and IT professionals moving into cloud roles. It is not a prerequisite for the associate exams, but it is the most common on-ramp and is accepted for ACE college credit. Employers use it to confirm a baseline understanding of Azure before deeper role-based training.",
    "quickAnswer": {
      "summary": "AZ-900 is a Fundamentals-level exam covering cloud concepts, Azure architecture and services, and Azure management and governance. It costs $99, lasts about 45 minutes, and requires a scaled score of 700/1000 to pass. No prior experience is needed, and the credential renews yearly with a free online assessment.",
      "advantages": [
        "Beginner-friendly: no Azure experience or coding required",
        "Low cost ($99) and short format (about 45 minutes)",
        "May earn ACE college credit when you pass",
        "A clear, official on-ramp to AZ-104 and other role-based certs",
        "Renews for free every 12 months via Microsoft Learn"
      ]
    },
    "prerequisites": "None. AZ-900 has no formal prerequisite and does not require prior Azure experience, though basic familiarity with the internet and client-server concepts helps.",
    "examMeta": {
      "questions": "40–60 (includes unscored preview items)",
      "time": "45 minutes",
      "pass": "700 / 1000 (scaled)",
      "fee": "$99 USD",
      "format": "Computer-based, multiple-choice and other auto-graded item types",
      "admin": "Pearson VUE (students and educators via Certiport)"
    },
    "topics": [
      {
        "name": "Describe cloud concepts",
        "note": "Cloud computing models (IaaS, PaaS, SaaS), public/private/hybrid cloud, capex vs opex, and the shared responsibility model.",
        "weight": "25–30%"
      },
      {
        "name": "Describe Azure architecture and services",
        "note": "Azure regions, availability zones, resource groups, plus core compute, networking, storage, and database services.",
        "weight": "35–40%"
      },
      {
        "name": "Describe Azure management and governance",
        "note": "Microsoft Entra ID, Azure Policy, role-based access control, cost management, and compliance tooling.",
        "weight": "30–35%"
      }
    ],
    "examEssentials": [
      [
        "Credential",
        "Microsoft Certified: Azure Fundamentals"
      ],
      [
        "Exam code",
        "AZ-900"
      ],
      [
        "Level",
        "Fundamentals (beginner)"
      ],
      [
        "Exam length",
        "40–60 questions · 45 minutes"
      ],
      [
        "Passing score",
        "700 / 1000"
      ],
      [
        "Exam fee",
        "$99 USD"
      ],
      [
        "Delivery",
        "Pearson VUE test center or online proctoring"
      ],
      [
        "Validity",
        "12 months (free annual renewal)"
      ]
    ],
    "timeline": [
      [
        "Study Microsoft Learn",
        "1–3 weeks typical"
      ],
      [
        "Take practice assessment",
        "1–2 hours"
      ],
      [
        "Schedule and sit exam",
        "Year-round"
      ],
      [
        "Get results",
        "Pass/fail on screen; report in ~24h"
      ]
    ],
    "costBreakdown": {
      "items": [
        [
          "Exam fee (standard)",
          "$99"
        ],
        [
          "Exam fee (academic / Certiport)",
          "Lower per region"
        ],
        [
          "Official Microsoft Learn study material",
          "$0 (free)"
        ],
        [
          "Optional instructor-led course",
          "$0–$600+"
        ],
        [
          "Retake (if needed)",
          "$99 again"
        ]
      ],
      "total": "$99+ (exam only; official study material is free)",
      "footnote": "Fees are set by Microsoft and billed in local currency; regional taxes may apply. Academic pricing is lower where available."
    },
    "difficulty": "Easy",
    "audience": "Students, career changers, business stakeholders, and IT pros starting with cloud.",
    "time": "2–4 weeks of study",
    "cost": "$99+",
    "salaryRange": "$60,000 – $95,000",
    "faqs": [
      {
        "q": "Should I take AZ-900 before AZ-104?",
        "a": "AZ-900 is not a formal prerequisite for AZ-104, but it is the recommended starting point if you are new to Azure. It builds the vocabulary and mental model that the associate exams assume."
      },
      {
        "q": "Does AZ-900 require coding or Azure experience?",
        "a": "No. AZ-900 is conceptual. You describe cloud concepts and Azure services rather than configure them, so no coding or hands-on administration is required."
      },
      {
        "q": "How long does the AZ-900 exam take?",
        "a": "About 45 minutes for 40–60 questions. You see a pass/fail result on screen immediately, with a detailed score report emailed roughly 24 hours later."
      },
      {
        "q": "How much does AZ-900 cost and does it expire?",
        "a": "The exam fee is $99 USD (lower for students via Certiport). The certification is valid for 12 months and renews for free through an online assessment on Microsoft Learn."
      },
      {
        "q": "Is AZ-900 worth it?",
        "a": "If you are new to cloud, yes. It is inexpensive, quick, and recognized by employers as proof of baseline Azure literacy, and it can map to ACE college credit."
      }
    ],
    "summaryPoints": [
      "AZ-900 is Microsoft's beginner Azure certification — no experience or coding required.",
      "The exam is 40–60 questions in about 45 minutes; the passing scaled score is 700/1000.",
      "Microsoft's published skills weights are cloud concepts 25–30%, Azure architecture and services 35–40%, and management and governance 30–35%.",
      "It costs $99 and renews for free every 12 months via a Microsoft Learn assessment."
    ],
    "relatedSlugs": [
      "microsoft-az-104",
      "comptia-cloud-essentials-plus"
    ],
    "sourceUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/",
    "reviewed": "2026-08",
    "confidence": "high",
    "roadmap": [
      "Confirm AZ-900 fits your goal (cloud fundamentals)",
      "Study the free Microsoft Learn Azure Fundamentals paths",
      "Take the official practice assessment",
      "Schedule the $99 exam via Pearson VUE",
      "Pass with 700/1000 and renew yearly for free"
    ],
    "eligibility": "Open to all. Anyone may register and sit AZ-900; there are no eligibility restrictions, and students can schedule through Certiport."
  },
  {
    "slug": "microsoft-az-104",
    "body": "Microsoft",
    "tagline": "The core Azure operations certification that proves you can actually run an Azure environment day to day.",
    "description": "Microsoft Certified: Azure Administrator Associate (AZ-104) is the flagship associate credential for IT professionals who implement, manage, and monitor a Microsoft Azure environment. It covers identities and governance, storage, compute, virtual networking, and monitoring and backup — the backbone of nearly every Azure deployment. Azure administrators usually work as part of a larger cloud team and coordinate with networking, security, database, application-development, and DevOps roles. Candidates should be comfortable with operating systems, networking, servers, and virtualization, and have hands-on experience with PowerShell, the Azure CLI, the Azure portal, ARM templates or Bicep, and Microsoft Entra ID. AZ-104 is the most in-demand Azure operations certification and the natural next step after AZ-900; it also serves as the associate prerequisite for the Azure Solutions Architect Expert (AZ-305).",
    "quickAnswer": {
      "summary": "AZ-104 is the Azure Administrator Associate exam. It costs $165, runs about 120 minutes, and requires a scaled score of 700/1000. Expect 40–60 questions plus hands-on lab tasks in a live Azure environment. Microsoft recommends six months of Azure administration experience, and the cert renews yearly with a free assessment.",
      "advantages": [
        "Validates the most-requested Azure operations skill set",
        "Includes real hands-on lab tasks, not just theory",
        "Unlocks the Expert path as the AZ-305 prerequisite",
        "Maps directly to Azure administrator and cloud-ops job roles",
        "Renews for free every 12 months via Microsoft Learn"
      ]
    },
    "prerequisites": "Microsoft recommends at least six months of hands-on Azure administration experience. There is no mandatory prerequisite exam, but AZ-900 is the suggested starting point and familiarity with PowerShell, Azure CLI, and Entra ID is expected.",
    "examMeta": {
      "questions": "40–60 (includes hands-on lab tasks and unscored items)",
      "time": "120 minutes",
      "pass": "700 / 1000 (scaled)",
      "fee": "$165 USD",
      "format": "Computer-based, multiple-choice, case studies, and live lab tasks",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Manage Azure identities and governance",
        "note": "Microsoft Entra ID users and groups, RBAC, Azure Policy, management groups, subscriptions, tags, and cost management.",
        "weight": "20–25%"
      },
      {
        "name": "Implement and manage storage",
        "note": "Storage accounts, blob tiers and lifecycle, Azure Files and File Sync, SAS tokens, and AzCopy.",
        "weight": "15–20%"
      },
      {
        "name": "Deploy and manage Azure compute resources",
        "note": "Virtual machines, scale sets, App Service, container instances, AKS basics, and ARM/Bicep deployments.",
        "weight": "20–25%"
      },
      {
        "name": "Implement and manage virtual networking",
        "note": "VNets and subnets, NSGs and ASGs, DNS, load balancing, VPN gateway, peering, and private endpoints.",
        "weight": "15–20%"
      },
      {
        "name": "Monitor and maintain Azure resources",
        "note": "Azure Monitor, Log Analytics, alerts, backup, and Azure Site Recovery.",
        "weight": "10–15%"
      }
    ],
    "examEssentials": [
      [
        "Credential",
        "Microsoft Certified: Azure Administrator Associate"
      ],
      [
        "Exam code",
        "AZ-104"
      ],
      [
        "Level",
        "Associate (intermediate)"
      ],
      [
        "Exam length",
        "40–60 questions · 120 minutes"
      ],
      [
        "Passing score",
        "700 / 1000"
      ],
      [
        "Exam fee",
        "$165 USD"
      ],
      [
        "Delivery",
        "Pearson VUE test center or online proctoring"
      ],
      [
        "Validity",
        "12 months (free annual renewal)"
      ]
    ],
    "timeline": [
      [
        "Hands-on practice",
        "6–10 weeks typical"
      ],
      [
        "Take practice assessment",
        "2–3 hours"
      ],
      [
        "Schedule and sit exam",
        "Year-round"
      ],
      [
        "Get results",
        "Pass/fail on screen; report in ~24h"
      ]
    ],
    "costBreakdown": {
      "items": [
        [
          "Exam fee",
          "$165"
        ],
        [
          "Official Microsoft Learn study material",
          "$0 (free)"
        ],
        [
          "Optional instructor-led course (AZ-104T00)",
          "$0–$600+"
        ],
        [
          "Practice-test subscriptions",
          "$15–$99"
        ],
        [
          "Retake (if needed)",
          "$165 again"
        ]
      ],
      "total": "$165+ (exam only; official study material is free)",
      "footnote": "Fees are set by Microsoft and billed in local currency; regional taxes may apply. Academic pricing is lower where available."
    },
    "difficulty": "Moderate",
    "audience": "Azure administrators, cloud operators, and IT pros managing Azure infrastructure.",
    "time": "2–3 months of study",
    "cost": "$165+",
    "salaryRange": "$80,000 – $120,000",
    "faqs": [
      {
        "q": "Is AZ-104 enough for a cloud job on its own?",
        "a": "It qualifies you for administrator and cloud-operations roles. Many engineers later pair it with AZ-305 (architect) or AZ-500 (security) to broaden their profile."
      },
      {
        "q": "Does AZ-104 include labs?",
        "a": "Yes. Many Azure exams, including AZ-104, include live lab tasks where you perform actions in a real Azure environment, so hands-on practice is essential."
      },
      {
        "q": "How long should I study for AZ-104?",
        "a": "Most candidates need 6–10 weeks of part-time study with real lab work. Plan extra time if you are new to PowerShell, Azure CLI, or networking."
      },
      {
        "q": "How much does AZ-104 cost and does it expire?",
        "a": "The exam fee is $165 USD. The certification is valid for 12 months and renews for free through an online assessment on Microsoft Learn."
      },
      {
        "q": "Do I need AZ-900 first?",
        "a": "Not formally, but AZ-900 is the recommended on-ramp if you are new to Azure. AZ-104 assumes general Azure familiarity."
      }
    ],
    "summaryPoints": [
      "AZ-104 is the core Azure Administrator Associate exam covering identities, storage, compute, networking, and monitoring.",
      "Expect 40–60 questions plus live lab tasks in about 120 minutes; the passing scaled score is 700/1000.",
      "Microsoft's published weights are identities/governance 20–25%, storage 15–20%, compute 20–25%, networking 15–20%, and monitoring 10–15%.",
      "It costs $165 and renews for free every 12 months; it is the associate prerequisite for AZ-305."
    ],
    "relatedSlugs": [
      "microsoft-az-900",
      "microsoft-az-305"
    ],
    "sourceUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",
    "reviewed": "2026-08",
    "confidence": "high",
    "roadmap": [
      "Build 6 months of hands-on Azure admin experience",
      "Work the free AZ-104 Microsoft Learn paths",
      "Practice in a real or sandbox Azure subscription",
      "Schedule the $165 exam via Pearson VUE",
      "Pass with 700/1000 and renew yearly for free"
    ],
    "eligibility": "Open to all. Anyone may register and sit AZ-104; Microsoft recommends relevant experience but does not restrict eligibility."
  },
  {
    "slug": "microsoft-az-204",
    "body": "Microsoft",
    "tagline": "The Azure developer associate exam — now retired by Microsoft, but its skills map to the current AI-204 developer paths.",
    "description": "Microsoft Certified: Azure Developer Associate (AZ-204) was the associate credential for developers who build end-to-end solutions on Azure — Azure Functions, web apps, storage, security, and integrations. As of 2026 Microsoft has retired this certification and its renewal assessment, so it can no longer be earned or renewed; candidates are directed to the active successor developer path. The exam historically measured developing Azure compute solutions, developing for Azure storage, implementing Azure security, monitoring and optimizing solutions, and connecting to and consuming Azure and third-party services. It assumed at least two years of programming experience and proficiency with Azure SDKs, the Azure CLI, and PowerShell. We retain this page because many job posts and study plans still reference AZ-204, and its skill areas remain directly relevant to current Azure and AI developer exams.",
    "quickAnswer": {
      "summary": "AZ-204 was the Azure Developer Associate exam: 40–60 questions in about 120 minutes, scaled pass mark 700/1000, fee $165. Microsoft retired the certification in 2026, so it is no longer available to sit or renew; plan instead for the active AI-204 or AI-103 developer credential.",
      "advantages": [
        "Covered the full Azure application-development lifecycle",
        "Mapped directly to developer and cloud-engineer job roles",
        "Included hands-on, SDK-based tasks",
        "Skill areas carry over to the current developer exams",
        "Was renewable yearly for free while active"
      ]
    },
    "prerequisites": "When active, Microsoft recommended at least two years of programming experience and proficiency with Azure SDKs, Azure CLI, and PowerShell. The retired credential had no mandatory prerequisite exam.",
    "examMeta": {
      "questions": "40–60 (retired — no longer offered)",
      "time": "120 minutes (historical)",
      "pass": "700 / 1000 (scaled)",
      "fee": "$165 USD (historical)",
      "format": "Computer-based, multiple-choice, case studies, and labs (retired)",
      "admin": "Pearson VUE (retired)"
    },
    "topics": [
      {
        "name": "Develop Azure compute solutions",
        "note": "Azure Functions, App Service, container instances, and Kubernetes basics (historical outline).",
        "weight": "25–30%"
      },
      {
        "name": "Develop for Azure storage",
        "note": "Blob, queue, table, and Cosmos DB SDK access and data operations.",
        "weight": "15–20%"
      },
      {
        "name": "Implement Azure security",
        "note": "Managed identities, Key Vault, and authentication/authorization for apps.",
        "weight": "15–20%"
      },
      {
        "name": "Monitor, troubleshoot, and optimize Azure solutions",
        "note": "App Insights, logging, and performance tuning.",
        "weight": "15–20%"
      },
      {
        "name": "Connect to and consume Azure and third-party services",
        "note": "Event-driven messaging, API management, and service connectors.",
        "weight": "15–20%"
      }
    ],
    "examEssentials": [
      [
        "Credential",
        "Microsoft Certified: Azure Developer Associate (RETIRED)"
      ],
      [
        "Exam code",
        "AZ-204"
      ],
      [
        "Status",
        "Retired by Microsoft in 2026"
      ],
      [
        "Historical exam length",
        "40–60 questions · 120 minutes"
      ],
      [
        "Historical passing score",
        "700 / 1000"
      ],
      [
        "Historical fee",
        "$165 USD"
      ],
      [
        "Successor",
        "Active AI-204 / AI-103 developer path"
      ],
      [
        "Renewal",
        "No longer available"
      ]
    ],
    "timeline": [
      [
        "Confirm retirement",
        "Before planning"
      ],
      [
        "Map skills to successor",
        "1–2 weeks"
      ],
      [
        "Study active path",
        "6–10 weeks"
      ],
      [
        "Schedule active exam",
        "Year-round"
      ],
      [
        "Get results",
        "Pass/fail on screen; report in ~24h"
      ]
    ],
    "costBreakdown": {
      "items": [
        [
          "Retired exam fee (historical)",
          "$165"
        ],
        [
          "Active successor exam fee",
          "$165 (verify current)"
        ],
        [
          "Official Microsoft Learn study material",
          "$0 (free)"
        ],
        [
          "Optional instructor-led course",
          "$0–$600+"
        ]
      ],
      "total": "n/a — AZ-204 is retired; budget $165 for the active successor",
      "footnote": "AZ-204 can no longer be purchased or renewed. Fees above reflect the historical associate-tier price and the likely successor price; verify the active exam fee on Microsoft Learn."
    },
    "difficulty": "Moderate",
    "audience": "Azure developers and cloud engineers (historical); now a reference for the active developer path.",
    "time": "Retired — see active successor",
    "cost": "Retired — see active successor",
    "salaryRange": "$95,000 – $140,000",
    "faqs": [
      {
        "q": "Is AZ-204 still available?",
        "a": "No. Microsoft has retired the Azure Developer Associate certification and its renewal assessment in 2026. You can no longer register for or renew AZ-204; plan for the active developer successor instead."
      },
      {
        "q": "What replaces AZ-204?",
        "a": "Microsoft points candidates to the current AI-focused developer path (for example AI-204 / AI-103). Check the official Microsoft credentials catalog for the exam that matches your role, since the successor lineup was updated in 2026."
      },
      {
        "q": "Do my AZ-204 skills still matter?",
        "a": "Yes. The core skills — compute, storage, security, monitoring, and service integration on Azure — remain directly relevant to the active developer exams, so prior study is not wasted."
      },
      {
        "q": "If I already held AZ-204, is it still valid?",
        "a": "Certifications earned before retirement remain valid until their existing 12-month expiry; they simply cannot be renewed, and you would move to the successor to stay current."
      },
      {
        "q": "How were the AZ-204 exam and fee structured?",
        "a": "Historically it was 40–60 questions in about 120 minutes, scaled pass mark 700/1000, with a $165 fee delivered by Pearson VUE — the same associate-tier shape as AZ-104."
      }
    ],
    "summaryPoints": [
      "AZ-204 (Azure Developer Associate) is retired by Microsoft as of 2026 and can no longer be earned or renewed.",
      "Its historical shape was 40–60 questions in ~120 minutes, pass mark 700/1000, fee $165.",
      "Skill areas — compute, storage, security, monitoring, and integrations — carry directly into the active developer successor exams.",
      "Treat this page as a reference and target the current AI-204 / AI-103 developer credential for a live certification."
    ],
    "relatedSlugs": [
      "microsoft-az-104",
      "microsoft-az-400"
    ],
    "sourceUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/",
    "reviewed": "2026-08",
    "confidence": "medium",
    "roadmap": [
      "Note AZ-204 is retired — confirm the active successor",
      "Review the retired skills outline for study relevance",
      "Target the current AI-204 / AI-103 developer path",
      "Schedule the active exam via Pearson VUE",
      "Pass and renew yearly for free"
    ],
    "eligibility": "While it was offered, AZ-204 was open to all. It is now retired and cannot be registered for; eligibility guidance applies to the active successor exam."
  },
  {
    "slug": "microsoft-az-305",
    "body": "Microsoft",
    "tagline": "The expert-level architect exam that proves you can design end-to-end Azure solutions, not just run them.",
    "description": "Microsoft Certified: Azure Solutions Architect Expert (AZ-305) is the expert credential for professionals who design cloud and hybrid solutions on Azure. It centers on translating business requirements into secure, scalable designs that follow the Azure Well-Architected Framework and the Cloud Adoption Framework. Candidates need advanced experience across IT operations — networking, virtualization, identity, security, business continuity, data platforms, and governance — plus hands-on Azure administration, development, or DevOps experience. AZ-305 measures four design areas: identity and governance, data storage, business continuity, and infrastructure. To earn the Expert certification you must first hold the Azure Administrator Associate (AZ-104) or Azure Developer Associate (AZ-204) credential; AZ-305 itself is a single exam. It is a strong differentiator for cloud architect and senior engineering roles.",
    "quickAnswer": {
      "summary": "AZ-305 is the Azure Solutions Architect Expert exam. It costs $165, runs about 120 minutes, and requires a scaled score of 700/1000. Expect 40–60 questions plus case studies. You must already hold AZ-104 or AZ-204 to earn the Expert credential, and it renews yearly with a free assessment.",
      "advantages": [
        "Expert-level credential that signals design leadership",
        "Builds on the Azure Well-Architected Framework",
        "Single exam once you hold the associate prerequisite",
        "Maps to cloud architect and principal engineer roles",
        "Renews for free every 12 months via Microsoft Learn"
      ]
    },
    "prerequisites": "You must earn the Microsoft Certified: Azure Administrator Associate (AZ-104) or Azure Developer Associate (AZ-204) before the Expert credential is granted. Microsoft recommends advanced IT-operations experience across networking, identity, security, business continuity, and governance.",
    "examMeta": {
      "questions": "40–60 (includes case studies)",
      "time": "120 minutes",
      "pass": "700 / 1000 (scaled)",
      "fee": "$165 USD",
      "format": "Computer-based, multiple-choice and case studies",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Design identity, governance, and monitoring solutions",
        "note": "Entra ID, RBAC, Azure Policy, management groups, landing zones, and monitoring strategy.",
        "weight": "25–30%"
      },
      {
        "name": "Design data storage solutions",
        "note": "Relational, NoSQL, and data lake options, plus caching, data integration, and governance.",
        "weight": "20–25%"
      },
      {
        "name": "Design business continuity solutions",
        "note": "Backup, disaster recovery, replication, and failover for apps and data.",
        "weight": "15–20%"
      },
      {
        "name": "Design infrastructure solutions",
        "note": "Compute, networking, application architecture, and migration/modernization.",
        "weight": "30–35%"
      }
    ],
    "examEssentials": [
      [
        "Credential",
        "Microsoft Certified: Azure Solutions Architect Expert"
      ],
      [
        "Exam code",
        "AZ-305"
      ],
      [
        "Level",
        "Expert (advanced)"
      ],
      [
        "Prerequisite",
        "AZ-104 or AZ-204 associate"
      ],
      [
        "Exam length",
        "40–60 questions · 120 minutes"
      ],
      [
        "Passing score",
        "700 / 1000"
      ],
      [
        "Exam fee",
        "$165 USD"
      ],
      [
        "Delivery",
        "Pearson VUE test center or online proctoring"
      ],
      [
        "Validity",
        "12 months (free annual renewal)"
      ]
    ],
    "timeline": [
      [
        "Earn associate prerequisite",
        "Before AZ-305"
      ],
      [
        "Study design paths",
        "4–8 weeks typical"
      ],
      [
        "Take practice assessment",
        "2–3 hours"
      ],
      [
        "Schedule and sit exam",
        "Year-round"
      ],
      [
        "Get results",
        "Pass/fail on screen; report in ~24h"
      ]
    ],
    "costBreakdown": {
      "items": [
        [
          "AZ-305 exam fee",
          "$165"
        ],
        [
          "Prerequisite associate exam (AZ-104/204)",
          "$165 if not already held"
        ],
        [
          "Official Microsoft Learn study material",
          "$0 (free)"
        ],
        [
          "Optional instructor-led course",
          "$0–$600+"
        ],
        [
          "Retake (if needed)",
          "$165 again"
        ]
      ],
      "total": "$165+ (plus the associate prerequisite if not already earned)",
      "footnote": "Fees are set by Microsoft and billed in local currency; regional taxes may apply. Academic pricing is lower where available."
    },
    "difficulty": "Hard",
    "audience": "Cloud solution architects and senior engineers with broad Azure operations experience.",
    "time": "3–5 months including the associate prerequisite",
    "cost": "$165+",
    "salaryRange": "$130,000 – $170,000",
    "faqs": [
      {
        "q": "Do I need AZ-104 before AZ-305?",
        "a": "You need either AZ-104 (Administrator) or AZ-204 (Developer) as the associate prerequisite. AZ-305 alone does not grant the Expert credential until the associate is earned."
      },
      {
        "q": "Is AZ-305 harder than AZ-104?",
        "a": "Yes. It is an Expert exam focused on design judgment across identity, data, continuity, and infrastructure, and assumes you already operate Azure at the associate level."
      },
      {
        "q": "How long should I study for AZ-305?",
        "a": "Plan 4–8 weeks of design-focused study after the associate, plus time to earn the prerequisite if you do not hold it yet."
      },
      {
        "q": "How much does AZ-305 cost and does it expire?",
        "a": "The exam fee is $165 USD. The certification is valid for 12 months and renews for free through an online assessment on Microsoft Learn."
      },
      {
        "q": "What is the AZ-305 exam format?",
        "a": "It is delivered as 40–60 questions, including case studies, in about 120 minutes, with a scaled pass mark of 700/1000."
      }
    ],
    "summaryPoints": [
      "AZ-305 is the Azure Solutions Architect Expert exam; you must already hold AZ-104 or AZ-204 to earn the credential.",
      "The exam is 40–60 questions (with case studies) in about 120 minutes; the passing scaled score is 700/1000.",
      "Microsoft's published weights are identity/governance/monitoring 25–30%, data storage 20–25%, business continuity 15–20%, and infrastructure 30–35%.",
      "It costs $165 and renews for free every 12 months via a Microsoft Learn assessment."
    ],
    "relatedSlugs": [
      "microsoft-az-104",
      "microsoft-az-204"
    ],
    "sourceUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/",
    "reviewed": "2026-08",
    "confidence": "high",
    "roadmap": [
      "Earn AZ-104 (or AZ-204) first",
      "Study the free AZ-305 design learning paths",
      "Review the Well-Architected and Cloud Adoption Frameworks",
      "Schedule the $165 exam via Pearson VUE",
      "Pass with 700/1000 and renew yearly for free"
    ],
    "eligibility": "Open to all, but the Expert certification is only awarded after the associate prerequisite is met. Anyone may sit AZ-305; the credential is granted once both conditions are satisfied."
  },
  {
    "slug": "microsoft-az-400",
    "body": "Microsoft",
    "tagline": "DevOps engineer expert",
    "description": "Microsoft Certified: DevOps Engineer Expert (AZ-400) validates skills to combine people, process and technology to deliver value through Azure DevOps and GitHub practices.",
    "quickAnswer": {
      "summary": "AZ-400 is the expert DevOps exam covering CI/CD, source control, compliance and instrumentation.",
      "advantages": [
        "Expert level",
        "DevOps focus",
        "Renews yearly"
      ]
    },
    "prerequisites": "An admin or developer associate cert is required to earn the expert credential.",
    "examMeta": {
      "questions": "40–60",
      "time": "120 minutes",
      "pass": "700 of 1000",
      "fee": "$165",
      "format": "Multiple-choice + labs",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Source control",
        "weight": "15%"
      },
      {
        "name": "CI/CD",
        "weight": "30%"
      },
      {
        "name": "Compliance and security",
        "weight": "25%"
      },
      {
        "name": "Instrumentation",
        "weight": "30%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "AZ-400"
      ],
      [
        "Renewal",
        "Annual (free assessment)"
      ]
    ],
    "timeline": [
      {
        "stage": "Earn associate first",
        "duration": "prior"
      },
      {
        "stage": "Sit AZ-400",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "$165"
        }
      ],
      "total": "$165+",
      "footnote": "Requires associate prerequisite."
    },
    "difficulty": "Hard",
    "audience": "DevOps engineers",
    "time": "3–5 months",
    "cost": "$165+",
    "salaryRange": "$125,000 – $165,000",
    "faqs": [
      {
        "q": "Is coding required?",
        "a": "Comfort with scripting and pipelines helps; the exam is practical about DevOps."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after 12 months; renew with a free online assessment."
      },
      {
        "q": "How do I register for microsoft-az-400?",
        "a": "You register and schedule microsoft-az-400 through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the microsoft-az-400 exam format?",
        "a": "The exam is delivered as Multiple-choice + labs, with about 40–60 items, in 120 minutes. The published pass mark is 700 of 1000."
      },
      {
        "q": "How long is the microsoft-az-400 certification valid?",
        "a": "Most Microsoft role-based certifications expire after 12 months but are renewed with a free online assessment; retired certs must be re-earned."
      },
      {
        "q": "How much does microsoft-az-400 cost?",
        "a": "The exam fee is $165. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "AZ-400 is the Azure DevOps expert cert.",
      "It requires an associate prerequisite.",
      "It renews yearly."
    ],
    "relatedSlugs": [
      "microsoft-az-204",
      "microsoft-az-104"
    ],
    "sourceUrl": "https://learn.microsoft.com/credentials/certifications/devops-engineer/",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "microsoft-az-500",
    "body": "Microsoft",
    "tagline": "The Azure security engineer exam — retiring August 31, 2026, so sit it soon or target the SC-series successor.",
    "description": "Microsoft Certified: Azure Security Engineer Associate (AZ-500) validates the skills to implement security controls, maintain an organization's security posture, and identify and remediate vulnerabilities across Azure, multi-cloud, and hybrid environments. It is aimed at engineers who implement and manage security with Microsoft Defender for Cloud, Microsoft Sentinel, and Entra ID, and who align infrastructure to the Microsoft Cloud Security Benchmark. Candidates need practical Azure and hybrid administration experience plus strong familiarity with Entra ID, compute, network, and storage. Important: Microsoft has announced that AZ-500, its exam, and renewal assessments will retire on August 31, 2026; after that date you can no longer earn or renew the certification, though credentials already earned remain valid until their 12-month expiry. If your realistic test date is after retirement, plan for the active SC-series security successor instead.",
    "quickAnswer": {
      "summary": "AZ-500 is the Azure Security Engineer Associate exam. It costs $165, runs about 100 minutes, and requires a scaled score of 700/1000. Expect 40–60 questions plus lab tasks. Critically, AZ-500 retires on August 31, 2026, so schedule before then or move to the SC-series successor.",
      "advantages": [
        "Proves hands-on Azure security implementation skills",
        "Centers on Defender for Cloud and Microsoft Sentinel",
        "Maps to cloud security engineer and security architect roles",
        "Pairs naturally with SC-200 for operations depth",
        "Renews for free every 12 months while active"
      ]
    },
    "prerequisites": "Microsoft recommends practical experience administering Azure and hybrid environments, with strong familiarity with Microsoft Entra ID, compute, network, and storage. There is no mandatory prerequisite exam, but AZ-104 is advised.",
    "examMeta": {
      "questions": "40–60 (includes hands-on lab tasks)",
      "time": "100 minutes",
      "pass": "700 / 1000 (scaled)",
      "fee": "$165 USD",
      "format": "Computer-based, multiple-choice, case studies, and labs",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Secure identity and access",
        "note": "RBAC, custom and Entra roles, PIM, MFA, Conditional Access, app registrations, service principals, and managed identities.",
        "weight": "15–20%"
      },
      {
        "name": "Secure networking",
        "note": "NSGs and ASGs, Azure Firewall, WAF, Private Endpoints, Private Link, VPN, ExpressRoute, and Virtual WAN security.",
        "weight": "20–25%"
      },
      {
        "name": "Secure compute, storage, and databases",
        "note": "VM and AKS security, disk encryption, Key Vault, storage security, and database protection (TDE, Always Encrypted).",
        "weight": "20–25%"
      },
      {
        "name": "Secure Azure using Microsoft Defender for Cloud and Microsoft Sentinel",
        "note": "Security posture, Defender plans, vulnerability remediation, alerts, incidents, and regulatory compliance.",
        "weight": "30–35%"
      }
    ],
    "examEssentials": [
      [
        "Credential",
        "Microsoft Certified: Azure Security Engineer Associate"
      ],
      [
        "Exam code",
        "AZ-500"
      ],
      [
        "Level",
        "Associate (intermediate)"
      ],
      [
        "Retirement date",
        "August 31, 2026"
      ],
      [
        "Exam length",
        "40–60 questions · 100 minutes"
      ],
      [
        "Passing score",
        "700 / 1000"
      ],
      [
        "Exam fee",
        "$165 USD"
      ],
      [
        "Delivery",
        "Pearson VUE test center or online proctoring"
      ],
      [
        "Validity",
        "12 months (free annual renewal while active)"
      ]
    ],
    "timeline": [
      [
        "Study + labs",
        "6–10 weeks typical"
      ],
      [
        "Schedule before retirement",
        "By Aug 31 2026"
      ],
      [
        "Take exam",
        "Year-round until retirement"
      ],
      [
        "Get results",
        "Pass/fail on screen; report in ~24h"
      ]
    ],
    "costBreakdown": {
      "items": [
        [
          "Exam fee",
          "$165"
        ],
        [
          "Official Microsoft Learn study material",
          "$0 (free)"
        ],
        [
          "Optional instructor-led course",
          "$0–$600+"
        ],
        [
          "Practice-test subscriptions",
          "$15–$99"
        ],
        [
          "Retake (if needed)",
          "$165 again"
        ]
      ],
      "total": "$165+ (exam only; official study material is free)",
      "footnote": "AZ-500 retires August 31, 2026. Fees are set by Microsoft and billed in local currency; regional taxes may apply."
    },
    "difficulty": "Hard",
    "audience": "Cloud security engineers, security architects, and Azure admins moving into security.",
    "time": "2–4 months of study",
    "cost": "$165+",
    "salaryRange": "$110,000 – $155,000",
    "faqs": [
      {
        "q": "Is AZ-500 being retired?",
        "a": "Yes. Microsoft states AZ-500, its exam, and the renewal assessments retire on August 31, 2026. You can no longer earn or renew it after that date, so schedule before then or consider the SC-series successor."
      },
      {
        "q": "Does AZ-500 include labs?",
        "a": "Yes. Like other Azure exams it includes hands-on, performance-based tasks in a live environment, so lab practice with Defender for Cloud and Sentinel is important."
      },
      {
        "q": "How long should I study for AZ-500?",
        "a": "Most candidates need 6–10 weeks with real Azure security practice. Prior AZ-104-level administration experience shortens the path."
      },
      {
        "q": "How much does AZ-500 cost and does it expire?",
        "a": "The exam fee is $165 USD. The certification is valid for 12 months and renews for free via Microsoft Learn while the credential is active."
      },
      {
        "q": "What is the AZ-500 exam format?",
        "a": "It is delivered as 40–60 questions, including labs, in about 100 minutes, with a scaled pass mark of 700/1000."
      }
    ],
    "summaryPoints": [
      "AZ-500 is the Azure Security Engineer Associate exam covering identity, networking, compute/storage, and Defender for Cloud/Sentinel.",
      "The exam is 40–60 questions (with labs) in about 100 minutes; the passing scaled score is 700/1000.",
      "Microsoft's published weights are identity 15–20%, networking 20–25%, compute/storage 20–25%, and Defender/Sentinel 30–35%.",
      "AZ-500 retires on August 31, 2026 — sit it before then or plan for the active SC-series successor."
    ],
    "relatedSlugs": [
      "microsoft-sc-200",
      "microsoft-sc-300"
    ],
    "sourceUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/",
    "reviewed": "2026-08",
    "confidence": "high",
    "roadmap": [
      "Build Azure admin + security hands-on experience",
      "Study the free AZ-500 Microsoft Learn paths",
      "Schedule before the Aug 31 2026 retirement date",
      "Pass with 700/1000 via Pearson VUE",
      "If after retirement, target the SC-series successor"
    ],
    "eligibility": "Open to all. Anyone may register and sit AZ-500 while it is still offered; after August 31, 2026 it is retired and cannot be scheduled."
  },
  {
    "slug": "microsoft-az-700",
    "body": "Microsoft",
    "tagline": "The Azure networking associate exam that proves you can design and run Azure's network fabric end to end.",
    "description": "Microsoft Certified: Azure Network Engineer Associate (AZ-700) is the associate credential for engineers who plan, implement, and manage Azure networking solutions. It spans core network infrastructure, hybrid and connectivity services, application delivery, private access to Azure services, and network security. Azure network engineers optimize performance, resiliency, scale, and security, proactively monitor for issues, and resolve connectivity problems. They work with solution architects, cloud administrators, security engineers, application developers, and DevOps engineers. Candidates should have experience creating and managing compute, storage, and networking resources in Azure, plus networking fundamentals such as name resolution, network protocols, and address management. AZ-700 complements AZ-104 for engineers who specialize in networking rather than general administration.",
    "quickAnswer": {
      "summary": "AZ-700 is the Azure Network Engineer Associate exam. It costs $165 and runs about 120 minutes, with a scaled pass mark of 700/1000 and 40–60 questions including labs. Microsoft recommends Azure administration and networking fundamentals; the cert renews yearly with a free assessment.",
      "advantages": [
        "Validates deep Azure networking design and operations",
        "Covers hybrid, routing, app delivery, private access, and security",
        "Complements AZ-104 for a networking specialty path",
        "Maps to network engineer and cloud-network roles",
        "Renews for free every 12 months via Microsoft Learn"
      ]
    },
    "prerequisites": "Microsoft recommends experience with Azure compute, storage, and networking resources plus networking fundamentals (name resolution, protocols, address management). There is no mandatory prerequisite exam, but AZ-104-level administration familiarity helps.",
    "examMeta": {
      "questions": "40–60 (includes hands-on lab tasks)",
      "time": "120 minutes",
      "pass": "700 / 1000 (scaled)",
      "fee": "$165 USD",
      "format": "Computer-based, multiple-choice, case studies, and labs",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Design and implement core networking infrastructure",
        "note": "VNets, subnets, DNS, IP addressing, routing, and Azure Bastion.",
        "weight": "25–30%"
      },
      {
        "name": "Design, implement, and manage connectivity services",
        "note": "Site-to-site and point-to-site VPN, ExpressRoute, and Virtual WAN.",
        "weight": "20–25%"
      },
      {
        "name": "Design and implement application delivery services",
        "note": "Load Balancer, Application Gateway, Front Door, and Traffic Manager.",
        "weight": "15–20%"
      },
      {
        "name": "Design and implement private access to Azure services",
        "note": "Private Endpoints, Private Link, and service endpoints.",
        "weight": "10–15%"
      },
      {
        "name": "Design and implement Azure network security services",
        "note": "NSGs, ASGs, Azure Firewall, WAF, DDoS protection, and network monitoring.",
        "weight": "15–20%"
      }
    ],
    "examEssentials": [
      [
        "Credential",
        "Microsoft Certified: Azure Network Engineer Associate"
      ],
      [
        "Exam code",
        "AZ-700"
      ],
      [
        "Level",
        "Associate (intermediate)"
      ],
      [
        "Exam length",
        "40–60 questions · 120 minutes"
      ],
      [
        "Passing score",
        "700 / 1000"
      ],
      [
        "Exam fee",
        "$165 USD"
      ],
      [
        "Delivery",
        "Pearson VUE test center or online proctoring"
      ],
      [
        "Validity",
        "12 months (free annual renewal)"
      ]
    ],
    "timeline": [
      [
        "Study + labs",
        "6–10 weeks typical"
      ],
      [
        "Take practice assessment",
        "2–3 hours"
      ],
      [
        "Schedule and sit exam",
        "Year-round"
      ],
      [
        "Get results",
        "Pass/fail on screen; report in ~24h"
      ]
    ],
    "costBreakdown": {
      "items": [
        [
          "Exam fee",
          "$165"
        ],
        [
          "Official Microsoft Learn study material",
          "$0 (free)"
        ],
        [
          "Optional instructor-led course",
          "$0–$600+"
        ],
        [
          "Practice-test subscriptions",
          "$15–$99"
        ],
        [
          "Retake (if needed)",
          "$165 again"
        ]
      ],
      "total": "$165+ (exam only; official study material is free)",
      "footnote": "Fees are set by Microsoft and billed in local currency; regional taxes may apply. Academic pricing is lower where available."
    },
    "difficulty": "Hard",
    "audience": "Azure network engineers, cloud engineers, and infrastructure specialists.",
    "time": "2–4 months of study",
    "cost": "$165+",
    "salaryRange": "$100,000 – $140,000",
    "faqs": [
      {
        "q": "Does AZ-700 require coding?",
        "a": "No coding is required, but you must be comfortable with networking concepts (DNS, routing, protocols) and Azure networking resources such as VNets, VPN, and Firewall."
      },
      {
        "q": "Is AZ-700 harder than AZ-104?",
        "a": "It is considered more specialized and technically deep on networking. Many candidates find the design and troubleshooting scenarios challenging without hands-on lab work."
      },
      {
        "q": "How long should I study for AZ-700?",
        "a": "Plan 6–10 weeks with real networking labs; longer if you are newer to Azure networking fundamentals."
      },
      {
        "q": "How much does AZ-700 cost and does it expire?",
        "a": "The exam fee is $165 USD. The certification is valid for 12 months and renews for free through an online assessment on Microsoft Learn."
      },
      {
        "q": "What is the AZ-700 exam format?",
        "a": "It is delivered as 40–60 questions, including labs and case studies, in about 120 minutes, with a scaled pass mark of 700/1000."
      }
    ],
    "summaryPoints": [
      "AZ-700 is the Azure Network Engineer Associate exam covering core networking, connectivity, app delivery, private access, and security.",
      "The exam is 40–60 questions (with labs) in about 120 minutes; the passing scaled score is 700/1000.",
      "Microsoft's published weights are core networking 25–30%, connectivity 20–25%, app delivery 15–20%, private access 10–15%, and network security 15–20%.",
      "It costs $165 and renews for free every 12 months via a Microsoft Learn assessment."
    ],
    "relatedSlugs": [
      "microsoft-az-104",
      "cisco-ccna"
    ],
    "sourceUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-network-engineer-associate/",
    "reviewed": "2026-08",
    "confidence": "high",
    "roadmap": [
      "Build Azure admin + networking fundamentals",
      "Study the free AZ-700 Microsoft Learn paths",
      "Practice with VNets, VPN, ExpressRoute, and Firewall",
      "Schedule the $165 exam via Pearson VUE",
      "Pass with 700/1000 and renew yearly for free"
    ],
    "eligibility": "Open to all. Anyone may register and sit AZ-700; Microsoft recommends relevant experience but does not restrict eligibility."
  },
  {
    "slug": "microsoft-az-140",
    "body": "Microsoft",
    "tagline": "The Azure Virtual Desktop specialty that proves you can deliver and run AVD at scale.",
    "description": "Microsoft Certified: Azure Virtual Desktop Specialty (AZ-140) is the specialty credential for server and desktop administrators who plan, implement, manage, and maintain Azure Virtual Desktop (AVD) experiences and remote apps for any device. Candidates work closely with Azure administrators, architects, Microsoft 365 administrators, and security engineers, and should have experience with Azure compute, networking, identity, storage, and resiliency, plus the ability to manage end-user desktop environments. The exam measures planning and implementing the AVD infrastructure, identity and security, user environments and apps, and monitoring and maintenance. Because AVD is the highest-weighted single domain, hands-on work with host pools, session hosts, FSLogix, and image management is essential. AZ-140 is ideal for VDI and EUC specialists and is a strong follow-on after AZ-104.",
    "quickAnswer": {
      "summary": "AZ-140 is the Azure Virtual Desktop Specialty exam. It costs $165, runs about 100 minutes, and requires a scaled score of 700/1000. Expect 40–60 questions plus labs. Microsoft recommends Azure Administrator-level experience; the cert renews yearly with a free assessment.",
      "advantages": [
        "Specialty credential for a high-demand VDI/EUC skill",
        "Centers on AVD infrastructure, FSLogix, and imaging",
        "Strong follow-on after AZ-104 for desktop admins",
        "Maps to AVD engineer and EUC specialist roles",
        "Renews for free every 12 months via Microsoft Learn"
      ]
    },
    "prerequisites": "Microsoft recommends Azure Administrator (AZ-104)-level experience, including virtualization, networking, identity, storage, backup/restore, and disaster recovery, plus familiarity with Azure PowerShell and Cloud Shell. There is no mandatory prerequisite exam.",
    "examMeta": {
      "questions": "40–60 (includes hands-on lab tasks)",
      "time": "100 minutes",
      "pass": "700 / 1000 (scaled)",
      "fee": "$165 USD",
      "format": "Computer-based, multiple-choice, case studies, and labs",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Plan and implement an Azure Virtual Desktop infrastructure",
        "note": "Networking, storage, host pools, session hosts, images, and scaling.",
        "weight": "40–45%"
      },
      {
        "name": "Plan and implement identity and security",
        "note": "Entra ID/AD DS integration, RBAC, Conditional Access, MFA, and Defender for Cloud.",
        "weight": "15–20%"
      },
      {
        "name": "Plan and implement user environments and apps",
        "note": "FSLogix profile containers, app delivery (MSIX app attach), and user settings.",
        "weight": "20–25%"
      },
      {
        "name": "Monitor and maintain an Azure Virtual Desktop infrastructure",
        "note": "Azure Monitor, AVD Insights, autoscale, updates, backup, and disaster recovery.",
        "weight": "10–15%"
      }
    ],
    "examEssentials": [
      [
        "Credential",
        "Microsoft Certified: Azure Virtual Desktop Specialty"
      ],
      [
        "Exam code",
        "AZ-140"
      ],
      [
        "Level",
        "Specialty"
      ],
      [
        "Exam length",
        "40–60 questions · 100 minutes"
      ],
      [
        "Passing score",
        "700 / 1000"
      ],
      [
        "Exam fee",
        "$165 USD"
      ],
      [
        "Delivery",
        "Pearson VUE test center or online proctoring"
      ],
      [
        "Validity",
        "12 months (free annual renewal)"
      ]
    ],
    "timeline": [
      [
        "Study + labs",
        "4–8 weeks typical"
      ],
      [
        "Take practice assessment",
        "2–3 hours"
      ],
      [
        "Schedule and sit exam",
        "Year-round"
      ],
      [
        "Get results",
        "Pass/fail on screen; report in ~24h"
      ]
    ],
    "costBreakdown": {
      "items": [
        [
          "Exam fee",
          "$165"
        ],
        [
          "Official Microsoft Learn study material",
          "$0 (free)"
        ],
        [
          "Optional instructor-led course (AZ-140T00)",
          "$0–$600+"
        ],
        [
          "Practice-test subscriptions",
          "$15–$99"
        ],
        [
          "Retake (if needed)",
          "$165 again"
        ]
      ],
      "total": "$165+ (exam only; official study material is free)",
      "footnote": "Fees are set by Microsoft and billed in local currency; regional taxes may apply. Academic pricing is lower where available."
    },
    "difficulty": "Hard",
    "audience": "VDI and EUC engineers, desktop administrators, and Azure admins running AVD.",
    "time": "2–3 months of study",
    "cost": "$165+",
    "salaryRange": "$95,000 – $135,000",
    "faqs": [
      {
        "q": "Does AZ-140 require coding?",
        "a": "Not traditional coding, but you must be comfortable with PowerShell, Azure CLI, ARM/Bicep templates, and the Azure portal for AVD deployment and automation."
      },
      {
        "q": "Is AZ-140 harder than AZ-104?",
        "a": "It is more specialized. The AVD infrastructure domain alone is 40–45% of the exam, so deep, hands-on AVD experience matters more than breadth."
      },
      {
        "q": "How long should I study for AZ-140?",
        "a": "Plan 4–8 weeks with real AVD labs; longer if you are newer to FSLogix, imaging, or Azure networking."
      },
      {
        "q": "How much does AZ-140 cost and does it expire?",
        "a": "The exam fee is $165 USD. The certification is valid for 12 months and renews for free through an online assessment on Microsoft Learn."
      },
      {
        "q": "What is the AZ-140 exam format?",
        "a": "It is delivered as 40–60 questions, including labs, in about 100 minutes, with a scaled pass mark of 700/1000."
      }
    ],
    "summaryPoints": [
      "AZ-140 is the Azure Virtual Desktop Specialty exam; the AVD infrastructure domain is 40–45% of the test.",
      "The exam is 40–60 questions (with labs) in about 100 minutes; the passing scaled score is 700/1000.",
      "Microsoft's published weights are AVD infrastructure 40–45%, identity/security 15–20%, user environments/apps 20–25%, and monitoring/maintenance 10–15%.",
      "It costs $165 and renews for free every 12 months via a Microsoft Learn assessment."
    ],
    "relatedSlugs": [
      "microsoft-az-104"
    ],
    "sourceUrl": "https://learn.microsoft.com/en-us/credentials/certifications/azure-virtual-desktop-specialty/",
    "reviewed": "2026-08",
    "confidence": "high",
    "roadmap": [
      "Build AZ-104-level Azure admin experience",
      "Study the free AZ-140 Microsoft Learn paths",
      "Deploy and manage AVD in a sandbox subscription",
      "Schedule the $165 exam via Pearson VUE",
      "Pass with 700/1000 and renew yearly for free"
    ],
    "eligibility": "Open to all. Anyone may register and sit AZ-140; Microsoft recommends relevant experience but does not restrict eligibility."
  },
  {
    "slug": "microsoft-az-800",
    "body": "Microsoft",
    "tagline": "Administering Windows Server hybrid",
    "description": "Microsoft Certified: Windows Server Hybrid Administrator Associate (AZ-800 + AZ-801) validates skills to manage Windows Server on-premises and in Azure hybrid environments.",
    "quickAnswer": {
      "summary": "AZ-800 covers Windows Server core administration; paired with AZ-801 it earns the hybrid administrator associate credential.",
      "advantages": [
        "Windows Server",
        "Hybrid focus",
        "Renews yearly"
      ]
    },
    "prerequisites": "Windows Server administration experience recommended.",
    "examMeta": {
      "questions": "40–60",
      "time": "120 minutes",
      "pass": "700 of 1000",
      "fee": "$165",
      "format": "Multiple-choice + labs",
      "admin": "Pearson VUE"
    },
    "topics": [
      {
        "name": "Identity services",
        "weight": "25%"
      },
      {
        "name": "File shares",
        "weight": "20%"
      },
      {
        "name": "Hyper-V",
        "weight": "20%"
      },
      {
        "name": "Networking",
        "weight": "20%"
      },
      {
        "name": "Admin tools",
        "weight": "15%"
      }
    ],
    "examEssentials": [
      [
        "Exam code",
        "AZ-800"
      ],
      [
        "Plus",
        "AZ-801"
      ]
    ],
    "timeline": [
      {
        "stage": "Sit AZ-800",
        "duration": "test day"
      },
      {
        "stage": "Sit AZ-801",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "AZ-800",
          "fee": "$165"
        },
        {
          "item": "AZ-801",
          "fee": "$165"
        }
      ],
      "total": "$330+",
      "footnote": "Both needed for the associate credential."
    },
    "difficulty": "Moderate",
    "audience": "Windows Server administrators",
    "time": "3–5 months",
    "cost": "$330+",
    "salaryRange": "$80,000 – $120,000",
    "faqs": [
      {
        "q": "Is AZ-800 alone a certification?",
        "a": "No; AZ-800 and AZ-801 together earn the Windows Server Hybrid Administrator Associate."
      },
      {
        "q": "Does it expire?",
        "a": "Yes, after 12 months; renew with a free online assessment."
      },
      {
        "q": "How do I register for microsoft-az-800?",
        "a": "You register and schedule microsoft-az-800 through Pearson VUE. Pick a test-centre appointment or online proctoring, then sit the exam on your booked date."
      },
      {
        "q": "What is the microsoft-az-800 exam format?",
        "a": "The exam is delivered as Multiple-choice + labs, with about 40–60 items, in 120 minutes. The published pass mark is 700 of 1000."
      },
      {
        "q": "How long is the microsoft-az-800 certification valid?",
        "a": "Most Microsoft role-based certifications expire after 12 months but are renewed with a free online assessment; retired certs must be re-earned."
      },
      {
        "q": "How much does microsoft-az-800 cost?",
        "a": "The exam fee is $165. Optional study materials and retakes are priced separately."
      }
    ],
    "summaryPoints": [
      "AZ-800 covers Windows Server core admin.",
      "It pairs with AZ-801 for the associate cert.",
      "It renews yearly."
    ],
    "relatedSlugs": [
      "microsoft-az-801",
      "microsoft-az-802"
    ],
    "sourceUrl": "https://learn.microsoft.com/credentials/certifications/windows-server-hybrid-administrator/",
    "reviewed": "2026-08",
    "confidence": "high"
  }
];
export default { programs, exams };
