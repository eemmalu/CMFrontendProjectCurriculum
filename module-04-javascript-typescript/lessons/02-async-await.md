# Lesson 2: Async/Await

## Why Async?

Some operations take time (fetching data, reading files). We need to handle them without freezing the browser.

## Promises

A Promise represents a value that will be available in the future:

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data loaded!');
  }, 1000);
});

promise.then(data => {
  console.log(data); // 'Data loaded!' (after 1 second)
});
```

## Async/Await

Cleaner syntax for working with Promises:

```javascript
// Fetch data from an API
async function getUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Use the function
getUserData().then(data => {
  console.log(data);
});
```

## Common Patterns

### Fetching Data

```javascript
async function loadPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts;
}
```

### Multiple Async Operations

```javascript
async function loadMultiple() {
  // Sequential (one after another)
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);

  // Parallel (at the same time)
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);
}
```

### Error Handling

```javascript
async function safeLoad() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error('Failed to load:', error);
    return null;
  }
}
```

## Key Points

- `async` functions always return a Promise
- `await` pauses execution until Promise resolves
- Always use try/catch for error handling
- Use `Promise.all()` for parallel operations

Async/await makes asynchronous code look synchronous and easier to read!
