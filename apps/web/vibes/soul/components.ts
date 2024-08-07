import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'accordions',
    dependencies: ['clsx', '@radix-ui/react-accordion'],
    registryDependencies: [],
    files: ['components/accordions/index.tsx', 'components/accordions/chevron.tsx'],
    component: lazy(() => import('./components/accordions')),
  },
  {
    name: 'announcement-bar',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/announcement-bar/index.tsx'],
    component: lazy(() => import('./components/announcement-bar')),
  },
  {
    name: 'blog-post-card',
    dependencies: [],
    registryDependencies: [],
    files: ['components/blog-post-card/index.tsx'],
    component: lazy(() => import('./components/blog-post-card')),
  },
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['components/button/index.tsx'],
    component: lazy(() => import('./components/button')),
  },
  {
    name: 'carousel',
    dependencies: ['clsx', 'embla-carousel-react', 'lucide-react'],
    registryDependencies: [],
    files: ['components/carousel/index.tsx', 'components/carousel/scrollbar.tsx', 'styles.css'],
    component: lazy(() => import('./components/carousel')),
  },
  {
    name: 'category-card',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/category-card/index.tsx'],
    component: lazy(() => import('./components/category-card')),
  },
  {
    name: 'checkbox',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-checkbox'],
    registryDependencies: [],
    files: ['components/checkbox/index.tsx'],
    component: lazy(() => import('./components/checkbox')),
  },
  {
    name: 'compare-drawer',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['button'],
    files: ['components/compare-drawer/index.tsx', 'components/compare-drawer/product-chip.tsx'],
    component: lazy(() => import('./components/compare-drawer')),
  },
  {
    name: 'dropdown',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-dropdown-menu'],
    registryDependencies: [],
    files: ['components/dropdown/index.tsx'],
    component: lazy(() => import('./components/dropdown')),
  },
  {
    name: 'favorite',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: [
      'components/favorite/index.tsx',
      'components/favorite/heart.tsx',
      'components/favorite/styles.css',
    ],
    component: lazy(() => import('./components/favorite')),
  },
  {
    name: 'feature',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['button'],
    files: ['components/feature/index.tsx', 'components/icon/index.tsx'],
    component: lazy(() => import('./components/feature')),
  },
  {
    name: 'featured-product-list',
    dependencies: [],
    registryDependencies: ['button', 'product-card'],
    files: ['components/featured-product-list/index.tsx'],
    component: lazy(() => import('./components/featured-product-list')),
  },
  {
    name: 'footer',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/footer/index.tsx'],
    component: lazy(() => import('./components/footer')),
  },
  {
    name: 'header',
    dependencies: ['clsx', 'lucide-react', 'react-headroom'],
    registryDependencies: [],
    files: ['components/header/index.tsx', 'components/header/hamburger-menu-button.tsx'],
    component: lazy(() => import('./components/header')),
  },
  {
    name: 'icon-block',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/icon-block/index.tsx', 'components/icon/index.tsx'],
    component: lazy(() => import('./components/icon-block')),
  },
  {
    name: 'input',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['components/input/index.tsx'],
    component: lazy(() => import('./components/input')),
  },
  {
    name: 'label',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/label/index.tsx'],
    component: lazy(() => import('./components/label')),
  },
  {
    name: 'media-section',
    dependencies: ['clsx'],
    registryDependencies: ['button'],
    files: ['components/media-section/index.tsx'],
    component: lazy(() => import('./components/media-section')),
  },
  {
    name: 'newsletter',
    dependencies: ['clsx'],
    registryDependencies: ['input'],
    files: ['components/newsletter/index.tsx'],
    component: lazy(() => import('./components/newsletter')),
  },
  {
    name: 'page-home',
    dependencies: [],
    registryDependencies: [
      'announcement-bar',
      'carousel',
      'category-card',
      'feature',
      'featured-product-list',
      'footer',
      'header',
      'slideshow',
      'media-section',
      'newsletter',
    ],
    files: ['components/page-home/index.tsx'],
    component: lazy(() => import('./components/page-home')),
  },
  {
    name: 'page-product',
    dependencies: [],
    registryDependencies: [
      'announcement-bar',
      'carousel',
      'category-card',
      'footer',
      'header',
      'icon-block',
      'newsletter',
      'product-card',
      'product-description',
      'product-detail',
    ],
    files: ['components/page-product/index.tsx'],
    component: lazy(() => import('./components/page-product')),
  },
  {
    name: 'page-products',
    dependencies: [],
    registryDependencies: [
      'announcement-bar',
      'carousel',
      'category-card',
      'compare-drawer',
      'footer',
      'header',
      'pagination',
      'product-list',
      'products-header',
    ],
    files: ['components/page-products/index.tsx'],
    component: lazy(() => import('./components/page-products')),
  },
  {
    name: 'pagination',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['components/pagination/index.tsx'],
    component: lazy(() => import('./components/pagination')),
  },
  {
    name: 'product-card',
    dependencies: ['clsx'],
    registryDependencies: ['label', 'checkbox'],
    files: [
      'components/product-card/index.tsx',
      'components/product-card/compare.tsx',
      'components/product-card/price.tsx',
    ],
    component: lazy(() => import('./components/product-card')),
  },
  {
    name: 'product-detail',
    dependencies: ['clsx', 'embla-carousel-react'],
    registryDependencies: ['button', 'favorite', 'product-card', 'rating'],
    files: [
      'components/product-detail/index.tsx',
      'components/product-detail/product-gallery.tsx',
      'components/product-card/price.tsx',
    ],
    component: lazy(() => import('./components/product-detail')),
  },
  {
    name: 'product-list',
    dependencies: [],
    registryDependencies: ['product-card'],
    files: ['components/product-list/index.tsx'],
    component: lazy(() => import('./components/product-list')),
  },
  {
    name: 'product-description',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['components/product-description/index.tsx'],
    component: lazy(() => import('./components/product-description')),
  },
  {
    name: 'products-header',
    dependencies: [],
    registryDependencies: ['accordions', 'button', 'dropdown'],
    files: ['components/products-header/index.tsx'],
    component: lazy(() => import('./components/products-header')),
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['components/rating/index.tsx'],
    component: lazy(() => import('./components/rating')),
  },
  {
    name: 'slideshow',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: [
      'components/slideshow/index.tsx',
      'components/slideshow/progress-bar.tsx',
      'components/slideshow/progress-section.tsx',
    ],
    component: lazy(() => import('./components/slideshow')),
  },
] satisfies Components
