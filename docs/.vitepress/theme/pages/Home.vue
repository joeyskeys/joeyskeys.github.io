<script lang="ts" setup>
import { data } from '../../data/blog.data'
const { frontmatter } = useData()
</script>

<template>
  <section class="">
    <h1>index page</h1>
    <h1 class="font-semibold">
      {{ frontmatter.title }}
    </h1>
    <p>
      {{ frontmatter.description }}
    </p>

    <div class="">
    </div>

    <div class="flex justify-center">
    </div>
  </section>
</template>