import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://testpreppilot.com',
  integrations: [sitemap()],
  compressHTML: true,
  prefetch: true,
  build: {
    format: 'directory',
  },
});
