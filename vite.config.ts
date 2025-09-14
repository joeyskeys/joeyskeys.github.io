import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

const currentDir = dirname(fileURLToPath(import.meta.url))

const componentsDir = resolve(currentDir, 'theme', 'components')
const pagesDir = resolve(currentDir, 'theme', 'pages')

export default defineConfig({
  // ...

  vite: {
    plugins: [
      Components({
        dirs: [
          componentsDir,
          pagesDir,
        ],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: resolve(
          currentDir,
          'components.d.ts'
        ),
      }),
      tailwindcss(),
    ],
  },
})