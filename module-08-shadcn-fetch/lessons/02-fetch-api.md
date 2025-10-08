# Lesson 2: Fetch API

## What is the Fetch API?

The **Fetch API** is a built-in JavaScript feature that lets you make HTTP requests to servers and APIs. It's how web applications get data from external sources.

Think of it like this: When you visit a website like Instagram, your browser uses Fetch (or similar technology) to request your posts, friends' photos, comments, etc. from Instagram's servers.

### Why Do We Need Fetch?

- 📊 Get data from APIs (weather data, user info, products, etc.)
- 💾 Send data to servers (saving user preferences, posting comments)
- 🔄 Update data (editing a profile, updating a shopping cart)
- 🗑️ Delete data (removing a post, deleting an account)

---

## Basic Fetch Syntax

The simplest fetch request looks like this:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

Let's break this down step by step.

---

## Understanding Promises

Before we dive deeper into Fetch, you need to understand **Promises**.

A **Promise** is JavaScript's way of handling operations that take time (like network requests). It represents a value that will be available in the future.

### Promise States

A Promise can be in one of three states:
1. **Pending:** The operation is still in progress
2. **Fulfilled:** The operation completed successfully
3. **Rejected:** The operation failed

### Promise Example

```javascript
// This returns a Promise
const promise = fetch('https://api.example.com/data');

// The Promise will eventually resolve with a response
promise.then(response => {
  console.log('Got response:', response);
});
```

---

## Fetch Step-by-Step

### Step 1: Make the Request

```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
```

This starts the HTTP request. The URL points to the data you want.

### Step 2: Get the Response

```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    console.log('Response:', response);
    return response.json(); // Parse JSON
  })
```

The first `.then()` receives the **response object**. This contains:
- `status`: HTTP status code (200, 404, 500, etc.)
- `ok`: Boolean - true if status is 200-299
- `headers`: Response headers
- `json()`: Method to parse response as JSON

### Step 3: Use the Data

```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => {
    console.log('User data:', data);
    // data is now a JavaScript object
    console.log('Name:', data.name);
    console.log('Email:', data.email);
  });
```

The second `.then()` receives the **parsed data** as a JavaScript object.

---

## Full Example: Fetching User Data

```javascript
// Fetch a single user
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(user => {
    console.log('User:', user);
    console.log('Name:', user.name);
    console.log('Email:', user.email);
    console.log('City:', user.address.city);
  });

// Fetch all users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log('All users:', users);
    // users is an array
    users.forEach(user => {
      console.log(user.name);
    });
  });
```

---

## Error Handling

What happens if the request fails? You need to handle errors!

### Using `.catch()`

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Checking Response Status

Even if the request completes, the server might return an error (like 404 or 500):

```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Something went wrong:', error);
  });
```

---

## Async/Await (Modern Approach)

The `.then()` syntax can get messy. Modern JavaScript has a cleaner way: **async/await**.

### Converting to Async/Await

**Old way (promises):**
```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

**New way (async/await):**
```javascript
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getUser();
```

### Why Async/Await is Better

- ✅ Easier to read (looks like normal code)
- ✅ Easier to debug
- ✅ Better error handling with try/catch
- ✅ Can use normal control flow (if, loops, etc.)

---

## Fetch with Different HTTP Methods

So far, we've only done **GET** requests (reading data). There are other methods:

| Method | Purpose | Example |
|--------|---------|---------|
| GET | Read data | Get a list of products |
| POST | Create data | Create a new user account |
| PUT | Update data | Update a user's profile |
| DELETE | Delete data | Delete a post |

### POST Example (Creating Data)

```javascript
async function createUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Alex Johnson',
        email: 'alex@example.com',
      }),
    });

    const data = await response.json();
    console.log('Created user:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

createUser();
```

### PUT Example (Updating Data)

```javascript
async function updateUser(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Updated Name',
        email: 'newemail@example.com',
      }),
    });

    const data = await response.json();
    console.log('Updated user:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

updateUser(1);
```

### DELETE Example (Deleting Data)

```javascript
async function deleteUser(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('User deleted successfully');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

deleteUser(1);
```

---

## Common Pitfalls

### ❌ Forgetting to Parse JSON
**Problem:**
```javascript
const data = await fetch('https://api.example.com/data');
console.log(data.name); // undefined
```

**Solution:** Always call `.json()`:
```javascript
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data.name); // Works!
```

### ❌ Not Handling Errors
**Problem:** The app crashes when the network is offline

**Solution:** Always use try/catch:
```javascript
try {
  const response = await fetch(url);
  const data = await response.json();
} catch (error) {
  console.error('Failed to fetch:', error);
}
```

### ❌ Forgetting `await`
**Problem:**
```javascript
const data = fetch(url).json(); // Returns a Promise, not data!
```

**Solution:**
```javascript
const response = await fetch(url);
const data = await response.json();
```

---

## Practice Questions

1. **What does the Fetch API do?**
   <details>
   <summary>Answer</summary>
   It makes HTTP requests to servers and APIs to get or send data.
   </details>

2. **What are the two most common steps when using fetch?**
   <details>
   <summary>Answer</summary>
   1. Call `fetch(url)` to make the request
   2. Call `.json()` on the response to parse the data
   </details>

3. **Why should you use try/catch with async/await?**
   <details>
   <summary>Answer</summary>
   To handle errors that might occur during the network request (like network failures or server errors).
   </details>

4. **What's the difference between GET and POST requests?**
   <details>
   <summary>Answer</summary>
   GET reads/retrieves data from the server. POST creates/sends new data to the server.
   </details>

---

## Hands-On Activity

### Task: Fetch and Display Posts

Use the JSONPlaceholder API to fetch and log posts:

```javascript
async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Log the first 5 posts
    posts.slice(0, 5).forEach(post => {
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

getPosts();
```

**Challenge:** Modify this to fetch only posts by user ID 1:
- Hint: Use the URL `https://jsonplaceholder.typicode.com/posts?userId=1`

---

## Useful Free APIs for Practice

- **JSONPlaceholder:** https://jsonplaceholder.typicode.com/ (users, posts, comments)
- **Dog API:** https://dog.ceo/api/breeds/image/random (random dog images)
- **Advice API:** https://api.adviceslip.com/advice (random advice)
- **Chuck Norris Jokes:** https://api.chucknorris.io/jokes/random

---

## Key Takeaways

✅ Fetch is used to make HTTP requests to APIs
✅ Always parse JSON with `.json()`
✅ Use async/await for cleaner code
✅ Always handle errors with try/catch
✅ Check `response.ok` before parsing
✅ Different HTTP methods: GET (read), POST (create), PUT (update), DELETE (delete)

**Next Lesson:** Using Fetch in React components with useEffect
