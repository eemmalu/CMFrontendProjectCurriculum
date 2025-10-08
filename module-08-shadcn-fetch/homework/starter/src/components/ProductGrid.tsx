import ProductCard, { Product } from './ProductCard';

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No products found</p>
        <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    // TODO: Add responsive grid classes
    // Mobile: 1 column, Tablet: 2 columns, Desktop: 3-4 columns
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
