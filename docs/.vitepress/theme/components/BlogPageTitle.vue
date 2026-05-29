<script lang="ts" setup>
defineProps<{
  title: string
  href?: string
}>()
</script>

<template>
  <h1 class="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
    <a v-if="href" :href="href" class="post-link">{{ title }}</a>
    <span v-else class="post-link">{{ title }}</span>
  </h1>
</template>
