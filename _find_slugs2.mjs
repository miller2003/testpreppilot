import { allExamsFull } from './src/data/examCatalog/index.mjs';

const focus = [
  'nclex', 'comptia-security-plus', 'comptia-network-plus', 'comptia-a-plus',
  '^cisco-ccna$', 'pmp', 'capm', 'cissp', '^cfa$', 'cfa-', 'series-7', 'series-65',
  '^cdl-', 'cdl-', 'hvac', 'electrician', 'plumb',
  'cosmetolog', 'medical-assistant', '^emt', 'paramedic', 'pharmacy-tech',
  'dental-assistant', 'sonograph', 'physical-therapist', 'surgical-tech',
  'massage', 'real-estate', 'notary', 'bookkeep', 'cna', 'lpn'
];
const re = new RegExp(focus.join('|'), 'i');
const hits = allExamsFull.filter(e => re.test(e.slug) && e.scope === 'national');
// group by a coarse family to understand clustering
const fam = s => {
  if (/nclex/.test(s)) return 'NCLEX';
  if (/comptia-security/.test(s)) return 'Sec+';
  if (/comptia-network/.test(s)) return 'Net+';
  if (/comptia-a-plus|comptia-a\+/.test(s)) return 'A+';
  if (/^cisco-ccna$/.test(s)) return 'CCNA';
  if (/pmp|capm/.test(s)) return 'PMI';
  if (/cissp/.test(s)) return 'CISSP';
  if (/cfa/.test(s)) return 'CFA';
  if (/series-7|series-65/.test(s)) return 'FINRA';
  if (/cdl/.test(s)) return 'CDL';
  if (/hvac/.test(s)) return 'HVAC';
  if (/electrician/.test(s)) return 'Electrician';
  if (/cosmetolog/.test(s)) return 'Cosmet';
  if (/medical-assistant/.test(s)) return 'MedAsst';
  if (/emt|paramedic/.test(s)) return 'EMT/Para';
  if (/pharmacy-tech/.test(s)) return 'PharmTech';
  if (/dental-assistant/.test(s)) return 'DentalAsst';
  if (/sonograph/.test(s)) return 'Sonograph';
  if (/physical-therapist/.test(s)) return 'PT';
  if (/surgical-tech/.test(s)) return 'SurgTech';
  if (/massage/.test(s)) return 'Massage';
  if (/real-estate/.test(s)) return 'RealEstate';
  if (/notary/.test(s)) return 'Notary';
  if (/bookkeep/.test(s)) return 'Bookkeep';
  if (/cna/.test(s)) return 'CNA';
  if (/lpn/.test(s)) return 'LPN';
  return 'other';
};
const groups = {};
hits.forEach(e => { (groups[fam(e.slug)] ||= []).push(e.slug); });
Object.entries(groups).forEach(([k, v]) => {
  console.log(`\n### ${k} (${v.length})`);
  v.forEach(s => console.log('   ', s));
});
