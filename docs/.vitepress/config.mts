import { defineConfig, defineConfigWithTheme } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
//export default defineConfigWithTheme<ThemeConfig>({
  title: "Joey's Blog",
  description: "Something about compute.",
  head: [['link', {rel: 'icon', href: '/images/favicon.ico'}]],
  srcDir: './src',
  outDir: './public/dist',
  themeConfig: {
    /*
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/joeyskeys' }
    ]
    */
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
