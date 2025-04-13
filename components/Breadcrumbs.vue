<script setup>
const props = defineProps(['links'])
const localePath = useLocalePath()
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="breadcrumbs__list">
      <li v-for="link in props.links" class="breadcrumbs__list-item">
        <NuxtLink :to="localePath(link.to)" class="breadcrumbs__link">{{
          link.label
        }}</NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<style>
.breadcrumbs {
  padding-top: var(--va-space-2);
  padding-bottom: var(--va-space-2);

  &__list {
    &-item {
      display: inline-block;

      &:not(:first-of-type) {
        position: relative;
        margin-left: 0.625em;
        padding-left: 0.9784375em;
      }

      & + &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: -0.206875em;
        width: 0.4375em;
        height: 0.4375em;
        margin: auto 0;
        transform: rotate(45deg);
        border: solid;
        border-width: 2px 2px 0 0;
        border-color: var(--va-text-nomral);
      }
    }
  }

  &__link {
    text-decoration: underline;
  }
}
</style>
