# Lesson 3: Custom Hooks

## Learning Objectives
- Understand why and when to create custom hooks
- Follow custom hook naming conventions
- Extract reusable logic into custom hooks
- Compose multiple hooks together
- Return values from custom hooks effectively
- Type custom hooks with TypeScript

---

## What Are Custom Hooks?

**Custom hooks** are JavaScript functions that use other React hooks. They let you extract component logic into reusable functions.

Think of custom hooks as your own tools that you build once and use everywhere!

### Why Create Custom Hooks?

- ♻️ **Reuse logic** across multiple components
- 🧹 **Keep components clean** and focused
- 🧪 **Easier testing** - test logic separately from UI
- 📚 **Share code** between projects
- 🎯 **Single responsibility** - each hook does one thing well

---

## Rules for Custom Hooks

1. **Name must start with "use"** - This tells React it's a hook
   - ✅ `useCounter`, `useFetch`, `useLocalStorage`
   - ❌ `counter`, `fetchData`, `localStorage`

2. **Can only call other hooks** - useState, useEffect, other custom hooks
   - ✅ Can call hooks at the top level
   - ❌ Can't call hooks conditionally

3. **Must be called from React functions** - Components or other custom hooks

---

## Example 1: useToggle

A simple hook for boolean state:

### Without Custom Hook
```tsx
function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  // Use isOpen, open, close, toggle...
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  // Same code repeated!
}
```

### With Custom Hook
```tsx
// hooks/useToggle.ts
import { useState } from 'react';

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(v => !v);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}
```

### Usage
```tsx
import { useToggle } from './hooks/useToggle';

function Modal() {
  const { value: isOpen, toggle, setTrue: open, setFalse: close } = useToggle(false);

  return (
    <>
      <button onClick={open}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <button onClick={close}>Close</button>
          <p>Modal content</p>
        </div>
      )}
    </>
  );
}

function Sidebar() {
  const sidebar = useToggle(true); // Default open

  return (
    <>
      <button onClick={sidebar.toggle}>Toggle Sidebar</button>
      {sidebar.value && <aside>Sidebar content</aside>}
    </>
  );
}
```

Much cleaner! The logic is reused, and components are simpler.

---

## Example 2: useLocalStorage

Sync state with localStorage:

```tsx
// hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Read from localStorage, or use initial value
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

### Usage
```tsx
function Settings() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage<number>('fontSize', 16);

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme (current: {theme})
      </button>
      <button onClick={() => setFontSize(fontSize + 2)}>
        Increase Font Size (current: {fontSize}px)
      </button>
    </div>
  );
}
```

**Benefits:**
- State persists across page reloads
- Reusable for any data type
- Error handling built-in
- Clean component code

---

## Example 3: useFetch

Fetch data with loading and error states:

```tsx
// hooks/useFetch.ts
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
    fetchData();
  }, [url]); // Re-fetch if URL changes

  return { data, loading, error, refetch: fetchData };
}
```

### Usage
```tsx
interface Post {
  id: number;
  title: string;
  body: string;
}

function BlogPost({ postId }: { postId: number }) {
  const { data, loading, error, refetch } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data</p>;

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <button onClick={refetch}>Refresh</button>
    </article>
  );
}
```

---

## Example 4: useDebounce

Delay updating a value until user stops typing:

```tsx
// hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up timer
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: cancel timer if value changes before delay
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

### Usage
```tsx
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Only fires API call 500ms after user stops typing
  const { data } = useFetch<SearchResult[]>(
    debouncedSearchTerm
      ? `/api/search?q=${debouncedSearchTerm}`
      : ''
  );

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      {data && data.map(result => <div key={result.id}>{result.name}</div>)}
    </div>
  );
}
```

**Why this is useful:**
- Without debounce: API call on every keystroke (wasteful!)
- With debounce: API call only after user stops typing (efficient!)

---

## Example 5: useWindowSize

Track window dimensions:

```tsx
// hooks/useWindowSize.ts
import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
```

### Usage
```tsx
function ResponsiveComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window size: {width} x {height}</p>
      {width < 768 ? (
        <MobileMenu />
      ) : (
        <DesktopMenu />
      )}
    </div>
  );
}
```

---

## Composing Hooks

Custom hooks can use other custom hooks!

```tsx
// hooks/usePersistedToggle.ts
import { useLocalStorage } from './useLocalStorage';

export function usePersistedToggle(key: string, initialValue: boolean = false) {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const toggle = () => setValue(!value);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}
```

This hook **combines** useLocalStorage logic with toggle logic!

### Usage
```tsx
function App() {
  const darkMode = usePersistedToggle('darkMode', false);

  return (
    <div className={darkMode.value ? 'dark' : 'light'}>
      <button onClick={darkMode.toggle}>
        Toggle Dark Mode (persisted!)
      </button>
    </div>
  );
}
```

---

## Return Value Patterns

### Pattern 1: Single Value
```tsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  // ...
  return width; // Simple value
}

// Usage
const width = useWindowWidth();
```

### Pattern 2: Array (like useState)
```tsx
function useToggle(initial: boolean) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(!value);
  return [value, toggle] as const;
}

// Usage
const [isOpen, toggleOpen] = useToggle(false);
```

### Pattern 3: Object (most flexible)
```tsx
function useFetch(url: string) {
  // ...
  return { data, loading, error, refetch };
}

// Usage
const { data, loading, error, refetch } = useFetch(url);
// Or just what you need:
const { data } = useFetch(url);
```

**Recommendation:** Use objects for hooks with 3+ values, arrays for 2 values, single value for 1.

---

## Common Pitfalls

### Pitfall 1: Not Starting with "use"
```tsx
// ❌ Wrong - React won't recognize this as a hook
function toggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);
  // ...
}

// ✅ Correct
function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);
  // ...
}
```

### Pitfall 2: Calling Hooks Conditionally
```tsx
// ❌ Wrong - hooks can't be conditional
function useUser(id?: string) {
  if (!id) return null;
  const [user, setUser] = useState(null); // DON'T DO THIS
}

// ✅ Correct
function useUser(id?: string) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!id) return; // Condition inside effect, not around hook
    fetchUser(id).then(setUser);
  }, [id]);

  return user;
}
```

### Pitfall 3: Missing Dependencies
```tsx
// ❌ Wrong - missing url in dependencies
function useFetch(url: string) {
  useEffect(() => {
    fetch(url).then(/* ... */);
  }, []); // Should include [url]!
}

// ✅ Correct
function useFetch(url: string) {
  useEffect(() => {
    fetch(url).then(/* ... */);
  }, [url]);
}
```

---

## When to Create a Custom Hook

### ✅ Create a custom hook when:
- You use the same stateful logic in multiple components
- Logic is complex enough to benefit from extraction
- You want to test logic separately from UI
- Logic uses other hooks (useState, useEffect, etc.)

### ❌ Don't create a custom hook for:
- Simple, one-off logic used in one place
- Pure functions that don't use hooks (just make a regular function!)
- When a regular function would work better

---

## Practice Checkpoint ✅

Try building these custom hooks:

1. **useCounter** - Manage a counter with increment, decrement, reset
2. **useHover** - Detect if mouse is hovering over an element
3. **useOnlineStatus** - Track if browser is online/offline
4. **useTimeout** - Run a callback after a delay
5. **usePrevious** - Get the previous value of a state
6. **useArray** - Manage an array with push, remove, clear methods

---

## Key Takeaways

1. **Custom hooks extract reusable logic** - DRY principle for React
2. **Must start with "use"** - This is a rule, not a suggestion
3. **Can use other hooks** - Composition is powerful
4. **Return what's useful** - Values, functions, objects, arrays
5. **Type with TypeScript** - Generic types make hooks flexible
6. **Follow hook rules** - Top level only, React functions only
7. **Test logic separately** - Easier to test hooks than full components

---

## Real-World Custom Hooks

Many libraries provide custom hooks:
- **React Router:** `useNavigate()`, `useParams()`, `useLocation()`
- **React Query:** `useQuery()`, `useMutation()`
- **React Hook Form:** `useForm()`, `useController()`

You're already using custom hooks without knowing it!

---

## Additional Resources

- [React Custom Hooks Documentation](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [useHooks.com](https://usehooks.com/) - Collection of custom hooks
- [React Hooks TypeScript](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks)

---

**Congratulations!** You've learned all three major hooks concepts. Now complete the exercises and homework to practice!
