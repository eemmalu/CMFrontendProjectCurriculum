# Exercise 2: Fetch Practice

## Objective
Practice fetching data from a public API and displaying it in a React component using cards.

## Difficulty
⭐⭐ (Medium)

## Estimated Time
40-50 minutes

## Learning Goals
- Use the Fetch API to retrieve data
- Handle async operations with async/await
- Parse JSON responses
- Map over arrays to render components
- Display fetched data in shadcn Card components

---

## Instructions

### Step 1: Understand the API

You'll be fetching posts from JSONPlaceholder, a free fake API for testing:

**API Endpoint:** `https://jsonplaceholder.typicode.com/posts`

**Response format:**
```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "Post title",
    "body": "Post content..."
  },
  ...
]
```

### Step 2: Set Up State

Create state to store:
- `posts`: Array of post objects
- Initial value should be an empty array

### Step 3: Fetch Data in useEffect

When the component mounts:
1. Create an async function inside useEffect
2. Fetch posts from the API
3. Parse the JSON response
4. Update state with the posts
5. Handle errors with try/catch

### Step 4: Display Posts

Map over the posts array and display each post in a Card component:
- Use CardHeader for the title
- Use CardContent for the body
- Show only the first 10 posts

---

## Starter Code

Navigate to `module-08-shadcn-fetch/exercises/02-fetch-practice/starter/` and complete the `PostList` component.

### File: `src/App.tsx`

```tsx
import PostList from './components/PostList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
```

### File: `src/components/PostList.tsx`

Complete the TODOs in this file.

---

## Expected Outcome

When complete, you should have:
- ✅ A list of 10 blog posts
- ✅ Each post displayed in a Card
- ✅ Post title in CardHeader
- ✅ Post body in CardContent
- ✅ Posts load when the page loads
- ✅ Console shows any errors that occur

---

## Testing Your Work

1. Run the dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5173 in your browser

3. Verify:
   - 10 posts are displayed
   - Each post has a title and body
   - Cards are styled correctly
   - Data loads automatically when page loads

---

## Bonus Challenges

If you finish early:

1. **Show user info:** Fetch the user who wrote each post and display their name
   - Endpoint: `https://jsonplaceholder.typicode.com/users/${userId}`
   - Display as a badge below the post title

2. **Add pagination:** Show only 5 posts at a time with "Load More" button

3. **Add a loading state:** Show "Loading posts..." before data arrives

4. **Error handling:** Display an error message if the fetch fails

---

## What You're Learning

This exercise teaches you:
- How to fetch data from an external API
- How to use async/await in React
- How to use useEffect for data fetching
- How to render arrays of data
- How to work with JSON responses

---

## Common Issues

**Issue:** Posts don't appear

**Solution:** Check the browser console for errors. Make sure:
- The API URL is correct
- You're calling the fetch inside useEffect
- You're updating state with the fetched data

---

**Issue:** "Cannot read property 'map' of undefined"

**Solution:** Initialize `posts` state as an empty array: `useState([])`

---

**Issue:** Page keeps refreshing/infinite loop

**Solution:** Make sure useEffect has an empty dependency array: `useEffect(() => { ... }, [])`

---

## Helpful Code Snippets

### Fetching with async/await:
```tsx
useEffect(() => {
  async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data);
  }

  fetchPosts();
}, []);
```

### Mapping over posts:
```tsx
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
```

---

## Next Steps

After completing this exercise:
1. ✅ Try fetching from different endpoints (users, comments)
2. ✅ Experiment with error handling
3. ✅ Move on to Exercise 3: Loading States
