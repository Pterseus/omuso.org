<script setup lang="ts">
import { slugify } from '~/lib/utils'
const { t } = useI18n()
const props = defineProps(['options', 'currentLanguage'])
const localePath = useLocalePath()
</script>

<template>
  <label>
    <span>{{ t('language') }}</span>
    <select
      class="va-select"
      @change="
        event =>
          navigateTo(
            localePath({
              name: 'texts-title',
              params: { title: event.target?.value }
            })
          )
      "
    >
      <option disabled selected>{{ t(props.currentLanguage) }}</option>
      <option v-for="translation in props.options" :value="slugify(translation.title)">
        {{ t(translation.language) }}
      </option>
    </select>
  </label>
</template>
