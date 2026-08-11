// Research-backed exam records for batch file batch45.mjs.
export const programs = [
  {
    "id": "oracle",
    "body": "Oracle",
    "bodyUrl": "https://education.oracle.com/",
    "about": "Oracle University runs one of the largest enterprise certification programs, spanning Oracle Cloud Infrastructure (OCI), Oracle Database, Java development and applications such as Oracle Cerner. Credentials are delivered through Oracle MyLearn and Pearson VUE, and range from free entry-level Foundations exams to paid Associate, Professional and Expert certifications.",
    "registrationSteps": [
      {
        "title": "Create an Oracle MyLearn account",
        "description": "Sign in with your Oracle SSO and confirm your candidate profile.",
        "duration": "10 minutes"
      },
      {
        "title": "Get an exam attempt",
        "description": "Buy an Oracle Exam Subscription/attempt, or complete the required free learning path to unlock a free Foundations voucher.",
        "duration": "15 minutes"
      },
      {
        "title": "Schedule the exam",
        "description": "Book through Oracle MyLearn (some exams are online, unproctored) or Pearson VUE (test center or online proctored).",
        "duration": "15 minutes"
      },
      {
        "title": "Sit and pass",
        "description": "Complete the multiple-choice items; a score report with pass/fail and a domain breakdown appears afterwards.",
        "duration": "test day"
      },
      {
        "title": "Maintain",
        "description": "OCI certifications are valid 24 months and Cloud Applications 18 months; some Database credentials require periodic recertification. Oracle credentials generally do not expire once earned, but older exam versions are retired.",
        "duration": "per cycle"
      }
    ],
    "proctoring": "Delivered through Oracle MyLearn (selected exams are online and unproctored) or via Pearson VUE at a test center / online proctored. A government ID is required for proctored delivery.",
    "retakePolicy": "A failed paid exam can be retaken by purchasing another attempt; you may not retake a passed exam. Some online, unproctored exams may be retaken anytime. Reschedule or cancel at least 24 hours before the appointment or you forfeit the attempt.",
    "recertification": "OCI certifications are valid 24 months from the earn date; Oracle Cloud Applications certifications 18 months. Certain Database credentials require periodic recertification to stay active. Oracle does not expire credentials you have already earned, but retires older exam versions over time.",
    "scoreReporting": "A score report shows the final score, pass/fail status and a domain-performance breakdown. Passing scores are set per exam version (commonly 60–68%). Oracle does not reveal which specific questions were missed.",
    "refundPolicy": "Exam attempts are paid at booking; reschedule or cancel at least 24 hours before the slot or the attempt is forfeited.",
    "providersNote": "Oracle MyLearn and Oracle University provide official learning paths and courses; third parties such as Whizlabs and Oracle-authorised training partners offer labs and practice exams.",
    "comparison": {
      "title": "Oracle certification cost tiers",
      "columns": [
        "Tier",
        "Typical fee",
        "Validity",
        "Audience"
      ],
      "rows": [
        {
          "label": "Foundations",
          "values": [
            "Free (after learning path)",
            "24 months (OCI)",
            "Entry / non-engineering"
          ]
        },
        {
          "label": "Associate",
          "values": [
            "$245",
            "24 months (OCI)",
            "Hands-on practitioners"
          ]
        },
        {
          "label": "Professional",
          "values": [
            "$245 / exam",
            "version-based",
            "Experienced specialists"
          ]
        }
      ]
    },
    "orgFaqs": [
      {
        "q": "Are Oracle certifications really free?",
        "a": "Oracle gives away its Foundations-level exams (such as OCI Foundations) for free once you complete the matching free learning path on Oracle MyLearn. Associate, Professional and Expert exams carry a standard $245 fee per attempt."
      },
      {
        "q": "How long are Oracle certifications valid?",
        "a": "OCI certifications are valid 24 months and Oracle Cloud Applications certifications 18 months; some Database credentials need periodic recertification. A credential you have already earned is not revoked when its exam version is retired, but you would take the current version to stay current."
      }
    ],
    "sourceUrl": "https://education.oracle.com/",
    "confidence": "high"
  }
];

export const exams = [
  {
    "slug": "oracle-oci-foundations-associate",
    "body": "Oracle",
    "tagline": "Oracle’s free on-ramp to cloud fundamentals",
    "description": "Oracle Cloud Infrastructure (OCI) Foundations Associate is Oracle’s free, entry-level cloud certification. It proves you can explain OCI’s core services — compute, networking, storage, database, security and pricing — without hands-on experience, and is the recommended first step before the OCI Architect Associate. Oracle bundles the exam for free with a short learning path, making it one of the few zero-cost vendor cloud certs.",
    "quickAnswer": {
      "summary": "OCI Foundations Associate is a free, conceptual Oracle Cloud exam (about 40 questions, 60 minutes, pass at 65%) that proves you understand OCI core services and the shared security model. No hands-on experience is required, and the exam is free after completing the official learning path. The credential is valid for 24 months.",
      "advantages": [
        "Free after a short learning path",
        "No hands-on experience needed",
        "Best first step to OCI Architect",
        "Vendor cloud fundamentals on your resume"
      ]
    },
    "prerequisites": "None — open to all; no cloud experience required.",
    "eligibility": "Open to anyone; a recommended starting point for OCI certifications.",
    "examMeta": {
      "questions": "~40",
      "time": "60 minutes",
      "pass": "65%",
      "fee": "Free (after completing the Oracle learning path)",
      "format": "Multiple choice",
      "admin": "Oracle MyLearn (online) / Pearson VUE"
    },
    "topics": [
      {
        "name": "Getting started with OCI",
        "weight": "15%",
        "note": "Regions, ADs, fault domains, HA"
      },
      {
        "name": "Core OCI services",
        "weight": "50%",
        "note": "Compute, storage, networking, database"
      },
      {
        "name": "Security services",
        "weight": "25%",
        "note": "IAM, Vault, WAF, Cloud Guard"
      },
      {
        "name": "Governance and administration",
        "weight": "10%",
        "note": "Pricing, cost management, support"
      }
    ],
    "examEssentials": [
      [
        "Delivery",
        "Oracle MyLearn (often online, unproctored)"
      ],
      [
        "Fee",
        "Free after learning path"
      ],
      [
        "Validity",
        "24 months (OCI policy)"
      ],
      [
        "Level",
        "Foundations"
      ]
    ],
    "timeline": [
      {
        "stage": "Complete free learning path + study",
        "duration": "2–4 weeks"
      },
      {
        "stage": "Book and pass",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "Free"
        },
        {
          "item": "Optional practice exams",
          "fee": "$0–$50"
        }
      ],
      "total": "Free–$50",
      "footnote": "Skipping the learning path means paying the standard fee."
    },
    "difficulty": "Easy",
    "audience": "Career changers, students and sales/IT staff new to OCI",
    "time": "2–4 weeks",
    "cost": "Free (after learning path)",
    "salaryRange": "$70,000-$130,000 (15-1252 median $132,270)",
    "faqs": [
      {
        "q": "Is the OCI Foundations exam really free?",
        "a": "Yes — Oracle gives away its Foundations exams for free once you finish the matching free learning path on Oracle MyLearn and claim the voucher. If you skip the learning path and book directly, you pay the standard fee."
      },
      {
        "q": "Do I need hands-on OCI experience?",
        "a": "No. The exam is conceptual and tests understanding of OCI services and the shared-responsibility model, not lab tasks. It is explicitly designed as a starting point."
      },
      {
        "q": "What should I study?",
        "a": "Focus on Core OCI Services (about half the exam): compute shapes, VCN/subnets, Object/Block storage, Autonomous Database, IAM policies and compartments, plus pricing and support models."
      },
      {
        "q": "What comes next?",
        "a": "Most candidates move to OCI Architect Associate (a paid $245 exam) and then to Professional or specialty tracks such as Security, Networking or Generative AI."
      }
    ],
    "summaryPoints": [
      "Free, conceptual Oracle Cloud entry exam (≈40 Q, 60 min, 65%).",
      "Covers compute, networking, storage, database, security and pricing.",
      "No hands-on experience required; best first step to OCI.",
      "Valid 24 months; free after the official learning path."
    ],
    "relatedSlugs": [
      "oracle-oci-architect-associate",
      "oracle-oci-foundations-associate",
      "oracle-linux-system-administrator"
    ],
    "sourceUrl": "https://education.oracle.com/oracle-cloud-infrastructure-2026-foundations-associate/paas:OCI-FOUNDATIONS",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "oracle-oci-architect-associate",
    "body": "Oracle",
    "tagline": "Design and implement infrastructure on Oracle Cloud",
    "description": "OCI Architect Associate is Oracle’s flagship Associate cloud exam. It validates that you can design and implement secure, scalable, highly available infrastructure on Oracle Cloud Infrastructure — identity and access, virtual cloud networks, compute, storage and database services. It is the Oracle peer to the AWS/Azure architect associate exams and is valid for 24 months.",
    "quickAnswer": {
      "summary": "The OCI Architect Associate exam ($245, 90 minutes, ~55 questions, pass at 65%) proves you can design and implement OCI infrastructure: IAM, VCN networking, compute, storage and database. It targets cloud architects and is valid for 24 months.",
      "advantages": [
        "Recognised Oracle cloud credential",
        "Competes with AWS/Azure architect exams",
        "Covers the full OCI core stack",
        "Valid 24 months"
      ]
    },
    "prerequisites": "Hands-on OCI experience recommended; OCI Foundations is helpful but not required.",
    "eligibility": "Open to anyone with cloud architecture experience.",
    "examMeta": {
      "questions": "~55",
      "time": "90 minutes",
      "pass": "65%",
      "fee": "$245",
      "format": "Multiple choice",
      "admin": "Oracle MyLearn / Pearson VUE"
    },
    "topics": [
      {
        "name": "Identity and access management",
        "weight": "",
        "note": "Compartments, policies, groups"
      },
      {
        "name": "Networking (VCN)",
        "weight": "",
        "note": "Subnets, gateways, security lists, NSGs, LB"
      },
      {
        "name": "Compute and storage",
        "weight": "",
        "note": "Instances, Block/Object storage, File Storage"
      },
      {
        "name": "Database and governance",
        "weight": "",
        "note": "Autonomous DB, tagging, cost, support"
      }
    ],
    "examEssentials": [
      [
        "Delivery",
        "Oracle MyLearn / Pearson VUE"
      ],
      [
        "Fee",
        "$245 per attempt"
      ],
      [
        "Validity",
        "24 months (OCI policy)"
      ],
      [
        "Level",
        "Associate"
      ]
    ],
    "timeline": [
      {
        "stage": "Hands-on OCI labs",
        "duration": "6–10 weeks"
      },
      {
        "stage": "Book and pass",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "$245"
        },
        {
          "item": "Courses / practice exams",
          "fee": "$50–$300"
        }
      ],
      "total": "$295–$545",
      "footnote": "Oracle free tier supports low-cost hands-on prep."
    },
    "difficulty": "Moderate",
    "audience": "Cloud architects and systems administrators",
    "time": "6–10 weeks",
    "cost": "$245–$545",
    "salaryRange": "$110,000–$170,000",
    "faqs": [
      {
        "q": "How much does the exam cost and how long is it?",
        "a": "The standard fee is $245 per attempt, the exam runs 90 minutes with about 55 multiple-choice questions, and the passing score is 65%."
      },
      {
        "q": "Do I need the Foundations exam first?",
        "a": "No. OCI Foundations is recommended as background but not a prerequisite. You can register for the Architect Associate directly if you have OCI experience."
      },
      {
        "q": "What should I practice?",
        "a": "Build a VCN with subnets and gateways, deploy compute with Block/Object storage, configure IAM policies and compartments, and provision an Autonomous Database in the Oracle Cloud Free Tier."
      },
      {
        "q": "How do I keep it active?",
        "a": "OCI certifications are valid 24 months. You recertify by passing the current version of the exam before it expires."
      }
    ],
    "summaryPoints": [
      "Associate exam for OCI infrastructure design and implementation.",
      "$245, 90 minutes, ~55 questions, pass at 65%.",
      "Covers IAM, VCN, compute, storage and database.",
      "Valid 24 months; Oracle peer to AWS/Azure architect exams."
    ],
    "relatedSlugs": [
      "oracle-oci-foundations-associate",
      "oracle-database-administrator-professional",
      "oracle-linux-system-administrator"
    ],
    "sourceUrl": "https://education.oracle.com/oracle-cloud-infrastructure-2026-architect-associate/paas:OCI-ARCH-ASOC",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "oracle-database-administrator-professional",
    "body": "Oracle",
    "tagline": "The core Oracle DBA credential",
    "description": "Oracle Database Administrator Certified Professional (OCP) is the industry-standard credential for Oracle DBAs. It is earned by passing two exams — Oracle Database Administration I (1Z0-082) and Oracle Database Administration II (1Z0-083) — which together validate installing, configuring, backing up, recovering, securing and tuning Oracle Database, including multitenant and pluggable databases. It is aimed at DBAs managing enterprise Oracle estates.",
    "quickAnswer": {
      "summary": "The Oracle Database Administrator Professional (OCP) credential is earned by passing two exams — 1Z0-082 (Administration I) and 1Z0-083 (Administration II), each $245. Together they validate core DBA skills: installation, backup/recovery with RMAN, multitenant management and tuning. It is the most recognised Oracle DBA certification.",
      "advantages": [
        "Gold-standard Oracle DBA cert",
        "Validates real-world DBA skills",
        "Widely required by employers",
        "Gateway to OCM"
      ]
    },
    "prerequisites": "Knowledge of SQL and basic Linux/relational concepts; 1–2 years of Oracle experience recommended.",
    "eligibility": "Open to anyone; no mandatory prerequisite exam.",
    "examMeta": {
      "questions": "80–90 per exam",
      "time": "90–120 minutes per exam",
      "pass": "60%",
      "fee": "$245 per exam (2 exams)",
      "format": "Multiple choice",
      "admin": "Pearson VUE / Oracle MyLearn"
    },
    "topics": [
      {
        "name": "Database architecture and installation",
        "weight": "",
        "note": "Instances, storage, Grid Infrastructure"
      },
      {
        "name": "Backup and recovery (RMAN)",
        "weight": "",
        "note": "RMAN, Data Guard, duplication"
      },
      {
        "name": "Multitenant and pluggable DBs",
        "weight": "",
        "note": "CDB/PDB creation, cloning, security"
      },
      {
        "name": "Performance, security and tuning",
        "weight": "",
        "note": "SQL, users, patching, upgrades"
      }
    ],
    "examEssentials": [
      [
        "Delivery",
        "Pearson VUE / Oracle MyLearn"
      ],
      [
        "Exams required",
        "Two (1Z0-082 + 1Z0-083)"
      ],
      [
        "Fee",
        "$245 each (≈$490 total)"
      ],
      [
        "Pass mark",
        "60%"
      ]
    ],
    "timeline": [
      {
        "stage": "Study + lab on 19c/21c/23ai",
        "duration": "12–20 weeks"
      },
      {
        "stage": "Pass both exams",
        "duration": "test days"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam 1Z0-082",
          "fee": "$245"
        },
        {
          "item": "Exam 1Z0-083",
          "fee": "$245"
        },
        {
          "item": "Courses / labs",
          "fee": "$100–$500"
        }
      ],
      "total": "$590–$990",
      "footnote": "Oracle Cloud Free Tier supports hands-on practice."
    },
    "difficulty": "Hard",
    "audience": "Database administrators and data engineers",
    "time": "12–20 weeks",
    "cost": "$590–$990",
    "salaryRange": "$95,000–$130,000",
    "faqs": [
      {
        "q": "How many exams does the OCP DBA need?",
        "a": "Two: Oracle Database Administration I (1Z0-082) and Oracle Database Administration II (1Z0-083). Each is a separate $245 attempt; both must be passed to earn the Professional credential."
      },
      {
        "q": "What is the pass mark?",
        "a": "Each exam is typically passed at 60%. They run 90–120 minutes with 80–90 multiple-choice questions, and cover installation, RMAN backup/recovery, multitenant management and tuning."
      },
      {
        "q": "Is there a prerequisite?",
        "a": "No mandatory prerequisite exam, though Oracle recommends SQL knowledge and 1–2 years of hands-on Oracle Database experience. Earlier OCA-level material is now folded into these two exams."
      },
      {
        "q": "Does it expire?",
        "a": "Oracle credentials do not expire once earned, but the underlying exam version is retired over time; recertify on the current version to stay current. Some Database credentials require periodic recertification."
      }
    ],
    "summaryPoints": [
      "Professional DBA credential earned via two exams (1Z0-082 + 1Z0-083).",
      "Each exam $245, 90–120 min, pass at 60%.",
      "Covers install, RMAN backup/recovery, multitenant, tuning.",
      "The recognised standard for Oracle DBAs; gateway to OCM."
    ],
    "relatedSlugs": [
      "oracle-oci-architect-associate",
      "oracle-linux-system-administrator",
      "oracle-oci-foundations-associate"
    ],
    "sourceUrl": "https://education.oracle.com/oracle-database-administration-2019-certified-professional/rcert/DB19COCP",
    "reviewed": "2026-08",
    "confidence": "medium"
  },
  {
    "slug": "oracle-java-se-21-developer",
    "body": "Oracle",
    "tagline": "Prove professional Java 21 skills",
    "description": "Oracle Certified Professional: Java SE 21 Developer (exam 1Z0-830) is Oracle’s current professional Java credential. It is a single exam that tests precise reading and reasoning about modern Java code — types, OOP, generics, streams and collectors, modules, I/O and concurrency (including virtual threads). It is aimed at working Java developers and is the modern replacement for the older two-step OCA+OCP ladder.",
    "quickAnswer": {
      "summary": "The Oracle Certified Professional: Java SE 21 Developer exam (1Z0-830, $245, 120 minutes, ~50 questions, pass at 68%) validates professional Java skills: types, OOP, generics, streams/collectors, modules, I/O and concurrency. It is a single exam with no associate prerequisite and targets working Java developers.",
      "advantages": [
        "Current LTS (Java 21) credential",
        "Single exam, no OCA prerequisite",
        "Validates real code-reading skill",
        "Strong for enterprise Java roles"
      ]
    },
    "prerequisites": "Knowledge of the Java programming language; no separate associate exam required.",
    "eligibility": "Open to anyone with Java development experience.",
    "examMeta": {
      "questions": "~50",
      "time": "120 minutes",
      "pass": "68%",
      "fee": "$245",
      "format": "Multiple choice (includes code analysis)",
      "admin": "Pearson VUE / Oracle MyLearn"
    },
    "topics": [
      {
        "name": "Types, operators, text and dates",
        "weight": "",
        "note": "Primitives, String, Date/Time API"
      },
      {
        "name": "OOP, records, sealed, patterns",
        "weight": "",
        "note": "Classes, inheritance, interfaces, enums"
      },
      {
        "name": "Generics, collections, streams",
        "weight": "",
        "note": "Wildcards, lambdas, collectors"
      },
      {
        "name": "Modules, I/O and concurrency",
        "weight": "",
        "note": "JPMS, NIO, virtual threads"
      }
    ],
    "examEssentials": [
      [
        "Delivery",
        "Pearson VUE / Oracle MyLearn"
      ],
      [
        "Exam code",
        "1Z0-830"
      ],
      [
        "Fee",
        "$245"
      ],
      [
        "Pass mark",
        "68%"
      ]
    ],
    "timeline": [
      {
        "stage": "Code-reading practice",
        "duration": "6–10 weeks"
      },
      {
        "stage": "Book and pass",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "$245"
        },
        {
          "item": "Practice tests / courses",
          "fee": "$50–$300"
        }
      ],
      "total": "$295–$545",
      "footnote": "Free Java 21 docs and the JLS support low-cost prep."
    },
    "difficulty": "Hard",
    "audience": "Working Java developers",
    "time": "6–10 weeks",
    "cost": "$245–$545",
    "salaryRange": "$100,000–$140,000",
    "faqs": [
      {
        "q": "Do I need the OCA before the OCP Java exam?",
        "a": "No. The modern Java SE 21 track is a single professional exam (1Z0-830). Oracle no longer requires a separate associate exam first, unlike the older Java SE 8 era."
      },
      {
        "q": "What is the format and pass mark?",
        "a": "It is 120 minutes with about 50 multiple-choice questions, several of which show a code snippet and ask what it prints or whether it compiles. The passing score is 68%."
      },
      {
        "q": "What topics have the most weight?",
        "a": "Lambdas, streams and collectors are the highest-yield area, alongside generics, OOP (records/sealed/patterns) and concurrency including virtual threads. The exam rewards precise code reading over memorisation."
      },
      {
        "q": "Does the certification expire?",
        "a": "Oracle credentials do not expire once earned, but Oracle retires older exam versions; you would take the current version to stay current."
      }
    ],
    "summaryPoints": [
      "Professional Java 21 developer exam (1Z0-830).",
      "$245, 120 minutes, ~50 questions, pass at 68%.",
      "Tests code reading: generics, streams, modules, concurrency.",
      "Single exam; no OCA prerequisite."
    ],
    "relatedSlugs": [
      "oracle-java-se-17-developer",
      "oracle-java-se-11-developer",
      "oracle-java-foundations"
    ],
    "sourceUrl": "https://education.oracle.com/java-se-21-developer-professional/rcert/Java21P",
    "reviewed": "2026-08",
    "confidence": "high"
  },
  {
    "slug": "oracle-java-se-17-developer",
    "body": "Oracle",
    "tagline": "Professional Java 17 developer credential",
    "description": "Oracle Certified Professional: Java SE 17 Developer (exam 1Z0-829) validates professional skills in Java 17, the previous Long-Term Support release. It covers the same modern Java surface as the SE 21 exam — types, OOP, generics, streams, modules, I/O and concurrency — and remains a common requirement for teams still standardised on Java 17.",
    "quickAnswer": {
      "summary": "The Oracle Certified Professional: Java SE 17 Developer exam (1Z0-829, $245, ~120 minutes, ~50 questions, pass around 68%) validates professional Java 17 skills. It is a single exam with no associate prerequisite and targets developers on Java 17 LTS.",
      "advantages": [
        "Java 17 LTS credential",
        "Single exam, no OCA prerequisite",
        "Maps to many enterprise codebases",
        "Same modern Java surface as SE 21"
      ]
    },
    "prerequisites": "Knowledge of the Java programming language; no separate associate exam required.",
    "eligibility": "Open to anyone with Java development experience.",
    "examMeta": {
      "questions": "~50",
      "time": "120 minutes",
      "pass": "~68%",
      "fee": "$245",
      "format": "Multiple choice (includes code analysis)",
      "admin": "Pearson VUE / Oracle MyLearn"
    },
    "topics": [
      {
        "name": "Types, text, dates and flow",
        "weight": "",
        "note": "Primitives, String, Date/Time, control flow"
      },
      {
        "name": "OOP, records and patterns",
        "weight": "",
        "note": "Classes, interfaces, sealed, enums"
      },
      {
        "name": "Generics, collections, streams",
        "weight": "",
        "note": "Wildcards, lambdas, collectors"
      },
      {
        "name": "Modules, I/O and concurrency",
        "weight": "",
        "note": "JPMS, NIO, threads"
      }
    ],
    "examEssentials": [
      [
        "Delivery",
        "Pearson VUE / Oracle MyLearn"
      ],
      [
        "Exam code",
        "1Z0-829"
      ],
      [
        "Fee",
        "$245"
      ],
      [
        "LTS",
        "Java 17"
      ]
    ],
    "timeline": [
      {
        "stage": "Code-reading practice",
        "duration": "6–10 weeks"
      },
      {
        "stage": "Book and pass",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "$245"
        },
        {
          "item": "Practice tests",
          "fee": "$50–$200"
        }
      ],
      "total": "$295–$445",
      "footnote": "Java 17 docs and practice are the main prep cost."
    },
    "difficulty": "Hard",
    "audience": "Java developers on Java 17",
    "time": "6–10 weeks",
    "cost": "$245–$445",
    "salaryRange": "$100,000–$140,000",
    "faqs": [
      {
        "q": "Should I take SE 17 or SE 21?",
        "a": "Take the exam that matches the Java version your team or target employers use. SE 21 is the current LTS and the newest exam; SE 17 is appropriate if you work on a Java 17 codebase."
      },
      {
        "q": "What does the exam cover?",
        "a": "The same modern Java surface as SE 21 — types, OOP, generics, streams/collectors, modules, I/O and concurrency — tested through code-reading questions at a pass mark around 68%."
      },
      {
        "q": "Is there an associate prerequisite?",
        "a": "No. Like the SE 21 track, the SE 17 professional exam is a single exam you can register for directly."
      },
      {
        "q": "Does it expire?",
        "a": "Oracle credentials do not expire once earned, but the exam version is retired over time; recertify on the current version to stay current."
      }
    ],
    "summaryPoints": [
      "Professional Java 17 developer exam (1Z0-829).",
      "$245, ~120 minutes, ~50 questions, pass ~68%.",
      "Same modern Java surface as SE 21, on JDK 17.",
      "Single exam; choose the version your team uses."
    ],
    "relatedSlugs": [
      "oracle-java-se-21-developer",
      "oracle-java-se-11-developer",
      "oracle-java-foundations"
    ],
    "sourceUrl": "https://education.oracle.com/java-se-17-developer/rcert/JAVA17D",
    "reviewed": "2026-08",
    "confidence": "medium"
  },
  {
    "slug": "oracle-java-se-11-developer",
    "body": "Oracle",
    "tagline": "Professional Java 11 developer credential",
    "description": "Oracle Certified Professional: Java SE 11 Developer (exam 1Z0-819) validates professional Java 11 skills, including modules (JPMS), lambda expressions, streams and core language features introduced through Java 11. It remains relevant for organisations that standardised on Java 11 LTS.",
    "quickAnswer": {
      "summary": "The Oracle Certified Professional: Java SE 11 Developer exam (1Z0-819, $245, ~120 minutes, ~50 questions, pass around 68%) validates professional Java 11 skills including modules, lambdas and streams. It is a single exam with no associate prerequisite.",
      "advantages": [
        "Java 11 LTS credential",
        "Single exam, no OCA prerequisite",
        "Relevant to many long-lived codebases",
        "Covers JPMS and modern syntax"
      ]
    },
    "prerequisites": "Knowledge of the Java programming language; no separate associate exam required.",
    "eligibility": "Open to anyone with Java development experience.",
    "examMeta": {
      "questions": "~50",
      "time": "120 minutes",
      "pass": "~68%",
      "fee": "$245",
      "format": "Multiple choice (includes code analysis)",
      "admin": "Pearson VUE / Oracle MyLearn"
    },
    "topics": [
      {
        "name": "Java fundamentals",
        "weight": "",
        "note": "Types, flow, OOP, exceptions"
      },
      {
        "name": "Modules and packaging (JPMS)",
        "weight": "",
        "note": "Module declarations, services"
      },
      {
        "name": "Collections, generics, streams",
        "weight": "",
        "note": "Lambdas, collectors, Optionals"
      },
      {
        "name": "Concurrency and I/O",
        "weight": "",
        "note": "Threads, NIO.2"
      }
    ],
    "examEssentials": [
      [
        "Delivery",
        "Pearson VUE / Oracle MyLearn"
      ],
      [
        "Exam code",
        "1Z0-819"
      ],
      [
        "Fee",
        "$245"
      ],
      [
        "LTS",
        "Java 11"
      ]
    ],
    "timeline": [
      {
        "stage": "Code-reading practice",
        "duration": "6–10 weeks"
      },
      {
        "stage": "Book and pass",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "$245"
        },
        {
          "item": "Practice tests",
          "fee": "$50–$200"
        }
      ],
      "total": "$295–$445",
      "footnote": "Java 11 docs and practice are the main prep cost."
    },
    "difficulty": "Hard",
    "audience": "Java developers on Java 11",
    "time": "6–10 weeks",
    "cost": "$245–$445",
    "salaryRange": "$100,000–$140,000",
    "faqs": [
      {
        "q": "Is the Java 11 exam still worth taking?",
        "a": "Yes if your team or target employers run Java 11. It validates the same professional developer skills on the 11 LTS line, including the Java Platform Module System introduced in Java 9."
      },
      {
        "q": "What is the format and pass mark?",
        "a": "Around 120 minutes with about 50 multiple-choice questions (several code-analysis items), passing at roughly 68%."
      },
      {
        "q": "Is there an associate prerequisite?",
        "a": "No. The professional exam is a single exam you can register for directly."
      },
      {
        "q": "Does it expire?",
        "a": "Oracle credentials do not expire once earned, but the exam version is retired over time; recertify on the current version to stay current."
      }
    ],
    "summaryPoints": [
      "Professional Java 11 developer exam (1Z0-819).",
      "$245, ~120 minutes, ~50 questions, pass ~68%.",
      "Covers JPMS, lambdas, streams and core Java 11.",
      "Single exam; for Java 11 LTS codebases."
    ],
    "relatedSlugs": [
      "oracle-java-se-17-developer",
      "oracle-java-se-21-developer",
      "oracle-java-foundations"
    ],
    "sourceUrl": "https://education.oracle.com/java-se-11-developer/rcert/JAVA11D",
    "reviewed": "2026-08",
    "confidence": "medium"
  },
  {
    "slug": "oracle-java-foundations",
    "body": "Oracle",
    "tagline": "Entry-level Java fundamentals certificate",
    "description": "Oracle Java Foundations is Oracle’s entry-level Java credential for students and career starters. It validates basic Java syntax, object-oriented concepts and simple programming logic without requiring professional development experience, and is a gentle on-ramp toward the Java SE Developer professional exams.",
    "quickAnswer": {
      "summary": "Oracle Java Foundations is an entry-level Java exam that validates basic syntax, OOP concepts and simple programming logic. It is aimed at students and beginners, often available at low or no cost, and is a stepping stone to the Java SE Developer professional exams.",
      "advantages": [
        "No experience required",
        "Low or no cost",
        "Good first Java credential",
        "Path to Java SE Developer"
      ]
    },
    "prerequisites": "None — designed for beginners and students.",
    "eligibility": "Open to all learners new to Java.",
    "examMeta": {
      "questions": "~75",
      "time": "120 minutes",
      "pass": "~65%",
      "fee": "Low cost (often free or ~$95)",
      "format": "Multiple choice",
      "admin": "Pearson VUE / Oracle MyLearn"
    },
    "topics": [
      {
        "name": "Java basics and syntax",
        "weight": "",
        "note": "Variables, operators, control flow"
      },
      {
        "name": "Object-oriented concepts",
        "weight": "",
        "note": "Classes, objects, methods"
      },
      {
        "name": "Working with data",
        "weight": "",
        "note": "Arrays, strings, simple I/O"
      },
      {
        "name": "Basic problem solving",
        "weight": "",
        "note": "Logic and debugging"
      }
    ],
    "examEssentials": [
      [
        "Delivery",
        "Pearson VUE / Oracle MyLearn"
      ],
      [
        "Level",
        "Foundations"
      ],
      [
        "Audience",
        "Students / beginners"
      ],
      [
        "Cost",
        "Often free or low"
      ]
    ],
    "timeline": [
      {
        "stage": "Learn Java basics",
        "duration": "4–8 weeks"
      },
      {
        "stage": "Book and pass",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "Free–$95"
        }
      ],
      "total": "Free–$95",
      "footnote": "Academic programs often cover the fee."
    },
    "difficulty": "Easy",
    "audience": "Students and Java beginners",
    "time": "4–8 weeks",
    "cost": "Free–$95",
    "salaryRange": "",
    "faqs": [
      {
        "q": "Who is Java Foundations for?",
        "a": "Students and absolute beginners who want a first, low-stakes Java credential before committing to the professional developer exams."
      },
      {
        "q": "How much does it cost?",
        "a": "It is Oracle’s entry exam and is typically free or very low cost (around $95), often covered by academic programs. Confirm current pricing on Oracle’s exam page."
      },
      {
        "q": "What does it cover?",
        "a": "Basic Java syntax, variables and operators, control flow, classes and objects, arrays and strings, and simple problem solving — no professional experience required."
      },
      {
        "q": "What is the next step?",
        "a": "Move on to the Oracle Certified Professional: Java SE Developer exam (SE 11/17/21) once you have hands-on coding practice."
      }
    ],
    "summaryPoints": [
      "Entry-level Java fundamentals exam for beginners.",
      "Usually free or low cost (~$95).",
      "Covers syntax, OOP basics and simple logic.",
      "Stepping stone to Java SE Developer exams."
    ],
    "relatedSlugs": [
      "oracle-java-se-11-developer",
      "oracle-java-se-17-developer",
      "oracle-java-se-21-developer"
    ],
    "sourceUrl": "https://education.oracle.com/java-foundations/rcert/JAVA-F",
    "reviewed": "2026-08",
    "confidence": "medium"
  },
  {
    "slug": "oracle-linux-system-administrator",
    "body": "Oracle",
    "tagline": "Administer Oracle Linux systems",
    "description": "The Oracle Linux System Administrator certification validates the skills to install, configure and maintain Oracle Linux — RPM package management, kernel and boot management, storage, networking, users and security. It targets Linux administrators in Oracle environments and on-prem/Oracle Cloud infrastructure.",
    "quickAnswer": {
      "summary": "The Oracle Linux System Administrator exam ($245, ~120 minutes) validates administering Oracle Linux: packages, boot/kernel, storage, networking, users and security. It targets Linux administrators and is delivered via Pearson VUE / Oracle MyLearn.",
      "advantages": [
        "Vendor-specific Linux credential",
        "Useful for OCI and on-prem Oracle",
        "Builds on RHCSA-style skills",
        "Recognised in enterprise Linux roles"
      ]
    },
    "prerequisites": "Linux fundamentals; RHCSA-level experience is helpful.",
    "eligibility": "Open to anyone with Linux administration experience.",
    "examMeta": {
      "questions": "~60",
      "time": "120 minutes",
      "pass": "~65%",
      "fee": "$245",
      "format": "Multiple choice / performance",
      "admin": "Pearson VUE / Oracle MyLearn"
    },
    "topics": [
      {
        "name": "Installation and package management",
        "weight": "",
        "note": "RPM, YUM/DNF, Ksplice"
      },
      {
        "name": "Boot and kernel management",
        "weight": "",
        "note": "GRUB2, kernels, modules"
      },
      {
        "name": "Storage and file systems",
        "weight": "",
        "note": "LVM, disk, Btrfs/XFS"
      },
      {
        "name": "Networking, users and security",
        "weight": "",
        "note": "NICs, firewall, SELinux, sudo"
      }
    ],
    "examEssentials": [
      [
        "Delivery",
        "Pearson VUE / Oracle MyLearn"
      ],
      [
        "Fee",
        "$245"
      ],
      [
        "Focus",
        "Oracle Linux administration"
      ],
      [
        "Level",
        "Associate/Professional"
      ]
    ],
    "timeline": [
      {
        "stage": "Practice on Oracle Linux",
        "duration": "6–10 weeks"
      },
      {
        "stage": "Book and pass",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "$245"
        },
        {
          "item": "Labs / courses",
          "fee": "$50–$300"
        }
      ],
      "total": "$295–$545",
      "footnote": "Oracle Linux is free to download for practice."
    },
    "difficulty": "Moderate",
    "audience": "Linux system administrators",
    "time": "6–10 weeks",
    "cost": "$245–$545",
    "salaryRange": "$80,000–$120,000",
    "faqs": [
      {
        "q": "What does the exam cover?",
        "a": "Core Oracle Linux administration: RPM/DNF package management, GRUB2 and kernel handling, LVM and file systems, networking, user management, firewalls and SELinux."
      },
      {
        "q": "Is it like RHCSA?",
        "a": "It covers similar system-administration ground but is specific to Oracle Linux (including Oracle features such as Ksplice and UEK). RHCSA experience transfers well."
      },
      {
        "q": "How do I practice?",
        "a": "Oracle Linux is freely downloadable; build a VM, and practice package installs, LVM, networking and SELinux configurations from the command line."
      },
      {
        "q": "Does it expire?",
        "a": "Oracle credentials do not expire once earned, but the exam version is retired over time; recertify on the current version to remain current."
      }
    ],
    "summaryPoints": [
      "Oracle Linux system administration exam.",
      "$245, ~120 minutes, pass ~65%.",
      "Covers packages, boot, storage, networking, security.",
      "Targets Linux admins in Oracle environments."
    ],
    "relatedSlugs": [
      "oracle-oci-architect-associate",
      "oracle-database-administrator-professional",
      "oracle-oci-foundations-associate"
    ],
    "sourceUrl": "https://education.oracle.com/oracle-linux-8-system-administrator/rcert/OLSA",
    "reviewed": "2026-08",
    "confidence": "medium"
  },
  {
    "slug": "oracle-cerner-millennia",
    "body": "Oracle",
    "tagline": "Certify on the Oracle Cerner Millennium EHR",
    "description": "Oracle Cerner Millennium certifications validate expertise in the Millennium electronic health record (EHR) platform, used by hospitals and health systems. Credentials span roles such as application analyst, clinical builder and system support, and are delivered through Oracle University. They are valuable for healthcare IT professionals implementing and maintaining Cerner/Oracle health systems.",
    "quickAnswer": {
      "summary": "Oracle Cerner Millennium certifications validate expertise in the Millennium EHR platform across roles such as application analyst, clinical builder and support. Delivered via Oracle University, they target healthcare IT professionals and are valuable for hospitals running Cerner/Oracle health systems.",
      "advantages": [
        "Niche, in-demand healthcare IT skill",
        "Role-based (analyst, builder, support)",
        "Backed by Oracle University",
        "Strong in hospital IT"
      ]
    },
    "prerequisites": "Familiarity with healthcare IT and the Millennium platform; role-dependent.",
    "eligibility": "Open to healthcare IT professionals; often pursued by employer-sponsored staff.",
    "examMeta": {
      "questions": "Varies by track",
      "time": "Varies",
      "pass": "Track-specific",
      "fee": "Oracle University pricing (varies)",
      "format": "Multiple choice / role-based",
      "admin": "Oracle University / Pearson VUE"
    },
    "topics": [
      {
        "name": "Millennium architecture",
        "weight": "",
        "note": "Domains, foundations, navigation"
      },
      {
        "name": "Application build and config",
        "weight": "",
        "note": "PowerChart, flowsheets, rules"
      },
      {
        "name": "Clinical and operational workflows",
        "weight": "",
        "note": "Orders, results, registration"
      },
      {
        "name": "Support and troubleshooting",
        "weight": "",
        "note": "Release management, issues"
      }
    ],
    "examEssentials": [
      [
        "Delivery",
        "Oracle University / Pearson VUE"
      ],
      [
        "Type",
        "Role-based EHR credential"
      ],
      [
        "Audience",
        "Healthcare IT"
      ],
      [
        "Sponsor",
        "Often employer-paid"
      ]
    ],
    "timeline": [
      {
        "stage": "Hands-on Millennium experience",
        "duration": "3–6 months"
      },
      {
        "stage": "Book and pass",
        "duration": "test day"
      }
    ],
    "costBreakdown": {
      "items": [
        {
          "item": "Exam fee",
          "fee": "Varies by track"
        }
      ],
      "total": "Varies (often employer-sponsored)",
      "footnote": "Many candidates sit this through an employer-sponsored Oracle University plan."
    },
    "difficulty": "Moderate",
    "audience": "Healthcare IT professionals (Cerner/Oracle)",
    "time": "3–6 months",
    "cost": "Varies (often employer-sponsored)",
    "salaryRange": "$70,000–$110,000",
    "faqs": [
      {
        "q": "What is Oracle Cerner Millennium?",
        "a": "Millennium is Oracle’s (formerly Cerner’s) comprehensive EHR platform used by hospitals and health systems. Certifications validate the skills to build, configure and support it across clinical and operational roles."
      },
      {
        "q": "Who takes these certifications?",
        "a": "Healthcare IT staff — application analysts, clinical builders, interface and support engineers — often sponsored by their hospital or health system."
      },
      {
        "q": "How are the exams delivered?",
        "a": "Through Oracle University, with role-based exams and pricing that varies by track. Many candidates register via an employer-sponsored learning plan."
      },
      {
        "q": "Does it expire?",
        "a": "Validity follows Oracle’s certification policies for the specific track; check the Oracle University page for the credential you are pursuing."
      }
    ],
    "summaryPoints": [
      "Role-based certification for the Oracle Cerner Millennium EHR.",
      "Spans analyst, builder and support tracks.",
      "Targets healthcare IT professionals.",
      "Usually pursued via employer-sponsored Oracle University."
    ],
    "relatedSlugs": [
      "oracle-oci-architect-associate",
      "oracle-database-administrator-professional",
      "oracle-linux-system-administrator"
    ],
    "sourceUrl": "https://education.oracle.com/",
    "reviewed": "2026-08",
    "confidence": "medium"
  }
];

export default { programs, exams };
