import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, defineConfigWithTheme } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

const currentDir = dirname(fileURLToPath(import.meta.url))

const componentsDir = resolve(currentDir, 'theme', 'components')
const pagesDir = resolve(currentDir, 'theme', 'pages')
const composablesDir = resolve(currentDir, 'theme', 'composables')
const utilsDir = resolve(currentDir, 'theme', 'utils')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Joey's Blog",
  description: "Something about compute.",
  head: [['link', {rel: 'icon', href: '/images/favicon.ico'}]],
  srcDir: './src',
  outDir: './public/dist',

  vite: {
    plugins: [
      {
        name: 'watcher',
        configureServer(server) {
          server.watcher.add([componentsDir, pagesDir])
        }
      },
      AutoImport({
        imports: ['vue', 'vitepress'],
        dirs: [componentsDir, utilsDir],
        dts: resolve(currentDir, 'auto-imports.d.ts')
      }),
      tailwindcss()
    ],
  }
})
