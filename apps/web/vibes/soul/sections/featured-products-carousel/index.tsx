import Link from 'next/link'

import { CarouselProduct, ProductsCarousel } from '@/vibes/soul/primitives/products-carousel'

interface Link {
  label: string
  href: string
}

interface Props {
  title: string
  description?: string
  cta?: Link
  products: CarouselProduct[]
}

export function FeaturedProductsCarousel({ title, description, cta, products }: Props) {
  return (
    <section className="overflow-hidden @container">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
        <div className="mb-6 flex w-full flex-row flex-wrap justify-between gap-x-8 text-foreground @4xl:mb-8 @4xl:items-end">
          <div className="flex-1">
            <h2 className="font-heading text-2xl font-medium leading-none @xl:text-3xl @4xl:text-4xl">
              {title}
            </h2>
            {description != null && description !== '' && (
              <p className="mt-3 max-w-xl text-contrast-500">{description}</p>
            )}
          </div>
          {cta != null && cta.href !== '' && cta.label !== '' && (
            <Link
              href={cta.href}
              className="mr-3 rounded-lg font-semibold text-foreground ring-primary focus-visible:outline-0 focus-visible:ring-2"
            >
              {cta.label}
            </Link>
          )}
        </div>
        <ProductsCarousel products={products} />
      </div>
    </section>
  )
}
