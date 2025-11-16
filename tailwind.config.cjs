module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./docs/**/*.{html,ts,vue}",
    "./docs/.vitepress/theme/**/*.{vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--color-bg)',
        'primary': 'var(--color-primary)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
