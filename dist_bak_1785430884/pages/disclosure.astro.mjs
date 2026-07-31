import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dnl69afc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_THy6veoV.mjs';
import { $ as $$BreadcrumbNav } from '../chunks/BreadcrumbNav_kKVC3lws.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Disclosure = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Affiliate disclosure", href: "/disclosure" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Affiliate Disclosure \u2014 TestPrepPilot", "description": "How we fund our research while maintaining our integrity.", "data-astro-cid-imluyxhh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container | animate-on-scroll" data-astro-cid-imluyxhh> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": breadcrumbItems, "data-astro-cid-imluyxhh": true })} <header class="page-hero" data-astro-cid-imluyxhh> <p class="eyebrow" data-astro-cid-imluyxhh>AFFILIATE DISCLOSURE</p> <h1 data-astro-cid-imluyxhh>Trust should never <em data-astro-cid-imluyxhh>be implicit.</em></h1> <p class="lede" data-astro-cid-imluyxhh>We believe in being entirely upfront about how TestPrepPilot makes money.</p> </header> <main class="prose" data-astro-cid-imluyxhh> <section data-astro-cid-imluyxhh> <h2 data-astro-cid-imluyxhh>How relationships work</h2> <p data-astro-cid-imluyxhh>To keep this site free for users and to fund our ongoing research into complex state and national requirements, TestPrepPilot participates in affiliate marketing programs. This means that if you click on certain links to educational providers on our site and make a purchase, we may earn a commission.</p> <p data-astro-cid-imluyxhh>This comes at no additional cost to you.</p> </section> <section data-astro-cid-imluyxhh> <h2 data-astro-cid-imluyxhh>Our commitment</h2> <p data-astro-cid-imluyxhh>These relationships <strong data-astro-cid-imluyxhh>do not influence</strong> our editorial content, our analysis of requirements, or our core recommendations. We often list and recommend providers with whom we have no financial relationship simply because they offer the best path for a specific credential.</p> <p data-astro-cid-imluyxhh>Whenever an affiliate link is present near a specific recommendation, we include an inline disclosure so you are fully informed.</p> </section> </main> </div> ` })} `;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/disclosure.astro", void 0);

const $$file = "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/disclosure.astro";
const $$url = "/disclosure";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disclosure,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
