import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mridul-haque-portfolio.vercel.app',
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
});