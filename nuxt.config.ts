// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      }, {
        code: 'ptbr',
        name: 'Português (Brasil)',
        language: 'ptbr'
      }
    ],
  },
  compatibilityDate: '2024-07-06',
});
