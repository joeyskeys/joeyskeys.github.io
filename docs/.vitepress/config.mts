import { defineConfig, defineConfigWithTheme } from 'vitepress'
//import type { ThemeConfig } from

// https://vitepress.dev/reference/site-config
export default defineConfig({
//export default defineConfigWithTheme<ThemeConfig>({
  title: "Joey's Blog",
  description: "A place for me to write something.",
  themeConfig: {
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
  }
})
