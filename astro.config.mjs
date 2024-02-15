import { defineConfig } from "astro/config"

export default defineConfig({
  site: 'https://ericeladio.github.io',
  base: '/https://github.com/ericeladio/porfolio',
  output:'static',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"]
  }
})