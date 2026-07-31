import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_Dnl69afc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_THy6veoV.mjs';
import { g as getStateByCode } from '../../chunks/states_Cn5Mn5O-.mjs';
import { c as credentials } from '../../chunks/credentials_Cbzyk5E5.mjs';
import { $ as $$BreadcrumbNav } from '../../chunks/BreadcrumbNav_kKVC3lws.mjs';
import { $ as $$SchemaMarkup, a as $$InlineDisclosure, b as $$AffiliateBox, c as $$ProviderTable, d as $$FAQAccordion } from '../../chunks/SchemaMarkup_Bcp9ykxP.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://testpreppilot.com");
function getStaticPaths() {
  const paths = [];
  credentials.forEach((cred) => {
    if (cred.stateSpecificData) {
      Object.keys(cred.stateSpecificData).forEach((stateCode) => {
        const stateInfo = getStateByCode(stateCode);
        if (stateInfo) {
          paths.push({
            params: { state: stateInfo.slug, credential: cred.slug },
            props: { stateInfo, credential: cred, stateData: cred.stateSpecificData[stateCode] }
          });
        }
      });
    }
  });
  return paths;
}
const $$credential = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$credential;
  const { stateInfo, credential, stateData } = Astro2.props;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: stateInfo.name, href: `/${stateInfo.slug}` },
    { label: credential.name, href: `/${stateInfo.slug}/${credential.slug}` }
  ];
  const hasAffiliate = credential.providers && credential.providers.length > 0 && credential.providers[0].affiliateUrl;
  const topProvider = hasAffiliate ? credential.providers[0] : null;
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${credential.name} in ${stateInfo.name}`,
    "description": stateData.description || credential.description || credential.tagline,
    "provider": {
      "@type": "Organization",
      "name": credential.providers?.[0]?.name || "Various Providers"
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${credential.name} in ${stateInfo.name} \u2014 Requirements & Guide`, "description": `Official state requirements for getting your ${credential.name} in ${stateInfo.name}.`, "data-astro-cid-ushhfucd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SchemaMarkup", $$SchemaMarkup, { "type": "Course", "data": schemaData, "data-astro-cid-ushhfucd": true })} ${maybeRenderHead()}<div class="container" data-astro-cid-ushhfucd> ${renderComponent($$result2, "BreadcrumbNav", $$BreadcrumbNav, { "items": breadcrumbItems, "data-astro-cid-ushhfucd": true })} </div> <header class="path-hero | bg-cream | animate-on-scroll" data-astro-cid-ushhfucd> <div class="container" data-astro-cid-ushhfucd> <div class="nav-links" data-astro-cid-ushhfucd> <a${addAttribute(`/${stateInfo.slug}`, "href")} class="back-link" data-astro-cid-ushhfucd>&larr; Back to ${stateInfo.name}</a> <span class="divider" data-astro-cid-ushhfucd>|</span> <a${addAttribute(`/paths/${credential.slug}`, "href")} class="generic-link" data-astro-cid-ushhfucd>View national guide</a> </div> <p class="eyebrow" data-astro-cid-ushhfucd>${stateInfo.name} • ${credential.category}</p> <h1 data-astro-cid-ushhfucd>${credential.name} in ${stateInfo.name}</h1> <p class="lede" data-astro-cid-ushhfucd>${stateData.description || `State-specific requirements and process for the ${credential.name} in ${stateInfo.name}.`}</p> <div class="fact-row" data-astro-cid-ushhfucd> ${stateData.requiredHours && renderTemplate`<div class="fact-item" data-astro-cid-ushhfucd> <span class="fact-label" data-astro-cid-ushhfucd>Required Hours</span> <span class="fact-value" data-astro-cid-ushhfucd>${stateData.requiredHours}</span> </div>`} ${stateData.examFee && renderTemplate`<div class="fact-item" data-astro-cid-ushhfucd> <span class="fact-label" data-astro-cid-ushhfucd>Exam Fee</span> <span class="fact-value" data-astro-cid-ushhfucd>${stateData.examFee}</span> </div>`} ${stateData.licenseFee && renderTemplate`<div class="fact-item" data-astro-cid-ushhfucd> <span class="fact-label" data-astro-cid-ushhfucd>License Fee</span> <span class="fact-value" data-astro-cid-ushhfucd>${stateData.licenseFee}</span> </div>`} ${stateData.regulatorName && renderTemplate`<div class="fact-item" data-astro-cid-ushhfucd> <span class="fact-label" data-astro-cid-ushhfucd>Regulator</span> <span class="fact-value" data-astro-cid-ushhfucd> ${stateData.regulatorUrl ? renderTemplate`<a${addAttribute(stateData.regulatorUrl, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-ushhfucd>${stateData.regulatorName}</a>` : stateData.regulatorName} </span> </div>`} </div> </div> </header> <div class="container two-column-content | animate-on-scroll" data-astro-cid-ushhfucd> <aside class="sidebar" data-astro-cid-ushhfucd> <div class="sticky-nav" data-astro-cid-ushhfucd> <h3 data-astro-cid-ushhfucd>ON THIS PAGE</h3> <nav data-astro-cid-ushhfucd> <ul data-astro-cid-ushhfucd> <li data-astro-cid-ushhfucd><a href="#requirements" data-astro-cid-ushhfucd>State Requirements</a></li> <li data-astro-cid-ushhfucd><a href="#providers" data-astro-cid-ushhfucd>Approved Providers</a></li> ${credential.steps && credential.steps.length > 0 && renderTemplate`<li data-astro-cid-ushhfucd><a href="#route" data-astro-cid-ushhfucd>Your Route</a></li>`} ${credential.faq && credential.faq.length > 0 && renderTemplate`<li data-astro-cid-ushhfucd><a href="#faq" data-astro-cid-ushhfucd>State FAQ</a></li>`} </ul> </nav> </div> </aside> <main class="main-article" data-astro-cid-ushhfucd> <section id="requirements" class="article-section" data-astro-cid-ushhfucd> <h2 data-astro-cid-ushhfucd>State Requirements</h2> <div class="info-card" data-astro-cid-ushhfucd> <p data-astro-cid-ushhfucd>Please note that requirements in ${stateInfo.name} may differ from national averages. Be sure to complete education from a state-approved provider.</p> ${stateData.additionalRequirements && stateData.additionalRequirements.length > 0 && renderTemplate`<ul class="req-list" data-astro-cid-ushhfucd> ${stateData.additionalRequirements.map((req) => renderTemplate`<li data-astro-cid-ushhfucd>${req}</li>`)} </ul>`} </div> </section> ${credential.providers && credential.providers.length > 0 && renderTemplate`<section id="providers" class="article-section" data-astro-cid-ushhfucd> <h2 data-astro-cid-ushhfucd>Approved Providers</h2> ${renderComponent($$result2, "InlineDisclosure", $$InlineDisclosure, { "data-astro-cid-ushhfucd": true })} ${hasAffiliate && topProvider && renderTemplate`<div class="affiliate-highlight" data-astro-cid-ushhfucd> ${renderComponent($$result2, "AffiliateBox", $$AffiliateBox, { "provider": topProvider, "credentialName": `${credential.name} (${stateInfo.name})`, "data-astro-cid-ushhfucd": true })} </div>`} ${renderComponent($$result2, "ProviderTable", $$ProviderTable, { "providers": credential.providers, "data-astro-cid-ushhfucd": true })} </section>`} ${credential.steps && credential.steps.length > 0 && renderTemplate`<section id="route" class="article-section" data-astro-cid-ushhfucd> <h2 data-astro-cid-ushhfucd>Your Route in ${stateInfo.name}</h2> <ol class="route-steps" data-astro-cid-ushhfucd> ${credential.steps.map((step, index) => renderTemplate`<li data-astro-cid-ushhfucd> <div class="step-number" data-astro-cid-ushhfucd>${index + 1}</div> <div class="step-content" data-astro-cid-ushhfucd> <h3 data-astro-cid-ushhfucd>Step ${index + 1}</h3> <p data-astro-cid-ushhfucd>${step}</p> </div> </li>`)} </ol> </section>`} ${credential.faq && credential.faq.length > 0 && renderTemplate`<section id="faq" class="article-section" data-astro-cid-ushhfucd> <h2 data-astro-cid-ushhfucd>State FAQ</h2> ${renderComponent($$result2, "FAQAccordion", $$FAQAccordion, { "items": credential.faq, "data-astro-cid-ushhfucd": true })} </section>`} </main> </div> ` })} `;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/[state]/[credential].astro", void 0);

const $$file = "C:/Users/samja/Desktop/testpreppilot-v2/src/pages/[state]/[credential].astro";
const $$url = "/[state]/[credential]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$credential,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
