/*import DefaultTheme from 'vitepress/theme'
//import './custom.css' // Optional custom styles

export default {
  extends: DefaultTheme, // Extend the default theme
  enhanceApp({ app }) {
    // Register any global components here
  }
}*/

import { Theme } from 'vitepress'
import Layout from './Layout.vue'

export default {
  Layout,
} satisfies Theme