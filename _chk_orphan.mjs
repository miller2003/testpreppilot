import fs from 'fs';
const src = fs.readFileSync('src/data/credentials.ts', 'utf8');
for (const slug of ['california-real-estate-license','florida-real-estate-license','texas-real-estate-license','cpa-exam']) {
  const i = src.indexOf(`slug: '${slug}'`);
  if (i < 0) { console.log(slug + '  NOT FOUND'); continue; }
  const chunk = src.slice(i, i + 900);
  const isNat = /isNational:\s*(\w+)/.exec(chunk);
  const states = /states:\s*\[([^\]]*)\]/.exec(chunk);
  const ssd = /stateSpecificData/.test(chunk);
  console.log(slug);
  console.log('   isNational        : ' + (isNat ? isNat[1] : '(未设置 → falsy)'));
  console.log('   states            : ' + (states ? states[1].replace(/\s+/g,' ').slice(0,70) : '(未设置)'));
  console.log('   stateSpecificData : ' + (ssd ? '有' : '无'));
}
