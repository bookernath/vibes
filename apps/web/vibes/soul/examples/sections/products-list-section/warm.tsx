import { getBreadcrumbs, getFilters, getProducts, getSortOptions } from '@/vibes/soul/data';
import { ProductsListSection } from '@/vibes/soul/sections/products-list-section';

import { cache, compareParamName, sortParamName } from './searchParams';

export default async function Preview({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[]>>;
}) {
  const parsedParams = cache.parse(await searchParams);
  const { [compareParamName]: compare, [sortParamName]: sort, ...filterParams } = parsedParams;

  const filters = getFilters('Warm');
  const sortOptions = getSortOptions();
  const breadcrumbs = getBreadcrumbs('Warm');

  const productsList = {
    title: 'Handle Bags',
    products: getProducts('Warm', filterParams),
    emptyStateSubtitle: 'Change your filters to see more products',
    emptyStateTitle: 'No products found',
  };

  return (
    <div className="p-6">
      <ProductsListSection
        breadcrumbs={breadcrumbs}
        compareParamName={compareParamName}
        compareProducts={productsList.products.then((products) =>
          products.filter((product) => compare?.includes(product.id)),
        )}
        emptyStateSubtitle={productsList.emptyStateSubtitle}
        emptyStateTitle={productsList.emptyStateTitle}
        filters={filters}
        paginationInfo={{ startCursor: '1', endCursor: '10' }}
        products={productsList.products}
        sortOptions={sortOptions}
        sortParamName={sortParamName}
        title={productsList.title}
        totalCount={productsList.products.then((products) => products.length)}
      />
    </div>
  );
}
