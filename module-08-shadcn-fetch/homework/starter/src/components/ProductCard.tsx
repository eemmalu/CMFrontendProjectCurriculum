import { Link } from 'react-router-dom';
// TODO: Import Card components from shadcn
// TODO: Import Badge component from shadcn

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  imageUrl: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    // TODO: Wrap in Card component
    <div className="overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <Link to={`/products/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </Link>

      {/* TODO: Use CardHeader */}
      <div className="p-4">
        {/* TODO: Use CardTitle */}
        <Link to={`/products/${product.id}`} className="hover:text-blue-600">
          <h3 className="text-lg font-semibold">{product.name}</h3>
        </Link>

        {/* TODO: Use CardDescription or paragraph */}
        <p className="text-sm text-gray-600 mt-1">
          {product.description.substring(0, 80)}...
        </p>
      </div>

      {/* TODO: Use CardContent */}
      <div className="p-4 pt-0">
        <div className="flex items-center justify-between">
          {/* Price */}
          <span className="text-xl font-bold text-gray-800">
            ${product.price.toFixed(2)}
          </span>

          {/* Stock Status Badge */}
          {/* TODO: Use Badge component */}
          {/* Use variant="default" for in stock, variant="secondary" for out of stock */}
          <span className={product.inStock ? 'text-green-600' : 'text-gray-400'}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* Category */}
        <div className="mt-2">
          {/* TODO: Use Badge with variant="outline" */}
          <span className="text-xs text-gray-600">{product.category}</span>
        </div>
      </div>
    </div>
  );
}
