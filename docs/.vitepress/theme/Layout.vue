<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed, provide, useSlots } from 'vue'
import BlogIndex from './pages/blog/BlogIndex.vue'
import BlogShow from './pages/blog/BlogShow.vue'
const { frontmatter } = useData()
</script>

<template>
  <div class="min-h-screen bg-[#FC88FF] pt-16">
    <main class="mx-auto max-w-screen-md">
      <h2>{{ frontmatter.layout }}</h2>
      <BlogIndex v-if="frontmatter.layout === 'blog'" />
      <BlogShow v-else-if="frontmatter.layout === 'blog-show'" />
      <!--Content /-->
    </main>
  </div>
</template>