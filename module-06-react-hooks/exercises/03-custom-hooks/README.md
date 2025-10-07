# Exercise 3: Custom Hooks

## Objective
Create reusable custom hooks to extract common logic patterns.

**Estimated Time:** 35 minutes
**Difficulty:** ⭐⭐⭐

## Learning Goals
- Extract stateful logic into custom hooks
- Follow custom hook naming conventions
- Compose multiple hooks together
- Return values effectively from hooks
- Type custom hooks with TypeScript

## Instructions

### Step 1: Set Up Your Project
1. Create a new Vite React TypeScript project:
   ```bash
   npm create vite@latest custom-hooks-practice -- --template react-ts
   cd custom-hooks-practice
   npm install
   ```

2. Create a `src/hooks/` directory for your custom hooks

### Step 2: Create useToggle Hook
3. Create `src/hooks/useToggle.ts`
4. Build a hook that:
   - Manages boolean state
   - Returns the value, toggle function, setTrue, and setFalse
   - Accepts an optional initial value (default false)

### Step 3: Create useLocalStorage Hook
5. Create `src/hooks/useLocalStorage.ts`
6. Build a hook that:
   - Syncs state with localStorage
   - Reads initial value from localStorage
   - Saves to localStorage on every change
   - Accepts a key and initial value
   - Returns value and setValue (like useState)

### Step 4: Create useFetch Hook
7. Create `src/hooks/useFetch.ts`
8. Build a hook that:
   - Fetches data from a URL
   - Manages loading, error, and data states
   - Accepts a URL parameter
   - Returns data, loading, error, and refetch function
   - Re-fetches when URL changes

### Step 5: Create useDebounce Hook
9. Create `src/hooks/useDebounce.ts`
10. Build a hook that:
    - Delays updating a value until user stops changing it
    - Accepts a value and delay (in milliseconds)
    - Returns the debounced value
    - Cleans up timeout on unmount or value change

### Step 6: Create useCounter Hook (Bonus)
11. Create `src/hooks/useCounter.ts`
12. Build a hook that:
    - Manages a counter value
    - Provides increment, decrement, reset functions
    - Accepts optional initial value, min, max, and step
    - Respects min/max boundaries

### Step 7: Create Demo Components
13. Create components that demonstrate each hook:
    - `ToggleDemo.tsx` - Show/hide content
    - `LocalStorageDemo.tsx` - Persist form data
    - `FetchDemo.tsx` - Fetch and display user data
    - `DebounceDemo.tsx` - Search with debounced API calls

### Step 8: Combine in App
14. Import all demo components into `App.tsx`
15. Render all demos with clear sections

## Example Code

### useToggle.ts
```typescript
import { useState } from 'react';

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(v => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}
```

### useLocalStorage.ts
```typescript
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Read from localStorage on initial render
  const [value, setValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Save to localStorage whenever value changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}
```

### useFetch.ts
```typescript
import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}
```

### useDebounce.ts
```typescript
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

### ToggleDemo.tsx
```tsx
import { useToggle } from '../hooks/useToggle';

function ToggleDemo() {
  const sidebar = useToggle(true);
  const darkMode = useToggle(false);

  return (
    <div>
      <h2>useToggle Demo</h2>

      <div>
        <button onClick={sidebar.toggle}>Toggle Sidebar</button>
        <button onClick={sidebar.setTrue}>Open Sidebar</button>
        <button onClick={sidebar.setFalse}>Close Sidebar</button>
        {sidebar.value && <aside>Sidebar content here!</aside>}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={darkMode.toggle}>
          Toggle Dark Mode (currently: {darkMode.value ? 'ON' : 'OFF'})
        </button>
      </div>
    </div>
  );
}

export default ToggleDemo;
```

### LocalStorageDemo.tsx
```tsx
import { useLocalStorage } from '../hooks/useLocalStorage';

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('userName', '');
  const [count, setCount] = useLocalStorage('counter', 0);

  return (
    <div>
      <h2>useLocalStorage Demo</h2>
      <p>Data persists across page reloads!</p>

      <div>
        <label>
          Your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p>Stored name: {name}</p>
      </div>

      <div>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <p style={{ fontSize: '12px', color: '#666' }}>
        Try refreshing the page - your data will still be here!
      </p>
    </div>
  );
}

export default LocalStorageDemo;
```

### FetchDemo.tsx
```tsx
import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function FetchDemo() {
  const [userId, setUserId] = useState(1);
  const { data, loading, error, refetch } = useFetch<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  return (
    <div>
      <h2>useFetch Demo</h2>

      <div>
        {[1, 2, 3, 4, 5].map(id => (
          <button key={id} onClick={() => setUserId(id)}>
            User {id}
          </button>
        ))}
        <button onClick={refetch}>Refetch</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
        </div>
      )}
    </div>
  );
}

export default FetchDemo;
```

### DebounceDemo.tsx
```tsx
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

function DebounceDemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div>
      <h2>useDebounce Demo</h2>
      <p>API calls only happen after you stop typing for 500ms</p>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Type to search..."
      />

      <div style={{ marginTop: '20px' }}>
        <p>Current input: {searchTerm}</p>
        <p>Debounced value (used for API call): {debouncedSearchTerm}</p>
        {debouncedSearchTerm && (
          <p style={{ color: 'green' }}>
            ✓ Would fetch results for: "{debouncedSearchTerm}"
          </p>
        )}
      </div>
    </div>
  );
}

export default DebounceDemo;
```

## Expected Outcome
You should see:
- Toggle demos that show/hide content
- LocalStorage demo that persists data across reloads
- Fetch demo that loads users from API
- Debounce demo that delays updates
- All hooks working correctly and reusably!

## Bonus Challenges
- 🌟 Create useCounter hook with min/max/step
- 🌟 Create useOnlineStatus hook (navigator.onLine)
- 🌟 Create useWindowSize hook (track window dimensions)
- 🌟 Create usePrevious hook (get previous value of state)
- 🌟 Create useHover hook (detect if element is hovered)
- 🌟 Create useInterval hook (setInterval with cleanup)
- 🌟 Create useArray hook (array methods: push, remove, clear)
- 🌟 Combine hooks: usePersistedToggle (toggle + localStorage)

## Common Issues

**Issue:** Hook doesn't start with "use"
**Solution:** All custom hooks MUST start with "use" - it's a rule!

**Issue:** Hook called conditionally
**Solution:** Hooks must be called at the top level, never in conditionals

**Issue:** Infinite loop in useEffect
**Solution:** Check your dependencies - you might be updating state that's in the array

**Issue:** TypeScript generic types
**Solution:** Use `<T>` for generic types, e.g., `useFetch<User>(url)`

## Practice Checkpoint ✅

Before moving on, make sure you can:
- [ ] Create a custom hook that uses useState
- [ ] Create a custom hook that uses useEffect
- [ ] Name hooks properly (start with "use")
- [ ] Return values from hooks (single, array, object)
- [ ] Type hooks with TypeScript generics
- [ ] Compose hooks together
- [ ] Clean up effects in custom hooks

## What You Learned
✅ How to extract logic into custom hooks
✅ How to compose hooks together
✅ How to return values effectively
✅ How to type hooks with TypeScript
✅ How to make reusable, testable logic
✅ Common hook patterns (toggle, fetch, debounce, storage)

---

**Next Step:** Complete the [Module 6 Homework](../../homework/README.md)!
