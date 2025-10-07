# Module 5 Homework: Interactive Component Library

## Assignment Overview
Build a complete library of interactive, typed React components and demonstrate them in a showcase application.

**Estimated Time:** 3-4 hours
**Difficulty:** ⭐⭐⭐

## Learning Objectives
By completing this homework, you will demonstrate:
- Ability to create functional React components
- Understanding of props and proper TypeScript typing
- Competency with the useState hook
- Skill in component composition
- Professional code organization

## Requirements

You will create **5 components** with proper TypeScript types:

### 1. Button Component ✅
**File:** `src/components/Button.tsx`

**Props:**
- `label` (string, required) - The button text
- `onClick` (function, required) - Click handler
- `variant` (optional) - One of: 'primary' | 'secondary' | 'success' | 'danger'
  - Default: 'primary'
  - Each variant should have a different background color
- `disabled` (optional boolean) - Whether button is disabled
  - Default: false
- `size` (optional) - One of: 'small' | 'medium' | 'large'
  - Default: 'medium'

**Requirements:**
- Must have visual distinction between variants
- Disabled buttons should appear faded and not trigger onClick
- Size prop should affect padding/font-size

---

### 2. Card Component ✅
**File:** `src/components/Card.tsx`

**Props:**
- `title` (string, required) - Card title
- `children` (ReactNode, required) - Card content
- `footer` (optional string) - Footer text
- `elevation` (optional number) - Shadow depth (0-3)
  - Default: 1

**Requirements:**
- Must render children between title and footer
- Elevation should add box shadow (more elevation = stronger shadow)
- Should have border and padding

---

### 3. Input Component ✅
**File:** `src/components/Input.tsx`

**Props:**
- `label` (string, required) - Input label
- `value` (string, required) - Current value
- `onChange` (function, required) - Change handler: `(value: string) => void`
- `placeholder` (optional string) - Placeholder text
- `type` (optional) - One of: 'text' | 'email' | 'password' | 'number'
  - Default: 'text'
- `error` (optional string) - Error message to display

**Requirements:**
- Label should be displayed above input
- Error message (if provided) should display below input in red
- Input should have border styling
- Error state should change border color to red

---

### 4. Counter Component ✅
**File:** `src/components/Counter.tsx`

**Props:**
- `initialValue` (optional number) - Starting count
  - Default: 0
- `step` (optional number) - Amount to increment/decrement
  - Default: 1
- `min` (optional number) - Minimum allowed value
- `max` (optional number) - Maximum allowed value
- `onChange` (optional function) - Called when count changes: `(value: number) => void`

**Requirements:**
- Must use useState to manage current count
- Three buttons: Decrement, Reset, Increment
- Respect min/max boundaries (don't go beyond them)
- Display current count prominently
- Call onChange callback when count changes (if provided)

---

### 5. ToggleSwitch Component ✅
**File:** `src/components/ToggleSwitch.tsx`

**Props:**
- `label` (string, required) - Toggle label
- `checked` (boolean, required) - Current state
- `onChange` (function, required) - Change handler: `(checked: boolean) => void`
- `disabled` (optional boolean) - Whether toggle is disabled
  - Default: false

**Requirements:**
- Must visually represent on/off state
- When clicked, should call onChange with opposite value
- Disabled state should prevent interaction
- Should look like a switch/toggle (creative styling encouraged!)

---

### 6. App Component (Showcase) ✅
**File:** `src/App.tsx`

**Requirements:**
Your App component must demonstrate ALL components:

1. Show all Button variants (primary, secondary, success, danger)
2. Show all Button sizes (small, medium, large)
3. Show a disabled Button
4. Show at least 2 Cards with different elevations
5. Show at least 2 Input components (different types)
6. Show an Input with an error message
7. Show a basic Counter
8. Show a Counter with min/max bounds and custom step
9. Show at least 2 ToggleSwitch components
10. Use state in App to manage Input and ToggleSwitch values

**Organization:**
- Group related demos in Cards
- Use clear headings
- Make it visually appealing

---

## Starter Code

The `starter/` folder contains:
- Basic Vite React TypeScript setup
- Placeholder component files with TODOs
- App.tsx with structure

**Your job:** Fill in all the TODOs!

---

## Testing Your Work

### Manual Testing
1. Navigate to the `homework/starter` directory
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Test all components:
   - Click all buttons - verify onClick works
   - Type in inputs - verify onChange updates display
   - Toggle switches - verify they toggle
   - Click counters - verify they increment/decrement
   - Verify min/max bounds work
   - Test disabled states

### Automated Testing
Run the test suite:
```bash
npm run test:module-05
```

All tests must pass for full credit!

---

## Submission Checklist

Before submitting, ensure:
- [ ] All 5 component files are complete
- [ ] All components have proper TypeScript interfaces
- [ ] App.tsx demonstrates all components
- [ ] All TODOs are completed
- [ ] No TypeScript errors
- [ ] `npm run dev` runs without errors
- [ ] All automated tests pass
- [ ] Code is well-formatted

---

## Grading Rubric

| Category | Points | Criteria |
|----------|--------|----------|
| **Button Component** | 15 | All props work, variants styled correctly |
| **Card Component** | 15 | Renders children, elevation works, has footer |
| **Input Component** | 15 | Label, error state, types work correctly |
| **Counter Component** | 20 | State management, bounds, reset functionality |
| **ToggleSwitch Component** | 15 | Visual toggle, onChange works, disabled state |
| **App Showcase** | 10 | All components demonstrated clearly |
| **TypeScript Types** | 5 | All props properly typed, no `any` types |
| **Code Quality** | 5 | Clean, readable, well-organized |
| **Total** | **100** | |

---

## Bonus Challenges (Optional)

Want to go further? Try these:

- 🌟 **Alert Component** - Shows dismissible messages (info/success/warning/error)
- 🌟 **ProgressBar Component** - Shows completion percentage
- 🌟 **Tabs Component** - Switches between different content panels
- 🌟 **Badge Component** - Small notification badge with count
- 🌟 **Separate CSS files** - Move inline styles to CSS modules
- 🌟 **Dark mode** - Add a theme toggle that switches all colors
- 🌟 **Animations** - Add CSS transitions to buttons and toggles

---

## Common Issues & Solutions

### TypeScript Errors

**Error:** "Property 'X' does not exist on type..."
**Solution:** Make sure you defined all props in your interface

**Error:** "Type 'string' is not assignable to type 'never'"
**Solution:** You probably forgot to type your useState: `useState<string>('')`

### Component Issues

**Issue:** Component doesn't re-render when state changes
**Solution:** Make sure you're using the setter function from useState

**Issue:** Props aren't being passed correctly
**Solution:** Check that prop names match between interface and usage

**Issue:** Button onClick doesn't work
**Solution:** Make sure you're passing a function reference, not calling it: `onClick={handler}` not `onClick={handler()}`

### Styling Issues

**Issue:** Components look plain
**Solution:** Add CSS! Use border, padding, border-radius, box-shadow, colors

**Issue:** Inline styles are messy
**Solution:** Create a function that returns the style object based on props

---

## Getting Help

If you're stuck:
1. Read the error message carefully
2. Check the lesson files in `module-05-typescript-react/lessons/`
3. Review the exercise solutions
4. Check `resources/common-errors.md`
5. Ask your teacher!

---

## What You'll Learn

This homework will solidify your understanding of:
- Creating reusable React components
- Managing component state with useState
- Typing props with TypeScript
- Handling events (clicks, changes, toggles)
- Component composition with children
- Building a component showcase/documentation

These skills are fundamental to React development and will be used in every future module!

---

Good luck! Remember: the goal is to build components that are **reusable, well-typed, and thoroughly tested**. Take your time and make them polished! 🚀
