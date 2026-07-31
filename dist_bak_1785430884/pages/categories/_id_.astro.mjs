import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Dnl69afc.mjs';
import 'piccolore';
import { $ as $$BaseLayout, c as categories } from '../../chunks/BaseLayout_THy6veoV.mjs';
import { a as getCredentialsByCategory } from '../../chunks/credentials_Cbzyk5E5.mjs';
import { $ as $$BreadcrumbNav } from '../../chunks/BreadcrumbNav_kKVC3lws.mjs';
import { $ as $$CredentialCard } from '../../chunks/CredentialCard_aShF45dG.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://testpreppilot.com");
function getStaticPaths() {
  return categories.map((category) => ({
    params: { id: category.id },
    props: { category }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { category } = Astro2.props;
  const categoryCredentials = getCredentialsByCategory(category.id);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: category.name, href: `/categories/${category.id}` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${category.seoTitle} \u2014 TestPrepPilot`, "description": `Compare ${category.name.toLowerCase()} credentials, licenses, and certifications. Independently researched requirement guides and provider comparisons.`, "data-astro-cid-5prsor3l": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container | animate-on-scroll" data-astro-cid-5prsor3l> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": breadcrumbItems, "data-astro-cid-5prsor3l": true })} <header class="category-hero" data-astro-cid-5prsor3l> <span class="category-icon" aria-hidden="true" data-astro-cid-5prsor3l>${category.icon}</span> <h1 data-astro-cid-5prsor3l>${category.name}</h1> <p class="lede" data-astro-cid-5prsor3l>${category.description}</p> </header> <main class="category-content" data-astro-cid-5prsor3l> ${categoryCredentials.length > 0 ? renderTemplate`<div class="credential-grid" data-astro-cid-5prsor3l> ${categoryCredentials.map((cred) => renderTemplate`${renderComponent($$result2, "CredentialCard", $$CredentialCard, { "credential": cred, "data-astro-cid-5prsor3l": true })}`)} </div>` : renderTemplate`<div class="empty-state" data-astro-cid-5prsor3l> <h2 data-astro-cid-5prsor3l>Coming soon</h2> <p data-astro-cid-5prsor3l>We're actively building ${category.name} guides. Check back soon or browse all our pathways.</p> <a href="/explore" class="btn btn-primary" data-astro-cid-5prsor3l>Browse all pathways</a> </div>`} </main> </div> ` })} `;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/categories/[id].astro", void 0);

const $$file = "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/categories/[id].astro";
const $$url = "/categories/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
