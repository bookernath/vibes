import { lazy } from 'react'

import 'server-only'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'accordions-example',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['examples/primitives/accordions/index.tsx'],
    component: lazy(() => import('./examples/primitives/accordions')),
  },
  {
    name: 'account-layout-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/sections/account-layout/index.tsx'],
    component: lazy(() => import('./examples/sections/account-layout')),
  },
  {
    name: 'account-settings-section-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/sections/account-settings-section/index.tsx'],
    component: lazy(() => import('./examples/sections/account-settings-section')),
  },
  {
    name: 'address-list-section-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/sections/address-list-section/index.tsx'],
    component: lazy(() => import('./examples/sections/address-list-section')),
  },
  {
    name: 'alert-example',
    dependencies: [],
    registryDependencies: ['alert'],
    files: ['examples/primitives/alert/index.tsx'],
    component: lazy(() => import('./examples/primitives/alert')),
  },
  {
    name: 'animated-link-example',
    dependencies: [],
    registryDependencies: ['animated-link'],
    files: ['examples/primitives/animated-link/index.tsx'],
    component: lazy(() => import('./examples/primitives/animated-link')),
  },
  {
    name: 'banner-example',
    dependencies: [],
    registryDependencies: ['banner'],
    files: ['examples/primitives/banner/index.tsx'],
    component: lazy(() => import('./examples/primitives/banner')),
  },
  {
    name: 'badge-example',
    dependencies: [],
    registryDependencies: ['badge'],
    files: ['examples/primitives/badge/index.tsx'],
    component: lazy(() => import('./examples/primitives/badge')),
  },
  {
    name: 'blog-post-card-example',
    dependencies: [],
    registryDependencies: ['blog-post-card'],
    files: ['examples/primitives/blog-post-card/index.tsx'],
    component: lazy(() => import('./examples/primitives/blog-post-card')),
  },
  {
    name: 'blog-post-list-example',
    dependencies: [],
    registryDependencies: ['blog-post-list'],
    files: ['examples/sections/blog-post-list/index.tsx'],
    component: lazy(() => import('./examples/sections/blog-post-list')),
  },
  {
    name: 'breadcrumbs-electric-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs-electric'],
    files: ['examples/primitives/breadcrumbs/electric.tsx'],
    component: lazy(() => import('./examples/primitives/breadcrumbs/electric')),
  },
  {
    name: 'breadcrumbs-warm-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs-warm'],
    files: ['examples/primitives/breadcrumbs/warm.tsx'],
    component: lazy(() => import('./examples/primitives/breadcrumbs/warm')),
  },
  {
    name: 'breadcrumbs-luxury-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs-luxury'],
    files: ['examples/primitives/breadcrumbs/luxury.tsx'],
    component: lazy(() => import('./examples/primitives/breadcrumbs/luxury')),
  },
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/primitives/button/index.tsx'],
    component: lazy(() => import('./examples/primitives/button')),
  },
  {
    name: 'button-link-example',
    dependencies: [],
    registryDependencies: ['button-link'],
    files: ['examples/primitives/button-link/index.tsx'],
    component: lazy(() => import('./examples/primitives/button-link')),
  },
  {
    name: 'calendar-electric-example',
    dependencies: [],
    registryDependencies: ['calendar'],
    files: ['examples/primitives/calendar/electric.tsx'],
    component: lazy(() => import('./examples/primitives/calendar/electric')),
  },
  {
    name: 'calendar-warm-example',
    dependencies: [],
    registryDependencies: ['calendar'],
    files: ['examples/primitives/calendar/warm.tsx'],
    component: lazy(() => import('./examples/primitives/calendar/warm')),
  },
  {
    name: 'calendar-luxury-example',
    dependencies: [],
    registryDependencies: ['calendar'],
    files: ['examples/primitives/calendar/luxury.tsx'],
    component: lazy(() => import('./examples/primitives/calendar/luxury')),
  },
  {
    name: 'card-carousel-electric-example',
    dependencies: [],
    registryDependencies: ['card-carousel-electric'],
    files: ['examples/primitives/card-carousel/electric.tsx'],
    component: lazy(() => import('./examples/primitives/card-carousel/electric')),
  },
  {
    name: 'card-carousel-warm-example',
    dependencies: [],
    registryDependencies: ['card-carousel-warm'],
    files: ['examples/primitives/card-carousel/warm.tsx'],
    component: lazy(() => import('./examples/primitives/card-carousel/warm')),
  },
  {
    name: 'card-carousel-luxury-example',
    dependencies: [],
    registryDependencies: ['card-carousel-luxury'],
    files: ['examples/primitives/card-carousel/luxury.tsx'],
    component: lazy(() => import('./examples/primitives/card-carousel/luxury')),
  },
  {
    name: 'card-example',
    dependencies: [],
    registryDependencies: ['card'],
    files: ['examples/primitives/card/index.tsx'],
    component: lazy(() => import('./examples/primitives/card')),
  },
  {
    name: 'cart-electric-example',
    dependencies: [],
    registryDependencies: ['cart-electric'],
    files: ['examples/sections/cart/electric.tsx'],
    component: lazy(() => import('./examples/sections/cart/electric')),
  },
  {
    name: 'cart-warm-example',
    dependencies: [],
    registryDependencies: ['cart-warm'],
    files: ['examples/sections/cart/warm.tsx'],
    component: lazy(() => import('./examples/sections/cart/warm')),
  },
  {
    name: 'cart-luxury-example',
    dependencies: [],
    registryDependencies: ['cart-luxury'],
    files: ['examples/sections/cart/luxury.tsx'],
    component: lazy(() => import('./examples/sections/cart/luxury')),
  },
  {
    name: 'cart-loading-electric-example',
    dependencies: [],
    registryDependencies: ['cart-electric'],
    files: ['examples/sections/cart/loading-electric.tsx'],
    component: lazy(() => import('./examples/sections/cart/loading-electric')),
  },
  {
    name: 'cart-loading-warm-example',
    dependencies: [],
    registryDependencies: ['cart-warm'],
    files: ['examples/sections/cart/loading-warm.tsx'],
    component: lazy(() => import('./examples/sections/cart/loading-warm')),
  },
  {
    name: 'cart-loading-luxury-example',
    dependencies: [],
    registryDependencies: ['cart-luxury'],
    files: ['examples/sections/cart/loading-luxury.tsx'],
    component: lazy(() => import('./examples/sections/cart/loading-luxury')),
  },
  {
    name: 'checkbox-example',
    dependencies: [],
    registryDependencies: ['checkbox'],
    files: ['examples/primitives/checkbox/index.tsx'],
    component: lazy(() => import('./examples/primitives/checkbox')),
  },
  {
    name: 'checkout-example',
    dependencies: [],
    registryDependencies: ['checkout'],
    files: ['examples/sections/checkout/index.tsx'],
    component: lazy(() => import('./examples/sections/checkout')),
  },
  {
    name: 'compare-section-electric-example',
    dependencies: [],
    registryDependencies: ['compare-section'],
    files: ['examples/sections/compare-section/electric.tsx'],
    component: lazy(() => import('./examples/sections/compare-section/electric')),
  },
  {
    name: 'compare-section-luxury-example',
    dependencies: [],
    registryDependencies: ['compare-section'],
    files: ['examples/sections/compare-section/luxury.tsx'],
    component: lazy(() => import('./examples/sections/compare-section/luxury')),
  },
  {
    name: 'compare-section-warm-example',
    dependencies: [],
    registryDependencies: ['compare-section'],
    files: ['examples/sections/compare-section/warm.tsx'],
    component: lazy(() => import('./examples/sections/compare-section/warm')),
  },
  {
    name: 'countdown-example',
    dependencies: [],
    registryDependencies: ['countdown'],
    files: ['examples/sections/countdown/index.tsx'],
    component: lazy(() => import('./examples/sections/countdown')),
  },
  {
    name: 'counter-example',
    dependencies: [],
    registryDependencies: ['counter'],
    files: ['examples/primitives/counter/index.tsx'],
    component: lazy(() => import('./examples/primitives/counter')),
  },
  {
    name: 'cursor-pagination-example',
    dependencies: [],
    registryDependencies: ['cursor-pagination'],
    files: ['examples/primitives/cursor-pagination/index.tsx'],
    component: lazy(() => import('./examples/primitives/cursor-pagination')),
  },
  {
    name: 'discount-example',
    dependencies: [],
    registryDependencies: ['discount'],
    files: ['examples/sections/discount/index.tsx'],
    component: lazy(() => import('./examples/sections/discount')),
  },
  {
    name: 'dropdown-example',
    dependencies: [],
    registryDependencies: ['dropdown'],
    files: ['examples/primitives/dropdown/index.tsx'],
    component: lazy(() => import('./examples/primitives/dropdown')),
  },
  {
    name: 'favorite-example',
    dependencies: [],
    registryDependencies: ['favorite'],
    files: ['examples/primitives/favorites/index.tsx'],
    component: lazy(() => import('./examples/primitives/favorites')),
  },
  {
    name: 'feature-electric-example',
    dependencies: [],
    registryDependencies: ['feature-electric'],
    files: ['examples/sections/feature/electric.tsx'],
    component: lazy(() => import('./examples/sections/feature/electric')),
  },
  {
    name: 'feature-warm-example',
    dependencies: [],
    registryDependencies: ['feature-warm'],
    files: ['examples/sections/feature/warm.tsx'],
    component: lazy(() => import('./examples/sections/feature/warm')),
  },
  {
    name: 'feature-luxury-example',
    dependencies: [],
    registryDependencies: ['feature-luxury'],
    files: ['examples/sections/feature/luxury.tsx'],
    component: lazy(() => import('./examples/sections/feature/luxury')),
  },
  {
    name: 'featured-blog-post-list-example',
    dependencies: [],
    registryDependencies: ['featured-blog-post-list'],
    files: ['examples/sections/featured-blog-post-list/index.tsx'],
    component: lazy(() => import('./examples/sections/featured-blog-post-list')),
  },
  {
    name: 'featured-image-electric-example',
    dependencies: [],
    registryDependencies: ['featured-image-electric'],
    files: ['examples/sections/featured-image/electric.tsx'],
    component: lazy(() => import('./examples/sections/featured-image/electric')),
  },
  {
    name: 'featured-image-warm-example',
    dependencies: [],
    registryDependencies: ['featured-image-warm'],
    files: ['examples/sections/featured-image/warm.tsx'],
    component: lazy(() => import('./examples/sections/featured-image/warm')),
  },
  {
    name: 'featured-image-luxury-example',
    dependencies: [],
    registryDependencies: ['featured-image-luxury'],
    files: ['examples/sections/featured-image/luxury.tsx'],
    component: lazy(() => import('./examples/sections/featured-image/luxury')),
  },
  {
    name: 'featured-products-carousel-example',
    dependencies: [],
    registryDependencies: ['featured-products-carousel'],
    files: ['examples/sections/featured-products-carousel/index.tsx'],
    component: lazy(() => import('./examples/sections/featured-products-carousel')),
  },
  {
    name: 'featured-products-list-electric-example',
    dependencies: [],
    registryDependencies: ['featured-products-list-electric'],
    files: ['examples/sections/featured-products-list/electric.tsx'],
    component: lazy(() => import('./examples/sections/featured-products-list/electric')),
  },
  {
    name: 'featured-products-list-warm-example',
    dependencies: [],
    registryDependencies: ['featured-products-list-warm'],
    files: ['examples/sections/featured-products-list/warm.tsx'],
    component: lazy(() => import('./examples/sections/featured-products-list/warm')),
  },
  {
    name: 'featured-products-list-luxury-example',
    dependencies: [],
    registryDependencies: ['featured-products-list-luxury'],
    files: ['examples/sections/featured-products-list/luxury.tsx'],
    component: lazy(() => import('./examples/sections/featured-products-list/luxury')),
  },
  {
    name: 'featured-video-example',
    dependencies: [],
    registryDependencies: ['featured-video'],
    files: ['examples/sections/featured-video/index.tsx'],
    component: lazy(() => import('./examples/sections/featured-video')),
  },
  {
    name: 'form-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/form.tsx'],
    component: lazy(() => import('./examples/form')),
  },
  {
    name: 'footer-electric-example',
    dependencies: [],
    registryDependencies: ['footer-electric'],
    files: ['examples/sections/footer/electric.tsx'],
    component: lazy(() => import('./examples/sections/footer/electric')),
  },
  {
    name: 'footer-warm-example',
    dependencies: [],
    registryDependencies: ['footer-warm'],
    files: ['examples/sections/footer/warm.tsx'],
    component: lazy(() => import('./examples/sections/footer/warm')),
  },
  {
    name: 'footer-luxury-example',
    dependencies: [],
    registryDependencies: ['footer-luxury'],
    files: ['examples/sections/footer/luxury.tsx'],
    component: lazy(() => import('./examples/sections/footer/luxury')),
  },
  {
    name: 'header-section-electric-example',
    dependencies: [],
    registryDependencies: ['header-section'],
    files: ['examples/sections/header-section/electric.tsx'],
    component: lazy(() => import('./examples/sections/header-section/electric')),
  },
  {
    name: 'header-section-warm-example',
    dependencies: [],
    registryDependencies: ['header-section'],
    files: ['examples/sections/header-section/warm.tsx'],
    component: lazy(() => import('./examples/sections/header-section/warm')),
  },
  {
    name: 'header-section-luxury-example',
    dependencies: [],
    registryDependencies: ['header-section'],
    files: ['examples/sections/header-section/luxury.tsx'],
    component: lazy(() => import('./examples/sections/header-section/luxury')),
  },
  {
    name: 'icon-block-example',
    dependencies: [],
    registryDependencies: ['icon-block'],
    files: ['examples/sections/icon-block/index.tsx'],
    component: lazy(() => import('./examples/sections/icon-block')),
  },
  {
    name: 'input-example',
    dependencies: [],
    registryDependencies: ['input'],
    files: ['examples/primitives/input/index.tsx'],
    component: lazy(() => import('./examples/primitives/input')),
  },
  {
    name: 'navigation-electric-example',
    dependencies: [],
    registryDependencies: ['navigation-electric'],
    files: ['examples/primitives/navigation/electric.tsx'],
    component: lazy(() => import('./examples/primitives/navigation/electric')),
  },
  {
    name: 'navigation-warm-example',
    dependencies: [],
    registryDependencies: ['navigation-warm'],
    files: ['examples/primitives/navigation/warm.tsx'],
    component: lazy(() => import('./examples/primitives/navigation/warm')),
  },
  {
    name: 'navigation-luxury-example',
    dependencies: [],
    registryDependencies: ['navigation-luxury'],
    files: ['examples/primitives/navigation/luxury.tsx'],
    component: lazy(() => import('./examples/primitives/navigation/luxury')),
  },
  {
    name: 'order-details-section-electric-example',
    dependencies: [],
    registryDependencies: ['order-details-section'],
    files: ['examples/sections/order-details-section/electric.tsx'],
    component: lazy(() => import('./examples/sections/order-details-section/electric')),
  },
  {
    name: 'order-list-section-electric-example',
    dependencies: [],
    registryDependencies: ['order-list-section'],
    files: ['examples/sections/order-list-section/electric.tsx'],
    component: lazy(() => import('./examples/sections/order-list-section/electric')),
  },
  {
    name: 'page-blog-example',
    dependencies: [],
    registryDependencies: ['page-blog'],
    files: ['examples/pages/blog/index.tsx'],
    component: lazy(() => import('./examples/pages/blog')),
  },
  {
    name: 'page-blog-post-electric-example',
    dependencies: [],
    registryDependencies: ['page-blog-post-electric'],
    files: ['examples/pages/blog/post/electric.tsx'],
    component: lazy(() => import('./examples/pages/blog/post/electric')),
  },
  {
    name: 'page-blog-post-warm-example',
    dependencies: [],
    registryDependencies: ['page-blog-post-warm'],
    files: ['examples/pages/blog/post/warm.tsx'],
    component: lazy(() => import('./examples/pages/blog/post/warm')),
  },
  {
    name: 'page-blog-post-luxury-example',
    dependencies: [],
    registryDependencies: ['page-blog-post-luxury'],
    files: ['examples/pages/blog/post/luxury.tsx'],
    component: lazy(() => import('./examples/pages/blog/post/luxury')),
  },
  {
    name: 'page-cart-electric-example',
    dependencies: [],
    registryDependencies: ['page-cart-electric'],
    files: ['examples/pages/cart/electric.tsx'],
    component: lazy(() => import('./examples/pages/cart/electric')),
  },
  {
    name: 'page-cart-warm-example',
    dependencies: [],
    registryDependencies: ['page-cart-warm'],
    files: ['examples/pages/cart/warm.tsx'],
    component: lazy(() => import('./examples/pages/cart/warm')),
  },
  {
    name: 'page-cart-luxury-example',
    dependencies: [],
    registryDependencies: ['page-cart-luxury'],
    files: ['examples/pages/cart/luxury.tsx'],
    component: lazy(() => import('./examples/pages/cart/luxury')),
  },
  {
    name: 'page-home-electric-example',
    dependencies: [],
    registryDependencies: ['page-home-electric'],
    files: ['examples/pages/home/electric.tsx'],
    component: lazy(() => import('./examples/pages/home/electric')),
  },
  {
    name: 'page-home-warm-example',
    dependencies: [],
    registryDependencies: ['page-home-warm'],
    files: ['examples/pages/home/warm.tsx'],
    component: lazy(() => import('./examples/pages/home/warm')),
  },
  {
    name: 'page-home-luxury-example',
    dependencies: [],
    registryDependencies: ['page-home-luxury'],
    files: ['examples/pages/home/luxury.tsx'],
    component: lazy(() => import('./examples/pages/home/luxury')),
  },
  {
    name: 'page-not-found-electric-example',
    dependencies: [],
    registryDependencies: ['page-not-found-electric'],
    files: ['examples/pages/not-found/electric.tsx'],
    component: lazy(() => import('./examples/pages/not-found/electric')),
  },
  {
    name: 'page-not-found-warm-example',
    dependencies: [],
    registryDependencies: ['page-not-found-warm'],
    files: ['examples/pages/not-found/warm.tsx'],
    component: lazy(() => import('./examples/pages/not-found/warm')),
  },
  {
    name: 'page-not-found-luxury-example',
    dependencies: [],
    registryDependencies: ['page-not-found-luxury'],
    files: ['examples/pages/not-found/luxury.tsx'],
    component: lazy(() => import('./examples/pages/not-found/luxury')),
  },
  {
    name: 'page-product-electric-example',
    dependencies: [],
    registryDependencies: ['page-product-electric'],
    files: ['examples/pages/product/electric.tsx'],
    component: lazy(() => import('./examples/pages/product/electric')),
  },
  {
    name: 'page-product-warm-example',
    dependencies: [],
    registryDependencies: ['page-product-warm'],
    files: ['examples/pages/product/warm.tsx'],
    component: lazy(() => import('./examples/pages/product/warm')),
  },
  {
    name: 'page-product-luxury-example',
    dependencies: [],
    registryDependencies: ['page-product-luxury'],
    files: ['examples/pages/product/luxury.tsx'],
    component: lazy(() => import('./examples/pages/product/luxury')),
  },
  {
    name: 'page-products-electric-example',
    dependencies: [],
    registryDependencies: ['page-products-electric'],
    files: ['examples/pages/products/electric.tsx'],
    component: lazy(() => import('./examples/pages/products/electric')),
  },
  {
    name: 'page-products-warm-example',
    dependencies: [],
    registryDependencies: ['page-products-warm'],
    files: ['examples/pages/products/warm.tsx'],
    component: lazy(() => import('./examples/pages/products/warm')),
  },
  {
    name: 'page-products-luxury-example',
    dependencies: [],
    registryDependencies: ['page-products-luxury'],
    files: ['examples/pages/products/luxury.tsx'],
    component: lazy(() => import('./examples/pages/products/luxury')),
  },
  {
    name: 'offset-pagination-example',
    dependencies: [],
    registryDependencies: ['offset-pagination'],
    files: ['examples/primitives/offset-pagination/index.tsx'],
    component: lazy(() => import('./examples/primitives/offset-pagination')),
  },
  {
    name: 'product-card-example',
    dependencies: [],
    registryDependencies: ['product-card'],
    files: ['examples/primitives/product-card/index.tsx'],
    component: lazy(() => import('./examples/primitives/product-card')),
  },
  {
    name: 'products-carousel-example',
    dependencies: [],
    registryDependencies: ['products-carousel'],
    files: ['examples/primitives/products-carousel/index.tsx'],
    component: lazy(() => import('./examples/primitives/products-carousel')),
  },
  {
    name: 'product-description-electric-example',
    dependencies: [],
    registryDependencies: ['product-description-electric'],
    files: ['examples/sections/product-description/electric.tsx'],
    component: lazy(() => import('./examples/sections/product-description/electric')),
  },
  {
    name: 'product-description-warm-example',
    dependencies: [],
    registryDependencies: ['product-description-warm'],
    files: ['examples/sections/product-description/warm.tsx'],
    component: lazy(() => import('./examples/sections/product-description/warm')),
  },
  {
    name: 'product-description-luxury-example',
    dependencies: [],
    registryDependencies: ['product-description-luxury'],
    files: ['examples/sections/product-description/luxury.tsx'],
    component: lazy(() => import('./examples/sections/product-description/luxury')),
  },
  {
    name: 'product-detail-electric-example',
    dependencies: [],
    registryDependencies: ['product-detail-electric'],
    files: ['examples/sections/product-detail/electric.tsx'],
    component: lazy(() => import('./examples/sections/product-detail/electric')),
  },
  {
    name: 'product-detail-warm-example',
    dependencies: [],
    registryDependencies: ['product-detail-warm'],
    files: ['examples/sections/product-detail/warm.tsx'],
    component: lazy(() => import('./examples/sections/product-detail/warm')),
  },
  {
    name: 'product-detail-luxury-example',
    dependencies: [],
    registryDependencies: ['product-detail-luxury'],
    files: ['examples/sections/product-detail/luxury.tsx'],
    component: lazy(() => import('./examples/sections/product-detail/luxury')),
  },
  {
    name: 'products-list-electric-example',
    dependencies: [],
    registryDependencies: ['products-list-electric'],
    files: ['examples/primitives/products-list/electric.tsx'],
    component: lazy(() => import('./examples/primitives/products-list/electric')),
  },
  {
    name: 'products-list-warm-example',
    dependencies: [],
    registryDependencies: ['products-list-warm'],
    files: ['examples/primitives/products-list/warm.tsx'],
    component: lazy(() => import('./examples/primitives/products-list/warm')),
  },
  {
    name: 'products-list-luxury-example',
    dependencies: [],
    registryDependencies: ['products-list-luxury'],
    files: ['examples/primitives/products-list/luxury.tsx'],
    component: lazy(() => import('./examples/primitives/products-list/luxury')),
  },
  {
    name: 'products-list-section-electric-example',
    dependencies: [],
    registryDependencies: ['products-list-section'],
    files: ['examples/sections/products-list-section/electric.tsx'],
    component: lazy(() => import('./examples/sections/products-list-section/electric')),
  },
  {
    name: 'products-list-section-warm-example',
    dependencies: [],
    registryDependencies: ['products-list-section'],
    files: ['examples/sections/products-list-section/warm.tsx'],
    component: lazy(() => import('./examples/sections/products-list-section/warm')),
  },
  {
    name: 'products-list-section-luxury-example',
    dependencies: [],
    registryDependencies: ['products-list-section'],
    files: ['examples/sections/products-list-section/luxury.tsx'],
    component: lazy(() => import('./examples/sections/products-list-section/luxury')),
  },

  {
    name: 'products-list-section-loading-electric-example',
    dependencies: [],
    registryDependencies: ['products-list-section'],
    files: ['examples/sections/products-list-section/electric-loading.tsx'],
    component: lazy(() => import('./examples/sections/products-list-section/electric-loading')),
  },
  {
    name: 'products-list-section-loading-warm-example',
    dependencies: [],
    registryDependencies: ['products-list-section'],
    files: ['examples/sections/products-list-section/warm-loading.tsx'],
    component: lazy(() => import('./examples/sections/products-list-section/warm-loading')),
  },
  {
    name: 'products-list-section-loading-luxury-example',
    dependencies: [],
    registryDependencies: ['products-list-section'],
    files: ['examples/sections/products-list-section/luxury-loading.tsx'],
    component: lazy(() => import('./examples/sections/products-list-section/luxury-loading')),
  },

  {
    name: 'rating-example',
    dependencies: [],
    registryDependencies: ['rating'],
    files: ['examples/primitives/rating/index.tsx'],
    component: lazy(() => import('./examples/primitives/rating')),
  },
  {
    name: 'reset-password-section-example',
    dependencies: [],
    registryDependencies: ['reset-password-section'],
    files: ['examples/sections/reset-password-section/index.tsx'],
    component: lazy(() => import('./examples/sections/reset-password-section')),
  },
  {
    name: 'reviews-example',
    dependencies: [],
    registryDependencies: ['reviews'],
    files: ['examples/sections/reviews/index.tsx'],
    component: lazy(() => import('./examples/sections/reviews')),
  },
  {
    name: 'sign-in-section-example',
    dependencies: [],
    registryDependencies: ['sign-in-section'],
    files: ['examples/sections/sign-in-section/index.tsx'],
    component: lazy(() => import('./examples/sections/sign-in-section')),
  },
  {
    name: 'sign-up-section-example',
    dependencies: [],
    registryDependencies: ['sign-up-section'],
    files: ['examples/sections/sign-up-section/index.tsx'],
    component: lazy(() => import('./examples/sections/sign-up-section')),
  },
  {
    name: 'slideshow-electric-example',
    dependencies: [],
    registryDependencies: ['slideshow-electric'],
    files: ['examples/sections/slideshow/electric.tsx'],
    component: lazy(() => import('./examples/sections/slideshow/electric')),
  },
  {
    name: 'slideshow-warm-example',
    dependencies: [],
    registryDependencies: ['slideshow-warm'],
    files: ['examples/sections/slideshow/warm.tsx'],
    component: lazy(() => import('./examples/sections/slideshow/warm')),
  },
  {
    name: 'slideshow-luxury-example',
    dependencies: [],
    registryDependencies: ['slideshow-luxury'],
    files: ['examples/sections/slideshow/luxury.tsx'],
    component: lazy(() => import('./examples/sections/slideshow/luxury')),
  },
  {
    name: 'spinner-example',
    dependencies: [],
    registryDependencies: ['spinner'],
    files: ['examples/primitives/spinner/index.tsx'],
    component: lazy(() => import('./examples/primitives/spinner')),
  },
  {
    name: 'subscribe-example',
    dependencies: [],
    registryDependencies: ['subscribe'],
    files: ['examples/sections/subscribe/index.tsx'],
    component: lazy(() => import('./examples/sections/subscribe')),
  },
  {
    name: 'textarea-example',
    dependencies: [],
    registryDependencies: ['textarea'],
    files: ['examples/primitives/textarea/index.tsx'],
    component: lazy(() => import('./examples/primitives/textarea')),
  },
] satisfies Components
