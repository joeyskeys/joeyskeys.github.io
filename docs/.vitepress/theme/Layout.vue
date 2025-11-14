<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed, provide, useSlots } from 'vue'
import Header from './components/Header.vue'
import Home from './pages/Home.vue'
import BlogIndex from './pages/blog/BlogIndex.vue'
import BlogShow from './pages/blog/BlogShow.vue'
const { frontmatter } = useData()
</script>

<template>
  <div class="min-h-screen bg-[#FC88FF] pt-16">
    <main class="mx-auto max-w-screen-md">
      <Header />
      <Home v-if="frontmatter.layout === 'index'" />
      <BlogIndex v-else-if="frontmatter.layout === 'blog_page'" />
      <BlogShow v-else-if="frontmatter.layout === 'blog_show'" />
      <!--Content /-->
    </main>
  </div>
</template>