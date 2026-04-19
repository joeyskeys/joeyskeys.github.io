<script lang="ts" setup>
import { data } from '../../../data/blog.data'
import BlogCard from '../../components/BlogCard.vue'
const { frontmatter } = useData()
</script>

<template>
  <section class="mx-4">
    <h1 class="my-4 text-l font-semibold">
      <a href="/">Home</a>
      > {{ frontmatter.title }}
    </h1>

    <div class="space-y-6">
      <BlogCard v-for="post in data" :key="post.url" :post="post" />
    </div>

  </section>
</template>