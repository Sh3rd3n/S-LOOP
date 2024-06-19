import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.s-loop.it',
  integrations: [tailwind(), sitemap()],
  // site: 'https://astro-photoswipe.petrovicz.com',
  i18n: {
    defaultLocale: "it",
    locales: ["it", "gb", "es", "fr", "de"],
    prefixDefaultLocale: true
  }
});