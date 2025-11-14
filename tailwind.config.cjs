module.exports = {
  darkMode: 'class',
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
