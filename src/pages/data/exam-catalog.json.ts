import type { APIRoute } from 'astro';
import { buildExamDataset } from '../../lib/examDataset';

// The published catalogue as JSON. CORS is open (it is a public dataset) and the
// response is advertised from /.well-known/ai-catalog.json + api-catalog.
export const GET: APIRoute = () =>
  new Response(JSON.stringify(buildExamDataset(), null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
