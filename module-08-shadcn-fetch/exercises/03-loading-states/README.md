# Exercise 3: Loading States

## Objective
Build a user list component that properly handles loading, error, and empty states.

## Difficulty
⭐⭐ (Medium)

## Estimated Time
45-60 minutes

## Learning Goals
- Handle all three states of async data (loading, error, success)
- Create user-friendly loading indicators
- Display helpful error messages
- Handle empty data gracefully
- Use conditional rendering effectively

---

## Instructions

### Step 1: Set Up State

Create state for:
- `users`: Array of user objects (initially empty)
- `loading`: Boolean (initially true)
- `error`: String or null (initially null)

### Step 2: Fetch Users

When the component mounts:
1. Set loading to true
2. Try to fetch users from the API
3. If successful: update users state, clear error
4. If failed: set error message
5. Finally: set loading to false

**API Endpoint:** `https://jsonplaceholder.typicode.com/users`

### Step 3: Handle Loading State

While `loading` is true:
- Show a centered spinner (Loader2 icon with animate-spin)
- Display "Loading users..." text

### Step 4: Handle Error State

If `error` is not null:
- Show a Card with red border
- Display error message
- Provide a "Try Again" button to retry the fetch

### Step 5: Handle Empty State

If data loaded successfully but `users.length === 0`:
- Show a Card with centered text
- Display "No users found"

### Step 6: Handle Success State

If data loaded and users exist:
- Display users in Cards
- Show name, email, phone, and website

---

## Starter Code

Navigate to `module-08-shadcn-fetch/exercises/03-loading-states/starter/` and complete the `UserList` component.

### File: `src/App.tsx`

```tsx
import UserList from './components/UserList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">User Directory</h1>
      <UserList />
    </div>
  );
}

export default App;
```

### File: `src/components/UserList.tsx`

Complete the TODOs in this file.

---

## Expected Outcome

When complete, you should have:
- ✅ Loading spinner appears when page loads
- ✅ Users display in cards after loading
- ✅ Error message appears if fetch fails
- ✅ Empty state message if no users
- ✅ "Try Again" button on error that refetches data

---

## Testing Your Work

1. Run the dev server:
   ```bash
   npm run dev
   ```

2. Verify all states work:
   - **Loading:** Refresh the page, you should see the spinner briefly
   - **Success:** Users should appear in cards
   - **Error:** To test, temporarily change the URL to an invalid one
   - **Empty:** To test, filter users to an empty array after fetching

---

## Bonus Challenges

If you finish early:

1. **Add a retry limit:** After 3 failed retries, show a different message

2. **Simulate slow loading:** Add a delay to see the loading state better
   ```tsx
   await new Promise(resolve => setTimeout(resolve, 2000));
   ```

3. **Add skeleton loading:** Instead of a spinner, show placeholder cards

4. **Add refresh button:** Allow users to manually refresh the list

---

## What You're Learning

This exercise teaches you:
- How to manage multiple UI states
- How to provide feedback to users during async operations
- How to handle errors gracefully
- How to create better user experiences with proper state handling
- How to use conditional rendering

---

## Common Issues

**Issue:** Loading state never goes away

**Solution:** Make sure you set `loading` to false in the `finally` block

---

**Issue:** Error state doesn't show

**Solution:** Use try/catch around your fetch call and set the error state in the catch block

---

**Issue:** Empty state never shows

**Solution:** Check the condition order. Check for empty array AFTER checking loading and error

---

## Helpful Code Structure

```tsx
// Loading state
if (loading) {
  return <div>Loading...</div>;
}

// Error state
if (error) {
  return <div>Error: {error}</div>;
}

// Empty state
if (users.length === 0) {
  return <div>No users found</div>;
}

// Success state
return (
  <div>
    {users.map(user => (
      <Card key={user.id}>...</Card>
    ))}
  </div>
);
```

---

## API Response Format

The API returns an array of user objects:

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
  },
  ...
]
```

---

## Next Steps

After completing this exercise:
1. ✅ Test all four states thoroughly
2. ✅ Experiment with different error scenarios
3. ✅ Move on to Exercise 4: Routing Practice
