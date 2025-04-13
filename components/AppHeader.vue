<script setup>
const { t } = useI18n()
</script>

<script>
export default {
  computed: {
    isHomePage() {
      return this.$route.name.includes('index')
    },
    headerModifier() {
      return this.isHomePage && 'app-header--home'
    }
  }
}
</script>

<template>
  <header class="app-header" :class="headerModifier">
    <div class="app-header__container">
      <div class="app-header__logo">
        <h2>
          <NuxtLinkLocale to="index">omuso<span>.org</span></NuxtLinkLocale>
        </h2>
      </div>
      <nav class="app-header__navigation">
        <ul class="va-button-group va-button-group--horizontal">
          <li>
            <NuxtLinkLocale to="texts" class="va-button">{{ t('library') }}</NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale to="about" class="va-button !border-[var(--va-background-primary)]">{{ t('about') }}</NuxtLinkLocale>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div v-if="!isHomePage" class="px-4 container">
    <span class="block h-2 color-primary" />
  </div>
</template>

<style scope>
.app-header {
  border-bottom-width: var(--va-border-width);

  &--home {
    border-bottom-width: 0;

    background-color: var(--va-background-primary);
    background-image: radial-gradient(var(--va-text-weak) 0.5px, transparent 0.5px), radial-gradient(var(--va-text-weak) 0.5px, var(--va-background-primary) 0.5px);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  }

  &__container {
    @apply flex items-center justify-between flex-row;
  }

  &__logo {
    h2 {
      margin-top: -2px;
      font-size: var(--va-space-6);
    }

    span {
      color: var(--va-color-primary);
    }
  }

  a {
    border-color: transparent;
  }

  &__navigation {
    font-family: 'Cabin', sans-serif;
  }
}
</style>
