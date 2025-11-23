<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed, provide, useSlots } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './pages/Home.vue'
import BlogIndex from './pages/blog/BlogIndex.vue'
import BlogShow from './pages/blog/BlogShow.vue'
const { frontmatter } = useData()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-bg text-primary">
    <div class="mx-auto max-w-screen-lg w-full flex flex-col flex-grow">
      <Header />
      <main :class="`flex-1 ${frontmatter.layout === 'index' ? 'place-content-center' : ''}`">
        <Home v-if="frontmatter.layout === 'index'" />
        <BlogIndex v-else-if="frontmatter.layout === 'blog-page'" />
        <BlogShow v-else-if="frontmatter.layout === 'blog-show'" />
        <!--Content /-->
      </main>
      <Footer />
    </div>
  </div>
</template>