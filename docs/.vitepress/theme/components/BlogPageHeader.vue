<script lang="ts" setup>
import BlogPageTitle from './BlogPageTitle.vue'
import PostDate from './PostDate.vue'

defineProps<{
  title: string
  date?: string | Date
  href?: string
}>()
</script>

<template>
  <header class="mb-10 border-b border-primary/15 pb-8">
    <BlogPageTitle :title="title" :href="href" />
    <PostDate v-if="date" :date="date" />
  </header>
</template>
