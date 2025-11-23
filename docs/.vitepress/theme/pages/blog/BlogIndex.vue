<script lang="ts" setup>
import { data } from '../../../data/blog.data'
import BlogCard from '../../components/BlogCard.vue'
const { frontmatter } = useData()
</script>

<template>
  <section class="">
    <h1 class="my-4 text-l font-semibold">
      <a href="/">Home</a>
      > {{ frontmatter.title }}
    </h1>

    <div class="">
      <BlogCard v-for="post in data" :key="post.url" :post="post" />
    </div>

  </section>
</template>