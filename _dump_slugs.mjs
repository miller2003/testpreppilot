import { allExamsFull } from './src/data/examCatalog/index.mjs';
const done = new Set([
  'aama-cma','afaa-certified-personal-trainer','aipb-certified-bookkeeper',
  'certified-dietary-manager-cfpp','cisco-ccna-cybersecurity','cisco-ccnp-cybersecurity',
  'cisco-ccst-cybersecurity','comptia-linux-plus','danb-cda','microsoft-ai-900',
  'microsoft-ai-901','microsoft-az-104','microsoft-az-140','microsoft-az-204',
  'microsoft-az-305','microsoft-az-500','microsoft-az-700','microsoft-az-900',
  'nacpb-cpb','nasm-certified-nutrition-coach',
  'cpa-exam','enrolled-agent','epa-608-certification','osha-10-construction',
  'osha-30-construction','texas-real-estate-license','california-real-estate-license',
  'florida-real-estate-license'
]);
const cand = allExamsFull.filter(e => e.scope === 'national' && !done.has(e.slug));
console.log('Total candidate national slugs:', cand.length);
// print all with category, grouped by keyword
const want = /(medical-assistant|med\.asst|ma-|pharmacy|dental|surgical|massage|fitness|personal.trainer|nasm|ace-|acsm|issa|nutrition|diet|veterinar|vet\.tech|physical-therap|occupational-therap|sonograph|radiolog|ultrasound|imaging|phlebotom|emt|paramedic|nremt|cna|nurse|lpn|cosmetolog|barber|nail|electrician|plumb|hvac|weld|cdl|real-estate|realtor|broker|notary|bookkeep|teacher|praxis|teaching|childcare|daycare|preschool|kindergarten|early.childhood|ssat|cisco|comptia|security|network|ccna|pmi|pmp|capm|cissp|cfa|series-|sie|nclex|aicpa|cpa|account|finance|bank|insur|actuary|payroll|hr|sphr|shrm|lean|six.sigma|scrum|agile|asq|itil|aws|azure|google|cloud|linux|sql|java|python|developer|web|project|civil|pe\.exam|engineer)/i;
const hits = cand.filter(e => want.test(e.slug));
hits.sort((a,b)=>a.category.localeCompare(b.category)||a.slug.localeCompare(b.slug));
const groups = {};
for (const e of hits) (groups[e.category] ||= []).push(e.slug);
for (const [cat, slugs] of Object.entries(groups)) {
  console.log(`\n## ${cat} (${slugs.length})`);
  slugs.forEach(s => console.log('   ', s));
}
