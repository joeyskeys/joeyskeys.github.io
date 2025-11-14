<script lang="ts" setup>
import { data } from '../../data/blog.data'
const { frontmatter } = useData()
</script>

<template>
  <section class="space-y-16">
    <h1>index page</h1>
    <h1 class="text-6xl font-semibold">
      {{ frontmatter.title }}
    </h1>
    <p>
      {{ frontmatter.description }}
    </p>

    <div class="space-y-10">
    </div>

    <div class="flex justify-center">
    </div>
  </section>
</template>