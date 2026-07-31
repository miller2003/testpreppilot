import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dnl69afc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_THy6veoV.mjs';
import { $ as $$BreadcrumbNav } from '../chunks/BreadcrumbNav_kKVC3lws.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$Methodology = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Methodology", href: "/methodology" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Our Methodology \u2014 TestPrepPilot", "description": "How we review, verify, and recommend professional credentials.", "data-astro-cid-qn2a7f5i": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container | animate-on-scroll" data-astro-cid-qn2a7f5i> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": breadcrumbItems, "data-astro-cid-qn2a7f5i": true })} <header class="page-hero" data-astro-cid-qn2a7f5i> <p class="eyebrow" data-astro-cid-qn2a7f5i>OUR METHODOLOGY</p> <h1 data-astro-cid-qn2a7f5i>Clarity requires <em data-astro-cid-qn2a7f5i>showing the work.</em></h1> <p class="lede" data-astro-cid-qn2a7f5i>We believe that navigating your career should be based on facts, not marketing. Here is how we evaluate credentials and providers.</p> </header> <main class="principles" data-astro-cid-qn2a7f5i> <section class="principle" data-astro-cid-qn2a7f5i> <h2 data-astro-cid-qn2a7f5i>01. Requirements first</h2> <p data-astro-cid-qn2a7f5i>Before we list any credential, we go straight to the source—state regulatory boards, national associations, and official credentialing bodies. We break down these dense, often confusing documents into clear, actionable steps. If a provider doesn't meet the official requirements, they aren't recommended.</p> </section> <section class="principle" data-astro-cid-qn2a7f5i> <h2 data-astro-cid-qn2a7f5i>02. Useful comparisons</h2> <p data-astro-cid-qn2a7f5i>Not all providers are created equal. We evaluate them on cost, format, pass rates (when available), and student support. Our tables are designed to let you compare apples to apples, so you can make the decision that fits your specific situation, budget, and learning style.</p> </section> <section class="principle" data-astro-cid-qn2a7f5i> <h2 data-astro-cid-qn2a7f5i>03. Clear disclosures</h2> <p data-astro-cid-qn2a7f5i>Trust is built on transparency. While we do earn affiliate commissions from some providers we recommend, this never dictates <em data-astro-cid-qn2a7f5i>if</em> a provider is listed or what the official requirements are. If a provider is clearly superior for a certain path, we will say so, regardless of any financial relationship. See our full <a href="/disclosure" data-astro-cid-qn2a7f5i>affiliate disclosure</a>.</p> </section> </main> </div> ` })} `;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/methodology.astro", void 0);

const $$file = "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/methodology.astro";
const $$url = "/methodology";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Methodology,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
