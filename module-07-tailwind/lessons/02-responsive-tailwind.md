# Lesson 2: Responsive Tailwind CSS

## Learning Objectives

By the end of this lesson, you will:
- Understand mobile-first design philosophy
- Use Tailwind's breakpoint system for responsive design
- Build layouts that adapt to different screen sizes
- Use Flexbox and Grid utilities effectively

---

## Mobile-First Design

**Mobile-first design** means you start by designing for small screens (mobile phones), then add styles for larger screens (tablets, desktops).

### Why Mobile-First?

1. **Most users are on mobile** - More people browse websites on phones than desktops
2. **Easier to scale up** - It's easier to add features as screens get bigger than to remove them as screens get smaller
3. **Forces focus** - You prioritize the most important content first

### How It Works in Tailwind

In Tailwind, classes without a breakpoint prefix apply to all screen sizes (mobile-first):

```jsx
// This is red on ALL screens (mobile, tablet, desktop)
<div className="bg-red-500">Always red</div>

// This is red on mobile, blue on medium+ screens
<div className="bg-red-500 md:bg-blue-500">
  Red on mobile, blue on desktop
</div>
```

---

## Tailwind Breakpoints

Tailwind provides 5 breakpoints based on common device widths:

| Breakpoint | Screen Width | Devices |
|------------|--------------|---------|
| (default) | < 640px | Mobile phones |
| `sm:` | ≥ 640px | Large phones, small tablets |
| `md:` | ≥ 768px | Tablets, small laptops |
| `lg:` | ≥ 1024px | Laptops, desktops |
| `xl:` | ≥ 1280px | Large desktops |
| `2xl:` | ≥ 1536px | Extra large displays |

### Using Breakpoints

Add a breakpoint prefix to any utility class:

```jsx
<div className="text-sm md:text-base lg:text-lg">
  Small text on mobile, base on tablet, large on desktop
</div>
```

---

## Responsive Examples

### Example 1: Responsive Padding

```jsx
// Small padding on mobile, larger on desktop
<div className="p-4 md:p-8 lg:p-12">
  Content with responsive padding
</div>
```

**What happens:**
- Mobile (< 768px): 16px padding
- Tablet (≥ 768px): 32px padding
- Desktop (≥ 1024px): 48px padding

### Example 2: Responsive Text Size

```jsx
<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>
```

**What happens:**
- Mobile: 24px text
- Tablet: 36px text
- Desktop: 48px text

### Example 3: Hide/Show on Different Screens

```jsx
// Show on mobile, hide on desktop
<div className="block md:hidden">
  Mobile menu icon
</div>

// Hide on mobile, show on desktop
<div className="hidden md:block">
  Desktop navigation
</div>
```

---

## Flexbox with Tailwind

Flexbox is perfect for one-dimensional layouts (rows or columns).

### Basic Flex Container

```jsx
<div className="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Flex Direction

```jsx
// Row (default)
<div className="flex flex-row">Horizontal layout</div>

// Column
<div className="flex flex-col">Vertical layout</div>

// Responsive: column on mobile, row on desktop
<div className="flex flex-col md:flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Justify Content (Main Axis)

```jsx
// Start (default)
<div className="flex justify-start">Items at start</div>

// Center
<div className="flex justify-center">Items centered</div>

// Space between
<div className="flex justify-between">Items with space between</div>

// Space around
<div className="flex justify-around">Items with space around</div>

// End
<div className="flex justify-end">Items at end</div>
```

### Align Items (Cross Axis)

```jsx
// Stretch (default)
<div className="flex items-stretch">Items stretch</div>

// Center
<div className="flex items-center">Items centered vertically</div>

// Start
<div className="flex items-start">Items at top</div>

// End
<div className="flex items-end">Items at bottom</div>
```

### Gap (Spacing Between Items)

```jsx
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Common Flex Patterns

```jsx
// Centered content (horizontal and vertical)
<div className="flex items-center justify-center min-h-screen">
  <div>Perfectly centered</div>
</div>

// Navigation bar
<nav className="flex items-center justify-between p-4">
  <div>Logo</div>
  <div className="flex gap-4">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>

// Card with footer at bottom
<div className="flex flex-col h-full">
  <div className="flex-1">
    Content that grows
  </div>
  <div>Footer always at bottom</div>
</div>
```

---

## Grid with Tailwind

CSS Grid is perfect for two-dimensional layouts.

### Basic Grid

```jsx
<div className="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
```

### Responsive Columns

```jsx
// 1 column on mobile, 2 on tablet, 4 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>
```

### Column Span

```jsx
<div className="grid grid-cols-6 gap-4">
  <div className="col-span-6 md:col-span-4">Main content (4/6 on desktop)</div>
  <div className="col-span-6 md:col-span-2">Sidebar (2/6 on desktop)</div>
</div>
```

### Auto-Fit Columns

```jsx
// Automatically fit as many columns as possible
<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

---

## Responsive Layout Examples

### Example 1: Responsive Navigation

```tsx
function Navigation() {
  return (
    <nav className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white shadow">
      <div className="text-2xl font-bold mb-4 md:mb-0">Logo</div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">About</a>
        <a href="#" className="hover:text-blue-500">Services</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
      </div>
    </nav>
  )
}
```

**What happens:**
- Mobile: Stacked vertical layout
- Desktop: Horizontal layout with space between

### Example 2: Responsive Card Grid

```tsx
function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Card {i}</h3>
          <p className="text-gray-600">Card content here</p>
        </div>
      ))}
    </div>
  )
}
```

**What happens:**
- Mobile: 1 card per row
- Tablet: 2 cards per row
- Desktop: 3 cards per row

### Example 3: Dashboard Layout

```tsx
function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-3 bg-white rounded-lg shadow p-4">
          Sidebar
        </aside>

        {/* Main content */}
        <main className="lg:col-span-9 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            Main content area
          </div>
        </main>
      </div>
    </div>
  )
}
```

---

## Container & Max-Width

Use `max-w-*` utilities to prevent content from getting too wide on large screens:

```jsx
// Container with max width
<div className="max-w-7xl mx-auto px-4">
  Content centered with max width of 1280px
</div>

// Common max-width values
<div className="max-w-sm">Max 384px</div>
<div className="max-w-md">Max 448px</div>
<div className="max-w-lg">Max 512px</div>
<div className="max-w-xl">Max 576px</div>
<div className="max-w-2xl">Max 672px</div>
<div className="max-w-4xl">Max 896px</div>
<div className="max-w-6xl">Max 1152px</div>
<div className="max-w-7xl">Max 1280px</div>
```

---

## Common Responsive Patterns

### Pattern 1: Mobile Menu Toggle

```tsx
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="p-4 bg-white shadow">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          Menu
        </button>

        {/* Desktop nav (always visible) */}
        <div className="hidden md:flex gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* Mobile nav (toggle visibility) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  )
}
```

### Pattern 2: Responsive Hero Section

```tsx
function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-16">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Our Site
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Build amazing things with Tailwind CSS
        </p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg">
          Get Started
        </button>
      </div>
      <div className="flex-1">
        <img src="/hero.png" alt="Hero" className="w-full rounded-lg shadow-lg" />
      </div>
    </section>
  )
}
```

---

## Common Pitfalls

### ❌ Forgetting Mobile-First

```jsx
// Wrong - Desktop first
<div className="lg:text-base text-xs">Text</div>

// Right - Mobile first
<div className="text-xs lg:text-base">Text</div>
```

### ❌ Too Many Breakpoints

Don't style every single breakpoint unless necessary. Usually `md:` and `lg:` are enough:

```jsx
// Overkill
<div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">

// Better
<div className="text-sm md:text-base lg:text-lg">
```

### ❌ Not Testing on Real Devices

Always test your responsive designs on actual mobile devices, not just by resizing your browser.

---

## Practice Checkpoint

Try to answer these:

1. What does `md:` mean in Tailwind?
2. How do you hide an element on mobile but show it on desktop?
3. What's the difference between `flex-row` and `flex-col`?
4. How do you create a 3-column grid on desktop and 1 column on mobile?

**Answers:**
1. Applies styles on screens ≥ 768px width
2. `hidden md:block`
3. `flex-row` arranges items horizontally, `flex-col` arranges vertically
4. `grid grid-cols-1 md:grid-cols-3 gap-4`

---

## Next Steps

In the next lesson, you'll learn:
- How to extract reusable components
- When to use Tailwind vs. custom CSS
- State variants (hover, focus, active)
- Advanced composition patterns

---

## Additional Resources

- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind Flexbox](https://tailwindcss.com/docs/flex)
- [Tailwind Grid](https://tailwindcss.com/docs/grid-template-columns)
