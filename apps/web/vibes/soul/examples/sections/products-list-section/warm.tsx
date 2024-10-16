import { getBreadcrumbs, getFilters, getProducts, getSortOptions } from '@/vibes/soul/data'
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section'

export default function Preview({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] }
}) {
  const products = getProducts('warm')
  const filters = getFilters('warm')
  const sortOptions = getSortOptions()
  const breadcrumbs = getBreadcrumbs('warm')

  return (
    <div className="py-6">
      <ProductsListSection
        title="Handle Bags"
        breadcrumbs={breadcrumbs}
        products={products}
        totalCount={products.length}
        filters={filters}
        sortOptions={sortOptions}
        pagination={{ name: 'page', previousPage: '2', nextPage: '3' }}
        compareProducts={
          Array.isArray(searchParams.compare)
            ? products.filter(product => searchParams.compare.includes(product.id))
            : typeof searchParams.compare === 'string'
              ? products.filter(product => product.id === searchParams.compare)
              : []
        }
      />
    </div>
  )
}
