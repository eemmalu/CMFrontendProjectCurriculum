import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../components/ProductCard';
import { fetchProductById } from '../lib/products';
// TODO: Import Card components from shadcn
// TODO: Import Button and Badge components from shadcn
// TODO: Import ArrowLeft, Loader2 icons from lucide-react

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // TODO: Fetch product when component mounts or productId changes
  useEffect(() => {
    async function loadProduct() {
      if (!productId) return;

      try {
        setLoading(true);
        // TODO: Parse productId as number
        // TODO: Call fetchProductById
        // TODO: Update product state (or set error if not found)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        {/* TODO: Add Loader2 icon with animate-spin */}
        <p className="text-gray-600 mt-4">Loading product...</p>
      </div>
    );
  }

  // Error state
  if (error || !product) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg mb-4">{error || 'Product not found'}</p>
        {/* TODO: Add Button to go back */}
        <button onClick={() => navigate('/')}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      {/* TODO: Add Button with ArrowLeft icon and "Back to Products" text */}
      {/* Use variant="ghost" */}
      <button onClick={() => navigate('/')} className="mb-6">
        Back to Products
      </button>

      {/* TODO: Wrap product details in Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            {/* TODO: Use CardHeader or styled divs */}
            <div>
              {/* Category Badge */}
              {/* TODO: Use Badge with variant="outline" */}
              <span className="text-sm text-gray-600">{product.category}</span>

              {/* Product Name */}
              <h1 className="text-3xl font-bold text-gray-800 mt-2">
                {product.name}
              </h1>

              {/* Price */}
              <p className="text-2xl font-bold text-gray-800 mt-4">
                ${product.price.toFixed(2)}
              </p>

              {/* Stock Status */}
              {/* TODO: Use Badge component */}
              <div className="mt-2">
                <span className={product.inStock ? 'text-green-600' : 'text-gray-400'}>
                  {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Description
              </h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Add to Cart Button (placeholder) */}
            {/* TODO: Use shadcn Button component */}
            <button
              disabled={!product.inStock}
              className="w-full bg-blue-600 text-white py-3 rounded-md disabled:opacity-50"
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
