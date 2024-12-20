import { Components } from '@/vibes/schema';

export const primitives = [
  {
    name: 'accordions',
    dependencies: ['clsx', '@radix-ui/react-accordion'],
    registryDependencies: [],
    files: ['primitives/accordions/index.tsx'],
  },
  {
    name: 'alert',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/alert/index.tsx'],
  },
  {
    name: 'animated-link',
    dependencies: [],
    registryDependencies: [],
    files: ['primitives/animated-link/index.tsx'],
  },

  {
    name: 'badge',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/badge/index.tsx'],
  },
  {
    name: 'banner',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/banner/index.tsx'],
  },
  {
    name: 'blog-post-card',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/blog-post-card/index.tsx'],
  },
  {
    name: 'breadcrumbs',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/breadcrumbs/index.tsx'],
  },
  {
    name: 'button',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/button/index.tsx'],
  },
  {
    name: 'button-link',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/button-link/index.tsx'],
  },
  {
    name: 'calendar',
    dependencies: ['clsx', 'lucide-react', 'react-day-picker'],
    registryDependencies: [],
    files: ['primitives/calendar.tsx'],
  },
  {
    name: 'card',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/card/index.tsx'],
  },
  {
    name: 'card-carousel',
    dependencies: ['clsx'],
    registryDependencies: ['carousel'],
    files: ['primitives/card-carousel/index.tsx'],
  },
  {
    name: 'carousel',
    dependencies: ['embla-carousel-react', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/carousel/index.tsx'],
  },
  {
    name: 'checkbox',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-checkbox'],
    registryDependencies: [],
    files: ['primitives/checkbox/index.tsx'],
  },
  {
    name: 'counter',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: ['primitives/counter/index.tsx'],
  },
  {
    name: 'cursor-pagination',
    dependencies: ['lucide-react', 'nuqs', 'clsx'],
    registryDependencies: [],
    files: ['primitives/cursor-pagination/index.tsx'],
  },
  {
    name: 'dropdown',
    dependencies: ['clsx', 'lucide-react', '@radix-ui/react-dropdown-menu'],
    registryDependencies: [],
    files: ['primitives/dropdown/index.tsx'],
  },
  {
    name: 'favorite',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: [
      'primitives/favorite/index.tsx',
      'primitives/favorite/heart.tsx',
      'primitives/favorite/styles.css',
    ],
  },
  {
    name: 'feature',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: ['button'],
    files: ['sections/feature/index.tsx', 'primitives/icon/index.tsx'],
  },
  {
    name: 'featured-video',
    dependencies: ['clsx'],
    registryDependencies: ['button'],
    files: ['sections/featured-video/index.tsx'],
  },
  {
    name: 'input',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['primitives/input/index.tsx'],
  },
  {
    name: 'inline-email-form',
    dependencies: ['lucide-react', '@conform-to/react', '@conform-to/zod'],
    registryDependencies: [],
    files: ['primitives/inline-email-form/index.tsx'],
  },
  {
    name: 'pagination',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/pagination/index.tsx'],
  },
  {
    name: 'price-label',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/price-label/index.tsx'],
  },
  {
    name: 'product-card',
    dependencies: ['clsx'],
    registryDependencies: ['badge', 'checkbox', 'price-label'],
    files: ['primitives/product-card/index.tsx', 'primitives/product-card/compare.tsx'],
  },
  {
    name: 'products-carousel',
    dependencies: ['clsx'],
    registryDependencies: ['product-card', 'carousel'],
    files: ['primitives/products-carousel/index.tsx'],
  },
  {
    name: 'products-list',
    dependencies: [],
    registryDependencies: ['product-card'],
    files: ['primitives/products-list/index.tsx'],
  },
  {
    name: 'product-description',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['sections/product-description/index.tsx'],
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['primitives/rating/index.tsx'],
  },
  {
    name: 'spinner',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/spinner/index.tsx'],
  },
  {
    name: 'textarea',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['primitives/textarea/index.tsx'],
  },
] satisfies Components;
