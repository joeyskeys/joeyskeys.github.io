<script lang="ts" setup>
import { data } from '../../../data/blog.data'
import BlogCard from '../../components/BlogCard.vue'
const { frontmatter } = useData()
</script>

<template>
  <div class="blog-page">
    <nav class="my-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-secondary">
      <a href="/" class="transition-colors hover:text-primary">Home</a>
      <span aria-hidden="true" class="text-secondary/60">›</span>
      <span class="truncate text-primary/80">{{ frontmatter.title }}</span>
    </nav>

    <article class="mt-8">
      <BlogCard v-for="post in data" :key="post.url" :post="post" />
    </article>
  </div>
</template>
