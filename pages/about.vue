<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { t, locale } = useI18n()

const links = [{ label: t('home'), to: 'index' }]
const route = useRoute()
const slug = computed(() => route.path.split('/').pop())

const { data: page } = await useAsyncData('about', async () =>
  queryCollection(('content_' + locale.value) as keyof Collections)
    .path(`/${slug.value}`)
    .first()
)
</script>

<template>
  <header class="section">
    <div class="section__container">
      <Breadcrumbs :links="links" class="mb-4" />
      <h1>{{ t('about') }}</h1>
      <h2><i>Think it broader</i></h2>
    </div>
  </header>
  <div class="pt-6 pb-10 container text-scoped">
    <div class="mb-6 h-[2px] bg-[var(--va-text-normal)]" />
    <ContentRenderer v-if="page" :value="page" class="max-w-3xl" />
  </div>
</template>
