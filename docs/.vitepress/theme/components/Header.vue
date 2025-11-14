<script lang="ts" setup>
import { ContentData } from 'vitepress'
import {ref, onMounted} from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')

  console.log('dark mode: ', isDark.value);
  console.log('html classes: ', document.documentElement.className);
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <header>
    <nav class="flex flex-row">
      <div class="flex flex-row">
        <a class="text-black dark:text-gray-200">
          <img>
          Joey Skeys
        </a>
        <div class="content-center">
          <button @click="toggleTheme" accesskey="t" title="(Alt + T)" class="flex flex-row">
            <svg v-if="isDark" id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-gray-200"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            <svg v-else id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-gray-800"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
          </button>
        </div>
      </div>
      <ul>

      </ul>
    </nav>
  </header>
</template>