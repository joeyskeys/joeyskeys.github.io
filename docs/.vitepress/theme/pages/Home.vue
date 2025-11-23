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

      <div class="flex flex-row place-content-center items-center">
        <a href="mailto:joey.skeys@gmail.com" target="_blank" rel="noopener noreferrer me" title="Email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="home-page-svg"><path d="M4 4h16c1.1.0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1.0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
        <a href="https://github.com/joeyskeys" target="_blank" rel="noopener noreferrer me" title="Github">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="home-page-svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37.0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44.0 0020 4.77 5.07 5.07.0 0019.91 1S18.73.65 16 2.48a13.38 13.38.0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07.0 005 4.77 5.44 5.44.0 003.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37.0 009 18.13V22"></path></svg>
        </a>
      </div>
    </div>
  </section>
</template>