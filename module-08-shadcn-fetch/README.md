# Module 8: shadcn/ui & Data Fetching

## Overview

This is the final module of the curriculum! You'll learn how to build professional, polished React applications by integrating a component library (shadcn/ui), fetching data from APIs, handling loading and error states, navigating between pages with React Router, and using icons to enhance your UI.

**Estimated Time:** 2 weeks
**Prerequisites:** Modules 1-7 (especially React hooks and Tailwind CSS)

---

## Concepts Covered

- **shadcn/ui:** Installing and using pre-built, customizable components
- **Data Fetching:** Making HTTP requests with the Fetch API
- **Async Patterns:** Handling promises, async/await, loading states, and errors
- **React Router:** Client-side routing and navigation
- **Lucide React:** Using icons to improve user experience
- **Real-World Patterns:** Building complete features like search, filtering, and pagination

---

## Learning Objectives

By the end of this module, you will be able to:

- ✅ Install and configure shadcn/ui components in a React project
- ✅ Use pre-built components (Button, Card, Input, etc.) with proper props
- ✅ Fetch data from APIs using the Fetch API
- ✅ Handle loading states, errors, and empty states in your UI
- ✅ Implement async/await patterns for cleaner asynchronous code
- ✅ Set up React Router for multi-page applications
- ✅ Navigate between pages programmatically and with links
- ✅ Use Lucide React icons to enhance your components
- ✅ Build a complete search and filter feature
- ✅ Combine all learned concepts into a real-world application

---

## Module Structure

```
module-08-shadcn-fetch/
├── README.md (this file)
├── lessons/
│   ├── 01-shadcn-intro.md
│   ├── 02-fetch-api.md
│   ├── 03-async-data.md
│   ├── 04-routing-basics.md
│   ├── 05-icons.md
│   └── assets/
├── exercises/
│   ├── 01-shadcn-components/
│   ├── 02-fetch-practice/
│   ├── 03-loading-states/
│   └── 04-routing-practice/
├── homework/
│   ├── README.md
│   ├── starter/
│   └── tests/
└── mock-data/
    ├── products.json
    ├── users.json
    └── README.md
```

---

## Lessons

### Lesson 1: shadcn/ui Introduction
**File:** `lessons/01-shadcn-intro.md`
**Topics:** What is shadcn/ui, installation, using components, customization
**Time:** 20-25 minutes
**Activity:** Install shadcn/ui and use Button and Card components

### Lesson 2: Fetch API
**File:** `lessons/02-fetch-api.md`
**Topics:** HTTP requests, Fetch API syntax, promises, JSON parsing
**Time:** 20-25 minutes
**Activity:** Fetch data from a public API and log the results

### Lesson 3: Async Data in React
**File:** `lessons/03-async-data.md`
**Topics:** useEffect for data fetching, loading states, error handling
**Time:** 25-30 minutes
**Activity:** Build a component that fetches and displays data with loading/error states

### Lesson 4: React Router Basics
**File:** `lessons/04-routing-basics.md`
**Topics:** Installing React Router, routes, links, navigation, URL parameters
**Time:** 25-30 minutes
**Activity:** Create a multi-page app with navigation

### Lesson 5: Lucide React Icons
**File:** `lessons/05-icons.md`
**Topics:** Installing Lucide React, using icons, icon sizes and colors
**Time:** 15-20 minutes
**Activity:** Add icons to buttons and UI elements

---

## Exercises

### Exercise 1: shadcn Components ⭐
**Folder:** `exercises/01-shadcn-components/`
**Objective:** Install shadcn/ui and create a form using shadcn components
**Time:** 30-40 minutes
**Concepts:** Component installation, shadcn/ui usage, form components

### Exercise 2: Fetch Practice ⭐⭐
**Folder:** `exercises/02-fetch-practice/`
**Objective:** Fetch data from a public API and display it in a list
**Time:** 40-50 minutes
**Concepts:** Fetch API, JSON parsing, mapping data to components

### Exercise 3: Loading States ⭐⭐
**Folder:** `exercises/03-loading-states/`
**Objective:** Build a user list with loading, error, and empty states
**Time:** 45-60 minutes
**Concepts:** Async data fetching, conditional rendering, error handling

### Exercise 4: Routing Practice ⭐⭐⭐
**Folder:** `exercises/04-routing-practice/`
**Objective:** Create a multi-page app with navigation and URL parameters
**Time:** 60-75 minutes
**Concepts:** React Router, routes, links, useParams, navigation

---

## Homework: Product Search Application

**Assignment:** Build a product search and filter application that fetches data, displays it in a grid, and allows users to search and filter products by category.

**Features Required:**
- Fetch product data from mock JSON file
- Display products in a responsive grid using shadcn Card components
- Implement search functionality (filter by product name)
- Implement category filter (filter by product category)
- Show loading state while fetching data
- Show error state if fetch fails
- Show empty state if no products match filters
- Use Lucide React icons for UI elements
- Use React Router for navigation (Home and Product Detail pages)

**Time Estimate:** 3-4 hours
**Difficulty:** ⭐⭐⭐

**Testing:** Run `npm run test:module-08` to verify your solution

---

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [MDN Fetch API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [React Router Documentation](https://reactrouter.com/)
- [Lucide React Icons](https://lucide.dev/guide/packages/lucide-react)
- [JSONPlaceholder (Free API for testing)](https://jsonplaceholder.typicode.com/)

---

## Teacher Notes

### Pacing
- **Week 1:** Lessons 1-3, Exercises 1-3 (shadcn, fetching, loading states)
- **Week 2:** Lessons 4-5, Exercise 4, Homework (routing, icons, final project)

### Common Challenges
1. **shadcn/ui installation:** Students may forget to run `npx shadcn@latest init` before adding components
2. **Async timing:** Understanding when useEffect runs and when to fetch data can be tricky
3. **CORS errors:** If using real APIs, explain CORS and provide working public APIs
4. **Router setup:** Wrapping App in `<BrowserRouter>` is easy to forget
5. **URL parameters:** Using `useParams()` hook correctly takes practice

### Key Teaching Points
- **Component libraries save time:** Emphasize that shadcn/ui is copy-paste, not npm install (unlike other libraries)
- **Loading states matter:** Real apps always show loading states - never leave users wondering
- **Error handling is critical:** Always handle errors gracefully; don't let the app crash
- **Routing enables SPAs:** Explain how React Router makes single-page apps feel like multi-page apps
- **Icons improve UX:** Small visual cues make interfaces more intuitive

### Assessment Criteria
- ✅ Successfully installs and uses shadcn/ui components
- ✅ Fetches data correctly with proper async/await patterns
- ✅ Implements all three states: loading, error, success
- ✅ Sets up React Router with multiple routes
- ✅ Uses Lucide icons appropriately
- ✅ Implements search and filter functionality
- ✅ Code is well-organized and properly typed (TypeScript)
- ✅ Tests pass (when run after Jest configuration is fixed)

### Real-World Connection
This module bridges the gap between curriculum and real project work. Students are now equipped to:
- Build complete features from scratch
- Integrate external libraries and APIs
- Handle real-world data scenarios
- Create professional, polished UIs
- Navigate codebases with routing

After this module, students transition to working on real production code!

---

## Next Steps

After completing Module 8:
1. ✅ Complete all exercises and homework
2. ✅ Ensure all tests pass
3. ✅ Review any concepts that were challenging
4. ✅ Prepare to transition to the **final-project** phase
5. ✅ You're ready to contribute to real production codebases!

🎉 **Congratulations on completing the curriculum!** You now have the skills to build modern, professional web applications.

**Continue to:** `final-project/` for guidance on working with real codebases
