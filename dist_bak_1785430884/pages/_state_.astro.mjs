import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dnl69afc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_THy6veoV.mjs';
import { s as states } from '../chunks/states_Cn5Mn5O-.mjs';
import { g as getCredentialsByState } from '../chunks/credentials_Cbzyk5E5.mjs';
import { $ as $$BreadcrumbNav } from '../chunks/BreadcrumbNav_kKVC3lws.mjs';
import { $ as $$CredentialCard } from '../chunks/CredentialCard_aShF45dG.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://testpreppilot.com");
function getStaticPaths() {
  return states.map((state) => ({
    params: { state: state.slug },
    props: { stateInfo: state }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { stateInfo } = Astro2.props;
  const stateCredentials = getCredentialsByState(stateInfo.slug);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: stateInfo.name, href: `/${stateInfo.slug}` }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Professional Licenses & Certifications in ${stateInfo.name} \u2014 TestPrepPilot`, "description": `Find official requirements and verified guides for professional pathways in ${stateInfo.name}.`, "data-astro-cid-ebuvpywg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container | animate-on-scroll" data-astro-cid-ebuvpywg> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": breadcrumbItems, "data-astro-cid-ebuvpywg": true })} <header class="state-hero" data-astro-cid-ebuvpywg> <h1 data-astro-cid-ebuvpywg>Professional Licenses & Certifications in <em data-astro-cid-ebuvpywg>${stateInfo.name}</em></h1> <p class="lede" data-astro-cid-ebuvpywg>Every state has its own specific rules and regulatory boards. Browse verified credential requirements specific to ${stateInfo.name}.</p> </header> <main class="state-content" data-astro-cid-ebuvpywg> ${stateCredentials.length > 0 ? renderTemplate`<div class="credential-grid" data-astro-cid-ebuvpywg> ${stateCredentials.map((cred) => renderTemplate`${renderComponent($$result2, "CredentialCard", $$CredentialCard, { "credential": cred, "stateInfo": stateInfo, "data-astro-cid-ebuvpywg": true })}`)} </div>` : renderTemplate`<div class="empty-state" data-astro-cid-ebuvpywg> <h2 data-astro-cid-ebuvpywg>Coming soon to ${stateInfo.name}</h2> <p data-astro-cid-ebuvpywg>We're actively building guides for this state. Check back soon or browse all our pathways globally.</p> <a href="/explore" class="btn btn-primary" data-astro-cid-ebuvpywg>Browse all pathways</a> </div>`} </main> </div> ` })} `;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/[state]/index.astro", void 0);

const $$file = "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/[state]/index.astro";
const $$url = "/[state]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
