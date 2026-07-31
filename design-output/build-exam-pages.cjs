/* eslint-disable */
const fs = require('fs');
const path = require('path');

// ---------- 1. Load credentials data ----------
const tsPath = path.resolve(__dirname, '..', 'src', 'data', 'credentials.ts');
let ts = fs.readFileSync(tsPath, 'utf8');
ts = ts.replace(/import\s*\{[^}]*\}\s*from\s*['"][^'"]*['"];?/g, '');
ts = ts.replace(/export const credentials:\s*Credential\[\]\s*=\s*/, 'module.exports = ');
const cut = ts.indexOf('export function');
if (cut > -1) ts = ts.slice(0, cut);
const tmp = path.join(__dirname, '.credentials.tmp.cjs');
fs.writeFileSync(tmp, ts);
const credentials = require(tmp);
try { fs.unlinkSync(tmp); } catch (e) { /* safe-delete shim may block; harmless */ }
const bySlug = Object.fromEntries(credentials.map(c => [c.slug, c]));

// ---------- helpers ----------
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const ICON = {
  checkBlue: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 10.5L8.5 15L16 6.5" stroke="#326891" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  checkOrange: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 10.5L8.5 15L16 6.5" stroke="#C7593E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  star: '<svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 1.8L12.5 6.9L18.1 7.7L14.1 11.6L15 17.2L10 14.6L5 17.2L5.9 11.6L1.9 7.7L7.5 6.9L10 1.8Z" fill="#C7593E"/></svg>',
  chev: '<svg class="chev" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="#5A5A5A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  bulb: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2.2L11.8 7.2L17 7.6L13 11.3L14.2 16.5L10 13.6L5.8 16.5L7 11.3L3 7.6L8.2 7.2L10 2.2Z" fill="#C7593E"/></svg>',
  info: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2.5C6 2.5 3 5.6 3 9.4C3 13 10 17.5 10 17.5C10 17.5 17 13 17 9.4C17 5.6 14 2.5 10 2.5Z" stroke="#326891" stroke-width="1.6"/><circle cx="10" cy="9" r="2.4" fill="#326891"/></svg>'
};

// ---------- CSS (identical NYT editorial system as the Texas template) ----------
const CSS = `<style>
  :root{
    --bg:#FFFFFF;--paper:#FBFAF7;--ink:#121212;--ink-2:#5A5A5A;--line:#E0E0E0;--line-strong:#C8C8C8;
    --blue:#326891;--blue-soft:#EDF3F7;--orange:#C7593E;--orange-soft:#FBF3EF;--navy:#10222E;--navy-line:#1E3A4A;
    --radius:4px;--serif:"Source Serif 4",Georgia,"Times New Roman",serif;--sans:"Inter",system-ui,-apple-system,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html{scroll-behavior:smooth;}
  body{font-family:var(--sans);color:var(--ink);background:var(--bg);line-height:1.6;-webkit-font-smoothing:antialiased;}
  .wrap{max-width:1440px;margin:0 auto;padding:0 64px;}
  a{color:var(--blue);text-decoration:none;} a:hover{text-decoration:underline;}

  .site-header{border-bottom:1px solid var(--line);background:var(--bg);position:sticky;top:0;z-index:50;}
  .site-header .wrap{display:flex;align-items:center;justify-content:space-between;padding-top:18px;padding-bottom:18px;}
  .brand{display:flex;align-items:center;gap:10px;}
  .brand-mark{width:30px;height:30px;border-radius:6px;background:var(--blue);display:flex;align-items:center;justify-content:center;flex:0 0 auto;}
  .brand-name{font-family:var(--serif);font-weight:600;font-size:18px;color:var(--ink);}
  .nav{display:flex;align-items:center;gap:28px;}
  .nav a{color:var(--ink);font-size:14px;font-weight:500;}
  .nav .cta{background:var(--blue);color:#fff;font-weight:600;font-size:14px;padding:10px 18px;border-radius:var(--radius);}
  .nav .cta:hover{text-decoration:none;background:#28547a;}

  .hero{background:var(--paper);}
  .hero .wrap{padding-top:44px;padding-bottom:52px;display:flex;flex-direction:column;gap:22px;}
  .breadcrumb{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ink-2);flex-wrap:wrap;}
  .breadcrumb a{color:var(--blue);} .breadcrumb .sep{color:var(--line-strong);}
  .hero-navlinks{display:flex;align-items:center;gap:12px;font-size:13px;}
  .hero-navlinks a{display:inline-flex;align-items:center;gap:6px;color:var(--blue);font-weight:500;}
  .hero-navlinks .div{color:var(--line-strong);}
  .eyebrow{font-family:var(--sans);font-weight:600;font-size:12px;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase;}
  .hero h1{font-family:var(--serif);font-weight:700;font-size:50px;line-height:1.12;letter-spacing:-0.5px;color:var(--ink);max-width:920px;}
  .lede{font-size:17px;color:var(--ink-2);max-width:780px;line-height:1.65;}

  .fact-strip{display:flex;background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;margin-top:6px;}
  .fact{flex:1;padding:20px 28px;display:flex;flex-direction:column;gap:6px;border-right:1px solid var(--line);}
  .fact:last-child{border-right:none;}
  .fact .label{font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:var(--ink-2);}
  .fact .value{font-family:var(--serif);font-weight:600;font-size:27px;color:var(--ink);line-height:1.2;}
  .fact .value small{font-family:var(--sans);font-weight:500;font-size:13px;color:var(--ink-2);}

  .content .wrap{display:grid;grid-template-columns:232px 1fr;gap:64px;padding-top:60px;padding-bottom:80px;align-items:start;}
  .sidebar{position:sticky;top:84px;}
  .toc-head{font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:var(--ink-2);padding:0 12px 12px;}
  .toc a{display:block;padding:9px 12px;border-radius:var(--radius);color:var(--ink-2);font-size:13px;font-weight:500;}
  .toc a:hover{text-decoration:none;background:var(--paper);}
  .toc a.active{background:var(--blue-soft);color:var(--ink);font-weight:600;box-shadow:inset 3px 0 0 var(--blue);}

  .article{display:flex;flex-direction:column;gap:72px;min-width:0;}
  .section h2{font-family:var(--serif);font-weight:600;font-size:30px;color:var(--ink);padding-bottom:12px;border-bottom:1px solid var(--line);margin-bottom:24px;}
  .section .lead{font-size:16px;color:var(--ink-2);max-width:760px;line-height:1.65;margin-bottom:24px;}
  .section p.body{font-size:15px;color:var(--ink);line-height:1.7;margin-bottom:16px;}

  .quick-answer{background:var(--paper);border:1px solid var(--line);border-left:3px solid var(--blue);border-radius:var(--radius);padding:28px 32px;display:flex;flex-direction:column;gap:16px;}
  .quick-answer .qa-label{font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:var(--blue);}
  .quick-answer .qa-text{font-size:17px;color:var(--ink);line-height:1.6;}
  .qa-advantages{display:grid;grid-template-columns:1fr 1fr;gap:10px 28px;margin-top:2px;}
  .qa-adv{display:flex;align-items:flex-start;gap:10px;font-size:14px;color:var(--ink);line-height:1.5;}
  .qa-adv svg{flex:0 0 auto;margin-top:2px;}

  .path-flow{display:flex;align-items:flex-start;gap:0;margin:14px 0 6px;}
  .path-node{flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;gap:12px;position:relative;padding:0 10px;}
  .path-node:not(:last-child)::before{content:"";position:absolute;top:22px;left:50%;width:100%;height:2px;background:var(--line);z-index:0;}
  .path-num{width:44px;height:44px;border-radius:50%;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-weight:600;font-size:19px;position:relative;z-index:1;flex:0 0 auto;box-shadow:0 0 0 5px var(--bg);}
  .path-node:last-child .path-num{background:var(--orange);}
  .path-text{display:flex;flex-direction:column;gap:4px;}
  .path-label{font-size:13.5px;font-weight:600;color:var(--ink);line-height:1.35;}
  .path-desc{font-size:12px;color:var(--ink-2);line-height:1.45;}
  .path-note{font-size:13px;color:var(--ink-2);text-align:center;margin-top:10px;}

  .req-panel{background:var(--paper);border-radius:var(--radius);display:flex;gap:0;overflow:hidden;margin-bottom:24px;}
  .req-bar{width:3px;background:var(--blue);flex:0 0 auto;}
  .req-inner{padding:22px 26px;display:flex;flex-direction:column;gap:14px;flex:1;}
  .req-note{font-size:15px;color:var(--ink);line-height:1.6;}
  .req-list{display:flex;flex-direction:column;gap:11px;}
  .req-item{display:flex;align-items:flex-start;gap:10px;font-size:15px;color:var(--ink);line-height:1.45;}
  .req-item svg{flex:0 0 auto;margin-top:3px;}

  .ptable{width:100%;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;border-collapse:separate;border-spacing:0;margin-bottom:8px;}
  .ptable thead th{background:var(--paper);text-align:left;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--ink-2);padding:13px 20px;border-bottom:1px solid var(--line);}
  .ptable tbody td{padding:16px 20px;border-bottom:1px solid var(--line);vertical-align:top;font-size:14px;color:var(--ink);line-height:1.5;}
  .ptable tbody tr:last-child td{border-bottom:none;}
  .ptable .c-name{font-weight:600;font-size:15px;color:var(--ink);}
  .ptable .tag{display:inline-block;font-size:10px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;color:var(--ink-2);margin-top:4px;}
  .ptable .price{font-size:15px;font-weight:600;white-space:nowrap;}
  .ptable .c-sub{color:var(--ink-2);font-size:13px;line-height:1.5;}
  .ptable tbody tr.highlight{background:var(--blue-soft);}
  .ptable .center{text-align:center;}
  .ptable .w{font-family:var(--serif);font-weight:600;color:var(--blue);white-space:nowrap;}

  .topic-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:4px;}
  .topic-col{background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);padding:22px 24px;}
  .topic-col h4{font-family:var(--serif);font-weight:600;font-size:17px;margin-bottom:14px;display:flex;align-items:center;gap:8px;color:var(--ink);}
  .topic-col h4 .dot{width:9px;height:9px;border-radius:50%;flex:0 0 auto;}
  .topic-list{list-style:none;display:flex;flex-direction:column;gap:10px;}
  .topic-list li{font-size:14px;color:var(--ink);display:flex;gap:9px;align-items:flex-start;line-height:1.45;}
  .topic-list li svg{flex:0 0 auto;margin-top:3px;}

  .callout{display:flex;gap:14px;padding:16px 20px;border-radius:var(--radius);margin:20px 0;font-size:14px;line-height:1.6;}
  .callout .ico{flex:0 0 auto;margin-top:1px;}
  .callout-tip{background:var(--orange-soft);border-left:3px solid var(--orange);color:#7a3a26;}
  .callout-note{background:var(--blue-soft);border-left:3px solid var(--blue);color:#234a63;}

  .disclosure{font-size:13px;color:var(--ink-2);margin-bottom:20px;}
  .featured{background:var(--bg);border:1px solid var(--line);border-radius:var(--radius);padding:32px;display:flex;flex-direction:column;gap:20px;margin-bottom:28px;}
  .featured-top{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;}
  .featured-info{display:flex;flex-direction:column;gap:8px;}
  .badge-sponsored{font-size:10px;font-weight:600;letter-spacing:1.2px;color:var(--ink-2);text-transform:uppercase;}
  .featured-name{font-family:var(--serif);font-weight:600;font-size:26px;color:var(--ink);}
  .rating{display:flex;align-items:center;gap:6px;font-size:13px;font-weight:500;color:var(--ink-2);}
  .featured-price{font-family:var(--serif);font-weight:600;font-size:32px;color:var(--ink);}
  .features{display:flex;gap:24px;flex-wrap:wrap;}
  .feature{display:flex;align-items:center;gap:8px;font-size:14px;color:var(--ink);}
  .featured-cta{align-self:flex-start;background:var(--blue);color:#fff;font-weight:600;font-size:15px;padding:14px 24px;border-radius:var(--radius);}
  .featured-cta:hover{text-decoration:none;background:#28547a;}
  .featured-disclosure{font-size:12px;color:var(--ink-2);}
  .btn-outline{display:inline-block;border:1px solid var(--blue);color:var(--blue);font-weight:600;font-size:13px;padding:9px 16px;border-radius:var(--radius);white-space:nowrap;}
  .btn-outline:hover{background:var(--blue);color:#fff;text-decoration:none;}

  .steps{display:flex;flex-direction:column;}
  .step{display:flex;gap:22px;align-items:flex-start;position:relative;padding-bottom:36px;}
  .step:last-child{padding-bottom:0;}
  .step-num{width:38px;height:38px;border-radius:50%;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--serif);font-weight:600;font-size:16px;flex:0 0 auto;position:relative;z-index:1;}
  .step:not(:last-child) .step-num::after{content:"";position:absolute;top:38px;left:50%;transform:translateX(-50%);width:1px;height:calc(100% + 36px);background:var(--line);z-index:-1;}
  .step-body{display:flex;flex-direction:column;gap:8px;padding-top:5px;max-width:660px;}
  .step-kicker{font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:var(--blue);}
  .step-title{font-family:var(--serif);font-weight:600;font-size:19px;color:var(--ink);}
  .step-text{font-size:15px;color:var(--ink);line-height:1.65;}
  .step-subs{list-style:none;display:flex;flex-direction:column;gap:6px;margin-top:2px;}
  .step-subs li{font-size:14px;color:var(--ink-2);display:flex;gap:9px;align-items:flex-start;line-height:1.45;}
  .step-subs li svg{flex:0 0 auto;margin-top:3px;}
  .step-dur{display:inline-block;font-size:12px;font-weight:600;color:var(--blue);background:var(--blue-soft);padding:3px 10px;border-radius:99px;align-self:flex-start;}

  .summary-box{background:var(--navy);color:#fff;border-radius:var(--radius);padding:32px;display:flex;flex-direction:column;gap:18px;}
  .summary-box h3{font-family:var(--serif);font-weight:600;font-size:22px;color:#fff;}
  .summary-box p{color:#C7D5DE;font-size:15px;line-height:1.65;}
  .summary-stats{display:flex;gap:40px;flex-wrap:wrap;}
  .summary-stats .s{display:flex;flex-direction:column;gap:2px;}
  .summary-stats .s .v{font-family:var(--serif);font-weight:600;font-size:26px;color:#fff;}
  .summary-stats .s .l{font-size:12px;color:#9FB3C0;}

  .cta-band{background:var(--blue);color:#fff;border-radius:var(--radius);padding:32px;display:flex;justify-content:space-between;align-items:center;gap:24px;flex-wrap:wrap;margin-top:24px;}
  .cta-band h3{font-family:var(--serif);font-weight:600;font-size:22px;}
  .cta-band p{color:#D6E4EE;font-size:14px;margin-top:6px;max-width:540px;line-height:1.55;}
  .cta-band a{background:#fff;color:var(--blue);font-weight:600;font-size:15px;padding:14px 24px;border-radius:var(--radius);white-space:nowrap;}
  .cta-band a:hover{text-decoration:none;background:#EDF3F7;}

  .faq-item{border-top:1px solid var(--line);}
  .faq-item:last-child{border-bottom:1px solid var(--line);}
  .faq-q{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 0;cursor:pointer;font-size:16px;font-weight:600;color:var(--ink);}
  .faq-a{font-size:15px;color:var(--ink-2);line-height:1.65;padding-bottom:18px;display:none;}
  .faq-item.open .faq-a{display:block;}

  .verify-note{font-size:12px;color:var(--ink-2);border-top:1px dashed var(--line);padding-top:14px;margin-top:8px;}

  .site-footer{background:var(--navy);color:#fff;}
  .site-footer .wrap{padding-top:64px;padding-bottom:32px;display:flex;flex-direction:column;gap:48px;}
  .footer-top{display:flex;justify-content:space-between;gap:48px;flex-wrap:wrap;}
  .footer-brand{max-width:340px;display:flex;flex-direction:column;gap:12px;}
  .footer-brand .brand-name{color:#fff;}
  .footer-tag{font-size:14px;color:#9FB3C0;line-height:1.6;}
  .footer-links{display:flex;gap:80px;flex-wrap:wrap;}
  .footer-col h4{font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:#7E93A3;margin-bottom:14px;}
  .footer-col a{display:block;color:#D6E0E8;font-size:14px;padding:5px 0;}
  .footer-col a:hover{color:#fff;}
  .footer-rule{height:1px;background:var(--navy-line);}
  .footer-bottom{font-size:13px;color:#7E93A3;}

  @media (max-width:980px){
    .wrap{padding:0 24px;}
    .content .wrap{grid-template-columns:1fr;gap:40px;padding-top:40px;padding-bottom:56px;}
    .sidebar{position:static;display:none;}
    .hero h1{font-size:36px;}
    .fact-strip{flex-wrap:wrap;}
    .fact{flex:1 1 45%;border-bottom:1px solid var(--line);}
    .qa-advantages{grid-template-columns:1fr;}
    .topic-grid{grid-template-columns:1fr;}
    .path-flow{flex-direction:column;gap:0;}
    .path-node{flex-direction:row;align-items:flex-start;text-align:left;gap:14px;padding:14px 0;border-bottom:1px solid var(--line);}
    .path-node:not(:last-child)::before{display:none;}
    .path-num{flex:0 0 auto;}
    .path-text{display:flex;flex-direction:column;gap:3px;align-items:flex-start;}
    .featured-top{flex-direction:column;}
    .ptable thead{display:none;}
    .ptable tbody td{display:block;width:100%;border-bottom:none;padding:8px 20px;}
    .ptable tbody tr{display:block;border-bottom:1px solid var(--line);padding:14px 0;}
    .btn-outline{margin-top:6px;}
    .cta-band{flex-direction:column;align-items:flex-start;}
  }
</style>`;

// ---------- per-exam curated extras (verified) ----------
const EXTRAS = {
  'california-real-estate-license': {
    factStrip: [{label:'Education',value:'135'},{label:'Exam',value:'150'},{label:'Exam Fee',value:'$100'},{label:'Pass Mark',value:'70%'}],
    examMeta: {questions:'150',time:'3 hours',pass:'70% (105/150)',fee:'$100',format:'Multiple-choice, in person (DRE/PSI)',admin:'California DRE'},
    examTopicsTitle: 'What\u2019s on the California exam',
    examTopicsIntro: 'The DRE salesperson exam covers seven subject areas. Weights are from the official DRE Examination Description (RE 425, Rev 6/25):',
    topics: [
      {name:'Practice of Real Estate & Disclosures',weight:'25%',note:'Trust funds, fair housing, advertising, TDS, ethics'},
      {name:'Laws of Agency & Fiduciary Duties',weight:'17%',note:'Creation/termination of agency, dual agency, disclosures'},
      {name:'Property Ownership & Land Use',weight:'15%',note:'Title, encumbrances, zoning, water rights'},
      {name:'Property Valuation & Financial Analysis',weight:'14%',note:'Appraisal approaches, economic principles'},
      {name:'Contracts',weight:'12%',note:'Listing agreements, purchase contracts, options'},
      {name:'Financing',weight:'9%',note:'Loan types, deeds of trust, TILA/RESPA'},
      {name:'Transfer of Property',weight:'8%',note:'Deeds, title insurance, escrow'}
    ],
    examEssentials: [
      ['Location','In person at a DRE/PSI testing center (Sacramento, Fresno, La Palma, Oakland, San Diego)'],
      ['Format','150 multiple-choice questions in 3 hours'],
      ['Passing score','70% (105/150); results given immediately'],
      ['Retake','Wait 18 days and repay the $100 fee; no limit on attempts'],
      ['Validity','You must apply for the license within 2 years of passing or retake']
    ],
    faqs: [
      {q:'Do I need a college degree to get a California real estate license?',a:'No. You only need three 45-hour DRE-approved courses (Principles, Practice, and one elective) plus a high-school diploma or equivalent.'},
      {q:'Can I take the California real estate exam online?',a:'No. The exam is administered in person at a DRE/PSI testing center only.'},
      {q:'What score do I need to pass?',a:'70%, which is 105 of the 150 questions. Results are available the moment you finish.'},
      {q:'How long is the California exam?',a:'Three hours for 150 multiple-choice questions.'},
      {q:'How much does it cost to get licensed in California?',a:'Plan for roughly $600\u2013$1,200 all-in: $100 exam fee, $350 original license fee, Live Scan fingerprints (~$49\u2013$90), and a 135-hour course ($100\u2013$700).'},
      {q:'How long does the whole process take?',a:'Most people finish in 2\u20136 months, depending on study pace and how fast DRE processes the file.'},
      {q:'Do I need a sponsoring broker before the exam?',a:'No \u2014 you can take and pass the exam first. But your license issues inactive until a California broker sponsors you.'},
      {q:'Is California real estate education available online?',a:'Yes. As long as the provider is DRE-approved, all 135 hours can be completed online at your own pace.'},
      {q:'What is the first-time pass rate?',a:'About 51% in recent years \u2014 California is one of the harder salesperson exams, so dedicated exam prep matters.'},
      {q:'Does California have reciprocity with other states?',a:'No. Out-of-state licensees must still pass the California exam; there is no reciprocal license.'}
    ]
  },
  'florida-real-estate-license': {
    factStrip: [{label:'Education',value:'63'},{label:'Exam',value:'100'},{label:'Exam Fee',value:'$36.75'},{label:'Pass Mark',value:'75%'}],
    examMeta: {questions:'100',time:'3.5 hours',pass:'75% (75/100)',fee:'$36.75',format:'Multiple-choice (Pearson VUE)',admin:'DBPR / FREC'},
    examTopicsTitle: 'What\u2019s on the Florida exam',
    examTopicsIntro: 'The 100-question exam mixes national principles, Florida-specific law, and math. Weights below are from the DBPR Candidate Information Booklet; 19 areas are tested \u2014 these are the heaviest:',
    topics: [
      {name:'Real Estate Brokerage Activities & Procedures',weight:'12%'},
      {name:'Real Estate Contracts',weight:'12%'},
      {name:'Residential Mortgages',weight:'9%'},
      {name:'Property Rights: Estates & Tenancies',weight:'8%'},
      {name:'Real Estate Appraisal',weight:'8%'},
      {name:'Authorized Relationships, Duties & Disclosures',weight:'7%'},
      {name:'Titles, Deeds & Ownership Restrictions',weight:'7%'},
      {name:'License Law & Qualifications',weight:'6%'},
      {name:'Real Estate Computations & Closing',weight:'6%'},
      {name:'Legal Descriptions',weight:'5%'},
      {name:'Federal & State Laws Pertaining to RE',weight:'4%'},
      {name:'Taxes Affecting Real Estate',weight:'3%'}
    ],
    examEssentials: [
      ['Location','Pearson VUE \u2014 Florida centers or online proctoring'],
      ['Format','100 multiple-choice questions (45 national + 45 FL + 10 math) in 3.5 hours'],
      ['Passing score','75/100 (75%); results given immediately'],
      ['Eligibility window','24 months from exam eligibility to pass'],
      ['Retake','Allowed within the 24-month window; repay $36.75 per attempt']
    ],
    faqs: [
      {q:'Do I need a degree to get a Florida real estate license?',a:'No. You need a high-school diploma or GED, be 18+, and hold a U.S. SSN. The only education required is the 63-hour FREC I course.'},
      {q:'Can I take the Florida real estate exam online?',a:'Yes. Pearson VUE offers both in-person centers and online proctoring for Florida candidates.'},
      {q:'What score do I need to pass?',a:'75%, which is 75 of the 100 questions.'},
      {q:'How much does it cost to get licensed in Florida?',a:'About $350\u2013$700 all-in: the 63-hour course ($100\u2013$450), the $83.75 DBPR fee, fingerprints (~$47\u2013$80), and the $36.75 exam fee.'},
      {q:'How long does the whole process take?',a:'Often 4\u201312 weeks \u2014 among the fastest of the large states.'},
      {q:'Do I need a broker before the exam?',a:'No. You only need a sponsoring broker to activate the license after you pass.'},
      {q:'What is the first-time pass rate?',a:'Roughly half of first-time takers pass; structured exam prep lifts that well above 50%.'},
      {q:'Does Florida have reciprocity?',a:'Florida has mutual recognition with several states \u2014 some out-of-state licensees take only the Florida-specific portion.'},
      {q:'What happens if I skip post-license education?',a:'Your license becomes null and void, not just inactive \u2014 you must complete 45 hours of post-license education before your first renewal.'}
    ]
  },
  'enrolled-agent': {
    factStrip: [{label:'Exam Parts',value:'3'},{label:'Questions',value:'100/part'},{label:'Fee',value:'$317/part'},{label:'Pass Mark',value:'500/800'}],
    examMeta: {questions:'100 per part',time:'3.5 hrs/part',pass:'Scaled 500/800',fee:'$317/part',format:'Multiple-choice (PSI)',admin:'IRS'},
    examTopicsTitle: 'What\u2019s on the SEE',
    examTopicsIntro: 'The Special Enrollment Examination has three independent parts. From 2026 it is delivered by PSI. Each part is 100 questions (85 scored + 15 experimental) in 3.5 hours; a scaled 500 of 800 passes.',
    parts: [
      {name:'Part 1 \u2014 Individuals',items:['Preliminary work with taxpayer data','Income and assets','Deductions and credits','Taxation','Advising the individual taxpayer','Specialized individual returns']},
      {name:'Part 2 \u2014 Businesses',items:['Business entities & considerations','Business tax preparation','Specialized returns & taxpayers']},
      {name:'Part 3 \u2014 Representation, Practices & Procedures',items:['Practices & procedures','Representation before the IRS','Specific areas of representation','Filing process']}
    ],
    examEssentials: [
      ['Vendor','PSI Services (took over from Prometric March 1, 2026)'],
      ['Per part','100 questions (85 scored + 15 experimental), 3.5 hours'],
      ['Passing score','Scaled 500 on an 800 scale'],
      ['Order','Take parts in any order; 3 years to pass all three'],
      ['Degree','None required \u2014 no 150 credit hours like the CPA']
    ],
    faqs: [
      {q:'Enrolled Agent vs CPA \u2014 what\u2019s the difference?',a:'An EA is federally licensed by the IRS and specializes in taxation nationwide; a CPA is licensed by a state board with a broader accounting scope. The EA needs no degree, the CPA typically needs 150 credit hours.'},
      {q:'Do I need a college degree to become an EA?',a:'No. You only need a PTIN and a passing SEE score, then Form 23. Many EAs come from non-accounting backgrounds.'},
      {q:'How much does it cost?',a:'About $1,110 in hard costs: three SEE parts at $317 each plus the $140 Form 23 enrollment fee. A review course adds $300\u2013$700.'},
      {q:'How long does it take?',a:'Most candidates finish in 6\u201312 months, depending on study time.'},
      {q:'How many exam parts are there?',a:'Three: Individuals, Businesses, and Representation, Practices & Procedures. Each is a separate 100-question test.'},
      {q:'What is the pass rate?',a:'The IRS does not publish official pass rates, but well-prepared candidates commonly clear each part on the first try.'},
      {q:'Where do I take the exam?',a:'At a PSI testing center (in person). Scheduling opened for the 2026 cycle in the U.S.; international scheduling opens Sept 1, 2026.'},
      {q:'Is the EA license portable across states?',a:'Yes. Because it is federal, an EA can represent clients in any state \u2014 unlike a CPA, which is state-specific.'},
      {q:'What continuing education is required?',a:'72 hours of IRS-approved CE every 3 years, including at least 16 hours per year (2 of which are ethics).'}
    ]
  },
  'osha-10-construction': {
    factStrip: [{label:'Duration',value:'10 hrs'},{label:'Card',value:'DOL'},{label:'Cost',value:'$25\u2013$89'},{label:'Expires',value:'No (federal)'}],
    examMeta: {questions:'n/a (awareness)',time:'10 hours',pass:'Provider quiz ~70%',fee:'$25\u2013$89',format:'Online or in person',admin:'OSHA (DOL card)'},
    examTopicsTitle: 'What the course covers',
    examTopicsIntro: 'OSHA 10 Construction (29 CFR 1926) is awareness training. The required modules below must be completed within 6 months, capped at 7.5 hours of training per day:',
    modules: ['Introduction to OSHA','OSHA Focus Four Hazards (Falls, Electrocution, Struck-By, Caught-In/Between)','Personal Protective Equipment (PPE)','Health Hazards in Construction','Stairways and Ladders','Cranes, Derricks, Hoists, Elevators & Conveyors','Excavations','Materials Handling, Use & Disposal','Scaffolds','Hand & Power Tools'],
    examEssentials: [
      ['Delivery','Online or in person; capped at 7.5 hrs/day, finish within 6 months'],
      ['Assessment','No federal pass/fail \u2014 most providers require ~70% on module quizzes'],
      ['Card','Official DOL wallet card mailed 6\u20138 weeks; temporary certificate immediately'],
      ['Version','Construction (29 CFR 1926) for job sites \u2014 not General Industry'],
      ['Requirement','Not federally mandated, but required by some states/cities (e.g., NYC LL196) and many employers']
    ],
    faqs: [
      {q:'What is the purpose of OSHA 10 Construction?',a:'It is entry-level hazard-awareness training that helps workers recognize and avoid the leading job-site dangers \u2014 falls, electrocution, struck-by, and caught-in/between.'},
      {q:'Can I take OSHA 10 online?',a:'Yes. OSHA-authorized trainers offer the full 10-hour course 100% online; you can also take it in person.'},
      {q:'How long does it take?',a:'The 10 required hours are spread over at least two days (7.5-hour daily cap); most finish in 1\u20132 days of focused study.'},
      {q:'Does the OSHA 10 card expire?',a:'Under federal OSHA the card never expires, but many employers and some jurisdictions require a refresher every 3\u20135 years.'},
      {q:'How much does it cost?',a:'Typically $25\u2013$89 online, with the official DOL card included. In-person courses run higher.'},
      {q:'OSHA 10 vs OSHA 30 \u2014 which do I need?',a:'OSHA 10 is for entry-level workers; OSHA 30 is for supervisors and anyone with safety responsibility. You can take 30 directly without 10.'},
      {q:'Is OSHA 10 required by law?',a:'Federal OSHA does not require it, but several states and cities mandate it for site access, and many contractors require it as a condition of employment.'},
      {q:'Is the DOL card the same as a certificate?',a:'The certificate proves completion; the official DOL wallet card is the industry-standard proof accepted on job sites.'}
    ]
  },
  'osha-30-construction': {
    factStrip: [{label:'Duration',value:'30 hrs'},{label:'Card',value:'DOL'},{label:'Cost',value:'$89–$189'},{label:'Expires',value:'No (federal)'}],
    examMeta: {questions:'n/a (awareness)',time:'30 hours',pass:'Provider quiz ~70%',fee:'$89–$189',format:'Online or in person',admin:'OSHA (DOL card)'},
    examTopicsTitle: 'What the course covers',
    examTopicsIntro: 'OSHA 30 Construction (29 CFR 1926) is the supervisor-level outreach course. It works through every OSHA 10 topic in greater depth and adds safety-program management. The modules below must be completed within 6 months, capped at 7.5 hours of training per day:',
    parts: [
      {name:'Mandatory modules (~14–15 hrs)',items:['Introduction to OSHA (2 hrs)','Managing Safety & Health (2 hrs)','OSHA Focus Four Hazards — Falls, Electrocution, Struck-By, Caught-In/Between (6 hrs)','Personal Protective Equipment (PPE)','Health Hazards in Construction — lead, silica, noise (1 hr)','Stairways and Ladders (1 hr)']},
      {name:'Elective modules (12 hrs, choose)',items:['Cranes, Derricks, Hoists, Elevators & Conveyors','Excavations','Materials Handling, Use & Disposal','Scaffolds','Hand & Power Tools','Concrete & Masonry Construction','Confined Space Entry','Fire Protection & Prevention']},
      {name:'Additional modules (4 hrs, choose)',items:['Safety & Health Programs','Recordkeeping & OSHA Reporting','Multi-employer Worksite Policy','Welding, Cutting & Brazing','Ergonomics','Hazwoper / Hazardous Materials']}
    ],
    examEssentials: [
      ['Delivery','Online or in person; capped at 7.5 hrs/day, finish within 6 months'],
      ['Assessment','No federal pass/fail — most providers require ~70% on module quizzes'],
      ['Card','Official DOL wallet card mailed 6–8 weeks; temporary certificate immediately'],
      ['Version','Construction (29 CFR 1926) for supervisors — not General Industry'],
      ['Requirement','Required for site supervisors/leads by many GCs and jurisdictions (e.g., NYC LL196)']
    ],
    faqs: [
      {q:'What is the difference between OSHA 10 and OSHA 30?',a:'OSHA 10 is core hazard awareness for entry-level workers; OSHA 30 adds safety-program management, recordkeeping, and multi-employer policies for supervisors. The DOL card is identical in form.'},
      {q:'Do I need OSHA 10 before OSHA 30?',a:'No. You can take OSHA 30 directly. Many supervisors skip the 10-hour course entirely.'},
      {q:'How long does OSHA 30 take?',a:'30 contact hours, spread over at least four days because of the 7.5-hour daily cap; most finish in 4–7 days of focused study.'},
      {q:'Can I take OSHA 30 online?',a:'Yes. OSHA-authorized trainers offer the full 30-hour Construction course online as well as in person.'},
      {q:'Does the OSHA 30 card expire?',a:'Under federal OSHA it never expires, but many employers and some jurisdictions require a refresher every 3–5 years.'},
      {q:'How much does OSHA 30 cost?',a:'Typically $89–$189 online (DOL card included); in-person courses run $300–$600.'},
      {q:'Is OSHA 30 required by law?',a:'Federal OSHA does not require it, but many general contractors and some cities (e.g., NYC Local Law 196) mandate it for supervisory and safety-leadership roles.'},
      {q:'Who needs OSHA 30?',a:'Site supervisors, foremen, safety coordinators, and anyone with responsibility for others’ safety on a construction project.'},
      {q:'Can I finish OSHA 30 in one day?',a:'No. The 7.5-hour daily training cap means the 30 hours must span at least four calendar days.'},
      {q:'Is the DOL card the same as the OSHA 10 card?',a:'It is the same style of official DOL wallet card; the difference is the depth of training behind it, which is what employers look at.'}
    ]
  },
  'epa-608-certification': {
    factStrip: [{label:'Types',value:'I / II / III'},{label:'Per Section',value:'25 Qs'},{label:'Pass Mark',value:'70%'},{label:'Expires',value:'Never'}],
    examMeta: {questions:'25 per section',time:'Self-paced',pass:'70% (18/25) per section',fee:'$20–$35/section',format:'Multiple-choice (proctored)',admin:'EPA-approved orgs'},
    examTopicsTitle: 'What’s on the EPA 608 exam',
    examTopicsIntro: 'EPA 608 is organized into a mandatory Core section plus up to three Type sections. Universal certification means Core + all three Types. Each section is 25 multiple-choice questions; you need 70% (18/25) on each, scored independently:',
    parts: [
      {name:'Core (mandatory for all)',items:['Ozone depletion & the Clean Air Act','Venting prohibition & recovery/recycle/reclaim','Refrigerants, oils & leak-rate thresholds','Safe handling & person certification','A2L low-GWP refrigerants (R-454B, R-32)']},
      {name:'Type I — Small appliances',items:['Equipment with ≤5 lb original charge','Leak repair & verification','Recovery & evacuation procedures','Type I appliance rules']},
      {name:'Type II — High-pressure',items:['Splits, rooftop units (R-410A, R-22)','High-pressure leak-rate standards','Recovery & evacuation requirements','MVAC-like equipment']},
      {name:'Type III — Low-pressure',items:['Centrifugal & low-pressure chillers','Recovery & purge procedures','Evacuation & leak repair','Low-pressure specific rules']},
      {name:'Universal = Core + I + II + III',items:['100 questions total (four 25-Q sections)','Most employers prefer Universal','Take sections together or separately']}
    ],
    examEssentials: [
      ['Sections','Core (mandatory) + Type I, II, and/or III; Universal = all four'],
      ['Length','25 questions per section; Universal = 100 total'],
      ['Passing','70% (18/25) on each section — scored independently'],
      ['Format','Type I may be open-book/mail-in (84%); II, III & Universal are closed-book and proctored'],
      ['Validity','Permanent under federal law — never expires, no CE required']
    ],
    faqs: [
      {q:'What is EPA 608 certification?',a:'It is the federal credential required under Section 608 of the Clean Air Act before a technician may open a refrigerant circuit on stationary AC, heat-pump, or refrigeration equipment.'},
      {q:'What is the difference between Type I, II, III, and Universal?',a:'Type I covers small appliances (≤5 lb), Type II high-pressure systems (splits, rooftop units), Type III low-pressure chillers. Universal is Core plus all three and is what most employers want.'},
      {q:'How many questions are on the exam and what is the passing score?',a:'Each section is 25 multiple-choice questions; you need 70% (18 correct) per section. Universal is 100 questions total across the four sections.'},
      {q:'Does EPA 608 certification expire?',a:'No. Under federal law it is permanent — there is no expiration, renewal, or continuing education.'},
      {q:'Do I need experience or classes to get EPA 608?',a:'No. There is no education or experience prerequisite; many technicians self-study and test for $20–$90.'},
      {q:'How much does it cost?',a:'About $20–$35 per section through an EPA-approved organization; free testing is available from some providers (e.g., SkillCat). Universal typically runs $25–$90.'},
      {q:'What is the difference between EPA 608 and 609?',a:'Section 608 covers stationary refrigeration and AC; Section 609 is a separate credential for motor-vehicle air conditioning. They do not substitute for each other.'},
      {q:'Can I take EPA 608 online or for free?',a:'Yes. Many approved organizations offer online proctored testing, and some (like SkillCat) offer the training and exam free via a mobile app.'},
      {q:'What are A2L refrigerants and are they on the exam?',a:'A2L refrigerants (R-454B, R-32) are the new low-GWP replacements being phased in as R-410A is retired. EPA 608 now includes A2L handling and safety, so they appear on current exams.'},
      {q:'Is EPA 608 required by law?',a:'Yes for the work it covers — technicians who handle refrigerants without it face penalties exceeding $44,000 per day under the Clean Air Act.'}
    ]
  },
  'cpa-exam': {
    factStrip: [{label:'Sections',value:'4'},{label:'Time/Section',value:'4 hrs'},{label:'Pass Mark',value:'75 / 99'},{label:'Window',value:'18–30 mo'}],
    examMeta: {questions:'Varies by section',time:'4 hours/section',pass:'Scaled 75 of 99',fee:'~$262.64/section',format:'MCQ + task-based simulations',admin:'AICPA / NASBA'},
    examTopicsTitle: 'What’s on the CPA Exam',
    examTopicsIntro: 'Under CPA Evolution (2024+), the exam has 3 mandatory Core sections and 1 Discipline you choose. Each section is 4 hours, mixing multiple-choice questions with task-based simulations (and a written task on some). A scaled 75 of 99 passes:',
    parts: [
      {name:'Core — AUD (Auditing & Attestation)',items:['Ethics, professional responsibilities & independence','Risk assessment & internal controls','Evidence & sampling','Audit procedures & reporting']},
      {name:'Core — FAR (Financial Accounting & Reporting)',items:['Conceptual framework & GAAP','Financial statements & disclosures','Governmental & non-profit accounting','Selected transactions & reporting']},
      {name:'Core — REG (Regulation)',items:['Federal taxation — individuals','Entity taxation (C-corp, S-corp, partnership)','Business law & commercial transactions','Ethics & professional responsibilities']},
      {name:'Discipline (choose 1) — BAR',items:['Business Analysis & Reporting','Deeper FAR topics & data analytics','Financial risk & capital markets','Information technology in reporting']},
      {name:'Discipline (choose 1) — ISC',items:['Information Systems & Controls','SOC engagements','Data governance & lifecycle','IT security & controls']},
      {name:'Discipline (choose 1) — TCP',items:['Tax Compliance & Planning','Advanced individual & entity tax','Personal financial planning','Estate & gift taxation']}
    ],
    examEssentials: [
      ['Administrator','AICPA writes the exam; NASBA handles scheduling; Prometric proctors it'],
      ['Per section','4 hours; multiple-choice + task-based simulations (+ written on some)'],
      ['Passing score','Scaled 75 on a 0–99 scale (not a raw percentage)'],
      ['Credit window','18 months (most states) / 30 months (some) from your first passed section'],
      ['Format','Closed-book, computer-based, at a Prometric testing center']
    ],
    faqs: [
      {q:'How many exam sections are there and what are they?',a:'Four: the three Core sections — AUD, FAR, REG — and one Discipline you pick: BAR, ISC, or TCP.'},
      {q:'What score do I need to pass?',a:'A scaled 75 on the 0–99 exam scale, per section. It is a scaled score, not the percentage of questions you answered correctly.'},
      {q:'How long is the CPA exam and how long does the whole process take?',a:'Each section is 4 hours. Start to finish, most candidates license in 12–18 months including education, testing, ethics, and experience.'},
      {q:'What is the 150-hour rule?',a:'Every U.S. jurisdiction requires 150 semester hours of college credit to sit — about 30 hours beyond a typical bachelor’s degree.'},
      {q:'How much does it cost?',a:'Plan for $1,400–$2,000+ in fees (Board application, ~$262.64/section NASBA fee, Ethics, license). A review course adds $1,500–$3,500.'},
      {q:'CPA vs Enrolled Agent — which should I pursue?',a:'The CPA is state-licensed with the broadest scope, including audit and attest, and needs 150 hours. The EA is IRS-licensed for federal tax only, needs no degree, and is faster and cheaper.'},
      {q:'Can I take the CPA exam without an accounting degree?',a:'You need 150 credit hours, but not necessarily an accounting degree — many candidates reach 150 with a non-accounting bachelor’s plus extra coursework.'},
      {q:'What is the 18-month window?',a:'Once you pass your first section, most states give you 18 months (some 30) to pass the remaining three before the first expires.'},
    {q:'How hard is the CPA exam and what are the pass rates?',a:'It is widely regarded as difficult. Recent pass rates run roughly AUD 48%, FAR 42%, REG 63%, BAR 42%, ISC 68%, and TCP 78%.'}
  ]
  },
  'texas-real-estate-license': {
    factStrip: [{label:'Exam',value:'125 Qs'},{label:'Time',value:'4 hrs'},{label:'Exam Fee',value:'$43'},{label:'Pass Mark',value:'70% ea.'}],
    examMeta: {questions:'125 (85 national + 40 state)',time:'4 hours',pass:'70% on each section (56/85 national, 28/40 state)',fee:'$43',format:'Multiple-choice, in person (Pearson VUE)',admin:'Texas Real Estate Commission (TREC)'},
    examTopicsTitle: 'What\u2019s on the Texas exam',
    examTopicsIntro: 'The 125-question Texas exam splits into an 85-question national portion and a 40-question state portion. You must score 70% on each independently \u2014 there is no averaging. Topic weights below follow the current Pearson VUE outlines (national effective 3/1/2025, state effective 1/1/2026):',
    parts: [
      {name:'National portion (85 questions)',items:['Real Property Characteristics & Legal Descriptions','Ownership, Transfer & Recording of Title','Property Value & Appraisal','Real Estate Contracts & Agency','Real Estate Practice','Property Disclosures & Environmental Issues','Financing & Settlement','Real Estate Math (commission, prorations, LTV)']},
      {name:'Texas State portion (40 questions)',items:['TREC Commission Duties & Powers','Licensing & qualifications','Standards of Conduct','Agency & Brokerage','Contracts & Promulgated Forms','Special Topics \u2014 community property, homestead, DTPA, wills/estates, landlord-tenant, foreclosure']}
    ],
    examEssentials: [
      ['Location','In person at a Pearson VUE testing center \u2014 Texas does not allow online proctoring'],
      ['Format','125 multiple-choice questions in 4 hours (85 national + 40 state)'],
      ['Passing score','70% on EACH section \u2014 56/85 national and 28/40 state, scored independently'],
      ['Retake','No waiting period; within your eligibility window you may retake only the failed section'],
      ['Education','180 hours of TREC-approved pre-licensing courses required before you schedule']
    ],
    faqs: [
      {q:'How many questions are on the Texas real estate exam?',a:'125 total \u2014 85 national and 40 Texas-specific state questions \u2014 completed in 4 hours at a Pearson VUE center.'},
      {q:'What score do I need to pass?',a:'You must score 70% on each section independently: 56 of 85 on the national portion and 28 of 40 on the state portion. There is no averaging the two.'},
      {q:'Can I take the Texas real estate exam online?',a:'No. Texas requires in-person testing at a Pearson VUE center; remote online proctoring is not available for the salesperson exam.'},
      {q:'How much does it cost?',a:'The exam fee is $43 per attempt. Add roughly $206 for the TREC application and about $37 for fingerprinting \u2014 plan for ~$286 in baseline fees before any course.'},
      {q:'How long is the Texas exam?',a:'Four hours total: about 150 minutes for the national section and 90 minutes for the state section.'},
      {q:'Do I need a sponsoring broker before the exam?',a:'No. You can take and pass the exam first; your license is issued inactive until a Texas broker sponsors you.'},
      {q:'What real estate education is required?',a:'180 hours of TREC-approved pre-licensing courses \u2014 six 30-hour classes covering principles, agency, contracts, finance, and Texas law.'},
      {q:'What is the first-time pass rate?',a:'About 57% of first-time Texas takers pass, so structured exam prep materially improves your odds.'},
      {q:'What changed for the Texas exam in 2026?',a:'Item counts and the passing standard did not change. Updates include a refreshed state-law outline (effective 1/1/2026) and SB 1968, which requires a written buyer agreement before showing property or presenting an offer.'}
    ]
  }
};

// ---------- section builders ----------
function hHero(c, ex) {
  const stateLabel = (c.states && c.states.length) ? c.states.join(' / ') : (c.isNational ? 'National' : '');
  const crumb = c.isNational
    ? `<a href="/">Home</a><span class="sep">/</span><a href="/categories/${esc(c.category)}">${esc(c.categoryLabel)}</a><span class="sep">/</span><span>${esc(c.name)}</span>`
    : `<a href="/">Home</a><span class="sep">/</span><a href="/${esc((c.states||[''])[0].toLowerCase())}">${esc(stateLabel)}</a><span class="sep">/</span><span>${esc(c.name)}</span>`;
  const facts = (ex.factStrip||[]).map(f => `<div class="fact"><span class="label">${esc(f.label)}</span><span class="value">${esc(f.value)}</span></div>`).join('');
  return `<section class="hero"><div class="wrap">
    <nav class="breadcrumb" aria-label="Breadcrumb">${crumb}</nav>
    <div class="hero-navlinks"><a href="/explore"><svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M12.5 4L6.5 10L12.5 16" stroke="#326891" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>Back to explore</a><span class="div">|</span><a href="/categories/${esc(c.category)}">View all ${esc(c.categoryLabel)}</a></div>
    <p class="eyebrow">${esc(c.categoryLabel)}${stateLabel?` • ${esc(stateLabel)}`:''}</p>
    <h1>${esc(c.name)}: Requirements, Exam &amp; Step-by-Step Path</h1>
    <p class="lede">${esc(c.description)}</p>
    <div class="fact-strip">${facts}</div>
  </div></section>`;
}

function hQuick(c, ex) {
  const adv = (c.quickAnswer.advantages||[]).map(a => `<div class="qa-adv">${ICON.checkOrange}<span>${esc(a)}</span></div>`).join('');
  return `<section class="section" id="quick-answer"><h2>Quick Answer</h2>
    <div class="quick-answer">
      <span class="qa-label">The bottom line</span>
      <p class="qa-text">${esc(c.quickAnswer.summary)}</p>
      <div class="qa-advantages">${adv}</div>
    </div></section>`;
}

function hPath(c, ex) {
  const nodes = (c.roadmap||[]).map((r, idx) => {
    const i = r.indexOf('(');
    const label = i > 0 ? r.slice(0,i).trim() : r;
    const desc = i > 0 ? r.slice(i+1).replace(/\)$/,'').trim() : '';
    return `<div class="path-node"><div class="path-num">${idx+1}</div><div class="path-text"><span class="path-label">${esc(label)}</span>${desc?`<span class="path-desc">${esc(desc)}</span>`:''}</div></div>`;
  }).join('');
  return `<section class="section" id="path"><h2>The Path at a Glance</h2>
    <p class="lead">The journey to your ${esc(c.shortName)} credential runs through these phases. You can\u2019t skip ahead \u2014 each unlocks the next.</p>
    <div class="path-flow">${nodes}</div>
    <p class="path-note">Total typical time: <strong>${esc(c.time)}</strong>, at a cost of about <strong>${esc(c.cost)}</strong>.</p>
  </section>`;
}

function hReq(c, ex) {
  const pre = (c.prerequisites||[]).map(p => `<div class="req-item">${ICON.checkBlue}<span>${esc(p)}</span></div>`).join('');
  const comp = c.comparison ? (() => {
    const cols = c.comparison.columns;
    const head = cols.map(col => `<th>${esc(col)}</th>`).join('');
    const rows = c.comparison.rows.map(r => {
      const cells = r.values.map(v => `<td class="c-sub">${esc(v)}</td>`).join('');
      return `<tr><td class="c-name">${esc(r.label)}</td>${cells}</tr>`;
    }).join('');
    return `<h3 style="font-family:var(--serif);font-weight:600;font-size:20px;color:var(--ink);margin:32px 0 14px;">${esc(c.comparison.title)}</h3>
      <table class="ptable"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
  })() : '';
  const eligNote = (c.registrationSteps && c.registrationSteps[0]) ? `<p class="body" style="margin-top:18px;">${esc(c.registrationSteps[0].description)}</p>` : '';
  return `<section class="section" id="requirements"><h2>Eligibility &amp; Requirements</h2>
    <p class="lead">Before you spend a dollar, make sure you qualify. These are the gates ${esc(c.shortName)} candidates must clear.</p>
    <div class="req-panel"><div class="req-bar" aria-hidden="true"></div><div class="req-inner">
      <p class="req-note">You must meet <strong>all</strong> of the following:</p>
      <div class="req-list">${pre}</div>
    </div></div>${eligNote}${comp}
  </section>`;
}

function hExam(c, ex) {
  const m = ex.examMeta;
  const struct = `<table class="ptable"><thead><tr><th>Detail</th><th>What to know</th></tr></thead><tbody>
    <tr><td class="c-name">Questions</td><td class="c-sub">${esc(m.questions)}</td></tr>
    <tr><td class="c-name">Time limit</td><td class="c-sub">${esc(m.time)}</td></tr>
    <tr><td class="c-name">Passing score</td><td class="c-sub">${esc(m.pass)}</td></tr>
    <tr><td class="c-name">Exam fee</td><td class="c-sub">${esc(m.fee)}</td></tr>
    <tr><td class="c-name">Format</td><td class="c-sub">${esc(m.format)}</td></tr>
    <tr><td class="c-name">Administered by</td><td class="c-sub">${esc(m.admin)}</td></tr>
  </tbody></table>`;

  let topicsHtml = '';
  if (ex.parts) {
    topicsHtml = `<div class="topic-grid">` + ex.parts.map(p => `<div class="topic-col"><h4><span class="dot" style="background:var(--blue);"></span>${esc(p.name)}</h4><ul class="topic-list">${p.items.map(it=>`<li>${ICON.checkBlue}<span>${esc(it)}</span></li>`).join('')}</ul></div>`).join('') + `</div>`;
  } else if (ex.modules) {
    topicsHtml = `<div class="topic-grid"><div class="topic-col" style="grid-column:1/-1;"><h4><span class="dot" style="background:var(--blue);"></span>Required modules</h4><ul class="topic-list">${ex.modules.map(mm=>`<li>${ICON.checkBlue}<span>${esc(mm)}</span></li>`).join('')}</ul></div></div>`;
  } else if (ex.topics) {
    topicsHtml = `<table class="ptable"><thead><tr><th>Subject area</th><th class="center">Weight</th><th>What it covers</th></tr></thead><tbody>` +
      ex.topics.map(t => `<tr><td class="c-name">${esc(t.name)}</td><td class="center w">${esc(t.weight)}</td><td class="c-sub">${esc(t.note||'')}</td></tr>`).join('') +
      `</tbody></table>`;
  }

  const ess = (ex.examEssentials||[]).map(e => `<tr><td class="c-name">${esc(e[0])}</td><td class="c-sub">${esc(e[1])}</td></tr>`).join('');
  return `<section class="section" id="exam"><h2>The Exam in Detail</h2>
    <p class="lead">${esc(ex.examTopicsIntro)}</p>
    ${struct}
    <div class="callout callout-note"><span class="ico">${ICON.info}</span><span>Each section is scored on its own scale \u2014 know the exact passing threshold before test day (see the structure table above).</span></div>
    <h3 style="font-family:var(--serif);font-weight:600;font-size:20px;color:var(--ink);margin:28px 0 14px;">${esc(ex.examTopicsTitle)}</h3>
    ${topicsHtml}
    <h3 style="font-family:var(--serif);font-weight:600;font-size:20px;color:var(--ink);margin:28px 0 14px;">Test-day essentials</h3>
    <table class="ptable"><thead><tr><th>Detail</th><th>What to know</th></tr></thead><tbody>${ess}</tbody></table>
  </section>`;
}

function hProviders(c) {
  const featured = (c.providers||[]).find(p => p.isSponsored) || (c.providers||[])[0];
  const feat = featured ? `<div class="featured"><div class="featured-top">
      <div class="featured-info"><span class="badge-sponsored">${featured.isSponsored?'Sponsored':''}</span><span class="featured-name">${esc(featured.name)}</span>
      <span class="rating">${ICON.star} ${esc(featured.rating)} out of 5</span></div>
      <span class="featured-price">${esc(featured.price)}</span></div>
    <div class="features">${featured.features.map(f=>`<span class="feature">${ICON.checkBlue}${esc(f)}</span>`).join('')}</div>
    <a class="featured-cta" href="${esc(featured.affiliateUrl||featured.url)}" target="_blank" rel="noopener">Start with ${esc(featured.name)}</a>
    <p class="featured-disclosure">${featured.isSponsored?'Sponsored link — see our disclosure.':'Affiliate link — see our disclosure.'}</p></div>` : '';
  const rows = (c.providers||[]).map(p => `<tr class="${p.isSponsored?'highlight':''}"><td class="c-name">${esc(p.name)}${p.isSponsored?'<span class="tag">Sponsored</span>':''}</td><td class="price">${esc(p.price)}</td><td class="c-sub">${esc(p.features.join(' · '))}</td><td class="c-sub">${esc(p.rating)} ★</td><td><a class="btn-outline" href="${esc(p.affiliateUrl||p.url)}" target="_blank" rel="noopener">View Program</a></td></tr>`).join('');
  return `<section class="section" id="providers"><h2>Approved ${c.type === 'Training' ? 'Training' : 'Education'} Providers</h2>
    <p class="disclosure">Some links on this page may earn us a commission at no extra cost to you. <a href="/disclosure">Learn more about our disclosure</a>.</p>
    ${feat}
    <table class="ptable"><thead><tr><th>Provider</th><th>Price</th><th>Key features</th><th>Rating</th><th>Action</th></tr></thead><tbody>${rows}</tbody></table>
    <p class="verify-note">Tuition is the single largest variable in your total cost. Compare package inclusions (exam prep, materials, and pass guarantees) before enrolling.</p>
  </section>`;
}

function hRoute(c) {
  const steps = (c.registrationSteps||[]).map((s, idx) => {
    const subs = (s.subSteps||[]).map(ss => `<li>${ICON.checkBlue}<span>${esc(ss)}</span></li>`).join('');
    const dur = s.duration ? `<span class="step-dur">${esc(s.duration)}</span>` : '';
    const note = s.note ? `<div class="callout callout-tip" style="margin:12px 0 0;">${ICON.bulb}<span>${esc(s.note)}</span></div>` : '';
    return `<div class="step"><div class="step-num">${idx+1}</div><div class="step-body">
      <span class="step-kicker">Step ${idx+1}</span>
      <span class="step-title">${esc(s.title)}</span>
      <span class="step-text">${esc(s.description)}</span>
      ${subs?`<ul class="step-subs">${subs}</ul>`:''}${dur}${note}
    </div></div>`;
  }).join('');
  return `<section class="section" id="route"><h2>Your Step-by-Step Route</h2>
    <p class="lead">Here is the process in the order ${esc(c.shortName)} candidates actually follow \u2014 with the practical tips that aren\u2019t written in the statute.</p>
    <div class="steps">${steps}</div>
  </section>`;
}

function hTimelineCost(c) {
  const tl = (c.timeline||[]).map(t => `<tr><td class="c-name">${esc(t.stage)}</td><td class="c-sub">${esc(t.duration)}</td></tr>`).join('');
  const cb = c.costBreakdown;
  const items = (cb.items||[]).map(it => `<tr><td class="c-name">${esc(it.item)}</td><td class="price">${esc(it.fee)}</td></tr>`).join('');
  return `<section class="section" id="cost"><h2>Timeline &amp; Cost</h2>
    <p class="lead">Two numbers drive your planning: how long it takes and what you\u2019ll pay.</p>
    <h3 style="font-family:var(--serif);font-weight:600;font-size:20px;color:var(--ink);margin-bottom:14px;">How long each phase takes</h3>
    <table class="ptable"><thead><tr><th>Phase</th><th>Typical duration</th></tr></thead><tbody>${tl}</tbody></table>
    <h3 style="font-family:var(--serif);font-weight:600;font-size:20px;color:var(--ink);margin:32px 0 14px;">What you\u2019ll pay</h3>
    <table class="ptable"><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>${items}<tr class="highlight"><td class="c-name">Estimated total</td><td class="price">${esc(cb.total)}</td></tr></tbody></table></table>
    ${cb.footnote?`<p class="verify-note">${esc(cb.footnote)}</p>`:''}
  </section>`;
}

function hFaq(c, ex) {
  const norm = (f) => ({ q: f.q != null ? f.q : f.question, a: f.a != null ? f.a : f.answer });
  const all = [].concat(c.faq||[], ex.faqs||[]).map(norm);
  const items = all.map((f, i) => `<div class="faq-item${i===0?' open':''}"><div class="faq-q">${esc(f.q||'')} ${ICON.chev}</div><div class="faq-a">${esc(f.a||'')}</div></div>`).join('');
  const faqTitle = c.isNational ? 'Frequently Asked Questions' : 'State FAQ';
  return `<section class="section" id="faq"><h2>${faqTitle}</h2><div class="faq">${items}</div></section>`;
}

function hSummary(c, ex) {
  const pts = (c.summaryPoints||[]).map(p => `<li>${ICON.checkOrange}<span>${esc(p)}</span></li>`).join('');
  const stats = ex.factStrip.map(f => `<div class="s"><span class="v">${esc(f.value)}</span><span class="l">${esc(f.label)}</span></div>`).join('');
  return `<section class="section" id="summary"><h2>Summary</h2>
    <div class="summary-box"><h3>${esc(c.shortName)} in one glance</h3>
      <p>${(c.summaryPoints&&c.summaryPoints[0])?esc(c.summaryPoints[0]):esc(c.quickAnswer.summary)}</p>
      <div class="summary-stats">${stats}</div>
    </div>
    <div class="cta-band"><div><h3>Ready to get started?</h3><p>Compare approved providers side by side \u2014 tuition, guarantees, and study format \u2014 and enroll with the one that fits how you learn.</p></div><a href="#providers">Compare providers</a></div>
    <ul class="topic-list" style="margin-top:24px;max-width:760px;">${pts}</ul>
    <p class="verify-note">Requirements, fees, and exam details change. This guide reflects information current as of ${esc(c.reviewed||'2026')} and is for planning only \u2014 always confirm the latest rules with the official regulator before you apply.</p>
  </section>`;
}

function hFooter(c) {
  const reg = c.stateSpecificData ? Object.values(c.stateSpecificData)[0] : null;
  const regUrl = reg ? reg.regulatorUrl : (c.sourceUrl||'#');
  return `<footer class="site-footer"><div class="wrap"><div class="footer-top">
    <div class="footer-brand"><div class="brand"><span class="brand-mark" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 15.5L10 2.5L17 15.5L10 12.5L3 15.5Z" fill="#FFFFFF"/></svg></span><span class="brand-name">TestPrep Pilot</span></div>
      <p class="footer-tag">Guiding your professional journey with verified credential paths and side-by-side provider comparisons.</p></div>
    <div class="footer-links">
      <div class="footer-col"><h4>Explore</h4><a href="/categories/real-estate">Real Estate</a><a href="/categories/accounting">Accounting &amp; Tax</a><a href="/categories/workplace-safety">Workplace Safety</a><a href="/categories/trades">Skilled Trades</a></div>
      <div class="footer-col"><h4>Trust</h4><a href="/methodology">Methodology</a><a href="/editorial-policy">Editorial Policy</a><a href="/disclosure">Disclosure</a><a href="/privacy">Privacy</a></div>
      <div class="footer-col"><h4>Official source</h4><a href="${esc(regUrl)}" target="_blank" rel="noopener">${esc(reg?reg.regulatorName:c.source||'Regulator')}</a></div>
    </div></div>
    <div class="footer-rule"></div>
    <div class="footer-bottom">© 2026 TestPrepPilot. Requirements change — verify with the regulator before applying.</div>
  </div></footer>`;
}

function buildPage(c, ex) {
  const faqLabel = c.isNational ? 'Frequently Asked Questions' : 'State FAQ';
  const toc = [
    ['quick-answer','Quick Answer'],['path','The Path at a Glance'],['requirements','Eligibility & Requirements'],
    ['exam','The Exam in Detail'],['providers','Approved Providers'],['route','Step-by-Step Route'],
    ['cost','Timeline & Cost'],['faq',faqLabel],['summary','Summary']
  ].map(([id,label]) => `<a href="#${id}">${label}</a>`).join('');
  const title = `${c.name}: Requirements, Exam & Step-by-Step Path`;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
${CSS}</head><body>
<header class="site-header"><div class="wrap"><div class="brand"><span class="brand-mark" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M3 15.5L10 2.5L17 15.5L10 12.5L3 15.5Z" fill="#FFFFFF"/></svg></span><span class="brand-name">TestPrep Pilot</span></div>
<nav class="nav"><a href="/explore">Explore</a><a href="/how-it-works">How it works</a><a href="/methodology">Methodology</a><a class="cta" href="/explore">Explore Exams</a></nav></div></header>
${hHero(c,ex)}
<div class="content"><div class="wrap"><aside class="sidebar"><div class="toc-head">On this page</div><div class="toc">${toc}</div></aside>
<main class="article">
${hQuick(c,ex)}
${hPath(c,ex)}
${hReq(c,ex)}
${hExam(c,ex)}
${hProviders(c)}
${hRoute(c)}
${hTimelineCost(c)}
${hFaq(c,ex)}
${hSummary(c,ex)}
</main></div></div>
${hFooter(c)}
<script>
  document.querySelectorAll('.faq-q').forEach(function(q){q.addEventListener('click',function(){q.parentElement.classList.toggle('open');});});
  var tocLinks=Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var sections=tocLinks.map(function(a){return document.querySelector(a.getAttribute('href'));});
  if('IntersectionObserver' in window){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var id='#'+e.target.id;tocLinks.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')===id);});}});},{rootMargin:'-20% 0px -70% 0px',threshold:0});sections.forEach(function(s){if(s)o.observe(s);});}
</script></body></html>`;
}

// ---------- generate the 4 target exams ----------
const TARGETS = ['texas-real-estate-license','california-real-estate-license','florida-real-estate-license','enrolled-agent','osha-10-construction','osha-30-construction','epa-608-certification','cpa-exam'];
const outDir = __dirname;
TARGETS.forEach(slug => {
  const c = bySlug[slug];
  const ex = EXTRAS[slug];
  if (!c || !ex) { console.error('MISSING', slug); return; }
  const html = buildPage(c, ex);
  const file = path.join(outDir, `exam-${slug}.html`);
  fs.writeFileSync(file, html);
  console.log('WROTE', file, '(' + html.length + ' bytes)');
});
console.log('DONE');
