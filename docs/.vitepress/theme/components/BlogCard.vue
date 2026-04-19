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
  <article
    class="group relative border-4 border-black bg-white p-8 shadow-[8px_8px_0_black] transition duration-150 ease-linear space-y-4 hover:shadow-[12px_12px_0_black] hover:-translate-x-1 hover:-translate-y-1"
  >
    <h2 class="text-3xl font-semibold text-black">
      <a :href="post.url">
        {{ post.title }}
        <span class="absolute inset-0" />
      </a>
    </h2>
    <div class="text-sm font-medium text-zinc-600">{{ post.date }}</div>
    <p class="text-lg text-black">{{ post.excerpt }}</p>
    <div>
      <a class="font-semibold text-black underline underline-offset-4" :href="post.url">Read more -></a>
    </div>
  </article>
</template>