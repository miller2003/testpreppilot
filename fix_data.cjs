const fs = require('fs');
let content = fs.readFileSync('./src/data/credentials.ts', 'utf-8');

const brokenFuncStart2 = content.indexOf('return [,\r\n\r\n  {');
if (brokenFuncStart2 === -1 && content.indexOf('return [,\n\n  {') === -1 && content.indexOf('return [,') === -1) {
  console.log('Could not find the break');
} else {
  const index = content.indexOf('return [,');
  const jsonStr = content.slice(index + 9).trim();
  let validJson = '[' + jsonStr;
  if (validJson.endsWith(',')) validJson = validJson.slice(0, -1);
  validJson += ']';
  
  try {
    const data = JSON.parse(validJson);
    
    const arrayEndIdx = content.lastIndexOf('];', index);
    if (arrayEndIdx !== -1) {
      let newArrayBody = content.slice(0, arrayEndIdx);
      data.forEach(item => {
         newArrayBody += ',\n  ' + JSON.stringify(item, null, 2);
      });
      newArrayBody += '\n];\n\n';
      
      const functionsPart = `export function getCredentialBySlug(slug: string): Credential | undefined {
  return credentials.find(c => c.slug === slug);
}

export function getCredentialsByCategory(catId: string): Credential[] {
  return credentials.filter(c => c.category === catId);
}

export function getCredentialsByState(stateCode: string): Credential[] {
  return credentials.filter(c => c.isNational || (c.states && c.states.includes(stateCode.toUpperCase())));
}

export function getRelatedCredentials(slug: string): Credential[] {
  const cred = getCredentialBySlug(slug);
  if (!cred || !cred.relatedSlugs) return [];
  return cred.relatedSlugs.map(s => getCredentialBySlug(s)).filter((c): c is Credential => c !== undefined);
}
`;
      fs.writeFileSync('./src/data/credentials.ts', newArrayBody + functionsPart);
      console.log('Fixed file! Appended ' + data.length + ' items.');
    }
  } catch(e) {
    console.error('Failed to parse JSON:', e);
  }
}
