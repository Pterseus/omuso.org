<script setup lang="ts">
import { slugify, getRandomInt } from '~/lib/utils'
const props = defineProps(['docs'])

const randomDoc = computed(() => {
  const index = getRandomInt(props.docs.length)
  return props.docs[index]
})
</script>

<template>
  <NuxtLinkLocale
    :to="{
      name: 'texts-title',
      params: {
        title: slugify(randomDoc.title)
      }
    }"
    class="link-effect font-bold"
  >
    <h2 class="inline text-xl">
      {{ randomDoc.title }}
    </h2>
  </NuxtLinkLocale>
</template>
