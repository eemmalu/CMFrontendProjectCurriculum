// TODO: Import Link from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold text-gray-800">My Blog</h1>

          {/* TODO: Add Link to home page */}
          {/* Use Link component with to="/" */}
          <a href="/">Home</a>
        </div>
      </div>
    </nav>
  );
}
