<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
import { slugify } from '~/lib/utils'

const featuredReadings = ['Homeric Hymns', 'The Iliad', 'Путь жизни', 'Ὁμηρικοὶ ὕμνοι', 'The Odyssey', 'Ὀδύσσεια']

const { data: list } = await useAsyncData('texts', () => {
  return queryCollection('readings').all()
})
</script>

<template>
  <div class="section section--hero">
    <div class="section__container">
      <h2>{{ t('welcome') }}</h2>
      <p>{{ t('slogan') }}</p>
    </div>
  </div>
  <div class="container">
    <div
      class="color-primary"
      :style="{
        height: '.5rem'
      }"
    />
    <div class="py-4">
      <div class="pb-4 mb-4 border-b">
        <h2>{{ t('featured') }}</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <NuxtLink
          v-for="title in featuredReadings"
          :to="
            localePath({
              name: 'texts-title',
              params: { title: slugify(title) }
            })
          "
          class="va-button"
          style="margin: calc(var(--va-border-width) / 2 * -1)"
          >{{ title }}</NuxtLink
        >
      </div>
    </div>
    <div class="flex flex-col gap-6">
      <div class="py-4 border-b border-[var(--va-text-weak)]">
        <div class="pb-4 mb-4 border-b">
          <h2>{{ t('start-reading') }}</h2>
        </div>
        <RandomTextButton :docs="list" />
      </div>
    </div>
    <div class="py-10">
      <NuxtLinkLocale to="about" class="link-effect text-2xl !underline" tag="h2">
        {{ t('our-mission') }}
      </NuxtLinkLocale>
    </div>
  </div>
</template>
