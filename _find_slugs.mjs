import { allExamsFull } from './src/data/examCatalog/index.mjs';

const pats = [
  'nclex', 'comptia-security', 'comptia-network', 'comptia-a-plus', 'comptia-a\\+',
  '^cisco-ccna$', 'pmp', 'capm', 'cissp', '^cfa$', 'cfa-', 'series-7', 'series-6', 'series-65', 'sie',
  '^cdl', 'cdl-', 'hvac', 'electrician', 'plumb', 'cosmetolog', 'barber', 'nail-tech',
  'medical-assistant', '^emt', 'paramedic', 'pharmacy-tech', 'dental-assistant', 'dental-hygien',
  'sonograph', 'ultrasound', 'physical-therapist', 'physical-therapy', 'occupational-therap', 'surgical-tech',
  'massage', 'real-estate', 'notary', 'welding', 'bookkeep', 'cna', 'lpn', 'nursing',
  'phlebotom', 'ekg', 'medical-coding', 'medical-billing', 'surgical', 'anesthesia', 'radiolog',
  'cdl', 'truck', 'pilot', 'faa', 'esl', 'tesol', 'tefl', 'personal-trainer', 'nasm', 'ace-',
  'nutrition', 'dietitian', 'cda', 'child-development', 'praxis'
];
const re = new RegExp(pats.join('|'), 'i');
const hits = allExamsFull.filter(e => re.test(e.slug) && e.scope === 'national');
console.log('matches:', hits.length);
hits.forEach(e => console.log(`${e.slug}  |  ${e.category}  |  ${e.name}`));
