<script lang="ts" setup>
defineProps<{
  title: string
  href?: string
}>()
</script>

<template>
  <h1 class="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
    <a v-if="href" :href="href" class="post-link">{{ title }}</a>
    <span v-else class="post-link">{{ title }}</span>
  </h1>
</template>
