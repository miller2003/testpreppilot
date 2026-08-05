import { readFileSync, writeFileSync, appendFileSync } from 'fs';
const DIR = 'src/data/examCatalog/national-research';
for (const f of ['batch43.mjs', 'batch44.mjs']) {
  const p = `${DIR}/${f}`;
  const txt = readFileSync(p, 'utf8');
  if (!/export default/.test(txt)) {
    appendFileSync(p, '\nexport default { programs, exams };\n', 'utf8');
    console.log(`appended default export to ${f}`);
  } else {
    console.log(`${f} already has default export`);
  }
}
