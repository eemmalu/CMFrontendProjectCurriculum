# Lesson 4: React Router Basics

## What is React Router?

**React Router** is a library that enables navigation between different pages (or "views") in a React application **without reloading the page**.

Normally, clicking a link causes the browser to reload the entire page. React Router intercepts these clicks and changes the URL without reloading, making your app feel fast and smooth.

### Single-Page Applications (SPAs)

React apps are typically **Single-Page Applications (SPAs)**:
- The browser loads one HTML file
- JavaScript changes the content dynamically
- React Router makes it **feel** like multiple pages

---

## Installing React Router

```bash
npm install react-router-dom
```

That's it! Now you can use React Router in your project.

---

## Basic Setup

### Step 1: Wrap Your App in BrowserRouter

In your `main.tsx` file:

```tsx
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

**BrowserRouter** enables routing in your entire app.

### Step 2: Define Routes

In your `App.tsx` file:

```tsx
// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
```

**Routes** contains all your routes. Each **Route** maps a URL path to a component.

---

## Creating Page Components

Create simple page components:

```tsx
// pages/Home.tsx
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our website!</p>
    </div>
  );
}
```

```tsx
// pages/About.tsx
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company that does things.</p>
    </div>
  );
}
```

```tsx
// pages/Contact.tsx
export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: contact@example.com</p>
    </div>
  );
}
```

---

## Navigation with Link

Don't use `<a>` tags for internal links! Use `<Link>` from React Router instead.

### Why Not `<a>` Tags?

```tsx
// ❌ Don't do this!
<a href="/about">About</a>
```

This causes a full page reload, which defeats the purpose of a single-page app.

### Use `<Link>` Instead

```tsx
// ✅ Do this!
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

This changes the URL without reloading the page.

### Example: Navigation Bar

```tsx
// components/Navbar.tsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/" className="text-blue-600 hover:underline">
        Home
      </Link>
      <Link to="/about" className="text-blue-600 hover:underline">
        About
      </Link>
      <Link to="/contact" className="text-blue-600 hover:underline">
        Contact
      </Link>
    </nav>
  );
}
```

Then use it in your App:

```tsx
// App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
```

Now the navbar appears on every page!

---

## Active Link Styling

Use `NavLink` instead of `Link` to style the active link:

```tsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-blue-600 font-bold' : 'text-blue-600 hover:underline'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'text-blue-600 font-bold' : 'text-blue-600 hover:underline'
        }
      >
        About
      </NavLink>
    </nav>
  );
}
```

The `isActive` prop tells you if the link matches the current URL.

---

## Dynamic Routes (URL Parameters)

Sometimes you need routes with dynamic values, like `/users/123` or `/products/abc`.

### Defining Dynamic Routes

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users/:userId" element={<UserProfile />} />
  <Route path="/products/:productId" element={<ProductDetail />} />
</Routes>
```

The `:userId` and `:productId` are **URL parameters** - they can be any value.

### Reading URL Parameters

Use the `useParams` hook to read URL parameters:

```tsx
// pages/UserProfile.tsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function UserProfile() {
  const { userId } = useParams(); // Get userId from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
```

Now visiting `/users/1` shows user 1, `/users/2` shows user 2, etc.

### Linking to Dynamic Routes

```tsx
<Link to={`/users/${user.id}`}>View Profile</Link>
```

---

## Programmatic Navigation

Sometimes you need to navigate in JavaScript (like after submitting a form).

### Using `useNavigate`

```tsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Validate login...
    // If successful:
    navigate('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## 404 Not Found Page

Handle routes that don't exist:

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

The `path="*"` matches any route that wasn't matched above.

```tsx
// pages/NotFound.tsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold">404</h1>
      <p>Page not found</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go home
      </Link>
    </div>
  );
}
```

---

## Nested Routes

You can nest routes for layouts with shared elements:

```tsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
  </Route>
</Routes>
```

```tsx
// components/Layout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
}
```

---

## Common Pitfalls

### ❌ Using `<a>` Instead of `<Link>`
**Problem:** Full page reload

**Solution:** Use `<Link to="/path">`

### ❌ Forgetting BrowserRouter
**Problem:** Routing doesn't work at all

**Solution:** Wrap `<App>` in `<BrowserRouter>` in `main.tsx`

### ❌ Wrong Path Format
**Problem:** Routes don't match

**Solution:**
- Paths start with `/` (except in nested routes)
- No trailing slash: `/about` not `/about/`

### ❌ Using `href` Instead of `to`
**Problem:**
```tsx
<Link href="/about">About</Link> // Wrong!
```

**Solution:**
```tsx
<Link to="/about">About</Link> // Correct!
```

---

## Practice Questions

1. **What is the purpose of React Router?**
   <details>
   <summary>Answer</summary>
   To enable navigation between different pages/views in a React app without reloading the page.
   </details>

2. **What's the difference between `<Link>` and `<a>`?**
   <details>
   <summary>Answer</summary>
   `<Link>` navigates without reloading the page (client-side routing). `<a>` causes a full page reload.
   </details>

3. **How do you read URL parameters like `/users/:userId`?**
   <details>
   <summary>Answer</summary>
   Use the `useParams()` hook: `const { userId } = useParams();`
   </details>

---

## Hands-On Activity

### Task: Create a Simple Blog

1. Create these pages:
   - Home (list of blog posts)
   - Post (individual blog post)
   - About
   - 404

2. Set up routes:
   ```tsx
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/posts/:postId" element={<Post />} />
     <Route path="/about" element={<About />} />
     <Route path="*" element={<NotFound />} />
   </Routes>
   ```

3. In Home, fetch posts and link to each:
   ```tsx
   <Link to={`/posts/${post.id}`}>{post.title}</Link>
   ```

4. In Post, use `useParams()` to fetch the specific post

---

## Key Takeaways

✅ React Router enables client-side routing (no page reloads)
✅ Wrap app in `<BrowserRouter>` to enable routing
✅ Define routes with `<Routes>` and `<Route>`
✅ Use `<Link to="/path">` for navigation (not `<a>`)
✅ Use `useParams()` to read URL parameters
✅ Use `useNavigate()` for programmatic navigation
✅ Use `path="*"` for 404 pages
✅ Use `<NavLink>` to style active links

**Next Lesson:** Using Lucide React icons
