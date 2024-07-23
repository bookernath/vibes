import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Getting started',
    pages: [{ title: 'Introduction', slug: 'introduction', file: 'docs/introduction.mdx' }],
  },
  {
    title: 'Components',
    pages: [{ title: 'Button', slug: 'button', file: 'docs/button.mdx' }],
  },
] satisfies Navigation