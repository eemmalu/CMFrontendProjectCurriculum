# Module 7: Tailwind CSS

## Overview

Welcome to Module 7! In this module, you'll learn Tailwind CSS, a utility-first CSS framework that makes styling React applications fast and maintainable. Instead of writing custom CSS classes, you'll use pre-built utility classes directly in your JSX to create beautiful, responsive designs.

**Estimated Time:** 1-2 weeks
**Prerequisites:** Module 6 (React Hooks)

---

## What You'll Learn

By the end of this module, you will be able to:
- Understand utility-first CSS and how Tailwind works
- Use Tailwind utility classes for layout, spacing, colors, and typography
- Build responsive designs with Tailwind's breakpoint system
- Create reusable component patterns with Tailwind
- Apply hover, focus, and other state variants
- Use Tailwind's color palette and customize when needed

---

## File Structure

```
module-07-tailwind/
├── README.md (this file)
├── lessons/
│   ├── 01-tailwind-intro.md
│   ├── 02-responsive-tailwind.md
│   └── 03-composition-patterns.md
├── exercises/
│   ├── 01-tailwind-basics/
│   │   ├── README.md
│   │   └── src/
│   ├── 02-responsive-design/
│   │   ├── README.md
│   │   └── src/
│   └── 03-component-styling/
│       ├── README.md
│       └── src/
└── homework/
    ├── README.md
    ├── starter/
    │   └── src/
    └── tests/
        └── homework.test.tsx
```

---

## Lesson Breakdown

### Lesson 1: Tailwind Introduction (45 min)
**Topics:**
- What is utility-first CSS?
- Tailwind v4 setup with Vite
- Core utility classes (padding, margin, colors, typography)
- Reading Tailwind documentation

**In-Class Activity:**
- Style a simple card component with Tailwind utilities
- Experiment with spacing and color utilities

### Lesson 2: Responsive Tailwind (45 min)
**Topics:**
- Mobile-first design philosophy
- Tailwind breakpoints (sm, md, lg, xl, 2xl)
- Responsive utility classes
- Flexbox and Grid with Tailwind
- Display utilities for different screen sizes

**In-Class Activity:**
- Build a navigation bar that transforms on mobile
- Create a responsive grid layout

### Lesson 3: Composition Patterns (45 min)
**Topics:**
- Extracting components to avoid repetition
- When to use Tailwind classes vs. custom CSS
- Pseudo-classes (hover, focus, active)
- Group and peer utilities
- Dark mode with Tailwind

**In-Class Activity:**
- Refactor repeated styles into reusable components
- Add interactive hover and focus states

---

## Exercises

### Exercise 1: Tailwind Basics ⭐
**Focus:** Learn core Tailwind utility classes
**Time:** 20-30 minutes
**Skills:** Spacing, colors, typography, borders

### Exercise 2: Responsive Design ⭐⭐
**Focus:** Build mobile-first responsive layouts
**Time:** 30-40 minutes
**Skills:** Breakpoints, flexbox, grid, responsive utilities

### Exercise 3: Component Styling ⭐⭐⭐
**Focus:** Create reusable styled components
**Time:** 40-50 minutes
**Skills:** Component composition, state variants, custom patterns

---

## Homework Assignment

**Project:** Style a Task Manager with Tailwind

Re-style the Task Manager application from Module 6 using Tailwind CSS. You'll replace all custom CSS with Tailwind utility classes to create a modern, responsive interface.

**Requirements:**
- Use Tailwind utilities for all styling (no custom CSS)
- Responsive design (mobile, tablet, desktop)
- Hover and focus states on interactive elements
- Clean, modern design with proper spacing
- Color scheme using Tailwind's palette

**Testing:**
Run `npm run test:module-07` to check your work.

**Estimated Time:** 3-4 hours

---

## Key Concepts

### Utility-First CSS
Instead of writing custom CSS classes like `.button-primary`, you compose styles using utility classes like `bg-blue-500 text-white px-4 py-2 rounded`.

### Responsive Breakpoints
Tailwind uses a mobile-first approach:
- Default: Mobile (< 640px)
- `sm:` Small screens (≥ 640px)
- `md:` Medium screens (≥ 768px)
- `lg:` Large screens (≥ 1024px)
- `xl:` Extra large (≥ 1280px)
- `2xl:` 2X large (≥ 1536px)

### State Variants
Apply styles on hover, focus, active, and other states:
- `hover:bg-blue-600` - Apply on hover
- `focus:ring-2` - Apply on focus
- `active:scale-95` - Apply when active
- `disabled:opacity-50` - Apply when disabled

---

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Tailwind Cheatsheet](../resources/cheatsheets/tailwind-reference.md)
- [Tailwind Play](https://play.tailwindcss.com/) - Online playground
- [Common Errors Guide](../resources/common-errors.md#module-7)

---

## Teacher Notes

### Pacing
- **Week 1:** Lessons 1-2, Exercises 1-2
- **Week 2:** Lesson 3, Exercise 3, Homework

### Common Challenges
1. **Too many classes** - Students may feel overwhelmed by long className strings
   - **Solution:** Break into multiple lines in your editor, use component extraction
2. **Forgetting mobile-first** - Students apply desktop styles first
   - **Solution:** Always start without breakpoints (mobile), then add `sm:`, `md:`, etc.
3. **Not using documentation** - Students try to memorize all classes
   - **Solution:** Encourage frequent reference to Tailwind docs
4. **Spacing confusion** - Understanding the spacing scale (4px units)
   - **Solution:** Show visual examples: `p-1` = 4px, `p-2` = 8px, `p-4` = 16px

### Assessment Criteria
- Uses Tailwind utilities correctly (no custom CSS)
- Implements responsive design properly
- Applies appropriate spacing and visual hierarchy
- Uses state variants (hover, focus) on interactive elements
- Clean, readable className organization

---

## What's Next?

After completing Module 7, you'll move on to:
- **Module 8:** shadcn/ui component library, data fetching, and React Router
- Learn to integrate pre-built components with Tailwind
- Fetch data from APIs and handle loading states
- Build multi-page applications with client-side routing

---

## Getting Help

If you get stuck:
1. Check the [Tailwind documentation](https://tailwindcss.com/docs)
2. Review the [Common Errors guide](../resources/common-errors.md#module-7)
3. Re-read the lesson materials
4. Ask your teacher for guidance

Remember: Tailwind has a learning curve, but once you understand the patterns, you'll be able to style components much faster than writing custom CSS!
