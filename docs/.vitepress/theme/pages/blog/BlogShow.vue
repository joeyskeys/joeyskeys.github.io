<script lang="ts" setup>
import { formatDate } from '../../../script/utils.ts'
const { frontmatter } = useData()
</script>

<template>
  <div>
    <h1 class="my-4 text-l font-semibold">
      <a href="/">Home</a>
      >
      <a href="/blog">Blog</a>
      >
      {{ frontmatter.title }}
    </h1>
    <!--article
      class="mx-4 border-4 border-black bg-white p-8 shadow-[8px_8px_0_black] space-y-16 md:p-12"
    >
      <h1 class="text-6xl font-semibold">
        {{ frontmatter.title }}
      </h1>

      <Content class="text-black prose prose-zinc" />
    </article-->
    <article class="flex flex-col mt-5">
      <h1 class="text-6xl font-semibold mb-2">
        {{ frontmatter.title }}
      </h1>
      <div class="my-1 text-sm text-secondary">{{ formatDate(frontmatter.date) }}</div>

      <Content class="my-3 text-lg" />
    </article>
  </div>
</template>