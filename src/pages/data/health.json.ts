import type { APIRoute } from 'astro';
import { datasetMeta } from '../../lib/examDataset';

// Dataset descriptor. Advertised as the `status` link in /.well-known/api-catalog.
//
// `generatedAt` is a BUILD stamp, and that is the honest thing for a descriptor
// to report — it says when this copy of the dataset was produced. Content
// freshness is a different signal and lives in the sitemap lastmod, which for
// an exam guide is that guide's real publication date.
export const GET: APIRoute = () => {
  const meta = datasetMeta();
  return new Response(
    JSON.stringify(
      {
        status: 'ok',
        publisher: 'TestPrepPilot',
        publisherUrl: 'https://testpreppilot.com/about',
        datasetUrl: 'https://testpreppilot.com/data/exam-catalog.json',
        generatedAt: new Date().toISOString(),
        ...meta,
        usage: 'Free to quote or cite with a link to the specific guide you used.',
        confidenceLegend: {
          high: 'Figure published by the awarding body.',
          medium: 'Reconciled from several sources; may vary by jurisdiction.',
          low: 'Structural estimate — do not present as an exact figure.',
        },
      },
      null,
      2
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=600',
      },
    }
  );
};
