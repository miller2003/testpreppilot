// One-off: spot-check that https upgrades of source URLs actually serve.
const urls = [
  'https://bsis.ca.gov/consumers/faqs/pi.shtml',
  'https://codes.ohio.gov/orc/4749',
  'https://malegislature.gov/Laws/GeneralLaws/PartI/TitleXX/Chapter147/Section24',
  'https://www.maine.gov/dps/msp/node/52',
  'https://thepigroup.com/tennessee_private_investigator_license.html',
  'https://www.alboenha.alabama.gov/qualifications.aspx',
  'https://reports.oah.state.nc.us/ncac/title%2014b%20-%20public%20safety/chapter%2016%20-%20private%20protective%20services%20board/chapter%2016%20rules.pdf'
];
const UA = { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' }, redirect: 'follow' };
for (const u of urls) {
  try {
    const r = await fetch(u, { ...UA, method: 'GET' });
    console.log(r.status, u.slice(0, 80));
  } catch (e) {
    console.log('ERR', String(e.cause?.code || e.message).slice(0, 40), u.slice(0, 80));
  }
}
