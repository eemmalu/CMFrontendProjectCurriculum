import { Link } from 'react-router-dom';
// TODO: Import ShoppingBag icon from lucide-react

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
            {/* TODO: Add ShoppingBag icon */}
            Product Store
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
