module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./docs/**/*.{html,ts,vue}",
    "./docs/.vitepress/theme/**/*.{vue,ts}",
  ],
  theme: {
    extend: {
      typography: {
        // ...
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
