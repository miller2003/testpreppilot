const fs = require('fs');

let content = fs.readFileSync('./src/data/credentials.ts', 'utf-8');

// The original array ends at line 608: `];`
// The extra data starts after `return [,` at line 624.
// Let's just find the first `];` which is around 608.
const endOfArrayMatch = content.match(/];\s*export function/);
if (endOfArrayMatch) {
  // extract the original items string
  let originalArrayStr = content.substring(content.indexOf('export const credentials'), endOfArrayMatch.index + 1);
  
  // Now let's extract the broken appended json.
  // There are two appends since it was run twice, or maybe more.
  // Let's just look for any '{' after the functions, specifically after `return [,`
  let brokenPartsStr = content.substring(content.indexOf('return [,') + 9);
  
  // Let's clean up the broken parts string to make it valid JSON array
  let validJsonStr = '[' + brokenPartsStr.trim();
  // Strip trailing stuff that isn't valid
  while (validJsonStr.length > 0 && validJsonStr[validJsonStr.length - 1] !== '}') {
    validJsonStr = validJsonStr.slice(0, -1);
  }
  validJsonStr += ']';
  
  try {
    // Try to parse the broken JSON string
    // Because it might be duplicated, let's parse it and deduplicate by slug
    // But it might have `\n  {` and lack a comma between objects since they were appended!
    // Let's fix missing commas between `}\n  {`
    validJsonStr = validJsonStr.replace(/}\s*{/g, '},{');
    
    const parsedData = JSON.parse(validJsonStr);
    console.log(`Parsed ${parsedData.length} new items.`);
    
    // Evaluate original array safely
    // Strip `export const credentials: Credential[] = `
    const origJsonLikeStr = originalArrayStr
      .replace('export const credentials: Credential[] = ', '')
      .replace(/;\s*$/, '');
    
    // We can't JSON.parse origJsonLikeStr because it's JS (no quotes on keys).
    // Let's just stringify parsedData and inject it before the `];`
    
    let combinedItemsStr = parsedData.map(d => JSON.stringify(d, null, 2)).join(',\n  ');
    
    let newArrayBody = originalArrayStr.replace(/\s*];$/, ',\n  ' + combinedItemsStr + '\n];');
    
    const functionsPart = `

export function getCredentialBySlug(slug: string): Credential | undefined {
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

    const finalFile = `import { Credential } from './types';\n\n` + newArrayBody + functionsPart;
    fs.writeFileSync('./src/data/credentials.ts', finalFile);
    console.log('Successfully repaired credentials.ts!');

  } catch (e) {
    console.error('Error parsing JSON:', e.message);
  }

} else {
  console.log('Could not find the end of array marker.');
}
