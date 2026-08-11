// temp verification script for depth page summaries
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const dir = 'C:/Users/samja/Desktop/testpreppilot-v2/src/data/examCatalog/depth';
const targets = [
  'florida-drivers-license-written-test.mjs',
  'new-york-drivers-license-written-test.mjs',
  'florida-food-handler-card.mjs',
  'new-york-food-handler-card.mjs',
  'florida-cdl-commercial-drivers-license.mjs',
  'new-york-cdl-commercial-drivers-license.mjs',
  'florida-alcohol-server-certification.mjs',
  'new-york-alcohol-server-certification.mjs',
  'florida-concealed-carry-permit.mjs',
  'new-york-concealed-carry-permit.mjs',
  'florida-certified-nursing-assistant-certification.mjs',
  'new-york-certified-nursing-assistant-certification.mjs',
  'florida-motorcycle-license-test.mjs'
];

const files = targets;

const fields = [
  'salaryOutlook.summary',
  'passRate.summary',
  'studyPlan.summary',
  'prepStrategies.summary',
  'resourceComparison.summary',
  'commonMistakes.summary',
  'questionTypes.summary',
  'examDay.summary'
];

let allOk = true;
for (const f of files) {
  const mod = await import(pathToFileURL(join(dir, f)).href);
  const data = mod.default;
  for (const field of fields) {
    const [section, key] = field.split('.');
    const text = data[section] && data[section][key];
    if (typeof text !== 'string') {
      console.log(`MISSING ${f} :: ${field}`);
      allOk = false;
      continue;
    }
    const words = text.split(/\s+/).filter((w) => w.length > 0).length;
    const flag = words < 250 ? ' *** UNDER 250 ***' : '';
    if (flag) allOk = false;
    console.log(`${words}${words < 250 ? '  ' : '  '}${f} :: ${field}${flag}`);
  }
}
console.log(allOk ? 'ALL SUMMARIES >= 250' : 'SOME SUMMARIES UNDER 250');
