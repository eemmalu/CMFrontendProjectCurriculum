import { useState, useEffect } from 'react';
// TODO: Import Card components from '@/components/ui/card'

// TODO: Define the Post type
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function PostList() {
  // TODO: Create state for posts (array of Post objects)
  const [posts, setPosts] = useState<Post[]>([]);

  // TODO: Use useEffect to fetch posts when component mounts
  useEffect(() => {
    // TODO: Create an async function to fetch posts
    async function fetchPosts() {
      // TODO: Fetch from 'https://jsonplaceholder.typicode.com/posts'
      // TODO: Parse the JSON response
      // TODO: Update posts state with the data
    }

    // TODO: Call the fetch function
  }, []); // Empty array means run once on mount

  return (
    <div className="space-y-4">
      {/* TODO: Map over posts array (first 10 only) */}
      {/* TODO: For each post, render a Card with:
           - key={post.id}
           - CardHeader with CardTitle showing post.title
           - CardContent with paragraph showing post.body
      */}
      <p>Posts will appear here...</p>
    </div>
  );
}
