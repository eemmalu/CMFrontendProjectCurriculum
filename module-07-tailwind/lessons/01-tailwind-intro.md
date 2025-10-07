# Lesson 1: Tailwind CSS Introduction

## Learning Objectives

By the end of this lesson, you will:
- Understand what utility-first CSS means
- Know how Tailwind v4 is set up in a Vite project
- Be able to use core Tailwind utility classes
- Know how to read Tailwind documentation

---

## What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework**. Instead of writing custom CSS classes and rules, you compose styles directly in your HTML/JSX using pre-built utility classes.

### Traditional CSS Approach

```css
/* styles.css */
.card {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}
```

```jsx
<div className="card">
  <h2 className="card-title">My Card</h2>
  <p>Card content here</p>
</div>
```

### Tailwind Approach

```jsx
<div className="bg-white rounded-lg p-4 shadow">
  <h2 className="text-xl font-bold mb-2">My Card</h2>
  <p>Card content here</p>
</div>
```

No separate CSS file needed! All the styling is done with utility classes.

---

## Why Use Tailwind?

### Advantages

1. **Faster Development** - No need to switch between files or think of class names
2. **Consistent Design** - Built-in design system with standardized spacing, colors, and sizes
3. **Smaller CSS Files** - Only the utilities you use are included in the final build
4. **Easy to Maintain** - Styles are colocated with components
5. **Responsive by Default** - Simple breakpoint system built in

### The Learning Curve

At first, Tailwind might feel overwhelming because:
- You need to learn utility class names
- ClassNames can get long
- It looks different from traditional CSS

But after a few hours of practice, most developers find it much faster than writing custom CSS!

---

## Tailwind v4 Setup

In this project, Tailwind v4 is already set up using the Vite plugin. Here's how it works:

### 1. Installation (already done)

```bash
npm install @tailwindcss/vite
```

### 2. Vite Configuration (`vite.config.ts`)

```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 3. CSS Import (`src/index.css`)

```css
@import "tailwindcss";
```

That's it! No `tailwind.config.js` or `postcss.config.js` needed with v4.

---

## Core Utility Classes

Let's learn the most common Tailwind utilities you'll use every day.

### Spacing (Padding & Margin)

Tailwind uses a spacing scale where each unit = 4px:

```jsx
// Padding
<div className="p-4">Padding all sides (16px)</div>
<div className="px-4">Padding left and right (16px each)</div>
<div className="py-4">Padding top and bottom (16px each)</div>
<div className="pt-4">Padding top only (16px)</div>
<div className="pr-4">Padding right only (16px)</div>
<div className="pb-4">Padding bottom only (16px)</div>
<div className="pl-4">Padding left only (16px)</div>

// Margin (same pattern)
<div className="m-4">Margin all sides (16px)</div>
<div className="mx-auto">Margin left/right auto (centering)</div>
<div className="mt-8">Margin top (32px)</div>
```

**Spacing Scale:**
- `p-0` = 0px
- `p-1` = 4px
- `p-2` = 8px
- `p-3` = 12px
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px
- `p-12` = 48px

### Colors

Tailwind provides a comprehensive color palette:

```jsx
// Background colors
<div className="bg-white">White background</div>
<div className="bg-gray-100">Light gray</div>
<div className="bg-blue-500">Blue background</div>
<div className="bg-red-600">Darker red</div>

// Text colors
<p className="text-black">Black text</p>
<p className="text-gray-600">Gray text</p>
<p className="text-blue-500">Blue text</p>

// Border colors
<div className="border border-gray-300">Gray border</div>
```

**Color Scale:** Colors range from 50 (lightest) to 950 (darkest)
- `50` - Very light
- `100, 200, 300` - Light shades
- `400, 500, 600` - Medium shades (500 is default)
- `700, 800, 900` - Dark shades
- `950` - Very dark

### Typography

```jsx
// Font size
<p className="text-xs">Extra small (12px)</p>
<p className="text-sm">Small (14px)</p>
<p className="text-base">Base (16px)</p>
<p className="text-lg">Large (18px)</p>
<p className="text-xl">Extra large (20px)</p>
<p className="text-2xl">2X large (24px)</p>
<p className="text-3xl">3X large (30px)</p>

// Font weight
<p className="font-light">Light (300)</p>
<p className="font-normal">Normal (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-semibold">Semi-bold (600)</p>
<p className="font-bold">Bold (700)</p>

// Text alignment
<p className="text-left">Left aligned</p>
<p className="text-center">Centered</p>
<p className="text-right">Right aligned</p>
```

### Borders & Rounding

```jsx
// Borders
<div className="border">1px border all sides</div>
<div className="border-2">2px border</div>
<div className="border-t">Border top only</div>
<div className="border-b">Border bottom only</div>

// Border radius
<div className="rounded">Small border radius (4px)</div>
<div className="rounded-md">Medium border radius (6px)</div>
<div className="rounded-lg">Large border radius (8px)</div>
<div className="rounded-full">Fully rounded (circle/pill)</div>
```

### Shadows

```jsx
<div className="shadow-sm">Small shadow</div>
<div className="shadow">Default shadow</div>
<div className="shadow-md">Medium shadow</div>
<div className="shadow-lg">Large shadow</div>
<div className="shadow-xl">Extra large shadow</div>
```

### Display & Layout

```jsx
// Display
<div className="block">Block element</div>
<div className="inline-block">Inline block</div>
<div className="flex">Flexbox container</div>
<div className="grid">Grid container</div>
<div className="hidden">Hidden element</div>

// Flexbox basics
<div className="flex items-center">Align items center</div>
<div className="flex justify-between">Space between items</div>
<div className="flex flex-col">Column direction</div>
<div className="flex gap-4">Gap between flex items</div>
```

---

## Example: Styling a Button Component

Let's see how to style a button using Tailwind:

```tsx
function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-blue-600">
      {children}
    </button>
  )
}
```

**Breaking it down:**
- `bg-blue-500` - Blue background
- `text-white` - White text
- `font-medium` - Medium font weight
- `px-6` - Horizontal padding (24px)
- `py-2` - Vertical padding (8px)
- `rounded-lg` - Large border radius
- `shadow` - Drop shadow
- `hover:bg-blue-600` - Darker blue on hover

---

## Example: Card Component

```tsx
function Card({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  )
}
```

---

## Reading Tailwind Documentation

The [Tailwind documentation](https://tailwindcss.com/docs) is excellent. Here's how to use it:

1. **Search for what you want** - Use the search bar (e.g., "padding", "colors", "flexbox")
2. **Check the examples** - Every page shows live examples
3. **Look at the classes table** - Shows all available options
4. **Try it in Tailwind Play** - Online sandbox to experiment

### Common Documentation Pages

- [Spacing](https://tailwindcss.com/docs/padding) - Padding & margin
- [Colors](https://tailwindcss.com/docs/customizing-colors) - Full color palette
- [Typography](https://tailwindcss.com/docs/font-size) - Font sizes, weights
- [Flexbox](https://tailwindcss.com/docs/flex) - Flex layout utilities
- [Grid](https://tailwindcss.com/docs/grid-template-columns) - Grid layout utilities

---

## Common Pitfalls

### ❌ Trying to Memorize Everything

Don't try to memorize all utility classes. Keep the documentation open and reference it often.

### ❌ Using Arbitrary Values Too Soon

Tailwind has arbitrary value syntax like `p-[13px]`, but you should use the standard scale first (`p-0` through `p-12`).

### ❌ Not Using the Design System

Tailwind's power comes from consistency. Use the built-in spacing/color scales instead of custom values.

### ❌ Making ClassNames Too Long

If your className is getting very long, consider breaking it into multiple lines or extracting a component:

```tsx
// Hard to read
<div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">

// Better - use multiple lines
<div className="
  bg-white rounded-lg p-6 shadow-md
  border border-gray-200
  hover:shadow-lg transition-shadow
">
```

---

## Practice Checkpoint

Try to answer these questions:

1. What does `px-4` do?
2. What's the difference between `bg-blue-500` and `bg-blue-700`?
3. How do you center text with Tailwind?
4. What utility class makes an element flexbox?
5. How do you add a border radius with Tailwind?

**Answers:**
1. Adds 16px padding on left and right
2. `500` is medium blue, `700` is darker blue
3. `text-center`
4. `flex`
5. `rounded`, `rounded-md`, `rounded-lg`, etc.

---

## Next Steps

In the next lesson, you'll learn:
- How to build responsive layouts with Tailwind breakpoints
- Mobile-first design philosophy
- Using Flexbox and Grid with Tailwind utilities

---

## Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Play](https://play.tailwindcss.com/) - Try Tailwind in the browser
- [Tailwind Cheatsheet](../../resources/cheatsheets/tailwind-reference.md)
