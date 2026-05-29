<script lang="ts" setup>
import { data } from '../../data/blog.data'
const { frontmatter } = useData()
</script>

<template>
  <section class="flex-1 flex flex-col items-center">
    <div class="h-full flex flex-col justify-center">
      <h1 class="text-5xl font-bold text-center">
        {{ frontmatter.title }}
      </h1>

      <Content class="text-left my-4" />
    </div>
  </section>
</template>