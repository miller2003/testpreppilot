import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dnl69afc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_THy6veoV.mjs';
import { $ as $$BreadcrumbNav } from '../chunks/BreadcrumbNav_kKVC3lws.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "How it works", href: "/how-it-works" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "How It Works \u2014 TestPrepPilot", "description": "Learn how to use TestPrepPilot to find and pursue your next career milestone.", "data-astro-cid-wlncami7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container | animate-on-scroll" data-astro-cid-wlncami7> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": breadcrumbItems, "data-astro-cid-wlncami7": true })} <header class="page-hero" data-astro-cid-wlncami7> <p class="eyebrow" data-astro-cid-wlncami7>HOW IT WORKS</p> <h1 data-astro-cid-wlncami7>A more useful way to <em data-astro-cid-wlncami7>move forward.</em></h1> <p class="lede" data-astro-cid-wlncami7>We've designed this platform to cut through the noise and get you straight to the information that matters.</p> </header> <main class="principles" data-astro-cid-wlncami7> <section class="principle" data-astro-cid-wlncami7> <div class="numeral" data-astro-cid-wlncami7>01</div> <h2 data-astro-cid-wlncami7>Start with a goal</h2> <p data-astro-cid-wlncami7>Use our Path Finder or browse our directory to locate the exact certification or license required for your desired role. We cover everything from entry-level IT certifications to complex state-by-state medical licenses.</p> </section> <section class="principle" data-astro-cid-wlncami7> <div class="numeral" data-astro-cid-wlncami7>02</div> <h2 data-astro-cid-wlncami7>See the full route</h2> <p data-astro-cid-wlncami7>Our guides lay out the exact steps, prerequisites, costs, and time commitments. No surprises. We distill hundreds of pages of regulatory jargon into simple, sequential checklists.</p> </section> <section class="principle" data-astro-cid-wlncami7> <div class="numeral" data-astro-cid-wlncami7>03</div> <h2 data-astro-cid-wlncami7>Choose deliberately</h2> <p data-astro-cid-wlncami7>Review our side-by-side comparisons of approved educational providers and exam prep materials. Find the option that fits your budget and schedule, then take the next step with confidence.</p> </section> </main> </div> ` })} `;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/how-it-works.astro", void 0);

const $$file = "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/how-it-works.astro";
const $$url = "/how-it-works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HowItWorks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
