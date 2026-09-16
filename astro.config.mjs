// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Canonical production URL (docs/launch.md §Domains) — feeds canonical,
  // OG, and sitemap URLs via Astro.site.
  site: 'https://sebastianr.dev',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
});