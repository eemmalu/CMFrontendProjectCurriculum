# Lesson 2: useContext

## Learning Objectives
- Understand the prop drilling problem
- Learn what React Context is and when to use it
- Create context with createContext
- Build context providers
- Consume context with useContext hook
- Type context properly with TypeScript

---

## The Prop Drilling Problem

Imagine you have an app where many components need to know the current user:

```tsx
function App() {
  const [user, setUser] = useState({ name: 'Alice', theme: 'dark' });

  return <Dashboard user={user} setUser={setUser} />;
}

function Dashboard({ user, setUser }) {
  return <Sidebar user={user} setUser={setUser} />;
}

function Sidebar({ user, setUser }) {
  return <UserProfile user={user} setUser={setUser} />;
}

function UserProfile({ user, setUser }) {
  return <div>{user.name}</div>;
}
```

**Problem:** We're passing `user` through Dashboard and Sidebar even though they don't use it themselves. This is called **prop drilling** - passing props through intermediate components.

**Issues with prop drilling:**
- 😰 Repetitive and annoying
- 🐛 Easy to forget to pass props down
- 🔧 Hard to refactor (change one prop, update many files)
- 📚 Makes components less reusable

---

## What is React Context?

**Context** provides a way to share data across the entire component tree without passing props manually at every level.

Think of context like a "broadcasting system":
- One component **provides** the data
- Other components **subscribe** to receive it
- No need to pass through intermediate components!

---

## Creating Context

### Step 1: Create the Context

```tsx
import { createContext } from 'react';

interface User {
  name: string;
  email: string;
}

// Create context with default value
const UserContext = createContext<User | null>(null);
```

### Step 2: Create a Provider Component

The provider wraps components that need access to the context:

```tsx
import { createContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Create context
const UserContext = createContext<UserContextType | null>(null);

// Create provider component
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
```

### Step 3: Wrap Your App

```tsx
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}
```

### Step 4: Consume the Context

Use the `useContext` hook to access the context value:

```tsx
import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserProfile must be used within UserProvider');
  }

  const { user, setUser } = context;

  if (!user) {
    return <p>Please log in</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
```

---

## Complete Example: Theme Context

Let's build a theme switcher with context:

### ThemeContext.tsx
```tsx
import { createContext, useState, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create context
const ThemeContext = createContext<ThemeContextType | null>(null);

// Provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(current => current === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easier consumption
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### App.tsx
```tsx
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### Header.tsx
```tsx
import { useTheme } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px'
    }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;
```

### Content.tsx
```tsx
import { useTheme } from './ThemeContext';

function Content() {
  const { theme } = useTheme();

  return (
    <main style={{
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px',
      minHeight: '400px'
    }}>
      <p>Current theme: {theme}</p>
    </main>
  );
}

export default Content;
```

**Result:** Both Header and Content can access the theme without prop drilling!

---

## Multiple Contexts

You can use multiple contexts by nesting providers:

```tsx
import { UserProvider } from './UserContext';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Dashboard />
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
```

Or combine them in a single provider:

```tsx
function AppProviders({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

function App() {
  return (
    <AppProviders>
      <Dashboard />
    </AppProviders>
  );
}
```

---

## Custom Hook Pattern

It's a best practice to create a custom hook for consuming context:

```tsx
// ✅ Good - custom hook with error handling
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Usage in component
function MyComponent() {
  const { theme, toggleTheme } = useTheme(); // Clean and simple!
  // ...
}
```

**Benefits:**
- Cleaner component code
- Built-in error handling
- Can add additional logic if needed
- Better developer experience (autocomplete!)

---

## When to Use Context

### ✅ Good Use Cases:
- **Theme** (light/dark mode)
- **User authentication** (current user, login/logout)
- **Language/locale** (internationalization)
- **Global UI state** (sidebar open/closed, modal visibility)

### ❌ Don't Use Context For:
- **Frequently changing data** (every keystroke) - can cause performance issues
- **Data needed by only 2-3 components** - just use props
- **Everything** - over-using context makes code hard to follow

### Alternative: Props Are Still Great!

Don't be afraid of passing props! Props are:
- Explicit (you can see where data comes from)
- Type-safe (TypeScript helps you)
- Easy to trace (follow the data flow)

Use context for **truly global** data, props for **local** data.

---

## Performance Considerations

**Context can cause re-renders!** Every component using a context re-renders when the context value changes.

### Problem: Unnecessary Re-renders

```tsx
function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<Theme>('light');

  // ❌ New object every render!
  const value = { user, setUser, theme, setTheme };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
```

Every render creates a new `value` object, causing all consumers to re-render!

### Solution 1: useMemo

```tsx
import { useMemo } from 'react';

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<Theme>('light');

  // ✅ Only create new object when dependencies change
  const value = useMemo(
    () => ({ user, setUser, theme, setTheme }),
    [user, theme]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
```

### Solution 2: Split Contexts

```tsx
// Separate contexts for different concerns
const UserContext = createContext<UserContextType | null>(null);
const ThemeContext = createContext<ThemeContextType | null>(null);

// Now components can subscribe to only what they need
function Header() {
  const { theme } = useTheme(); // Only re-renders when theme changes
  // Doesn't re-render when user changes!
}
```

---

## Common Pitfalls

### Pitfall 1: Using Context Outside Provider

```tsx
function MyComponent() {
  const { theme } = useTheme();
  // Error if not wrapped in ThemeProvider!
}
```

**Solution:** Always wrap consuming components in the provider:
```tsx
<ThemeProvider>
  <MyComponent />
</ThemeProvider>
```

### Pitfall 2: Not Checking for null

```tsx
const context = useContext(MyContext);
// context might be null!
const { value } = context; // Potential error
```

**Solution:** Check for null or use custom hook with error:
```tsx
export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within MyProvider');
  }
  return context;
}
```

### Pitfall 3: Too Much in One Context

```tsx
// ❌ Too much responsibility
const AppContext = createContext({
  user: null,
  theme: 'light',
  language: 'en',
  notifications: [],
  settings: {},
  // ... 20 more things
});
```

**Solution:** Split into focused contexts:
```tsx
const UserContext = createContext(...);
const ThemeContext = createContext(...);
const LanguageContext = createContext(...);
```

---

## Practice Checkpoint ✅

Try building:

1. **Auth Context** - Manage login/logout with user state
2. **Shopping Cart Context** - Add/remove items, show cart count
3. **Notification Context** - Show toast notifications from any component
4. **Settings Context** - Manage app settings (volume, notifications enabled, etc.)

---

## Key Takeaways

1. **Context solves prop drilling** - Share data without passing props through every level
2. **Create context with createContext** - Define the shape of your context
3. **Wrap with Provider** - Provide the context value to children
4. **Consume with useContext** - Access context in any child component
5. **Custom hooks are best practice** - `useTheme()` is cleaner than `useContext(ThemeContext)`
6. **Use sparingly** - Context is for truly global data, not everything
7. **Watch for re-renders** - Use useMemo or split contexts for performance

---

## Additional Resources

- [React Context Documentation](https://react.dev/learn/passing-data-deeply-with-context)
- [useContext Reference](https://react.dev/reference/react/useContext)
- [Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context)

---

**Next Lesson:** [Custom Hooks](./03-custom-hooks.md) - Learn to create your own reusable hooks!
