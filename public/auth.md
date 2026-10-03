# auth.md

## Is authentication required?

**No.** Everything TestPrepPilot publishes is public, read-only and free to
cite. There is no account, no API key, no OAuth flow and no protected resource.

## Registration

None. Anonymous access is the only mode; there is no registration endpoint and
no credential to obtain.

## Discovery metadata

| Document | URL | Purpose |
|---|---|---|
| Content map | https://testpreppilot.com/llms.txt | Plain-text index of every published guide |
| Dataset | https://testpreppilot.com/data/exam-catalog.json | Structured exam facts (JSON) |
| Dataset (CSV) | https://testpreppilot.com/data/exam-catalog.csv | Same rows as CSV |
| Dataset descriptor | https://testpreppilot.com/data/health.json | Guide count and generation timestamp |
| OpenAPI | https://testpreppilot.com/.well-known/openapi.json | Description of the data endpoints |
| API catalogue | https://testpreppilot.com/.well-known/api-catalog | RFC 9727 linkset |
| AI catalogue | https://testpreppilot.com/.well-known/ai-catalog.json | ARD manifest listing the resources above |
| Agent skills | https://testpreppilot.com/.well-known/agent-skills/index.json | How an agent should retrieve and cite this content |
| Sitemap | https://testpreppilot.com/sitemap-index.xml | Every indexable URL |

## What is NOT supported

- No OAuth 2.0 / OpenID Connect authorization server (there is no protected
  resource to authorize).
- No identity assertions, client secrets or signed tokens.
- No write, POST or mutation surface of any kind.

If a scanner reports missing OAuth metadata, that check does not apply to this
site. Publishing an authorization server here would describe a capability that
does not exist.

## Rate limits

None enforced. Please be reasonable: keep requests sequential and identify your
crawler honestly. TestPrepPilot asks `Crawl-delay: 1`.

## Contact

https://testpreppilot.com/about
