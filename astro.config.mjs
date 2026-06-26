import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://haque31.github.io',
  base: '/mridul-haque-portfolio',
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
});
