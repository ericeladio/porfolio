import { defineConfig } from "astro/config"

export default defineConfig({
  site: 'https://ericeladio.github.io',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"]
  }
})