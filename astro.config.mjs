import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://www.loveactually.es/',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});