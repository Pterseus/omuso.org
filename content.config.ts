import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: ''
      }
    }),
    content_es: defineCollection({
      type: 'page',
      source: {
        include: 'es/**',
        prefix: ''
      }
    }),
    readings: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/Pterseus/content',
        include: 'data/**'
      }
    })
  }
})
