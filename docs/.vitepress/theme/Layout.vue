<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed, provide, useSlots } from 'vue'
import BlogIndex from './pages/blog/BlogIndex.vue'
const { frontmatter } = useData()
</script>

<template>
  <h1>Test</h1>
  <h2>{{ frontmatter.layout }}</h2>
  <div class="min-h-screen bg-[#FC88FF] pt-16">
    <main class="mx-auto max-w-screen-md">
      <h3 class="text-5xl font-bold underline">what the fuck</h3>
      <BlogIndex v-if="frontmatter.layout === 'blog'" />
    </main>
  </div>
</template>