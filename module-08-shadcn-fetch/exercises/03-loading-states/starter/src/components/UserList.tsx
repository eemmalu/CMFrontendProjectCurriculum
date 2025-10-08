import { useState, useEffect } from 'react';
// TODO: Import Card components
// TODO: Import Button component
// TODO: Import Loader2 icon from 'lucide-react'

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export default function UserList() {
  // TODO: Create state for users, loading, and error
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // TODO: Create a fetchUsers function
  async function fetchUsers() {
    try {
      // TODO: Set loading to true
      // TODO: Fetch from 'https://jsonplaceholder.typicode.com/users'
      // TODO: Check if response is ok, if not throw an error
      // TODO: Parse JSON
      // TODO: Update users state
      // TODO: Clear error state
    } catch (err) {
      // TODO: Set error state with error message
      // TODO: Clear users array
    } finally {
      // TODO: Set loading to false
    }
  }

  // TODO: Use useEffect to call fetchUsers when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // TODO: Handle loading state
  // Show a centered div with Loader2 icon (animate-spin) and "Loading users..." text
  if (loading) {
    return <div>Loading...</div>;
  }

  // TODO: Handle error state
  // Show a Card with red border, error message, and "Try Again" button
  if (error) {
    return <div>Error: {error}</div>;
  }

  // TODO: Handle empty state
  // Show a Card with "No users found" message
  if (users.length === 0) {
    return <div>No users found</div>;
  }

  // TODO: Handle success state
  // Map over users and display each in a Card
  // Show: name (as title), email, phone, website
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* TODO: Map over users and render Card for each */}
      <p>Users will appear here...</p>
    </div>
  );
}
