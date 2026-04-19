<script lang="ts" setup>
import { ContentData } from 'vitepress'

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
  <!--article
    class="my-5 group relative border-4 border-black bg-white p-12 shadow-[8px_8px_0_black] transition duration-150 ease-linear space-y-6 hover:shadow-[12px_12px_0_black] hover:-translate-x-1 hover:-translate-y-1"
  >
    <h2 class="text-4xl text-black font-medium">
      <a :href="post.url">
        {{ post.frontmatter.title }}
        <span class="absolute inset-0" />
      </a>
    </h2>

    <p class="text-xl text-black">
      {{ post.frontmatter.description }}
    </p>
  </article-->
  <article class="flex flex-col mt-5 border-b-2">
    <h1 class="text-6xl font-semibold mb-2">
      <a :href="post.url" class="post-link">
        {{ post.title }}
      </a>
    </h1>
    <div class="my-1 text-sm text-secondary">{{ post.date }}</div>
    <p class="mt-3 text-lg">{{ post.excerpt }}</p>
    <div class="my-4 text-xl"><a :href="post.url" class="post-link">Read more →</a></div>
  </article>
</template>
