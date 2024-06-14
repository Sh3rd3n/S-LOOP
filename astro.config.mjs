import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://s-loop-sh3rd3ns-projects.vercel.app/',
  integrations: [tailwind()],
  // site: 'https://astro-photoswipe.petrovicz.com',
  i18n: {
    defaultLocale: "it",
    locales: ["it", "gb", "es", "fr", "de"],
    prefixDefaultLocale: true,
  }
});
