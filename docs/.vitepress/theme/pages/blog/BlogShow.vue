<script lang="ts" setup>
import BlogPageHeader from '../../components/BlogPageHeader.vue'
const { frontmatter } = useData()
</script>

<template>
  <div>
    <nav class="my-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-secondary">
      <a href="/" class="transition-colors hover:text-primary">Home</a>
      <span aria-hidden="true" class="text-secondary/60">›</span>
      <a href="/blog" class="transition-colors hover:text-primary">Blog</a>
      <span aria-hidden="true" class="text-secondary/60">›</span>
      <span class="truncate text-primary/80">{{ frontmatter.title }}</span>
    </nav>

    <article class="mt-8">
      <BlogPageHeader :title="frontmatter.title" :date="frontmatter.date" />

      <Content class="blog-content max-w-3xl" />
    </article>
  </div>
</template>
