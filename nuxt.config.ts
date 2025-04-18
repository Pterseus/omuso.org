export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/i18n', '@nuxt/content', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  i18n: {
    defaultLocale: 'en',
    baseUrl: process.env.BASE_URL,
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en',
        domain: process.env.DOMAIN_EN,
        file: 'en.json'
      },
      {
        code: 'es',
        name: 'Spanish',
        language: 'es',
        domain: process.env.DOMAIN_ES,
        file: 'es.json'
      }
    ],
    strategy: process.env.NODE_ENV === 'production' ? 'no_prefix' : 'prefix_and_default',
    differentDomains: process.env.NODE_ENV === 'production',
    detectBrowserLanguage: false,
    customRoutes: 'config',
    pages: {
      texts: {
        en: '/texts',
        es: '/textos'
      },
      'texts-title': {
        en: '/texts/[title]',
        es: '/textos/[title]'
      },
      about: {
        en: '/about',
        es: '/acerca-de'
      }
    }
  }
})
