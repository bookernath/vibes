import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Getting started',
    pages: [{ title: 'Introduction', slug: 'introduction', file: 'docs/introduction.mdx' }],
  },
  {
    title: 'Components',
    pages: [
      { title: 'Accordions', slug: 'Accordions', file: 'docs/accordions.mdx' },
      { title: 'Button', slug: 'button', file: 'docs/button.mdx' },
      { title: 'Category Card', slug: 'category-card', file: 'docs/category-card.mdx' },
      { title: 'Hero Category', slug: 'hero-category', file: 'docs/hero-category.mdx' },
      { title: 'Input', slug: 'input', file: 'docs/input.mdx' },
      { title: 'Navigation', slug: 'navigation', file: 'docs/navigation.mdx' },
      {
        title: 'Product Description',
        slug: 'product-description',
        file: 'docs/product-description.mdx',
      },
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx' },
    ],
  },
] satisfies Navigation
