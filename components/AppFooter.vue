<script setup>
import ThemeSelector from './ThemeSelector.vue'
const { t, locale, locales, setLocale, availableLocales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <footer class="footer">
    <div class="container flex flex-col gap-4">
      <div class="flex justify-between gap-2 flex-col sm:flex-row">
        <label>
          <span>{{ t('language') }}</span>
          <select class="va-select" @change="event => navigateTo(switchLocalePath(event.target?.value), { external: true })">
            <option v-for="availableLocale in availableLocales" :value="availableLocale" :selected="locale === availableLocale">
              {{ t(availableLocale) }}
            </option>
          </select>
        </label>
        <ThemeSelector />
      </div>
      <div class="flex justify-between gap-4 flex-col sm:flex-row">
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLinkLocale to="/copyrights" class="hover:underline">{{ t('copyrights') }}</NuxtLinkLocale>
          <NuxtLinkLocale to="/cookies" class="hover:underline">Cookies</NuxtLinkLocale>
          <NuxtLinkLocale to="/terms" class="hover:underline">{{ t('terms') }}</NuxtLinkLocale>
        </div>
        <div class="flex gap-4">
          <NuxtLink to="https://github.com/Pterseus" class="hover:underline" external>GitHub</NuxtLink>
          <NuxtLink to="mailto:info@omuso.org" class="hover:underline" external>Contact</NuxtLink>
        </div>
      </div>
      <div class="pt-4 border-t">
        <p>
          All content is available under the
          <a href="https://creativecommons.org/licenses/by/4.0/"> Creative Commons Attribution 4.0 International (CC BY 4.0) licence</a>, except where otherwise stated and except for content in the public domain.
        </p>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  padding-top: var(--va-space-4);
  padding-bottom: var(--va-space-4);
  border-top-width: var(--va-border-width);

  background-image: radial-gradient(var(--va-text-weak) 0.5px, transparent 0.5px), radial-gradient(var(--va-text-weak) 0.5px, color-mix(in srgb, var(--va-color-foreground) 2%, transparent) 0.5px);
  background-size: 4px 4px;
  background-position: 0 0, 2px 2px;
}
</style>
