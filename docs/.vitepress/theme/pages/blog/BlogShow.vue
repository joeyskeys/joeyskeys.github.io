<script lang="ts" setup>
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
    <article
      class="mx-4 border-4 border-black bg-white p-8 shadow-[8px_8px_0_black] space-y-16 md:p-12"
    >
      <h1 class="text-6xl font-semibold">
        {{ frontmatter.title }}
      </h1>

      <Content class="text-black prose prose-zinc" />
    </article>
  </div>
</template>