import { bookRoutes } from '~/book-routes'

export const slugify = (string?: string): string | undefined => string?.replaceAll(' ', '_')

export const deslugify = (string?: string): string | undefined => string?.replaceAll('_', ' ')

export const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

export const getTranslations = (id: string) => {
  return Object.entries(bookRoutes)
    .filter(([, value]) => value.includes(id))
    .map(([title, value]) => {
      const language = value.split('::')[1]
      return { title, language }
    })
}
