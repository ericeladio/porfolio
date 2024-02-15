import { defineConfig } from "astro/config"

export default defineConfig({
  site: 'https://ericeladio.github.io',
  base: '/porfolio',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"]
  }
})