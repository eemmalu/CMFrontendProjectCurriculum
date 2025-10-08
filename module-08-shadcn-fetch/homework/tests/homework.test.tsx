/**
 * Module 8 Homework Tests
 * Product Search Application
 *
 * NOTE: These tests require Jest to be properly configured to handle
 * React components and TypeScript/JSX. Currently there is a known
 * configuration issue that will be fixed after Module 8 is complete.
 */

import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// Import components
import App from '../starter/src/App';
import Home from '../starter/src/pages/Home';
import ProductDetail from '../starter/src/pages/ProductDetail';
import ProductCard from '../starter/src/components/ProductCard';
import SearchBar from '../starter/src/components/SearchBar';

// Mock fetch globally
global.fetch = jest.fn();

// Helper function to wrap components with Router
function renderWithRouter(component: React.ReactElement) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

describe('Module 8 Homework: Product Search Application', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    (global.fetch as jest.Mock).mockReset();
  });

  describe('Home Page', () => {
    test('should display loading state initially', () => {
      renderWithRouter(<Home />);
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test('should fetch and display products', async () => {
      const mockProducts = [
        {
          id: 1,
          name: 'Test Product 1',
          description: 'Test description 1',
          price: 29.99,
          category: 'Electronics',
          inStock: true,
          imageUrl: 'https://via.placeholder.com/300',
        },
        {
          id: 2,
          name: 'Test Product 2',
          description: 'Test description 2',
          price: 49.99,
          category: 'Clothing',
          inStock: false,
          imageUrl: 'https://via.placeholder.com/300',
        },
      ];

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByText('Test Product 1')).toBeInTheDocument();
        expect(screen.getByText('Test Product 2')).toBeInTheDocument();
      });
    });

    test('should display error state on fetch failure', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByText(/error|failed/i)).toBeInTheDocument();
      });
    });

    test('should have a search input', async () => {
      renderWithRouter(<Home />);

      await waitFor(() => {
        const searchInput = screen.getByPlaceholderText(/search/i);
        expect(searchInput).toBeInTheDocument();
      });
    });

    test('should have category filter buttons', async () => {
      const mockProducts = [
        {
          id: 1,
          name: 'Electronics Item',
          description: 'Test',
          price: 99,
          category: 'Electronics',
          inStock: true,
          imageUrl: 'https://via.placeholder.com/300',
        },
      ];

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Electronics')).toBeInTheDocument();
      });
    });
  });

  describe('Search Functionality', () => {
    test('SearchBar should update value on input', () => {
      const mockOnChange = jest.fn();
      render(<SearchBar value="" onChange={mockOnChange} />);

      const input = screen.getByPlaceholderText(/search/i);
      fireEvent.change(input, { target: { value: 'laptop' } });

      expect(mockOnChange).toHaveBeenCalledWith('laptop');
    });

    test('should filter products by search query', async () => {
      const mockProducts = [
        {
          id: 1,
          name: 'Laptop Computer',
          description: 'High performance laptop',
          price: 999,
          category: 'Electronics',
          inStock: true,
          imageUrl: 'https://via.placeholder.com/300',
        },
        {
          id: 2,
          name: 'T-Shirt',
          description: 'Cotton t-shirt',
          price: 20,
          category: 'Clothing',
          inStock: true,
          imageUrl: 'https://via.placeholder.com/300',
        },
      ];

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockProducts,
      });

      renderWithRouter(<Home />);

      await waitFor(() => {
        expect(screen.getByText('Laptop Computer')).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText(/search/i);
      fireEvent.change(searchInput, { target: { value: 'laptop' } });

      await waitFor(() => {
        expect(screen.getByText('Laptop Computer')).toBeInTheDocument();
        expect(screen.queryByText('T-Shirt')).not.toBeInTheDocument();
      });
    });
  });

  describe('ProductCard Component', () => {
    test('should display product information', () => {
      const mockProduct = {
        id: 1,
        name: 'Test Product',
        description: 'This is a test product with a long description',
        price: 49.99,
        category: 'Electronics',
        inStock: true,
        imageUrl: 'https://via.placeholder.com/300',
      };

      renderWithRouter(<ProductCard product={mockProduct} />);

      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText(/\$49\.99/)).toBeInTheDocument();
      expect(screen.getByText('Electronics')).toBeInTheDocument();
      expect(screen.getByText(/in stock/i)).toBeInTheDocument();
    });

    test('should display "Out of Stock" for unavailable products', () => {
      const mockProduct = {
        id: 1,
        name: 'Unavailable Product',
        description: 'Test',
        price: 29.99,
        category: 'Electronics',
        inStock: false,
        imageUrl: 'https://via.placeholder.com/300',
      };

      renderWithRouter(<ProductCard product={mockProduct} />);

      expect(screen.getByText(/out of stock/i)).toBeInTheDocument();
    });

    test('should link to product detail page', () => {
      const mockProduct = {
        id: 123,
        name: 'Test Product',
        description: 'Test',
        price: 29.99,
        category: 'Electronics',
        inStock: true,
        imageUrl: 'https://via.placeholder.com/300',
      };

      renderWithRouter(<ProductCard product={mockProduct} />);

      const links = screen.getAllByRole('link');
      expect(links[0]).toHaveAttribute('href', '/products/123');
    });
  });

  describe('Product Detail Page', () => {
    test('should display loading state initially', () => {
      renderWithRouter(<ProductDetail />);
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test('should display product details', async () => {
      const mockProduct = {
        id: 1,
        name: 'Detailed Product',
        description: 'This is a detailed product description',
        price: 99.99,
        category: 'Electronics',
        inStock: true,
        imageUrl: 'https://via.placeholder.com/300',
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => [mockProduct],
      });

      renderWithRouter(<ProductDetail />);

      await waitFor(() => {
        expect(screen.getByText('Detailed Product')).toBeInTheDocument();
        expect(screen.getByText(/\$99\.99/)).toBeInTheDocument();
        expect(screen.getByText('This is a detailed product description')).toBeInTheDocument();
      });
    });

    test('should have a back button', async () => {
      renderWithRouter(<ProductDetail />);

      await waitFor(() => {
        expect(screen.getByText(/back/i)).toBeInTheDocument();
      });
    });
  });

  describe('Routing', () => {
    test('should render App component with routes', () => {
      renderWithRouter(<App />);
      expect(screen.getByText(/product store/i)).toBeInTheDocument();
    });
  });

  describe('TypeScript Types', () => {
    test('Product type should be properly defined', () => {
      const product = {
        id: 1,
        name: 'Test',
        description: 'Test description',
        price: 29.99,
        category: 'Electronics',
        inStock: true,
        imageUrl: 'https://via.placeholder.com/300',
      };

      // If this compiles, the type is correct
      renderWithRouter(<ProductCard product={product} />);
      expect(screen.getByText('Test')).toBeInTheDocument();
    });
  });
});
