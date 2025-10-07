# Exercise 2: Context Practice

## Objective
Build context providers to manage global state and avoid prop drilling.

**Estimated Time:** 30 minutes
**Difficulty:** ⭐⭐

## Learning Goals
- Create context with createContext
- Build context providers
- Consume context with useContext
- Create custom hooks for context
- Handle multiple contexts

## Instructions

### Step 1: Set Up Your Project
1. Create a new Vite React TypeScript project:
   ```bash
   npm create vite@latest context-practice -- --template react-ts
   cd context-practice
   npm install
   ```

### Step 2: Create a Theme Context
2. Create `src/context/ThemeContext.tsx`
3. Build a theme context that:
   - Manages theme state ('light' or 'dark')
   - Provides a `toggleTheme` function
   - Exports a `ThemeProvider` component
   - Exports a `useTheme` custom hook

### Step 3: Create an Auth Context
4. Create `src/context/AuthContext.tsx`
5. Build an auth context that:
   - Manages user state (name and email, or null when logged out)
   - Provides `login(name, email)` function
   - Provides `logout()` function
   - Exports an `AuthProvider` component
   - Exports a `useAuth` custom hook

### Step 4: Create Components That Use Context
6. Create `src/components/Header.tsx`
   - Displays app title
   - Shows theme toggle button
   - Shows login/logout button and user name
   - Uses both useTheme and useAuth

7. Create `src/components/Content.tsx`
   - Displays different content based on theme
   - Shows user-specific content if logged in
   - Uses both contexts

8. Create `src/components/LoginForm.tsx`
   - Simple form with name and email inputs
   - Calls login function from auth context
   - Only shows if user is not logged in

### Step 5: Set Up App with Providers
9. In `App.tsx`:
   - Wrap the app with both providers
   - Render Header, LoginForm, and Content
   - Apply theme-based styles to the entire app

## Example Code

### ThemeContext.tsx
```tsx
import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

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

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### AuthContext.tsx
```tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (name: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (name: string, email: string) => {
    setUser({ name, email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

### Header.tsx
```tsx
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header style={{
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>My App</h1>
      <div>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        {user ? (
          <>
            <span style={{ marginLeft: '20px' }}>Hello, {user.name}!</span>
            <button onClick={logout} style={{ marginLeft: '10px' }}>
              Logout
            </button>
          </>
        ) : (
          <span style={{ marginLeft: '20px' }}>Not logged in</span>
        )}
      </div>
    </header>
  );
}

export default Header;
```

### LoginForm.tsx
```tsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function LoginForm() {
  const { user, login } = useAuth();
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (user) return null; // Don't show if logged in

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      login(name, email);
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      padding: '20px',
      backgroundColor: theme === 'light' ? '#fff' : '#444',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <h2>Login</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
```

### App.tsx
```tsx
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Content from './components/Content';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme === 'light' ? '#fff' : '#222',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      <Header />
      <LoginForm />
      <Content />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
```

## Expected Outcome
You should see:
- A header with theme toggle and login/logout buttons
- Login form that shows when not logged in
- When you login, form disappears and shows "Hello, [name]!"
- Theme switcher changes colors across entire app
- No props being passed - all state managed via context!

## Bonus Challenges
- 🌟 Add a Settings context for user preferences (font size, notifications)
- 🌟 Persist theme preference to localStorage
- 🌟 Persist user login to localStorage (stay logged in on refresh)
- 🌟 Add a Language context (English/Spanish) and translate some text
- 🌟 Create a Shopping Cart context with add/remove items
- 🌟 Add a Notifications context for toast messages
- 🌟 Split theme context into separate color and font-size contexts

## Common Issues

**Issue:** Error "useTheme must be used within ThemeProvider"
**Solution:** Make sure your component is wrapped in the provider

**Issue:** Context doesn't update when changed
**Solution:** Check that you're using the setter function correctly

**Issue:** Too many re-renders
**Solution:** Use useMemo to prevent creating new objects on every render

**Issue:** TypeScript error "possibly null"
**Solution:** Either check for null or throw error in custom hook

## Practice Checkpoint ✅

Before moving on, make sure you can:
- [ ] Create context with createContext
- [ ] Build a provider component
- [ ] Wrap app with provider
- [ ] Consume context with useContext
- [ ] Create custom hooks for context
- [ ] Use multiple contexts together
- [ ] Type context properly with TypeScript

## What You Learned
✅ How to create and provide context
✅ How to consume context with useContext
✅ How to avoid prop drilling
✅ How to create custom hooks for context
✅ How to use multiple contexts
✅ When to use context vs props

---

**Next Exercise:** [Custom Hooks](../03-custom-hooks/README.md)
