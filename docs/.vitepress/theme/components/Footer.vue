<script lang="ts" setup>
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="py-3 text-center">
    <span>
      Copyright © {{ currentYear }} 
      <a href="/">Joey Skeys</a>
    </span>
  </footer>
</template>