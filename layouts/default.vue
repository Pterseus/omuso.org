<script setup>
const { t } = useI18n()
const head = useLocaleHead()

const siteTitle = `Omuso, ${t('slogan').toLowerCase()}`

useSeoMeta({
  titleTemplate: titleChunk => {
    return titleChunk ? `${titleChunk} - ${siteTitle}` : siteTitle
  },
  description: t('description')
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang">
    <Head>
      <template v-for="link in head.link" :key="link.hid">
        <Link :id="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.hid">
        <Meta :id="meta.hid" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <div class="flex flex-col min-h-screen">
      <AppHeader />
      <main role="main" class="flex-1">
        <slot />
      </main>
      <AppFooter />
    </div>
  </Html>
</template>
