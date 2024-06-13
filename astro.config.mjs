import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  // site: 'https://astro-photoswipe.petrovicz.com',
  i18n: {
    defaultLocale: "it",
    locales: ["it", "gb", "es", "fr", "de"],
    prefixDefaultLocale: true,
  }
});
