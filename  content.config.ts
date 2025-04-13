import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**'
      }
    }),
    content_es: defineCollection({
      type: 'page',
      source: {
        include: 'es/**'
      }
    }),
    text: defineCollection({
      type: 'page',
      source: {
        repository: 'https://github.com/Pterseus/content',
        include: 'data/**'
      }
    })
  }
})
