<script lang="ts" setup>
import { formatDate } from '../../script/utils.ts'

defineProps<{
  date: string | Date
}>()
</script>

<template>
  <time class="mt-4 block text-sm font-medium uppercase tracking-widest text-secondary">
    {{ formatDate(date) }}
  </time>
</template>
