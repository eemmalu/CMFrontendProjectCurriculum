# Exercise 4: Routing Practice

## Objective
Create a multi-page blog application with React Router, featuring a home page with post listings and individual post detail pages.

## Difficulty
⭐⭐⭐ (Challenging)

## Estimated Time
60-75 minutes

## Learning Goals
- Set up React Router in a React application
- Create multiple page components
- Navigate between pages with Link components
- Use URL parameters to display dynamic content
- Implement a navigation bar that works across all pages
- Use the useParams hook to read route parameters
- Handle 404 not found pages

---

## Instructions

### Step 1: Install React Router

```bash
npm install react-router-dom
```

### Step 2: Set Up BrowserRouter

In `main.tsx`, wrap your `<App />` in `<BrowserRouter>`.

### Step 3: Create Page Components

Create three page components in `src/pages/`:
1. **Home:** Display a list of blog posts (fetch from API)
2. **PostDetail:** Display a single post (fetch based on URL parameter)
3. **NotFound:** 404 page for invalid routes

### Step 4: Create a Navbar Component

Create a navbar that appears on all pages with links to:
- Home (/)

### Step 5: Define Routes

In `App.tsx`, set up routes for:
- `/` → Home page
- `/posts/:postId` → Post detail page
- `*` → 404 Not Found page

### Step 6: Implement Navigation

- On the Home page, each post should link to `/posts/{id}`
- The Post Detail page should have a "Back to Home" button

### Step 7: Fetch Data Based on Route

- Home page: Fetch all posts (show first 10)
- Post Detail page: Fetch specific post using the `postId` from the URL

---

## Starter Code

Navigate to `module-08-shadcn-fetch/exercises/04-routing-practice/starter/` and complete the files.

### File: `src/main.tsx`

Wrap App in BrowserRouter

### File: `src/App.tsx`

Set up Routes

### File: `src/components/Navbar.tsx`

Create navigation bar

### File: `src/pages/Home.tsx`

Fetch and display posts

### File: `src/pages/PostDetail.tsx`

Fetch and display a single post based on URL parameter

### File: `src/pages/NotFound.tsx`

Create 404 page

---

## API Endpoints

**All posts:** `https://jsonplaceholder.typicode.com/posts`

**Single post:** `https://jsonplaceholder.typicode.com/posts/{id}`

**Response format (post):**
```json
{
  "userId": 1,
  "id": 1,
  "title": "Post title",
  "body": "Post content..."
}
```

---

## Expected Outcome

When complete, you should have:
- ✅ Home page showing a list of blog posts
- ✅ Clicking a post navigates to `/posts/{id}`
- ✅ Post detail page shows the full post
- ✅ "Back to Home" button navigates back to `/`
- ✅ Navbar visible on all pages
- ✅ Visiting an invalid route shows 404 page
- ✅ Loading states on both pages
- ✅ URL changes without page reload

---

## Testing Your Work

1. Run the dev server:
   ```bash
   npm run dev
   ```

2. Test navigation:
   - Click on different posts from the home page
   - Verify URL changes to `/posts/1`, `/posts/2`, etc.
   - Click "Back to Home" button
   - Manually type `/posts/999` in the URL
   - Type an invalid URL like `/invalid` to see 404

---

## Bonus Challenges

If you finish early:

1. **Add comments:** Fetch and display comments for each post on the detail page
   - Endpoint: `https://jsonplaceholder.typicode.com/posts/{id}/comments`

2. **Add user info:** Show the author's name on each post
   - Endpoint: `https://jsonplaceholder.typicode.com/users/{userId}`

3. **Add breadcrumbs:** Show "Home > Post #1" navigation

4. **Add related posts:** Show 3 random other posts at the bottom of detail page

---

## What You're Learning

This exercise teaches you:
- How to set up and configure React Router
- How to create multi-page single-page applications
- How to navigate programmatically and with links
- How to read and use URL parameters
- How to structure a routed React application
- How to share components (like Navbar) across pages

---

## Common Issues

**Issue:** Routes don't work at all

**Solution:** Make sure you wrapped `<App />` in `<BrowserRouter>` in `main.tsx`

---

**Issue:** Clicking links causes full page reload

**Solution:** Use `<Link to="/path">` instead of `<a href="/path">`

---

**Issue:** "useParams is not defined"

**Solution:** Import it: `import { useParams } from 'react-router-dom'`

---

**Issue:** Can't read postId from URL

**Solution:** Make sure:
- Route is defined as `/posts/:postId` (with colon)
- You're using `const { postId } = useParams()`

---

## Helpful Code Snippets

### Setting up routes:
```tsx
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/posts/:postId" element={<PostDetail />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Reading URL parameters:
```tsx
import { useParams } from 'react-router-dom';

const { postId } = useParams();
```

### Linking to dynamic routes:
```tsx
<Link to={`/posts/${post.id}`}>{post.title}</Link>
```

### Programmatic navigation:
```tsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/');
```

---

## Next Steps

After completing this exercise:
1. ✅ Test all navigation thoroughly
2. ✅ Try adding more routes (About, Contact)
3. ✅ Move on to the Module 8 Homework
