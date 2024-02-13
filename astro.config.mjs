import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
      mode: 'standalone',
  }),
  i18n: {
      defaultLocale: "en",
      locales: ["en", "es",],
      routing: {
          prefixDefaultLocale: false
      }
    },
});