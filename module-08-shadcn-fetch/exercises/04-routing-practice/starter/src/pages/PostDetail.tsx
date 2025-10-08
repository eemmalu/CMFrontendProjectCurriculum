import { useState, useEffect } from 'react';
// TODO: Import useParams and useNavigate from 'react-router-dom'
// TODO: Import Card components
// TODO: Import Button component
// TODO: Import Loader2 and ArrowLeft icons

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function PostDetail() {
  // TODO: Get postId from URL using useParams
  // const { postId } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // TODO: Get navigate function for "Back" button
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        // TODO: Fetch post from `https://jsonplaceholder.typicode.com/posts/${postId}`
        // TODO: Check if response is ok
        // TODO: Parse JSON
        // TODO: Update post state
      } catch (err) {
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    }

    // TODO: Call fetchPost (only if postId exists)
  }, []); // TODO: Add postId to dependency array

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        {/* TODO: Add Loader2 icon with animate-spin */}
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center p-12">
        <p className="text-red-500 mb-4">{error || 'Post not found'}</p>
        {/* TODO: Add Button to go back home */}
      </div>
    );
  }

  return (
    <div>
      {/* TODO: Add "Back to Home" button with ArrowLeft icon */}
      {/* Use navigate(-1) or navigate('/') */}

      {/* TODO: Display post in a Card */}
      {/* - CardHeader with CardTitle (post.title) */}
      {/* - CardContent with post.body */}
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
