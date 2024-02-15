import { defineConfig } from "astro/config"
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://ericeladio.github.io',
  base: '/https://github.com/ericeladio/porfolio',
  output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"]
  }
})