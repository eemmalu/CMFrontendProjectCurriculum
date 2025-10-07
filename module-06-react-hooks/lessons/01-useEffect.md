# Lesson 1: useEffect

## Learning Objectives
- Understand what side effects are in React
- Use the useEffect hook to perform side effects
- Manage effect dependencies correctly
- Clean up effects to prevent memory leaks
- Handle common use cases (data fetching, timers, subscriptions)

---

## What Are Side Effects?

A **side effect** is any operation that affects something outside the component function. In React, rendering should be "pure" - the same props and state should always produce the same JSX. But sometimes we need to do things that aren't pure:

### Examples of Side Effects:
- 🌐 **Fetching data** from an API
- ⏰ **Setting timers** or intervals
- 📝 **Writing to localStorage**
- 📡 **Subscribing to events** (WebSocket, resize, scroll)
- 📄 **Updating the document title**
- 🖨️ **Logging to the console** (for debugging)

These can't happen during render because they interact with the world outside React. That's where `useEffect` comes in!

---

## The useEffect Hook

`useEffect` lets you run side effects *after* React has updated the DOM.

### Basic Syntax

```tsx
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Your side effect code here
    console.log('Component rendered!');
  });

  return <div>Hello</div>;
}
```

This effect runs **after every render** of the component.

---

## The Dependencies Array

The second argument to `useEffect` is the **dependencies array**. It controls *when* the effect runs.

### Three Patterns

#### 1. No Dependencies Array - Runs After Every Render
```tsx
useEffect(() => {
  console.log('Runs after every render');
});
```

**Use when:** Almost never! This can cause performance issues.

#### 2. Empty Dependencies Array - Runs Once on Mount
```tsx
useEffect(() => {
  console.log('Runs once when component mounts');
}, []); // Empty array
```

**Use when:** Fetching initial data, setting up subscriptions, document title changes.

#### 3. With Dependencies - Runs When Dependencies Change
```tsx
useEffect(() => {
  console.log(`Count changed to ${count}`);
}, [count]); // Only re-run if count changes
```

**Use when:** You want the effect to run when specific values change.

---

## Example 1: Document Title

Let's update the browser tab title based on a counter:

```tsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update document title
    document.title = `Count: ${count}`;
  }, [count]); // Re-run when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**How it works:**
1. Component renders with count = 0
2. Effect runs, sets title to "Count: 0"
3. User clicks button, count becomes 1
4. Component re-renders
5. Effect sees count changed, runs again, sets title to "Count: 1"

---

## Example 2: Fetching Data

A common use case is fetching data when a component mounts:

```tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset states when userId changes
    setLoading(true);
    setError(null);

    // Fetch user data
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
  }, [userId]); // Re-fetch when userId changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

**Better with async/await:**

```tsx
useEffect(() => {
  const fetchUser = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  fetchUser();
}, [userId]);
```

---

## Cleanup Functions

Some effects need **cleanup** to prevent memory leaks. Return a function from your effect to clean up:

### Example 3: Timer with Cleanup

```tsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up interval
    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      console.log('Timer cleaned up');
    };
  }, []); // Empty array = only set up once

  return <p>Seconds: {seconds}</p>;
}
```

**When cleanup runs:**
- Before the effect runs again (if dependencies changed)
- When the component unmounts

**Why cleanup matters:**
Without `clearInterval`, the timer would keep running even after the component is removed, causing a memory leak!

### Example 4: Event Listener with Cleanup

```tsx
function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup: remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Only set up once

  return <p>Window width: {width}px</p>;
}
```

---

## Common Pitfalls

### Pitfall 1: Missing Dependencies

```tsx
// ❌ Wrong - count is used but not in dependencies
useEffect(() => {
  console.log(`Count is ${count}`);
}, []); // Should include [count]

// ✅ Correct
useEffect(() => {
  console.log(`Count is ${count}`);
}, [count]);
```

**ESLint will warn you** about missing dependencies. Listen to it!

### Pitfall 2: Infinite Loops

```tsx
// ❌ Wrong - creates infinite loop
useEffect(() => {
  setCount(count + 1); // This changes count
}, [count]); // Which triggers the effect again!

// ✅ Correct - use dependency array carefully
useEffect(() => {
  // Only run once
  setCount(c => c + 1);
}, []); // Empty array
```

### Pitfall 3: Fetching in useEffect Without Cleanup

```tsx
// ❌ Can cause "Can't perform a React state update on unmounted component"
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => setData(data)); // What if component unmounts before this?
}, []);

// ✅ Correct - track if component is mounted
useEffect(() => {
  let isMounted = true;

  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      if (isMounted) {
        setData(data);
      }
    });

  return () => {
    isMounted = false;
  };
}, []);
```

### Pitfall 4: Using useEffect for Event Handlers

```tsx
// ❌ Wrong - don't use effect for event handlers
useEffect(() => {
  // This runs after every render!
}, []);

function handleClick() {
  console.log('Clicked');
}

// ✅ Correct - just use the handler directly
<button onClick={handleClick}>Click me</button>
```

**Rule:** If something happens in response to a specific interaction, use an event handler, not an effect.

---

## When to Use useEffect

### ✅ Use useEffect for:
- Fetching data on mount
- Setting up subscriptions (WebSocket, event listeners)
- Syncing with external systems (localStorage, browser APIs)
- Logging (analytics, debugging)

### ❌ Don't use useEffect for:
- Transforming data for rendering (do it during render)
- Handling user events (use event handlers)
- Updating state based on props or state (calculate during render instead)

---

## Example 5: localStorage Sync

```tsx
function PersistentCounter() {
  const [count, setCount] = useState(() => {
    // Read initial value from localStorage
    const saved = localStorage.getItem('count');
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    // Save to localStorage whenever count changes
    localStorage.setItem('count', count.toString());
  }, [count]);

  return (
    <div>
      <p>Count: {count} (persisted)</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## Practice Checkpoint ✅

Try building these:

1. A component that shows a loading spinner for 3 seconds, then displays content
2. A component that fetches and displays data from `https://jsonplaceholder.typicode.com/posts/1`
3. A component that displays the current mouse position (use window.addEventListener('mousemove'))
4. A component that saves an input value to localStorage as you type

---

## Key Takeaways

1. **useEffect runs after render** - Not during render
2. **Dependencies array controls when effect runs** - Empty array = once, with deps = when deps change
3. **Always include all dependencies** - ESLint will help you
4. **Return cleanup function when needed** - Clear timers, remove listeners, cancel requests
5. **Don't use effects for event handlers** - Effects are for syncing with external systems
6. **Effects can run multiple times** - Write them to handle being called repeatedly

---

## Additional Resources

- [React useEffect Documentation](https://react.dev/reference/react/useEffect)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects)

---

**Next Lesson:** [useContext](./02-useContext.md) - Learn how to share state across components!
