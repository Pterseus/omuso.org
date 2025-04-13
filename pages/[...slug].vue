<script setup lang="ts">
import type { Collections } from '@nuxt/content'
const { t, locale } = useI18n()

const links = [{ label: t('home'), to: 'index' }]
const route = useRoute()
const slug = computed(() => route.path.split('/').pop())

const { data: page } = await useAsyncData(
  'page-' + slug.value,
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections
    const content = await queryCollection(collection).path(`/${slug.value}`).first()

    return content
  },
  {
    watch: [locale]
  }
)
</script>

<template>
  <div class="pb-10 container">
    <Breadcrumbs :links="links" class="mb-4" />
    <ContentRenderer v-if="page" :value="page" class="max-w-3xl text-scoped" />
    <div v-else>Page not found</div>
  </div>
</template>
