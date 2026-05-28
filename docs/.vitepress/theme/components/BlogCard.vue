<script lang="ts" setup>
import BlogPageHeader from './BlogPageHeader.vue'

interface Post {
  title: string,
  url: string,
  date: string,
  excerpt: string,
}

defineProps<{
  post: Post
}>()
</script>

<template>
  <article class="flex flex-col">
    <BlogPageHeader :title="post.title" :date="post.date" :href="post.url" />
    <p class="text-lg">{{ post.excerpt }}</p>
    <div class="my-4 text-xl"><a :href="post.url" class="post-link">Read more →</a></div>
  </article>
</template>
