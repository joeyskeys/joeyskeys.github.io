<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
const { Layout } = DefaultTheme
const { theme, title } = useData()
</script>

<template>
    <h1>{{ title }}</h1>
    <h2>Test</h2>
</template>