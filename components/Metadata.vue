<script setup lang="ts">
import { deslugify, getTranslations } from '~/lib/utils'
import { bookRoutes } from '~/book-routes'

const { t } = useI18n()
const route = useRoute()
const props = defineProps(['doc'])

const bookReference = bookRoutes[deslugify(route.params.title as string) as keyof typeof bookRoutes]
const [title, language] = bookReference?.split('::')

const availableTranslations = getTranslations(title)
const filePath = computed(() => props.doc.id?.replace('readings/data/', ''))

const fields = ['author', 'date', 'translator']
</script>

<template>
  <div class="va-button-group">
    <div class="va-button-group">
      <template v-for="field in fields">
        <label v-if="props.doc.meta[field]"
          ><span>{{ t(field) }}</span>
          <input class="va-input" :value="field === 'date' ? new Date(doc.meta[field]).getFullYear() : doc.meta[field]" type="text" readonly />
        </label>
      </template>
    </div>
    <div class="va-button-group">
      <LangSelector :currentLanguage="language" :options="availableTranslations" />
      <div class="va-button-group">
        <label :style="{ flex: 1 }">
          <span>{{ $t('source') }}</span>
          <input class="va-input" :value="filePath" :style="{ fontFamily: 'monospace' }" type="text" readonly />
        </label>
        <NuxtLink class="va-button" :to="`https://raw.githubusercontent.com/Pterseus/content/refs/heads/main/data/${filePath}`">Markdown</NuxtLink>
        <NuxtLink class="va-button" :to="`https://github.com/Pterseus/content/edit/main/data/${filePath}`">{{ $t('edit-on') }} GitHub</NuxtLink>
      </div>
    </div>
  </div>
</template>
