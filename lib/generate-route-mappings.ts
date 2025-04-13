import { Octokit } from '@octokit/rest'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

interface BookRoute {
  [title: string]: string
}

async function generateRouteMappings(): Promise<void> {
  const octokit = new Octokit()
  const bookRoutes: BookRoute = {}

  try {
    const { data: dataContents } = await octokit.repos.getContent({
      owner: 'Pterseus',
      repo: 'content',
      path: 'data'
    })

    const bookDirs = (dataContents as any[]).filter(item => item.type === 'dir')

    for (const bookDir of bookDirs) {
      const { data: bookContents } = await octokit.repos.getContent({
        owner: 'Pterseus',
        repo: 'content',
        path: `data/${bookDir.name}`
      })

      const markdownFiles = (bookContents as any[]).filter(
        file => file.type === 'file' && file.name.endsWith('.md')
      )

      for (const file of markdownFiles) {
        try {
          const fileContent = await (await fetch(file.download_url)).text()
          const { data: frontmatter } = matter(fileContent)

          if (frontmatter.title) {
            const languageCode = file.name.replace('.md', '')
            const fileReference = `${bookDir.name}::${languageCode}`

            bookRoutes[frontmatter.title] = fileReference
          }
        } catch (fileError) {
          console.error(
            `Error processing file "${file.name}" in directory "${bookDir.name}":`,
            fileError
          )
        }
      }
    }

    const outputPath = path.join(process.cwd(), 'book-routes.ts')
    const fileContent = `// Generated: ${new Date().toISOString()}\n\nexport const bookRoutes = ${JSON.stringify(
      bookRoutes,
      null,
      2
    )};`

    fs.writeFileSync(outputPath, fileContent)
    console.log('🎉 Book routes generated successfully!')
  } catch (error) {
    console.error('An error occurred while generating book routes:', error)
  }
}

generateRouteMappings()
