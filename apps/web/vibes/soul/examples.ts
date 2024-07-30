import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'accordions-example',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['examples/accordions.tsx'],
    component: lazy(() => import('./examples/accordions')),
  },
  {
    name: 'announcement-bar-example',
    dependencies: [],
    registryDependencies: ['announcement-bar'],
    files: ['examples/announcement-bar.tsx'],
    component: lazy(() => import('./examples/announcement-bar')),
  },
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'categories-example',
    dependencies: [],
    registryDependencies: ['categories'],
    files: ['examples/categories.tsx'],
    component: lazy(() => import('./examples/categories')),
  },
  {
    name: 'category-card-example',
    dependencies: [],
    registryDependencies: ['category-card'],
    files: ['examples/category-card.tsx'],
    component: lazy(() => import('./examples/category-card')),
  },
  {
    name: 'checkbox-example',
    dependencies: [],
    registryDependencies: ['checkbox'],
    files: ['examples/checkbox.tsx'],
    component: lazy(() => import('./examples/checkbox')),
  },
  {
    name: 'compare-example',
    dependencies: ['checkbox'],
    registryDependencies: [],
    files: ['examples/compare.tsx'],
    component: lazy(() => import('./examples/compare')),
  },
  {
    name: 'compare-bar-example',
    dependencies: [],
    registryDependencies: ['compare-bar'],
    files: ['examples/compare-bar.tsx'],
    component: lazy(() => import('./examples/compare-bar')),
  },
  {
    name: 'favorite-example',
    dependencies: [],
    registryDependencies: ['favorite'],
    files: ['examples/favorite.tsx'],
    component: lazy(() => import('./examples/favorite')),
  },
  {
    name: 'feature-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/feature.tsx'],
    component: lazy(() => import('./examples/feature')),
  },
  {
    name: 'featured-product-list-example',
    dependencies: [],
    registryDependencies: ['featured-product-list'],
    files: ['examples/featured-product-list.tsx'],
    component: lazy(() => import('./examples/featured-product-list')),
  },
  {
    name: 'hero-category-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/hero-category.tsx'],
    component: lazy(() => import('./examples/hero-category')),
  },
  {
    name: 'hero-example',
    dependencies: [],
    registryDependencies: ['hero'],
    files: ['examples/hero.tsx'],
    component: lazy(() => import('./examples/hero')),
  },
  {
    name: 'hero-category-example',
    dependencies: [],
    registryDependencies: ['hero-category'],
    files: ['examples/hero-category.tsx'],
    component: lazy(() => import('./examples/hero-category')),
  },
  {
    name: 'input-example',
    dependencies: [],
    registryDependencies: ['input'],
    files: ['examples/input.tsx'],
    component: lazy(() => import('./examples/input')),
  },
  {
    name: 'navigation-example',
    dependencies: [],
    registryDependencies: ['navigation'],
    files: ['examples/navigation.tsx'],
    component: lazy(() => import('./examples/navigation')),
  },
  {
    name: 'newsletter-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/newsletter.tsx'],
    component: lazy(() => import('./examples/newsletter')),
  },
  {
    name: 'product-card-example',
    dependencies: [],
    registryDependencies: ['product-card'],
    files: ['examples/product-card.tsx'],
    component: lazy(() => import('./examples/product-card')),
  },
  {
    name: 'product-chip-example',
    dependencies: [],
    registryDependencies: ['product-chip'],
    files: ['examples/product-chip.tsx'],
    component: lazy(() => import('./examples/product-chip')),
  },
  {
    name: 'product-list-example',
    dependencies: [],
    registryDependencies: ['product-list'],
    files: ['examples/product-list.tsx'],
    component: lazy(() => import('./examples/product-list')),
  },
  {
    name: 'product-list-carousel-example',
    dependencies: [],
    registryDependencies: ['product-list-carousel'],
    files: ['examples/product-list-carousel.tsx'],
    component: lazy(() => import('./examples/product-list-carousel')),
  },
  {
    name: 'product-description-example',
    dependencies: [],
    registryDependencies: ['product-description'],
    files: ['examples/product-description.tsx'],
    component: lazy(() => import('./examples/product-description')),
  },
  {
    name: 'rating-example',
    dependencies: [],
    registryDependencies: ['rating'],
    files: ['examples/rating.tsx'],
    component: lazy(() => import('./examples/rating')),
  },
] satisfies Components
