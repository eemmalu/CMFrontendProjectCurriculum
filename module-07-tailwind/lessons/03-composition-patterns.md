# Lesson 3: Composition Patterns

## Learning Objectives

By the end of this lesson, you will:
- Extract reusable components to avoid repetition
- Know when to use Tailwind vs. custom CSS
- Use pseudo-class variants (hover, focus, active)
- Understand group and peer utilities for related elements
- Implement basic dark mode patterns

---

## The Problem: Repetitive Classes

When you start using Tailwind, you'll notice the same combinations of classes appearing repeatedly:

```tsx
function App() {
  return (
    <div>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
        Button 1
      </button>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
        Button 2
      </button>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
        Button 3
      </button>
    </div>
  )
}
```

This is repetitive and hard to maintain. If you want to change the button style, you have to update it everywhere!

---

## Solution 1: Extract Components

The best way to reuse styles is to create React components:

```tsx
// Button.tsx
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
    >
      {children}
    </button>
  )
}

// App.tsx
function App() {
  return (
    <div>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </div>
  )
}
```

Now the styling is in one place! If you want to change all buttons, just update the `Button` component.

---

## Solution 2: Component Variants

Often you need multiple styles of the same component (primary button, secondary button, etc.):

```tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  onClick?: () => void
}

function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const baseClasses = 'px-6 py-2 rounded-lg font-medium transition-colors'

  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  )
}

// Usage
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger">Delete</Button>
```

---

## Pseudo-Class Variants

Tailwind makes it easy to style hover, focus, active, and other states.

### Hover

```jsx
<button className="bg-blue-500 hover:bg-blue-600">
  Hover me
</button>
```

### Focus

```jsx
<input className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
```

### Active (When Pressed)

```jsx
<button className="bg-blue-500 active:bg-blue-700">
  Press me
</button>
```

### Disabled

```jsx
<button
  disabled
  className="bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
>
  Disabled
</button>
```

### Combining States

You can combine multiple states:

```jsx
<button className="
  bg-blue-500 text-white px-4 py-2 rounded
  hover:bg-blue-600
  focus:ring-2 focus:ring-blue-300
  active:bg-blue-700
  disabled:bg-gray-300 disabled:cursor-not-allowed
">
  Button
</button>
```

---

## Transitions & Animations

Add smooth transitions to state changes:

```jsx
// Color transition
<button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200">
  Smooth color change
</button>

// All properties transition
<button className="bg-blue-500 hover:scale-105 transition-all duration-300">
  Smooth scale and color
</button>

// Transform on hover
<div className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300">
  Lift on hover
</div>
```

**Common Transition Properties:**
- `transition-colors` - Color changes
- `transition-opacity` - Opacity changes
- `transition-transform` - Scale, rotate, translate
- `transition-all` - All properties (use sparingly, can be slower)

**Duration:**
- `duration-75` - 75ms (very fast)
- `duration-150` - 150ms (fast)
- `duration-200` - 200ms (default)
- `duration-300` - 300ms (smooth)
- `duration-500` - 500ms (slow)

---

## Group Utilities

Use `group` to style child elements when hovering/focusing on a parent:

```tsx
function Card() {
  return (
    <div className="group bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">
        Card Title
      </h3>
      <p className="text-gray-600">Hover over the card to see the title change color</p>
    </div>
  )
}
```

**How it works:**
1. Add `group` class to the parent
2. Add `group-hover:` variant to children
3. When you hover the parent, all `group-hover:` styles activate

**More examples:**

```tsx
// Image zoom on card hover
<div className="group overflow-hidden rounded-lg">
  <img
    src="/image.jpg"
    className="group-hover:scale-110 transition-transform duration-300"
  />
</div>

// Show button on hover
<div className="group relative">
  <img src="/image.jpg" />
  <button className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
    View
  </button>
</div>
```

---

## Peer Utilities

Use `peer` to style one element based on the state of a sibling:

```tsx
function Checkbox() {
  return (
    <label className="flex items-center gap-2">
      <input type="checkbox" className="peer" />
      <span className="peer-checked:text-blue-500 peer-checked:font-bold">
        Check me
      </span>
    </label>
  )
}
```

**How it works:**
1. Add `peer` class to the element you want to watch
2. Add `peer-*:` variants to siblings
3. When the peer changes state, siblings update

**More examples:**

```tsx
// Show error message when input is invalid
<div>
  <input type="email" className="peer border" required />
  <p className="hidden peer-invalid:block text-red-500">
    Please enter a valid email
  </p>
</div>

// Style label when input is focused
<div>
  <input type="text" className="peer border" />
  <label className="peer-focus:text-blue-500 peer-focus:font-medium">
    Email
  </label>
</div>
```

---

## Dark Mode

Tailwind supports dark mode with the `dark:` variant:

```tsx
function Card() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold">Card Title</h2>
      <p className="text-gray-600 dark:text-gray-300">
        This card adapts to dark mode
      </p>
    </div>
  )
}
```

**Note:** Dark mode requires configuration in your app. The `dark:` prefix applies styles when a parent element has the `dark` class or when the system is in dark mode.

---

## When to Use Custom CSS

While Tailwind handles most styling needs, sometimes custom CSS is better:

### Use Custom CSS When:

1. **Animations** - Complex keyframe animations
```css
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.bounce-slow {
  animation: bounce-slow 2s infinite;
}
```

2. **Very specific selectors** - Targeting specific HTML structures
```css
.prose h2:first-of-type {
  margin-top: 0;
}
```

3. **Print styles** - Styles for printing
```css
@media print {
  .no-print {
    display: none;
  }
}
```

4. **Third-party library overrides** - When you need to use `!important` to override a library

### Use Tailwind When:

- Building layouts (flex, grid)
- Spacing (padding, margin)
- Colors and typography
- Responsive design
- State variants (hover, focus)
- Most day-to-day styling

---

## Organizing Long Class Names

When class names get long, use these strategies:

### Strategy 1: Multiple Lines

```tsx
<button className="
  bg-blue-500 text-white
  px-6 py-3 rounded-lg
  hover:bg-blue-600 focus:ring-2 focus:ring-blue-300
  transition-colors duration-200
">
  Button
</button>
```

### Strategy 2: Template Literals with Variables

```tsx
const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-colors'
const colorClasses = 'bg-blue-500 text-white hover:bg-blue-600'

<button className={`${baseClasses} ${colorClasses}`}>
  Button
</button>
```

### Strategy 3: Conditional Classes with clsx

```tsx
import clsx from 'clsx'

function Button({ variant, isLoading }: Props) {
  return (
    <button className={clsx(
      'px-6 py-3 rounded-lg font-medium transition-colors',
      variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
      variant === 'secondary' && 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      isLoading && 'opacity-50 cursor-wait'
    )}>
      {children}
    </button>
  )
}
```

---

## Real-World Example: Styled Components

Here's a complete example of a reusable component library:

```tsx
// Button.tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  onClick
}: ButtonProps) {
  const baseClasses = 'rounded-lg font-medium transition-colors'

  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {children}
    </button>
  )
}

// Usage
<Button variant="primary" size="md">Save</Button>
<Button variant="danger" size="sm">Delete</Button>
<Button variant="secondary" size="lg" disabled>Loading...</Button>
```

---

## Common Pitfalls

### ❌ Creating Too Many Components Too Early

Start with inline Tailwind classes. Extract components only when you notice repetition.

### ❌ Using Custom CSS When Tailwind Works

Before writing custom CSS, check if Tailwind has utilities for it.

### ❌ Forgetting Transitions

Interactive elements feel better with smooth transitions:

```tsx
// Abrupt (not great)
<button className="bg-blue-500 hover:bg-blue-600">Click</button>

// Smooth (better!)
<button className="bg-blue-500 hover:bg-blue-600 transition-colors">Click</button>
```

### ❌ Overusing group/peer

These are powerful but can be confusing. Use them when they make sense, not everywhere.

---

## Practice Checkpoint

1. How do you style an element on hover?
2. What's the benefit of extracting components?
3. How do you add a smooth color transition?
4. What's the difference between `group` and `peer`?

**Answers:**
1. Add `hover:` prefix to utilities (e.g., `hover:bg-blue-600`)
2. Reuse styles, easier to maintain, single source of truth
3. Add `transition-colors` class (e.g., `hover:bg-blue-600 transition-colors`)
4. `group` styles children based on parent state, `peer` styles siblings based on sibling state

---

## Next Steps

You're now ready to:
- Complete the exercises
- Work on the homework (re-styling a React app with Tailwind)
- Build production-ready components with Tailwind

---

## Additional Resources

- [Tailwind Hover, Focus, and Other States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Tailwind Reusing Styles](https://tailwindcss.com/docs/reusing-styles)
- [Tailwind Dark Mode](https://tailwindcss.com/docs/dark-mode)
