# Module 7 Homework: Style a Task Manager with Tailwind CSS

## Overview

In this assignment, you'll take a functional Task Manager application and transform it into a beautiful, responsive interface using Tailwind CSS. The application already works—your job is to make it look professional and polished.

**Estimated Time:** 3-4 hours
**Difficulty:** ⭐⭐⭐

---

## Learning Objectives

By completing this homework, you will:
- Apply Tailwind utilities to a complete React application
- Create a responsive, mobile-first design
- Use state variants for interactive elements
- Implement a consistent design system
- Practice component composition with Tailwind

---

## Project Description

You'll be styling a Task Manager that includes:
- A header with the app title
- An input form to add new tasks
- A list of tasks with checkboxes and delete buttons
- Filter buttons (All, Active, Completed)
- A task counter

The functionality is already implemented. You just need to add Tailwind classes to make it beautiful!

---

## Requirements Checklist

### ✅ Layout & Structure (25 points)
- [ ] Responsive container with proper max-width and centering
- [ ] Appropriate padding/spacing on mobile, tablet, and desktop
- [ ] Clean visual hierarchy with proper spacing between sections
- [ ] Background color that provides good contrast

### ✅ Header Section (15 points)
- [ ] Large, bold title that's responsive
- [ ] Centered text with appropriate margins
- [ ] Visually distinct from rest of the page

### ✅ Task Input Form (20 points)
- [ ] Styled input field with border and focus states
- [ ] Styled "Add Task" button with hover effect
- [ ] Proper spacing between input and button
- [ ] Responsive layout (stacked on mobile, inline on desktop)
- [ ] Visual feedback on interaction

### ✅ Task List (25 points)
- [ ] Clean, card-like styling for each task item
- [ ] Hover effects on task items
- [ ] Completed tasks visually distinct (strikethrough, different color)
- [ ] Delete button styled with hover effect
- [ ] Checkbox styled appropriately
- [ ] Proper spacing between tasks

### ✅ Filter Buttons (10 points)
- [ ] Buttons styled with Tailwind utilities
- [ ] Active filter visually distinct from inactive filters
- [ ] Hover states on all buttons
- [ ] Proper spacing between buttons

### ✅ Task Counter (5 points)
- [ ] Styled text that stands out
- [ ] Appropriate color and size

### ✅ Responsive Design (15 points)
- [ ] Works well on mobile (< 768px)
- [ ] Works well on tablet (768px - 1024px)
- [ ] Works well on desktop (> 1024px)
- [ ] No horizontal scrolling on any screen size

### ✅ Polish & UX (10 points)
- [ ] Smooth transitions on interactive elements
- [ ] Consistent color scheme throughout
- [ ] Good use of shadows and depth
- [ ] Professional, modern appearance

---

## Getting Started

### Step 1: Review the Starter Code

1. Navigate to `module-07-tailwind/homework/starter/src/`
2. Review the files:
   - `App.tsx` - Main component with task logic
   - `components/TaskItem.tsx` - Individual task component
   - `components/TaskInput.tsx` - Input form component
   - `components/FilterButtons.tsx` - Filter buttons component

### Step 2: Read Through the TODOs

Each file has TODO comments showing where to add Tailwind classes. Don't change the functionality—just add styling!

### Step 3: Start with the Layout

Begin by styling the overall layout in `App.tsx`:
- Container
- Background
- Spacing

### Step 4: Style Each Component

Work through each component file:
1. `TaskInput.tsx` - Style the input form
2. `TaskItem.tsx` - Style individual tasks
3. `FilterButtons.tsx` - Style the filter buttons

### Step 5: Add Responsive Breakpoints

Make sure your design works on all screen sizes using `md:` and `lg:` prefixes.

### Step 6: Add Polish

- Smooth transitions
- Hover effects
- Focus states
- Shadows and depth

---

## Design Guidelines

### Color Scheme Suggestion

You can use any colors you like, but here's a suggestion:
- **Primary:** Blue (blue-500, blue-600)
- **Success/Complete:** Green (green-500)
- **Danger/Delete:** Red (red-500, red-600)
- **Background:** Light gray (gray-50, gray-100)
- **Text:** Dark gray (gray-700, gray-800, gray-900)
- **Borders:** Medium gray (gray-300, gray-400)

### Spacing Guidelines

- Use consistent spacing scale (4px units)
- More space between major sections
- Less space within components
- Breathing room around interactive elements

### Typography Guidelines

- Large, bold headings
- Clear hierarchy (size differences)
- Good line height for readability
- Responsive font sizes

---

## Running Your Code

### Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Testing

```bash
npm run test:module-07
```

Tests will check:
- Presence of Tailwind classes
- Responsive design implementation
- Proper use of state variants
- Component structure

---

## Example Design

Your final design should look something like this:

**Mobile:**
- Stacked layout
- Full-width elements
- Easy to tap buttons
- Comfortable spacing

**Desktop:**
- Centered container (max-width)
- Inline form layout
- Hover effects visible
- Generous whitespace

---

## Submission

When you're done:
1. Make sure all tests pass: `npm run test:module-07`
2. Commit your changes: `git add . && git commit -m "Complete Module 7 homework"`
3. Push to your fork: `git push`

Your teacher will review your work!

---

## Tips for Success

### Do's ✅
- Start with mobile styling, then add desktop breakpoints
- Use the Tailwind documentation frequently
- Keep class names organized (group related utilities)
- Test on different screen sizes
- Use smooth transitions for better UX

### Don'ts ❌
- Don't write any custom CSS (use only Tailwind)
- Don't change the React functionality
- Don't remove or modify the TODO comments until you complete them
- Don't forget about hover and focus states

---

## Common Pitfalls

### 1. Forgetting Mobile-First

❌ Wrong:
```jsx
<div className="lg:text-base text-xs">
```

✅ Right:
```jsx
<div className="text-xs lg:text-base">
```

### 2. Not Adding Transitions

❌ Without transition:
```jsx
<button className="bg-blue-500 hover:bg-blue-600">
```

✅ With transition:
```jsx
<button className="bg-blue-500 hover:bg-blue-600 transition-colors">
```

### 3. Inconsistent Spacing

Use the same spacing scale throughout:
- `p-4`, `p-6`, `p-8` (not random values)
- `gap-4`, `gap-6` (consistent gaps)

---

## Bonus Challenges

If you finish early and want extra practice:

1. **Add Dark Mode** - Use `dark:` variants to support dark mode
2. **Add Task Priority Colors** - Different colors for high/medium/low priority
3. **Add Animations** - Animate tasks appearing/disappearing
4. **Add Drag and Drop Styling** - Visual feedback for draggable tasks
5. **Add Empty State** - Beautiful empty state when no tasks exist

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Cheatsheet](../../resources/cheatsheets/tailwind-reference.md)
- [Common Errors Guide](../../resources/common-errors.md#module-7)
- Module 7 Lessons (review as needed)

---

## Grading Rubric

| Category | Points | Description |
|----------|--------|-------------|
| Layout & Structure | 25 | Responsive, well-organized, proper spacing |
| Component Styling | 45 | All components styled well (header, input, tasks, filters, counter) |
| Responsive Design | 15 | Works on mobile, tablet, desktop |
| Polish & UX | 15 | Transitions, hover states, professional appearance |
| **Total** | **100** | |

**Passing Grade:** 70 points

---

## Getting Help

If you're stuck:
1. Review the Module 7 lessons
2. Check the [Tailwind documentation](https://tailwindcss.com/docs)
3. Look at the exercise examples
4. Ask your teacher for guidance

Remember: The goal is to learn Tailwind, so take your time and experiment with different utilities!

Good luck! 🎨
