# Exercise 2: Async Practice

**Difficulty:** ⭐⭐ Medium
**Estimated Time:** 30-45 minutes
**Skills:** Async/await, Promises, API calls, error handling

## Objective

Practice asynchronous JavaScript by fetching data from a real API using async/await.

## Instructions

1. Open `index.html` in a browser
2. Open `script.js` and complete the TODOs
3. Implement functions to fetch users and posts from JSONPlaceholder API
4. Click the buttons to test your implementations

## What You'll Practice

### Async/Await
- Use `async` keyword to create async functions
- Use `await` to pause execution until Promise resolves
- Understand Promise-based code flow

### Fetching Data
- Use the Fetch API to get data from external sources
- Convert responses to JSON
- Handle loading states

### Error Handling
- Use try/catch blocks with async/await
- Display user-friendly error messages
- Handle network failures gracefully

## API Used

This exercise uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a free fake API for testing:
- Users: `https://jsonplaceholder.typicode.com/users`
- Posts: `https://jsonplaceholder.typicode.com/posts`

## Expected Outcome

- Clicking "Fetch Users" displays a list of 10 users with names, emails, and companies
- Clicking "Fetch Posts" displays the first 10 posts
- Loading messages appear while fetching
- Errors are displayed if fetch fails

## Tips

- Always use try/catch with async/await
- `await` only works inside async functions
- Check response.ok before parsing JSON
- Use `.slice(0, 10)` to get first 10 items
