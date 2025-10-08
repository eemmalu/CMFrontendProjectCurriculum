# Lesson 3: Async Data in React

## Fetching Data in React Components

Now that you know how to use the Fetch API, let's learn how to fetch data inside React components and display it in the UI.

The key to fetching data in React is the **useEffect hook** (which you learned in Module 6).

---

## Basic Pattern: Fetching Data with useEffect

Here's the standard pattern for fetching data in a React component:

```tsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []); // Empty dependency array = run once on mount

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Why useEffect?

- **Component mounts** → useEffect runs → Fetch data → Update state → Component re-renders with data
- Without useEffect, you'd fetch data on every render (infinite loop!)

---

## The Three States of Async Data

When fetching data, your component can be in one of three states:

1. **Loading:** Waiting for the data to arrive
2. **Success:** Data arrived successfully
3. **Error:** Something went wrong

You need to handle **all three states** in your UI!

### Example: Handling All Three States

```tsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // Loading state
  if (loading) {
    return <div>Loading users...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Success state
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Better Loading States with shadcn/ui

Instead of plain text, use shadcn components for better UX:

```tsx
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // Loading state with spinner
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Error state with styled card
  if (error) {
    return (
      <Card className="border-red-500">
        <CardHeader>
          <CardTitle className="text-red-500">Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{error}</p>
        </CardContent>
      </Card>
    );
  }

  // Success state
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>
      {users.map(user => (
        <Card key={user.id}>
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{user.email}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

---

## Empty State

Sometimes the data is successfully fetched, but it's an empty array. You should handle this too!

```tsx
// After checking loading and error...

// Empty state
if (users.length === 0) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center p-8">
        <p className="text-gray-600">No users found</p>
      </CardContent>
    </Card>
  );
}

// Success state with data
return (
  <div className="space-y-4">
    {users.map(user => (
      <Card key={user.id}>
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
      </Card>
    ))}
  </div>
);
```

---

## Fetching Data Based on Props or State

Sometimes you need to re-fetch data when something changes (like a user ID or search query).

### Example: Fetch User by ID

```tsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }

    fetchUser();
  }, [userId]); // Re-run when userId changes!

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

**Important:** Add `userId` to the dependency array so the effect runs again when the ID changes.

---

## Creating a Reusable Fetch Hook

You'll fetch data in many components. Let's make a reusable hook!

```tsx
// hooks/useFetch.ts
import { useState, useEffect } from 'react';

export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}
```

### Using the Custom Hook

```tsx
import { useFetch } from './hooks/useFetch';

function UserList() {
  const { data: users, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

Much cleaner!

---

## Common Pitfalls

### ❌ Forgetting the Dependency Array
**Problem:** Infinite loop - fetches on every render
```tsx
useEffect(() => {
  fetchData();
}); // No dependency array!
```

**Solution:** Add empty array `[]` to run once, or include dependencies
```tsx
useEffect(() => {
  fetchData();
}, []); // Runs once on mount
```

### ❌ Not Handling All States
**Problem:** Blank screen while loading, no error message on failure

**Solution:** Always handle loading, error, and success states

### ❌ Setting State After Unmount
**Problem:** Component unmounts before fetch completes → React warning

**Solution:** Use cleanup function
```tsx
useEffect(() => {
  let cancelled = false;

  async function fetchData() {
    const data = await fetch(url);
    if (!cancelled) {
      setData(data);
    }
  }

  fetchData();

  return () => {
    cancelled = true;
  };
}, []);
```

### ❌ Fetching in the Render Function
**Problem:**
```tsx
function Component() {
  const data = fetch(url); // Wrong!
  return <div>{data}</div>;
}
```

**Solution:** Always fetch in useEffect
```tsx
function Component() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, []);

  return <div>{data}</div>;
}
```

---

## Practice Questions

1. **Why do we fetch data inside useEffect instead of directly in the component body?**
   <details>
   <summary>Answer</summary>
   Fetching in the component body would run on every render, causing infinite loops. useEffect with an empty dependency array runs only once when the component mounts.
   </details>

2. **What are the three states you should handle when fetching data?**
   <details>
   <summary>Answer</summary>
   Loading, error, and success (data received)
   </details>

3. **When should you add values to the useEffect dependency array?**
   <details>
   <summary>Answer</summary>
   When you want the effect to re-run if those values change (like a user ID or search query)
   </details>

---

## Hands-On Activity

### Task: Build a Post Viewer

Create a component that:
1. Fetches posts from `https://jsonplaceholder.typicode.com/posts`
2. Shows a loading spinner while fetching
3. Displays posts in Card components
4. Shows an error message if fetch fails
5. Shows "No posts found" if the array is empty

```tsx
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Fetch posts and handle all three states
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <div className="space-y-4">
      {posts.slice(0, 10).map(post => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

---

## Key Takeaways

✅ Use useEffect to fetch data when component mounts
✅ Always handle loading, error, and success states
✅ Use empty dependency array `[]` to fetch once
✅ Add dependencies when you need to re-fetch on changes
✅ Create custom hooks to reuse fetch logic
✅ Show user-friendly loading and error states
✅ Don't forget to handle empty data arrays

**Next Lesson:** React Router for multi-page applications
