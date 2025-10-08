import { useState, useEffect } from 'react';
// TODO: Import Link from 'react-router-dom'
// TODO: Import Card components
// TODO: Import Loader2 icon

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // TODO: Fetch posts from 'https://jsonplaceholder.typicode.com/posts'
        // TODO: Parse JSON
        // TODO: Update posts state
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        {/* TODO: Add Loader2 icon with animate-spin */}
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      <div className="grid gap-4">
        {/* TODO: Map over first 10 posts */}
        {/* For each post, render a Card with: */}
        {/* - Link to `/posts/${post.id}` wrapping the title */}
        {/* - CardHeader with CardTitle (the linked title) */}
        {/* - CardContent with truncated body (first 100 chars) */}
        <p>Posts will appear here...</p>
      </div>
    </div>
  );
}
