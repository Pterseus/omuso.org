<script setup lang="ts">
import { deslugify, slugify } from '~/lib/utils'
import { bookRoutes } from '~/book-routes'
import { useWindowScroll } from '@vueuse/core'

const { t } = useI18n()
const route = useRoute()

const bookReference = bookRoutes[deslugify(route.params.title as string) as keyof typeof bookRoutes]
const [title, language] = bookReference?.split('::')

const { data: page } = await useAsyncData('texts-' + title.toLowerCase(), () => {
  const path = `/data/${title.toLowerCase()}/${language}`
  return queryCollection('readings').path(path).first()
})

const links = [
  { label: t('home'), to: 'index' },
  { label: t('library'), to: 'texts' }
]
const { y } = useWindowScroll()
</script>

<template>
  <section v-if="page" class="mb-8 section">
    <div class="section__container">
      <div class="flex-1">
        <Breadcrumbs :links="links" class="mb-4" />
        <h1 class="md:!text-[128px] leading-none">{{ page.title }}</h1>
        <div class="fixed left-0 top-0 z-10 duration-300 ease-in-out w-full" :class="y > 200 ? 'translate-0' : '-translate-y-full'">
          <div class="container py-1 border-b bg-[var(--va-color-background)] border-[var(--va-text-weak)] flex items-end gap-2">
            <NuxtLink to="#top" class="hover:underline">
              <h4 class="text-4xl">{{ page.title }}</h4>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="grid md:grid-cols-[280px_1fr] gap-8">
      <div class="pt-2">
        <Metadata :doc="page" class="mb-4" />
        <details class="mb-4 va-collapse sticky top-16 max-h-[calc(100vh-5rem)] overflow-auto">
          <summary>Contents</summary>
          <NuxtLink
            :href="`#${item.id}`"
            v-for="item in page.body?.toc?.links"
            :key="item.id"
            class="va-button"
            :class="{
              'va-button--active': route.hash === `#${slugify(item.id)}`
            }"
          >
            {{ item.text }}
          </NuxtLink>
        </details>
      </div>
      <ContentRenderer v-if="page" :value="page" class="-mt-6 mb-8 text-pretty text-scoped max-w-xl mx-auto whitespace-pre-line" />
    </div>
  </div>
</template>
