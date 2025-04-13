<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <label>
    <span>{{ t('mode') }}</span>
    <select class="va-select" v-model="$colorMode.preference">
      <option value="system">{{ t('system') }}</option>
      <option value="light">{{ t('light') }}</option>
      <option value="dark">{{ t('dark') }}</option>
    </select>
  </label>
</template>
