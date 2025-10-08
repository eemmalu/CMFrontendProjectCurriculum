import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ProductGrid from '../components/ProductGrid';
import { Product } from '../components/ProductCard';
import { fetchProducts } from '../lib/products';
// TODO: Import Button component from shadcn
// TODO: Import Loader2 icon from lucide-react

export default function Home() {
  // State
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // TODO: Fetch products on component mount
  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        // TODO: Call fetchProducts()
        // TODO: Update products state
        // TODO: Clear error
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // TODO: Filter products based on search query and selected category
  const filteredProducts = products.filter(product => {
    // TODO: Check if product name includes search query (case-insensitive)
    const matchesSearch = true; // Replace with actual logic

    // TODO: Check if product category matches selected category (or "All")
    const matchesCategory = true; // Replace with actual logic

    return matchesSearch && matchesCategory;
  });

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        {/* TODO: Add Loader2 icon with animate-spin class */}
        <p className="text-gray-600 mt-4">Loading products...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg mb-4">{error}</p>
        {/* TODO: Add Button to retry */}
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <p className="text-gray-600 mt-1">Browse our collection of products</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            // TODO: Replace with shadcn Button component
            // Use variant="default" for selected, variant="outline" for others
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white'}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredProducts.length} of {products.length} products
      </div>

      {/* Product Grid */}
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
