import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_Dnl69afc.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://testpreppilot.com");
const $$CredentialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CredentialCard;
  const { credential, stateInfo } = Astro2.props;
  const href = stateInfo && credential.stateSpecificData && credential.stateSpecificData[stateInfo.code] ? `/${stateInfo.slug}/${credential.slug}` : `/paths/${credential.slug}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`credential-card animate-on-scroll ${credential.accent ? `accent-${credential.accent}` : ""}`, "class")}> <div class="card-top"> <span class="category-label">${credential.categoryLabel}</span> <span class="type-badge">${credential.type}</span> </div> <h3 class="card-title">${credential.name}</h3> <p class="card-description">${credential.description}</p> <div class="card-meta"> <span class="meta-time">${credential.time}</span> <span class="meta-cost">${credential.cost}</span> </div> <div class="card-arrow" aria-hidden="true">
&rarr;
</div> </a>`;
}, "C:/Users/samja/Desktop/testpreppilot-v2/src/components/CredentialCard.astro", void 0);

export { $$CredentialCard as $ };
