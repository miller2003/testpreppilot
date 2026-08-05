# Reserved slugs

These already exist as fully-written credential pages in `src/data/credentials.ts`
and are served from `/paths/<slug>`. Never re-declare them in the catalog.

- texas-real-estate-license
- california-real-estate-license
- florida-real-estate-license
- enrolled-agent
- osha-10-construction
- osha-30-construction
- epa-608-certification
- cpa-exam

## File ownership (avoid cross-file slug collisions)

| file | owns |
|------|------|
| `admissions-academic.mjs` | college/grad admissions, AP, CLEP, DSST, HSE, English-proficiency, K-12 placement, military aptitude |
| `healthcare-clinical.mjs` | physician, nursing (RN/APRN), pharmacy, dental, vision, podiatry, chiropractic, PT/OT, midwifery, acupuncture licensure exams |
| `allied-health.mjs` | technicians, assistants, imaging, lab, EMS, coding/HIM, sterile processing, phlebotomy, dialysis |
| `behavioral-health.mjs` | social work, counseling, psychology, ABA, addiction, marriage & family |
| `education-teaching.mjs` | Praxis family, national teacher/administrator assessments, early-childhood, TESOL |
| `finance-securities.mjs` | FINRA/NASAA series, CFA/CAIA/FRM/CFP, banking, treasury, fraud/audit, mortgage national |
| `insurance-risk.mjs` | national insurance designations, adjuster designations, risk management |
| `legal-government.mjs` | bar-component exams, MPRE, patent bar, paralegal, court reporting, federal hiring exams, USPS, civil service |
| `technology.mjs` | IT, cloud, cybersecurity, data/AI, networking, ERP/CRM platforms |
| `project-business.mjs` | project/agile/quality/HR/supply-chain/marketing certifications |
| `trades-construction.mjs` | ASE, welding, NDT, API, NCCER, ICC, NICET, crane, elevator, locksmith trade certs |
| `engineering-design.mjs` | NCEES FE/PE/SE/FS/PS, ARE, LEED/WELL, energy & building performance |
| `safety-environment.mjs` | OSHA outreach & trainer, HAZWOPER, CSP/ASP family, asbestos/lead/mold/radon, water & wastewater national, pesticide national, arborist |
| `transportation-aviation-maritime.mjs` | FAA, FCC, USCG, rail, NRCME, CDL national knowledge components, logistics |
| `public-safety.mjs` | police/fire/EMS entrance & certification (national instruments), dispatch, corrections, emergency management |
| `beauty-food-security-recreation.mjs` | NIC cosmetology theory, food-safety manager/handler national programs, alcohol server national programs, security/PI national, fitness, recreation, notary-adjacent, funeral, interpreting, misc personal services |
