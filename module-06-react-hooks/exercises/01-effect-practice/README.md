# Exercise 1: Effect Practice

## Objective
Practice using the useEffect hook in various scenarios including timers, data fetching, and cleanup.

**Estimated Time:** 30 minutes
**Difficulty:** ⭐⭐

## Learning Goals
- Use useEffect with different dependency arrays
- Fetch data from an API
- Set up and clean up timers
- Handle cleanup functions properly

## Instructions

### Step 1: Set Up Your Project
1. Create a new Vite React TypeScript project:
   ```bash
   npm create vite@latest effect-practice -- --template react-ts
   cd effect-practice
   npm install
   ```

### Step 2: Create a Timer Component
2. Create `src/components/Timer.tsx`
3. Build a component that:
   - Shows seconds elapsed since component mounted
   - Uses `useEffect` to set up a `setInterval`
   - Increments a counter every second
   - **Cleans up** the interval when component unmounts

### Step 3: Create a Document Title Updater
4. Create `src/components/TitleUpdater.tsx`
5. Build a component that:
   - Has an input for the user's name
   - Uses `useEffect` to update `document.title` to show the name
   - Updates the title whenever the name changes

### Step 4: Create a Data Fetcher
6. Create `src/components/UserFetcher.tsx`
7. Build a component that:
   - Accepts a `userId` prop (number)
   - Fetches user data from `https://jsonplaceholder.typicode.com/users/${userId}`
   - Shows loading state while fetching
   - Shows error state if fetch fails
   - Displays user name and email when loaded
   - Re-fetches when `userId` changes

### Step 5: Create a Window Resize Listener
8. Create `src/components/WindowSize.tsx`
9. Build a component that:
   - Displays current window width and height
   - Uses `useEffect` to add a resize event listener
   - Updates size when window is resized
   - **Cleans up** the event listener on unmount

### Step 6: Combine in App
10. Import all components into `App.tsx`
11. Render all four components
12. For UserFetcher, add buttons to switch between different user IDs

## Example Code

### Timer.tsx
```tsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      console.log('Timer cleaned up');
    };
  }, []); // Empty array = run once on mount

  return (
    <div>
      <h2>Timer</h2>
      <p>Seconds elapsed: {seconds}</p>
    </div>
  );
}

export default Timer;
```

### UserFetcher.tsx
```tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserFetcher({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset states
    setLoading(true);
    setError(null);

    // Fetch user
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]); // Re-run when userId changes

  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserFetcher;
```

### App.tsx
```tsx
import { useState } from 'react';
import Timer from './components/Timer';
import TitleUpdater from './components/TitleUpdater';
import UserFetcher from './components/UserFetcher';
import WindowSize from './components/WindowSize';

function App() {
  const [userId, setUserId] = useState(1);
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ padding: '20px' }}>
      <h1>useEffect Practice</h1>

      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide' : 'Show'} Timer
      </button>

      <hr />

      <TitleUpdater />

      <hr />

      <div>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
        <UserFetcher userId={userId} />
      </div>

      <hr />

      <WindowSize />
    </div>
  );
}

export default App;
```

## Expected Outcome
You should see:
- A timer that counts up every second
- When you hide the timer, console shows "Timer cleaned up"
- An input that updates the browser tab title
- User info that fetches from API when you click different user buttons
- Window dimensions that update when you resize the browser

## Bonus Challenges
- 🌟 Add a pause/resume button to the Timer
- 🌟 Add a reset button to the Timer
- 🌟 Create a countdown timer that starts at 10 and goes to 0
- 🌟 In UserFetcher, handle the case where component unmounts during fetch
- 🌟 Add a "Posts Fetcher" that loads posts for the selected user
- 🌟 Create a component that tracks mouse position (mousemove event)

## Common Issues

**Issue:** Timer keeps running after component unmounts
**Solution:** Make sure you're returning a cleanup function that calls `clearInterval`

**Issue:** Effect runs too many times
**Solution:** Check your dependencies array - only include values that should trigger re-runs

**Issue:** "Can't perform React state update on unmounted component"
**Solution:** Either clean up the fetch request or track if component is still mounted

**Issue:** Document title doesn't update
**Solution:** Make sure the value you're watching is in the dependencies array

## Practice Checkpoint ✅

Before moving on, make sure you can:
- [ ] Set up useEffect with an empty dependencies array
- [ ] Use useEffect with specific dependencies
- [ ] Return cleanup functions from useEffect
- [ ] Fetch data in useEffect
- [ ] Add and remove event listeners
- [ ] Update based on prop changes

## What You Learned
✅ How to run side effects after render
✅ How to control when effects run with dependencies
✅ How to clean up effects (timers, listeners)
✅ How to fetch data with useEffect
✅ How to respond to prop changes

---

**Next Exercise:** [Context Practice](../02-context-practice/README.md)
