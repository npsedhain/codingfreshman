import glob from 'fast-glob'
import * as path from 'path'

async function importStories(storyFilename) {
  let { meta, default: component } = await import(
    `../pages/stories/${storyFilename}`
  )
  return {
    slug: storyFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllStories() {
  let storyFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/stories'),
  })

  let stories = await Promise.all(storyFilenames.map(importStories))

  return stories.sort((a, z) => new Date(z.date) - new Date(a.date))
}
