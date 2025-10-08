import { Product } from '../components/ProductCard';

/**
 * Fetches products from the local mock data file
 * Simulates network delay for realistic loading states
 */
export async function fetchProducts(): Promise<Product[]> {
  // TODO: Simulate network delay (500ms)
  await new Promise(resolve => setTimeout(resolve, 500));

  try {
    // TODO: Fetch from '/module-08-shadcn-fetch/mock-data/products.json'
    // TODO: Parse and return JSON

    // Placeholder - replace with actual fetch
    return [];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw new Error('Failed to load products');
  }
}

/**
 * Finds a single product by ID
 */
export async function fetchProductById(id: number): Promise<Product | undefined> {
  const products = await fetchProducts();
  return products.find(p => p.id === id);
}

/**
 * Gets all unique categories from products
 */
export async function fetchCategories(): Promise<string[]> {
  const products = await fetchProducts();
  const categories = new Set(products.map(p => p.category));
  return ['All', ...Array.from(categories)];
}
