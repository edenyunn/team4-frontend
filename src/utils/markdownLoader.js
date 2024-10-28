import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

export const loadMarkdown = async (path) => {
  try {
    const markdown = await import(`../assets/markdowns/${path}.md?raw`)
    return md.render(markdown.default)
  } catch (error) {
    console.error(`Error loading markdown file: ${path}`, error)
    return ''
  }
}