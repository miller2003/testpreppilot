import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dnl69afc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_THy6veoV.mjs';
import { $ as $$BreadcrumbNav } from '../chunks/BreadcrumbNav_kKVC3lws.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy", href: "/privacy" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy \u2014 TestPrepPilot", "description": "How we handle and protect your data.", "data-astro-cid-fb3qbcs3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container | animate-on-scroll" data-astro-cid-fb3qbcs3> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": breadcrumbItems, "data-astro-cid-fb3qbcs3": true })} <header class="page-hero" data-astro-cid-fb3qbcs3> <p class="eyebrow" data-astro-cid-fb3qbcs3>PRIVACY</p> <h1 data-astro-cid-fb3qbcs3>Your information <em data-astro-cid-fb3qbcs3>is not the product.</em></h1> <p class="lede" data-astro-cid-fb3qbcs3>A straightforward summary of our privacy practices.</p> </header> <main class="prose" data-astro-cid-fb3qbcs3> <section data-astro-cid-fb3qbcs3> <h2 data-astro-cid-fb3qbcs3>Data collection</h2> <p data-astro-cid-fb3qbcs3>We collect basic, anonymized analytics to understand which credentials are most sought after and how we can improve the site's navigation. If you choose to sign up for our newsletter, we securely store your email address solely for that purpose.</p> </section> <section data-astro-cid-fb3qbcs3> <h2 data-astro-cid-fb3qbcs3>User choices</h2> <p data-astro-cid-fb3qbcs3>You will not be tracked across the internet by aggressive ad networks through our site. We do not sell your personal data to third parties. If you wish to unsubscribe from any communications, you can do so immediately via the link in our emails.</p> </section> </main> </div> ` })} `;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/privacy.astro", void 0);

const $$file = "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
