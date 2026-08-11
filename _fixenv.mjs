// Repair ap-environmental-science.mjs salaryOutlook block (lines 10-11) after the $1-expansion corruption.
import { readFileSync, writeFileSync } from 'node:fs';
const p = 'src/data/examCatalog/depth/ap-environmental-science.mjs';
const l = readFileSync(p, 'utf8').split('\n');

const headline = "    headline: 'AP Environmental Science has no direct salary outcome \u2014 its value is college credit and placement, and the earnings impact flows through the bachelor\u2019s-degree premium and environmental and STEM career paths.',";

const summary = "    summary: 'The salary answer for AP Environmental Science is the college-credit story shared by AP exams with an environmental-career twist: the BLS does not publish a wage for AP scores because the AP program is a college-credit and placement system, but the environmental field carries documented BLS wage profiles \u2014 environmental scientists earned a May 2024 median of $80,010 and environmental engineers $103,120 \u2014 and a qualifying AP score (3 or higher, depending on the college) earns credit toward introductory environmental-science requirements that many STEM and sustainability majors include. AP Environmental Science is one of the largest AP exams, with roughly 200,000 test-takers per year, and colleges accept it for credit and placement broadly because environmental science is a common general-education requirement. The exam is 2 hours 40 minutes: a multiple-choice section (80 questions, 90 minutes) and a free-response section (3 questions, 70 minutes), scored 1-5, with a scientific or graphing calculator permitted. The honest caveat is that credit policies vary \u2014 some science majors prefer in-house lab science credit, and the value depends on the specific college\u2019s policy \u2014 so candidates should check the target colleges\u2019 AP credit tables. For a candidate asking whether AP Environmental Science pays, the direct answer is that it pays through credit and placement at colleges that accept it, and it is a broadly accepted AP credit on environmental, sustainability, and general-science pathways. The environmental field reinforces the point: the BLS tracks environmental scientists and specialists ($80,010 median), environmental engineers ($103,120), and the broader conservation and sustainability occupations, all of which require the college-level science foundation the AP credit accelerates \u2014 so the score\u2019s value flows through both the tuition savings and the readiness for environmental and STEM majors that carry these documented wage profiles.',";

// Replace the 4 corrupted lines (headline, broken summary, duplicated headline, orphan summary fragment)
// with the correct headline + summary pair. Locate by content.
let start = l.findIndex((x) => x.includes('salaryOutlook: {'));
let i = start + 1;
// The corrupted block spans: headline, summary, headline, summary-fragment — until the rows: [ line
const rowsIdx = l.findIndex((x, idx) => idx > start && x.includes('rows: ['));
const out = [...l.slice(0, start + 1), headline, summary, ...l.slice(rowsIdx)];
writeFileSync(p, out.join('\n'));
console.log('Repaired. New line count: ' + out.length);
