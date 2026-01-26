import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://anami-spa.github.io',
  base: '/guarderiacpp',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
