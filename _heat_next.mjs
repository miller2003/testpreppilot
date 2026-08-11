// Batch 11-18 (heat 401-800): generate _next50i.json .. _next50p.json
// Method: curated VOL model + content-family diversity caps.
//   - State-level variants: family gets a TOTAL cap (largest states win by heat),
//     and max 2 per batch per family to avoid sibling-similarity failures.
//   - National certs: max 3 per batch per family-prefix.
// Heat = clamp(40 + 14*log10(v/1000)).
import { allExamsFull } from './src/data/examCatalog/index.mjs';
import { readdirSync, writeFileSync } from 'node:fs';

const done = new Set(readdirSync('src/data/examCatalog/depth').filter(f => f.endsWith('.mjs') && f !== 'index.mjs').map(f => f.replace(/\.mjs$/, '')));

const SW = {
  california: 1.0, texas: 0.92, florida: 0.82, 'new-york': 0.8, pennsylvania: 0.58,
  ohio: 0.58, illinois: 0.56, georgia: 0.5, 'north-carolina': 0.48, michigan: 0.44,
  'new-jersey': 0.44, virginia: 0.42, washington: 0.42, arizona: 0.4, massachusetts: 0.38,
  tennessee: 0.37, indiana: 0.35, missouri: 0.34, maryland: 0.33, wisconsin: 0.32,
  minnesota: 0.32, colorado: 0.32, 'south-carolina': 0.3, alabama: 0.28, louisiana: 0.28,
  kentucky: 0.27, oregon: 0.27, oklahoma: 0.26, connecticut: 0.25, utah: 0.24,
  iowa: 0.23, nevada: 0.21, arkansas: 0.21, mississippi: 0.2, kansas: 0.2,
  'new-mexico': 0.18, nebraska: 0.18, idaho: 0.17, 'west-virginia': 0.16, 'new-hampshire': 0.14,
  hawaii: 0.14, maine: 0.13, montana: 0.11, 'rhode-island': 0.11, delaware: 0.11,
  'south-dakota': 0.1, 'north-dakota': 0.09, alaska: 0.08, vermont: 0.07, wyoming: 0.07,
  'district-of-columbia': 0.06
};
const STATE_PREFIXES = Object.keys(SW);

const FAMILY_BASE = [
  [/drivers-license-written-test/, 2200000, 'DMV written knowledge test'],
  [/motorcycle-license-test/, 260000, 'Motorcycle endorsement written test'],
  [/food-handler-card/, 1600000, 'Food handler training'],
  [/food-protection-manager-certification/, 90000, 'Food Protection Manager'],
  [/concealed-carry-permit/, 420000, 'CCW permit'],
  [/alcohol-server-certification/, 520000, 'Responsible beverage service'],
  [/cdl-commercial-drivers-license/, 560000, 'CDL testing'],
  [/registered-nurse-license/, 260000, 'RN licensure'],
  [/certified-nursing-assistant-certification/, 300000, 'Nurse aide registry'],
  [/emt-certification/, 140000, 'EMT certification'],
  [/life-and-health-insurance-license/, 62000, 'L&H producer licensing'],
  [/property-and-casualty-insurance-license/, 52000, 'P&C producer licensing'],
  [/personal-lines-insurance-license/, 26000, 'Personal lines producer'],
  [/insurance-adjuster-license/, 14000, 'Insurance adjuster'],
  [/public-adjuster-license/, 3000, 'Public adjuster'],
  [/real-estate-salesperson-license/, 110000, 'Real estate salesperson'],
  [/real-estate-broker-license/, 24000, 'Real estate broker'],
  [/cosmetology-license/, 90000, 'Cosmetologist'],
  [/barber-license/, 36000, 'Barber'],
  [/esthetician-license/, 52000, 'Esthetician'],
  [/nail-technician-license/, 42000, 'Nail technician'],
  [/cosmetology-instructor-license/, 6000, 'Cosmetology instructor'],
  [/journeyman-electrician-license/, 88000, 'Journeyman electrician'],
  [/master-electrician-license/, 30000, 'Master electrician'],
  [/journeyman-plumber-license/, 60000, 'Journeyman plumber'],
  [/master-plumber-license/, 22000, 'Master plumber'],
  [/hvac-contractor-license/, 46000, 'HVAC contractor'],
  [/general-contractor-license/, 42000, 'General contractor'],
  [/contractor-business-and-law-exam/, 26000, 'Contractor business & law'],
  [/massage-therapy-license/, 46000, 'Massage therapy'],
  [/notary-public-commission/, 88000, 'Notary public'],
  [/home-inspector-license/, 18000, 'Home inspector'],
  [/certified-residential-appraiser/, 14000, 'Residential appraiser'],
  [/mortgage-loan-originator-license/, 28000, 'MLO licensing'],
  [/auctioneer-license/, 4000, 'Auctioneer'],
  [/title-insurance-license/, 10000, 'Title insurance'],
  [/police-officer-exam/, 16000, 'Police officer'],
  [/firefighter-exam/, 9000, 'Firefighter'],
  [/pesticide-applicator-license/, 30000, 'Pesticide applicator'],
  [/security-guard-license/, 60000, 'Security guard'],
  [/private-investigator-license/, 5000, 'Private investigator'],
  [/cpa-license-requirements/, 14000, 'CPA license'],
  [/funeral-director-license/, 3000, 'Funeral director'],
  [/nursing-home-administrator-license/, 3500, 'Nursing home admin'],
  [/bar-exam/, 18000, 'Bar admission'],
  [/teacher-certification-exams/, 60000, 'Teacher certification'],
  [/water-treatment-operator-certification/, 16000, 'Water treatment operator'],
  [/wastewater-operator-certification/, 12000, 'Wastewater operator'],
  [/pharmacy-technician-registration/, 20000, 'Pharmacy technician'],
  [/real-estate-appraiser/, 12000, 'Real estate appraiser']
];

const NATIONAL_VOL = [
  [/^microsoft-office-specialist/, 300000], [/^microsoft-ab-|^microsoft-gh-/, 12000],
  [/^microsoft-(az|dp|sc|pl|mb|ms|ai)-/, 24000], [/^aws-/, 30000], [/^google-/, 25000],
  [/^oracle-(oci|database|linux)/, 14000], [/^oracle-java/, 26000], [/^salesforce-/, 18000],
  [/^servicenow-/, 12000], [/^sap-/, 12000], [/^workday-/, 9000], [/^epic-/, 8000],
  [/^adobe-/, 16000], [/^atlassian-/, 14000], [/^hubspot-/, 40000], [/^shopify-/, 20000],
  [/^netsuite-/, 8000], [/^databricks-/, 15000], [/^snowpro/, 12000], [/^tableau-/, 10000],
  [/^qlik-/, 6000], [/^sas-/, 7000], [/^cloudera-/, 5000], [/^mongodb-/, 9000],
  [/^neo4j-/, 4000], [/^elastic-/, 7000], [/^confluent-/, 6000], [/^nvidia-/, 9000],
  [/^tensorflow-/, 15000], [/^alteryx-/, 9000], [/^dbt-/, 8000], [/^astronomer-/, 4000],
  [/^dama-/, 4000], [/^ibm-data-science|^ibm-ai/, 20000], [/^certified-analytics-professional/, 5000],
  [/^informs-/, 4000], [/^cisco-ccie/, 10000], [/^cisco-ccnp-/, 42000], [/^cisco-ccde/, 2000],
  [/^cisco-ai/, 4000], [/^cisco-(en|sise|sncf|svpn)/, 9000], [/^juniper-/, 8000], [/^aruba-/, 7000],
  [/^palo-alto-/, 9000], [/^fortinet-/, 10000], [/^check-point-/, 6000], [/^f5-/, 5000],
  [/^cwnp-/, 6000], [/^bicsi-/, 7000], [/^sonicwall-/, 4000], [/^isc2-/, 18000],
  [/^ccsk|^certified-cloud-security/, 6000], [/^ec-council/, 10000], [/^giac-/, 9000],
  [/^certified-ethical/, 20000], [/^red-hat-/, 22000], [/^lpic-|^lpi-/, 14000],
  [/^bsd-associate/, 2000], [/^suse-/, 5000], [/^itil-/, 40000], [/^cobit-/, 6000],
  [/^togaf-/, 8000], [/^archimate-/, 3000], [/^hdi-/, 5000], [/^iso-27001|^iso-42001/, 9000],
  [/^aiim-/, 2000], [/^pmi-/, 16000], [/^scrum-alliance-/, 18000], [/^scrum-org-/, 14000],
  [/^safe-/, 30000], [/^icagile-/, 8000], [/^kanban-/, 5000], [/^aipmm-/, 7000],
  [/^certified-less-/, 2000], [/^pragmatic-institute-/, 6000], [/^disciplined-agile-/, 4000],
  [/^ipma-/, 3000], [/^msp-/, 4000], [/^prince2-/, 5000], [/^project-dpro/, 3000],
  [/^gpm-b-/, 2000], [/^asq-/, 12000], [/^iassc-/, 15000], [/^csscouncil-/, 3000],
  [/^exemplar-global-/, 4000], [/^sme-/, 7000], [/^apics-/, 12000], [/^isa-(cap|ccst)/, 5000],
  [/^ipc-/, 6000], [/^cswa|^cswp/, 20000], [/^asme-/, 5000], [/^smrp-/, 3000],
  [/^nccer-/, 45000], [/^nicet-/, 9000], [/^aci-/, 8000], [/^naec-/, 2000], [/^aloa-/, 2000],
  [/^ctef-/, 2000], [/^nga-/, 2000], [/^nrca-/, 2000], [/^saia-/, 2000], [/^cfi-/, 2000],
  [/^qei-/, 2000], [/^nabcep-/, 7000], [/^eta-/, 6000], [/^iscet-/, 2000], [/^nate-/, 25000],
  [/^hvac-excellence-/, 8000], [/^bpi-/, 5000], [/^resnet-/, 4000], [/^aee-/, 6000],
  [/^leed-/, 26000], [/^well-ap|^well-faculty/, 5000], [/^green-globes-/, 2000],
  [/^true-advisor/, 1000], [/^sites-ap/, 1000], [/^phiuc-/, 2000], [/^living-future-/, 2000],
  [/^edge-expert/, 1000], [/^ngbs-/, 3000], [/^gpro-/, 4000], [/^abc-/, 8000],
  [/^abpa-|^asse-/, 4000], [/^cesswi-|^cpesc-|^cpmsm-|^cpswq-|^certified-erosion/, 3000],
  [/^cross-connection-/, 2000], [/^nawt-/, 3000], [/^ngwa-/, 3000], [/^ngicp-/, 2000],
  [/^wqa-/, 4000], [/^ahera-/, 6000], [/^aha-asbestos-/, 3000], [/^acac-/, 3000],
  [/^ast-operator-/, 2000], [/^epa-lead-/, 6000], [/^epa-brownfields/, 1000], [/^iicrc-/, 12000],
  [/^normi-/, 3000], [/^nrpp-/, 4000], [/^nrsb-/, 2000], [/^phase-one-esa-/, 2000],
  [/^ust-class-/, 4000], [/^nrep-/, 3000], [/^professional-wetland-scientist/, 1000],
  [/^certified-ecologist-/, 2000], [/^certified-environmental-professional-/, 3000],
  [/^certified-fisheries-|^associate-fisheries-/, 2000], [/^certified-forester-/, 2000],
  [/^certified-professional-agronomist/, 2000], [/^certified-professional-in-rangeland/, 1000],
  [/^certified-professional-soil-scientist/, 1000], [/^certified-wildlife-|^associate-wildlife-/, 3000],
  [/^isa-(board|tree|certified)/, 12000], [/^certified-crop-adviser/, 10000],
  [/^private-pesticide/, 20000], [/^commercial-applicator-/, 8000], [/^faa-/, 7000],
  [/^abyc-/, 3000], [/^cpat$/, 15000], [/^fireteam/, 5000], [/^nfsi/, 4000],
  [/^ifsac-|^pro-board-/, 9000], [/^fire-officer-/, 8000], [/^fire-instructor-/, 7000],
  [/^fire-inspector-/, 4000], [/^fire-investigator/, 3000], [/^driver-operator-/, 5000],
  [/^hazmat-(awareness|operations|technician|incident)/, 12000], [/^rescue-technician-/, 4000],
  [/^airport-firefighter/, 2000], [/^wildland-/, 8000], [/^nfpa-cfps|^nfpa-cfpe/, 2000],
  [/^nfpa-cfi/, 1000], [/^usps-vea/, 120000], [/^fsot/, 16000], [/^fbi-sa/, 15000],
  [/^cbp-officer/, 20000], [/^cbp-spanish/, 4000], [/^border-patrol/, 10000],
  [/^atf-special-agent/, 6000], [/^dea-special-agent/, 6000], [/^secret-service-/, 7000],
  [/^us-marshals/, 4000], [/^irs-ci/, 5000], [/^ice-officer/, 6000], [/^diplomatic-security/, 4000],
  [/^us-citizenship-immigration/, 6000], [/^tsa-cbt/, 30000], [/^tsa-ort/, 8000], [/^atsa/, 8000],
  [/^federal-air-marshal/, 4000], [/^federal-protective-service/, 5000], [/^federal-capital-police/, 4000],
  [/^usahire/, 10000], [/^nj-civil-service/, 5000], [/^state-civil-service/, 6000],
  [/^certified-public-manager/, 3000], [/^icma-/, 2000], [/^nigp-/, 4000], [/^fac-/, 6000],
  [/^dawia/, 3000], [/^cfcm|^cpcm|^cccm/, 3000], [/^praxis-/, 9000], [/^edtpa/, 30000],
  [/^ets-major-field/, 4000], [/^foundations-of-reading/, 6000], [/^nes-/, 6000], [/^nbpts-/, 8000],
  [/^clep-/, 14000], [/^cambridge-international/, 5000], [/^comlex/, 12000], [/^abms-/, 4500],
  [/^ascp-/, 14000], [/^amt-/, 9000], [/^aab-/, 5000], [/^cdr-/, 9000], [/^boc-atc/, 6000],
  [/^ncbtmb/, 8000], [/^brpt-/, 3000], [/^aast-/, 4000], [/^abpct-/, 6000], [/^nbnasc-/, 2000],
  [/^bonent-/, 3000], [/^nncc-/, 3000], [/^jcahpo-/, 3000], [/^abc-(co|cp|cpo|cped)/, 5000],
  [/^navle/, 10000], [/^aapc-/, 18000], [/^ahima-/, 9000], [/^ptcb-/, 20000], [/^eppp/, 5000],
  [/^asppb-/, 3000], [/^national-register-health-service/, 1000],
  [/^psychopharmacology-examination/, 1000], [/^abpp-/, 3000], [/^fspca-/, 5000],
  [/^brcgs-/, 3000], [/^sqf-/, 3000], [/^acf-/, 4000], [/^always-food-safe/, 3000],
  [/^american-cheese-society/, 1000], [/^barsmarts/, 2000], [/^bjcp-/, 3000], [/^cicerone-/, 4000],
  [/^cms-/, 2000], [/^coffee-quality-institute/, 2000], [/^haccp-manager/, 6000], [/^iacp-/, 2000],
  [/^kcbs-/, 2000], [/^learn2serve-/, 8000], [/^nrfsp-/, 4000], [/^produce-safety-alliance/, 4000],
  [/^prometric-certified-professional-food-manager/, 5000], [/^swe-certified-/, 2000], [/^wset-/, 3000],
  [/^ahlei-/, 4000], [/^certified-club-manager/, 2000], [/^certified-meeting/, 3000],
  [/^certified-special-events/, 2000], [/^certified-travel-/, 2000], [/^certified-wedding-planner/, 2000],
  [/^digital-event-strategist/, 1000], [/^iaee-/, 2000], [/^iata-/, 3000], [/^acsm-/, 8000],
  [/^ace-/, 15000], [/^nasm-/, 15000], [/^nsca-/, 8000], [/^afaa-/, 5000], [/^issa-/, 5000],
  [/^crossfit-/, 4000], [/^aapti-/, 3000], [/^canfitpro-/, 2000], [/^nesta-/, 2000],
  [/^sfma-/, 3000], [/^fms-/, 3000], [/^frst-/, 1000], [/^precision-nutrition-/, 4000],
  [/^simmons-/, 1000], [/^u-sa-/, 1000], [/^afa-/, 1000], [/^beef-quality/, 2000],
  [/^certified-animal-control/, 2000], [/^certified-animal-welfare/, 1000], [/^certified-equine/, 1000],
  [/^certified-feline/, 1000], [/^certified-professional-animal-scientist/, 1000],
  [/^certified-veterinary-practice-manager/, 1000], [/^ccpdt-/, 2000], [/^eas-master-beekeeper/, 1000],
  [/^iaabc-/, 1000], [/^iwrc-/, 1000], [/^karen-pryor-/, 1000], [/^landscape-industry-/, 2000],
  [/^ndgaa-/, 1000], [/^veterinary-technician-specialist/, 2000], [/^series-[0-9]/, 9000],
  [/^sie-exam/, 30000], [/^cfa-/, 25000], [/^cia-part-/, 8000], [/^cfe-exam/, 9000],
  [/^cpa-exam-/, 15000], [/^acat-/, 4000], [/^aicpa-/, 4000], [/^asa-/, 2000], [/^cgma-/, 3000],
  [/^ceiv-/, 1000], [/^cgap-/, 2000], [/^cgfm-/, 2000], [/^cdfm-/, 2000], [/^cpfo-/, 2000],
  [/^cpp-payroll|^fpc-payroll/, 6000], [/^intuit-academy/, 5000], [/^irs-afsp/, 4000],
  [/^irs-certifying/, 2000], [/^nacva-/, 3000], [/^quickbooks-certified/, 8000], [/^see-part-/, 3000],
  [/^enrolled-actuary/, 3000], [/^soa-/, 9000], [/^cas-/, 7000], [/^acams-/, 12000], [/^afp-ctp/, 7000],
  [/^nacha-/, 5000], [/^aba-/, 5000], [/^icba-/, 2000], [/^mba-certified-/, 3000], [/^nacm-/, 3000],
  [/^namb-/, 3000], [/^rma-/, 2000], [/^acfcs-/, 2000], [/^eccho-/, 1000],
  [/^accredited-financial-counselor/, 3000], [/^accredited-investment-fiduciary/, 2000],
  [/^accredited-portfolio/, 2000], [/^accredited-wealth/, 2000], [/^certified-401k/, 2000],
  [/^certified-divorce/, 2000], [/^certified-investment-management/, 2000], [/^certified-plan-fiduciary/, 1000],
  [/^certified-private-wealth/, 2000], [/^certified-retirement-counselor/, 1000],
  [/^certified-specialist-in-planned/, 1000], [/^certified-wealth-strategist/, 1000],
  [/^chartered-advisor/, 1000], [/^chartered-financial-consultant/, 2000], [/^chartered-leadership/, 1000],
  [/^chartered-retirement/, 1000], [/^chartered-sri/, 1000], [/^chartered-special-needs/, 1000],
  [/^financial-fitness-coach/, 1000], [/^financial-paraplanner/, 1000], [/^qualified-401k/, 1000],
  [/^qualified-pension/, 1000], [/^aspa-/, 1000], [/^tax-exempt-governmental/, 1000],
  [/^retirement-income-certified/, 1000], [/^retirement-management-advisor/, 1000],
  [/^tax-planning-certified/, 1000], [/^wealth-management-certified/, 1000],
  [/^accredited-adviser-in-insurance/, 2000], [/^accredited-customer-service/, 3000],
  [/^associate-in-/, 2000], [/^cpcu-/, 4000], [/^professional-risk-consultant/, 1000],
  [/^aei-/, 2000], [/^associate-in-claims/, 3000], [/^haag-/, 1000], [/^senior-professional-public/, 1000],
  [/^workers-compensation-claims/, 1000], [/^xactimate-/, 5000], [/^bomi-/, 3000], [/^cai-/, 3000],
  [/^camicb-/, 2000], [/^ccim-/, 2000], [/^ifma-/, 5000], [/^irem-/, 2000], [/^naa-/, 4000],
  [/^nar-/, 5000], [/^sior-/, 1000], [/^accredited-/, 2000], [/^atd-/, 6000],
  [/^certified-benefits/, 2000], [/^certified-compensation/, 2000], [/^certified-diversity/, 2000],
  [/^certified-employee-benefit/, 2000], [/^certified-manager-icpm/, 1000], [/^certified-payroll-professional/, 3000],
  [/^compensation-management/, 1000], [/^fundamental-payroll/, 3000], [/^global-remuneration/, 1000],
  [/^group-benefits/, 1000], [/^hci-/, 3000], [/^hrci-/, 10000], [/^retirement-plans-associate/, 1000],
  [/^shrm-/, 20000], [/^worldatwork-/, 3000], [/^certified-safety-professional/, 9000],
  [/^associate-safety-professional/, 5000], [/^associate-safety-and-health/, 3000],
  [/^associate-ergonomics/, 2000], [/^certified-ergonomics/, 1000], [/^certified-industrial-hygienist/, 3000],
  [/^certified-hazardous-materials-manager/, 2000], [/^certified-hazardous-materials-practitioner/, 1000],
  [/^certified-dangerous-goods/, 1000], [/^certified-human-factors/, 1000], [/^certified-occupational-safety/, 2000],
  [/^certified-safety-and-health-manager/, 2000], [/^certified-safety-and-health-official/, 1000],
  [/^certified-safety-director/, 1000], [/^certified-safety-manager/, 1000], [/^certified-safety-management-practitioner/, 1000],
  [/^certified-professional-ergonomist/, 1000], [/^certified-utility-safety/, 1000],
  [/^construction-health-and-safety/, 2000], [/^graduate-safety-practitioner/, 1000], [/^iso-45001/, 2000],
  [/^nebosh/, 4000], [/^occupational-hygiene-and-safety/, 1000], [/^safety-management-specialist/, 1000],
  [/^safety-trained-supervisor/, 4000], [/^certified-environmental-safety/, 1000],
  [/^certified-fire-and-explosion/, 1000], [/^certified-instructional-trainer/, 1000],
  [/^osha-(500|501|502|503)/, 4000], [/^osha-/, 3000], [/^forklift-operator/, 15000],
  [/^aerial-lift-operator/, 6000], [/^confined-space-entry-training/, 8000],
  [/^bloodborne-pathogens-training/, 30000], [/^dot-hazmat-/, 8000], [/^h2s-awareness/, 4000],
  [/^hazard-communication-ghs/, 12000], [/^hazmat-first-responder/, 10000], [/^hazmat-technician-training/, 3000],
  [/^iata-dangerous-goods/, 4000], [/^imdg-code/, 3000], [/^lead-awareness/, 5000],
  [/^lockout-tagout/, 8000], [/^process-safety-management/, 3000], [/^rcra-hazardous/, 5000],
  [/^respirator-fit-test/, 3000], [/^scaffold-competent-person/, 4000], [/^silica-competent-person/, 3000],
  [/^excavation-competent/, 3000], [/^fall-protection-competent/, 3000], [/^cscp/, 10000],
  [/^cplm/, 4000], [/^cltd/, 3000], [/^ctsc/, 2000], [/^cscmp/, 2000], [/^six-sigma-green-belt/, 8000],
  [/^six-sigma-black-belt/, 5000], [/^nbcc/, 3000], [/^ncmhce/, 2000], [/^nnce/, 1000],
  [/^casli/, 1000], [/^certified-healthcare-interpreter/, 2000], [/^certified-medical-interpreter/, 3000],
  [/^eipa-/, 1000], [/^certified-braille/, 1000], [/^accredited-genealogist/, 500], [/^bcg-certified/, 500],
  [/^board-certified-coach/, 2000], [/^cana-certified-crematory/, 1000], [/^certified-celebrant/, 1000],
  [/^certified-cemetery/, 1000], [/^certified-funeral-service/, 1000], [/^certified-image-consultant/, 1000],
  [/^certified-personal-chef/, 1000], [/^certified-playground-safety/, 1000], [/^certified-pool-operator/, 2000],
  [/^certified-preplanning/, 1000], [/^certified-professional-organizer/, 1000],
  [/^certified-professional-photographer/, 2000], [/^child-passenger-safety/, 2000],
  [/^cprp-|^cpre-/, 2000], [/^hud-housing-counselor/, 2000], [/^icf-/, 8000], [/^icfseb-/, 2000],
  [/^nab-core|^nab-hcbs|^nab-nha|^nab-rcal/, 3000], [/^nationally-certified-resume/, 1000],
  [/^parwcc-/, 1000], [/^aquatic-facility-operator/, 1000], [/^aslta-/, 1000],
  [/^certified-water-technologist/, 1000], [/^ase-(a1|a2|a3|a4|a5|a6|a7|a8|a9)/, 25000],
  [/^ase-l[0-9]/, 10000], [/^ase-(b|c|e|f|g|h|p|s|t|x|military)/, 8000],
  [/^ase-advanced-level/, 3000], [/^ase-entry-level/, 10000], [/^ase-xev/, 2000],
  [/^automotive-service-technician-state/, 10000], [/^i-car-/, 5000], [/^certified-/, 3000],
  [/^associate-/, 3000], [/^professional-/, 3000], [/^board-certified-/, 3000]
];

// State-family total caps across all 8 batches (largest states win by heat order)
const STATE_TOTAL_CAP = {
  'drivers-license-written-test': 12, 'motorcycle-license-test': 8, 'food-handler-card': 12,
  'food-protection-manager-certification': 6, 'concealed-carry-permit': 8,
  'alcohol-server-certification': 10, 'cdl-commercial-drivers-license': 10,
  'registered-nurse-license': 6, 'certified-nursing-assistant-certification': 8,
  'emt-certification': 6, 'life-and-health-insurance-license': 8,
  'property-and-casualty-insurance-license': 6, 'personal-lines-insurance-license': 4,
  'insurance-adjuster-license': 4, 'public-adjuster-license': 2,
  'real-estate-salesperson-license': 8, 'real-estate-broker-license': 4,
  'cosmetology-license': 8, 'barber-license': 5, 'esthetician-license': 6,
  'nail-technician-license': 5, 'cosmetology-instructor-license': 3,
  'journeyman-electrician-license': 8, 'master-electrician-license': 4,
  'journeyman-plumber-license': 6, 'master-plumber-license': 3,
  'hvac-contractor-license': 6, 'general-contractor-license': 6,
  'contractor-business-and-law-exam': 4, 'massage-therapy-license': 6,
  'notary-public-commission': 6, 'home-inspector-license': 5,
  'certified-residential-appraiser': 4, 'mortgage-loan-originator-license': 6,
  'auctioneer-license': 3, 'title-insurance-license': 3, 'police-officer-exam': 6,
  'firefighter-exam': 4, 'pesticide-applicator-license': 5, 'security-guard-license': 6,
  'private-investigator-license': 3, 'cpa-license-requirements': 5,
  'funeral-director-license': 3, 'nursing-home-administrator-license': 3,
  'bar-exam': 6, 'teacher-certification-exams': 6,
  'water-treatment-operator-certification': 5, 'wastewater-operator-certification': 4,
  'pharmacy-technician-registration': 5, 'real-estate-appraiser': 3
};

function familyOf(slug) {
  for (const st of STATE_PREFIXES) {
    if (slug.startsWith(st + '-')) {
      const rest = slug.slice(st.length + 1);
      for (const [re] of FAMILY_BASE) {
        if (re.test(rest)) return { type: 'state', key: re.source, state: st };
      }
      return { type: 'state', key: 'state-other', state: st };
    }
  }
  // national family key = first 5 chars
  return { type: 'national', key: slug.slice(0, 5) };
}

function volFor(slug) {
  for (const st of STATE_PREFIXES) {
    if (slug.startsWith(st + '-')) {
      const rest = slug.slice(st.length + 1);
      for (const [re, base] of FAMILY_BASE) {
        if (re.test(rest)) return Math.round(base * SW[st]);
      }
      return 3000 * SW[st];
    }
  }
  for (const [re, base] of NATIONAL_VOL) {
    if (re.test(slug)) return base;
  }
  return 2000;
}

const candidates = allExamsFull
  .filter(x => !done.has(x.slug))
  .map(x => {
    const v = volFor(x.slug);
    const heat = Math.max(15, Math.min(95, Math.round(40 + 14 * Math.log10(v / 1000))));
    return { slug: x.slug, name: x.name || x.title || x.slug, v, heat, fam: familyOf(x.slug) };
  })
  .sort((a, b) => b.heat - a.heat || b.v - a.v);

// Greedy batch fill with family caps
const batches = [];
for (let b = 0; b < 8; b++) {
  const batch = [];
  const batchFam = {};      // family key -> count in this batch
  const totalFam = {};      // family key -> count across all batches so far
  for (const c of candidates) {
    if (batch.length >= 50) break;
    if (batches.some(bi => bi.some(x => x.slug === c.slug))) continue; // already picked
    const fk = c.fam.key;
    if (c.fam.type === 'state') {
      if (fk === 'state-other') {
        if ((batchFam[fk] || 0) >= 2) continue;
      } else {
        const totalCap = STATE_TOTAL_CAP[fk] ?? 2;
        if ((totalFam[fk] || 0) >= totalCap) continue;
        if ((batchFam[fk] || 0) >= 2) continue;
      }
    } else {
      if ((batchFam[fk] || 0) >= 3) continue;
    }
    batch.push(c);
    batchFam[fk] = (batchFam[fk] || 0) + 1;
    totalFam[fk] = (totalFam[fk] || 0) + 1;
  }
  batches.push(batch);
  console.log('Batch', b, 'filled', batch.length);
}

// Report totals
const allPicked = batches.flat();
console.log('Total picked:', allPicked.length);
const stateCount = allPicked.filter(x => x.fam.type === 'state').length;
const natCount = allPicked.filter(x => x.fam.type === 'national').length;
console.log('State variants:', stateCount, '| National:', natCount);

const letters = 'ijklmnopqr';
for (let b = 0; b < 8; b++) {
  const fn = './_next50' + letters[b] + '.json';
  writeFileSync(fn, JSON.stringify(batches[b].map((r, i) => ({ rank: i + 1, slug: r.slug, name: r.name, heat: r.heat, vol: r.v })), null, 2));
  console.log('Wrote', fn, batches[b].length, 'slugs');
}
