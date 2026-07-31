import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dnl69afc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_THy6veoV.mjs';
import { $ as $$BreadcrumbNav } from '../chunks/BreadcrumbNav_kKVC3lws.mjs';
/* empty css                                            */
export { renderers } from '../renderers.mjs';

const $$EditorialPolicy = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Editorial policy", href: "/editorial-policy" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Editorial Policy \u2014 TestPrepPilot", "description": "Our standards for accuracy and honesty.", "data-astro-cid-hcg23c2t": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container | animate-on-scroll" data-astro-cid-hcg23c2t> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": breadcrumbItems, "data-astro-cid-hcg23c2t": true })} <header class="page-hero" data-astro-cid-hcg23c2t> <p class="eyebrow" data-astro-cid-hcg23c2t>EDITORIAL POLICY</p> <h1 data-astro-cid-hcg23c2t>Useful information, <em data-astro-cid-hcg23c2t>honestly presented.</em></h1> <p class="lede" data-astro-cid-hcg23c2t>Our commitment is to the reader. We aim to be the most reliable source for credentialing requirements.</p> </header> <main class="prose" data-astro-cid-hcg23c2t> <section data-astro-cid-hcg23c2t> <h2 data-astro-cid-hcg23c2t>Our standards</h2> <p data-astro-cid-hcg23c2t>Every piece of content on TestPrepPilot undergoes a rigorous review process. We rely on primary sources—government sites, official handbooks, and direct regulatory guidance. We do our best to note when a requirement was last verified, as rules frequently change.</p> <p data-astro-cid-hcg23c2t>Our writers and researchers are instructed to prioritize clarity over cleverness, and accuracy over everything else.</p> </section> <section data-astro-cid-hcg23c2t> <h2 data-astro-cid-hcg23c2t>What we do not do</h2> <p data-astro-cid-hcg23c2t>We do not accept guest posts that are disguised marketing. We do not alter facts or requirements to make a specific provider look more appealing. We do not hide the total cost or timeline of a credential to make the path seem artificially easy.</p> </section> </main> </div> ` })} `;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/editorial-policy.astro", void 0);

const $$file = "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/editorial-policy.astro";
const $$url = "/editorial-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EditorialPolicy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
