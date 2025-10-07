# Module 5: TypeScript & React

## Overview
In this module, you'll learn the fundamentals of React, a powerful JavaScript library for building user interfaces. You'll discover how to create components, manage state, and build interactive web applications using modern tools like Vite and TypeScript.

**Estimated Time:** 2 weeks
**Difficulty:** ⭐⭐⭐

## Prerequisites
- Completion of Module 4 (Modern JavaScript & TypeScript)
- Understanding of TypeScript basics
- Familiarity with ES6+ features (arrow functions, destructuring, etc.)
- Basic DOM manipulation knowledge

## Concepts Covered
- Setting up a React project with Vite
- JSX syntax and expressions
- Creating functional components
- Props and component composition
- State management with useState
- TypeScript in React (typing props and state)
- Component lifecycle basics

## Learning Objectives
By the end of this module, you will be able to:
- [ ] Set up a new React project using Vite and TypeScript
- [ ] Write JSX to describe UI elements
- [ ] Create reusable functional components
- [ ] Pass data between components using props
- [ ] Type props and state using TypeScript interfaces
- [ ] Manage component state with the useState hook
- [ ] Handle user events in React
- [ ] Build a simple interactive application

## File Structure
```
module-05-typescript-react/
├── README.md (you are here)
├── lessons/
│   ├── 01-vite-setup.md
│   ├── 02-jsx-basics.md
│   ├── 03-components-props.md
│   └── 04-state-basics.md
├── exercises/
│   ├── 01-first-component/
│   ├── 02-props-practice/
│   ├── 03-state-practice/
│   └── 04-component-library/
└── homework/
    ├── README.md
    ├── starter/
    └── tests/
```

## Lesson Breakdown

### Lesson 1: Vite Setup (30 minutes)
**Topics:**
- What is Vite and why use it?
- Creating a React + TypeScript project
- Understanding the project structure
- Running the development server

**In-Class Activity:** Create your first Vite React app and explore the file structure

### Lesson 2: JSX Basics (45 minutes)
**Topics:**
- What is JSX?
- JSX syntax rules
- Embedding JavaScript expressions
- Conditional rendering
- Rendering lists

**In-Class Activity:** Practice writing JSX with different data types and expressions

### Lesson 3: Components & Props (45 minutes)
**Topics:**
- What are components?
- Creating functional components
- Props: passing data to components
- Typing props with TypeScript
- Component composition
- Children prop

**In-Class Activity:** Build a card component that accepts different props

### Lesson 4: State Basics (45 minutes)
**Topics:**
- What is state?
- The useState hook
- Updating state
- State vs Props
- Typing state with TypeScript
- Event handling in React

**In-Class Activity:** Create a counter component with state

## Exercises

### Exercise 1: First Component ⭐
**File:** `exercises/01-first-component/`
**Time:** 15 minutes
Create your first React component that displays a welcome message.

### Exercise 2: Props Practice ⭐⭐
**File:** `exercises/02-props-practice/`
**Time:** 20 minutes
Build a user profile card component that accepts props for name, bio, and avatar.

### Exercise 3: State Practice ⭐⭐
**File:** `exercises/03-state-practice/`
**Time:** 25 minutes
Create an interactive button that tracks how many times it's been clicked.

### Exercise 4: Component Library ⭐⭐⭐
**File:** `exercises/04-component-library/`
**Time:** 30 minutes
Build a small library of reusable components (Button, Card, Input) with typed props.

## Homework Assignment

### Interactive Component Library
**File:** `homework/`
**Time:** 3-4 hours
**Difficulty:** ⭐⭐⭐

Build a library of interactive, typed React components including:
- A Button component with variants
- A Card component with customizable content
- An Input component with state
- A Counter component
- A showcase App that demonstrates all components

**Testing:** Run `npm run test:module-05` to validate your work.

## Resources
- [React Official Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript with React](https://react-typescript-cheatsheet.netlify.app/)
- React Cheatsheet: `resources/cheatsheets/react-reference.md`
- TypeScript Cheatsheet: `resources/cheatsheets/typescript-reference.md`

## Common Challenges

### Challenge 1: JSX Syntax Errors
**Problem:** Forgetting to close tags or use curly braces for expressions
**Solution:** Remember that JSX requires all tags to be closed (even `<input />`) and JavaScript expressions must be wrapped in `{}`

### Challenge 2: Props vs State Confusion
**Problem:** Not knowing when to use props vs state
**Solution:** Props are passed from parent to child and are read-only. State is managed within a component and can change.

### Challenge 3: TypeScript Prop Types
**Problem:** Type errors when passing props
**Solution:** Define clear interfaces for your props and ensure you're passing the correct types

### Challenge 4: Updating State Correctly
**Problem:** Directly mutating state instead of using setState
**Solution:** Always use the setter function from useState, never modify state directly

## Teacher Notes

### Pacing Suggestions
- **Week 1:** Lessons 1-2, Exercises 1-2, start homework
- **Week 2:** Lessons 3-4, Exercises 3-4, complete homework

### Key Teaching Points
1. Emphasize that React is just JavaScript - the skills they've learned still apply
2. Show the difference between imperative DOM manipulation and declarative React
3. Use the React DevTools browser extension to visualize component hierarchy
4. Start with simple examples and gradually increase complexity
5. Encourage students to think in components - breaking UI into reusable pieces

### Assessment Criteria
Students should be able to:
- Set up a React project independently
- Write valid JSX with proper syntax
- Create components that accept and use props
- Type props and state correctly with TypeScript
- Use useState to manage component state
- Handle basic user interactions

### Common Student Questions
**Q: Why do we need Vite?**
A: Vite makes development faster with instant updates and handles all the complex build configuration for us.

**Q: What's the difference between HTML and JSX?**
A: JSX looks like HTML but it's actually JavaScript. Some attributes are different (className instead of class) and you can embed JavaScript expressions with `{}`.

**Q: When should I create a new component?**
A: When you have a piece of UI that you'll reuse, or when you want to organize your code better. Think of components like functions - they should do one thing well.

**Q: Why use TypeScript with React?**
A: TypeScript catches errors before you run your code and makes it easier to understand what props a component expects.

## Next Steps
After completing this module, you'll move on to:
- **Module 6: React Hooks** - Learn about useEffect, useContext, and custom hooks
- Build more complex stateful applications
- Manage side effects and global state

---

**Ready to start?** Open `lessons/01-vite-setup.md` to begin!
