# Exercise 3: Component Styling

## Objective

Create reusable, well-styled React components with Tailwind CSS using composition patterns and state variants.

**Difficulty:** ⭐⭐⭐ (Advanced)
**Estimated Time:** 40-50 minutes

---

## What You'll Practice

- Extracting reusable components
- Creating component variants
- Using state variants (hover, focus, active)
- Group and peer utilities
- Smooth transitions and animations
- Composition patterns

---

## Instructions

In this exercise, you'll build a reusable component library with Button, Card, and Input components. Each component should support multiple variants and states.

### Step 1: Set Up the Exercise

1. Open `module-07-tailwind/exercises/03-component-styling/src/`
2. You'll find three component files: `Button.tsx`, `Card.tsx`, and `Input.tsx`
3. Each has TODO comments guiding you

### Step 2: Build the Button Component

The Button should support:
- **Variants:** primary, secondary, danger
- **Sizes:** sm, md, lg
- **States:** hover, focus, disabled
- **Smooth transitions** between states

Example usage:
```tsx
<Button variant="primary" size="md">Click me</Button>
<Button variant="danger" size="sm" disabled>Delete</Button>
```

### Step 3: Build the Card Component

The Card should:
- Have a clean, elevated design
- Support an optional `hoverable` prop that adds lift on hover
- Use the `group` utility to change header color on hover
- Have proper spacing and shadows

Example usage:
```tsx
<Card title="Card Title" hoverable>
  <p>Card content goes here</p>
</Card>
```

### Step 4: Build the Input Component

The Input should:
- Support a label
- Show an error state with error message
- Use the `peer` utility to style the label differently when focused
- Have clear focus states

Example usage:
```tsx
<Input label="Email" type="email" />
<Input label="Password" type="password" error="Password is required" />
```

### Step 5: Test Your Components

Open `App.tsx` and see all components in action. Make sure:
- All variants display correctly
- Hover effects work smoothly
- Focus states are visible
- Disabled states are clear
- Transitions are smooth

### Step 6: Run the Dev Server

```bash
npm run dev
```

---

## Expected Outcome

You should have:
- A `Button` component with 3 variants and 3 sizes
- A `Card` component with hover effects
- An `Input` component with focus and error states
- All components using Tailwind utilities
- Smooth transitions and good UX

---

## Learning Goals

By completing this exercise, you'll understand:
- How to create reusable styled components
- Component variant patterns
- Using TypeScript for component props
- State variants (hover, focus, disabled)
- Group and peer utilities
- Animation and transition patterns

---

## Bonus Challenges

If you finish early, try these:

1. **Add an Alert Component:** With success, warning, error, info variants
2. **Add a Badge Component:** Small colored labels
3. **Add Loading States:** Spinner or skeleton loading to Button
4. **Add Icon Support:** Use Lucide React icons in buttons
5. **Add Form Component:** Combine multiple inputs with validation

---

## Helpful Resources

- [Tailwind Reusing Styles](https://tailwindcss.com/docs/reusing-styles)
- [Tailwind Hover, Focus, and Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- Lesson 3: Composition Patterns
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

## Need Help?

- Review Lesson 3: Composition Patterns
- Look at how other component libraries structure their components
- Check the example usage in App.tsx
- Ask your teacher if you're stuck
