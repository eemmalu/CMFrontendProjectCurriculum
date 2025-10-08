import { Link } from 'react-router-dom';
// TODO: Import Button component from shadcn

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <p className="text-gray-500 mb-8">
        The page you're looking for doesn't exist.
      </p>

      {/* TODO: Replace with shadcn Button */}
      {/* Wrap Link in Button using asChild prop */}
      <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-md">
        Go to Products
      </Link>
    </div>
  );
}
