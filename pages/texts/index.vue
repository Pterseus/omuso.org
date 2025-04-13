<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
import { slugify } from '~/lib/utils'

const { data: list } = await useAsyncData('texts', () => {
  return queryCollection('readings').all()
})

const links = [{ label: t('home'), to: 'index' }]
</script>

<template>
  <header class="section">
    <div class="section__container">
      <Breadcrumbs :links="links" class="mb-4" />
      <h1>{{ t('library') }}</h1>
      <p>A curated list of ancient literature</p>
    </div>
  </header>
  <div class="py-6 container">
    <ul class="divide-y">
      <li v-for="item in list" :key="item._id" class="border-[var(--va-text-weak)]">
        <NuxtLink
          :to="
            localePath({
              name: 'texts-title',
              params: { title: slugify(item.title) }
            })
          "
          class="py-2 block text-lg font-semibold text-[var(--va-color-primary)]"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
