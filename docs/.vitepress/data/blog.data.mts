import type { ContentData } from 'vitepress'
import { createContentLoader } from 'vitepress'

declare const data: ContentData[]
export { data }

export default createContentLoader('blog/*.md', {
  includeSrc: true,
  excerpt: true,

  transform: (data) => {
    return data
      .map((page) => {
        var excerpt = '';
        if (page !== undefined) {
          excerpt = getExcerpt(page.src ?? 'default');
        }
        return {
          title: page.frontmatter.title,
          url: page.url,
          date: page.frontmatter.date,
          excerpt: page.frontmatter.excerpt,
          frontmattter: page.frontmatter,
          page: page,
        }
      }).sort((a, b) => {
      return (
        new Date(b.date).getTime()
          - new Date(a.date).getTime()
      )
    })
  },
})

function getExcerpt(content: string) {
  const cleanContent = content
    .replace(/^#+\s+.+$/gm, '') // Remove header lines
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .replace(/\s+/g, ' ') // Collapse multiple spaces
    .trim()
  
  // Take first 100 characters and add ellipsis
  return cleanContent.length > 100 
    ? cleanContent.substring(0, 100) + '...' 
    : cleanContent
}