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
  <article>
    <h2>
      <a :href="post.url">
        {{ post.title }}
      </a>
    </h2>
    <div>{{ post.date }}</div>
    <p>{{ post.excerpt }}</p>
    <div><a :href="post.url">Read more →</a></div>
  </article>
</template>