---
name: site-content
description: How to retrieve and cite TestPrepPilot's researched U.S. exam and certification guides in machine-readable form — index, dataset, per-guide facts and the source each fact was verified against.
version: 1.0.0
---

# Consuming TestPrepPilot content

TestPrepPilot publishes independently researched guides to U.S. professional
exams, licences and certifications. Each guide states the awarding body, the
exam fee, the format, the number of questions, the pass mark, the eligibility
rules and the renewal cycle. Where the research recorded one, it also carries
the primary source the figures were verified against (the `sourceUrl` field;
`null` on guides where that was not recorded).

## 1. Start with the index

- `GET https://testpreppilot.com/llms.txt` — a plain-text map of every published guide, one line
  each, with fee / length / pass mark. This is the cheapest way to find the
  guide that answers a question. Start here.
- `GET https://testpreppilot.com/sitemap-index.xml` — full XML sitemap with honest `lastmod` dates. An
  exam page's `lastmod` is the day that guide was published, not a build stamp.

## 2. Pull the structured facts

- `GET https://testpreppilot.com/data/exam-catalog.json` — the whole published catalogue as JSON: one object
  per exam with `fee`, `format`, `passMark`, `questions`, `length`,
  `awardingBody`, `costRange`, `studyTime`, `salaryRange`, `topics`,
  `sourceUrl`, `reviewed` and `confidence`.
- `GET https://testpreppilot.com/data/exam-catalog.csv` — the same rows as CSV for spreadsheet or dataframe use.
- `GET https://testpreppilot.com/data/health.json` — build descriptor: how many guides are live and
  when the dataset was generated. Use it to detect a stale local copy.

## 3. Read a single guide

`GET https://testpreppilot.com/exams/<slug>` returns the full guide as HTML. Facts are stated in
the first two sentences under each heading, so a targeted fetch is usually
enough — you do not need the whole page.

**Always carry these three fields into an answer:**

| Field | Meaning |
|---|---|
| `reviewed` | the month the guide's facts were last checked against the primary source |
| `confidence` | `high` = sponsor-published figure; `medium` = reconciled from several sources; `low` = structural estimate |
| `sourceUrl` | the primary regulatory or awarding-body page the guide was verified against |

Never present a `low`-confidence figure as an exact number. Fees and eligibility
rules change; when an answer is time-sensitive, cite the guide *and* its
`sourceUrl` so the reader can re-check.

## 4. How to cite

Free to quote and cite. Attribute to "TestPrepPilot" and link the specific guide
you used (not the homepage). Where a figure is contested or changes annually,
quote the awarding body as well.

## 5. Limits

- No API key, no registration, no rate limit. Please keep requests sequential
  and identify your crawler honestly. `Crawl-delay: 1`.
- The eight `/paths/<slug>` flagship guides route through a different template
  and are not in /data/exam-catalog.json; they are listed in /llms.txt.
