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
        'secondary': 'var(--color-secondary)',
        'link': 'var(--color-link)',
        'link-hover': 'var(--color-link-hover)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
