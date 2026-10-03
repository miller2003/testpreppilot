import type { APIRoute } from 'astro';
import { datasetCsv } from '../../lib/examDataset';

// Same rows as exam-catalog.json, in CSV, for spreadsheet / dataframe use.
export const GET: APIRoute = () =>
  new Response(datasetCsv(), {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
