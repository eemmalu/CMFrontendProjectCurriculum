# Module 6: React Hooks

## Overview
In this module, you'll learn about advanced React hooks that give you more control over your components. You'll discover how to handle side effects with useEffect, share state across components with useContext, and create your own custom hooks to make your code more reusable.

**Estimated Time:** 2 weeks
**Difficulty:** ⭐⭐⭐

## Prerequisites
- Completion of Module 5 (TypeScript & React)
- Understanding of useState and basic React concepts
- Familiarity with component props and state
- Basic understanding of JavaScript async/await

## Concepts Covered
- Side effects and the useEffect hook
- Effect cleanup and dependencies
- The Context API for global state
- Creating and using context providers
- Building custom hooks
- Hook composition and reusability

## Learning Objectives
By the end of this module, you will be able to:
- [ ] Use useEffect to perform side effects (data fetching, subscriptions, etc.)
- [ ] Clean up effects to prevent memory leaks
- [ ] Understand and manage effect dependencies
- [ ] Create and use React Context for global state
- [ ] Build context providers and consumers
- [ ] Create custom hooks to encapsulate reusable logic
- [ ] Compose multiple hooks together
- [ ] Follow React hooks rules and best practices

## File Structure
```
module-06-react-hooks/
├── README.md (you are here)
├── lessons/
│   ├── 01-useEffect.md
│   ├── 02-useContext.md
│   └── 03-custom-hooks.md
├── exercises/
│   ├── 01-effect-practice/
│   ├── 02-context-practice/
│   └── 03-custom-hooks/
└── homework/
    ├── README.md
    ├── starter/
    └── tests/
```

## Lesson Breakdown

### Lesson 1: useEffect (60 minutes)
**Topics:**
- What are side effects?
- The useEffect hook
- Effect dependencies array
- Cleanup functions
- Common use cases (data fetching, timers, subscriptions)

**In-Class Activity:** Build a component that fetches data from an API when it mounts

### Lesson 2: useContext (45 minutes)
**Topics:**
- The problem with prop drilling
- What is React Context?
- Creating context with createContext
- Context providers and consumers
- Using the useContext hook
- When to use context vs props

**In-Class Activity:** Create a theme context that switches between light and dark mode

### Lesson 3: Custom Hooks (45 minutes)
**Topics:**
- Why create custom hooks?
- Custom hook naming convention (use prefix)
- Extracting logic into custom hooks
- Composing hooks together
- Custom hooks with multiple return values
- Testing custom hooks

**In-Class Activity:** Create a useLocalStorage custom hook

## Exercises

### Exercise 1: Effect Practice ⭐⭐
**File:** `exercises/01-effect-practice/`
**Time:** 30 minutes
Practice using useEffect with different scenarios: timers, data fetching, and cleanup.

### Exercise 2: Context Practice ⭐⭐
**File:** `exercises/02-context-practice/`
**Time:** 30 minutes
Build a user authentication context that can be accessed by any component in the app.

### Exercise 3: Custom Hooks ⭐⭐⭐
**File:** `exercises/03-custom-hooks/`
**Time:** 35 minutes
Create custom hooks for common tasks: useToggle, useFetch, useDebounce.

## Homework Assignment

### Stateful Application with Hooks
**File:** `homework/`
**Time:** 4-5 hours
**Difficulty:** ⭐⭐⭐

Build a complete task management application that uses:
- useEffect for data persistence to localStorage
- useContext for global app state (tasks, filters, theme)
- Custom hooks for reusable logic
- All previously learned concepts (components, props, state)

**Testing:** Run `npm run test:module-06` to validate your work.

## Resources
- [React useEffect Documentation](https://react.dev/reference/react/useEffect)
- [React useContext Documentation](https://react.dev/reference/react/useContext)
- [React Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)
- React Cheatsheet: `resources/cheatsheets/react-reference.md`

## Common Challenges

### Challenge 1: Infinite Effect Loops
**Problem:** useEffect runs continuously, causing performance issues
**Solution:** Check your dependencies array - you might be updating state that's in the dependencies

### Challenge 2: Stale Closures
**Problem:** Effect uses old values from previous renders
**Solution:** Include all used variables in the dependencies array, or use functional state updates

### Challenge 3: Missing Cleanup
**Problem:** Memory leaks or errors after component unmounts
**Solution:** Return a cleanup function from useEffect to cancel subscriptions, clear timers, etc.

### Challenge 4: Context Re-renders
**Problem:** Context consumers re-render too often
**Solution:** Split context into smaller pieces or use React.memo to prevent unnecessary renders

## Teacher Notes

### Pacing Suggestions
- **Week 1:** Lessons 1-2, Exercises 1-2, start homework
- **Week 2:** Lesson 3, Exercise 3, complete homework

### Key Teaching Points
1. **useEffect is for side effects** - Emphasize that it runs *after* render, not during
2. **Dependencies matter** - Spend time on the dependencies array, it's crucial
3. **Cleanup is important** - Show examples of what happens without cleanup (memory leaks)
4. **Context isn't always the answer** - Teach when to use context vs props vs state management libraries
5. **Custom hooks are just functions** - They're not magic, they just follow hook rules

### Common Student Mistakes
- Forgetting dependencies in useEffect (causes bugs)
- Using useEffect when you don't need it (just use regular event handlers!)
- Not cleaning up effects (memory leaks)
- Overusing context (prop drilling isn't always bad)
- Not following hook naming conventions (must start with "use")
- Calling hooks conditionally (breaks React's rules)

### Assessment Criteria
Students should be able to:
- Explain what a side effect is
- Use useEffect correctly with proper dependencies
- Clean up effects when needed
- Create and consume context
- Build custom hooks that follow React's rules
- Understand when to use each hook

### Debugging Tips for Students
- Use console.log in effects to see when they run
- Check React DevTools to see context values
- Add exhaustive dependencies (ESLint will help!)
- Look for "Warning: Can't perform a React state update on an unmounted component"

## Next Steps
After completing this module, you'll move on to:
- **Module 7: Tailwind CSS** - Style your React applications with utility-first CSS
- **Module 8: shadcn/ui & Data Fetching** - Use component libraries and work with APIs

---

## Rules of Hooks (Important!)

React hooks must follow these rules:

1. **Only call hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions** - Call hooks from functional components or custom hooks
3. **Custom hooks must start with "use"** - This lets React know it's a hook

```tsx
// ✅ Correct
function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // ...
  }, []);
}

// ❌ Wrong - conditional hook
function MyComponent() {
  if (someCondition) {
    const [count, setCount] = useState(0); // DON'T DO THIS
  }
}

// ❌ Wrong - hook in loop
function MyComponent() {
  for (let i = 0; i < 10; i++) {
    const [count, setCount] = useState(0); // DON'T DO THIS
  }
}
```

---

**Ready to start?** Open `lessons/01-useEffect.md` to begin!
