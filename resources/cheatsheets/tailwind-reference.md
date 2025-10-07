# Tailwind CSS Reference

Quick reference for Tailwind CSS v4.

## Setup (Tailwind v4 with Vite)

### Installation

```bash
npm install tailwindcss @tailwindcss/vite
```

### Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### CSS Import

```css
/* In your main CSS file (e.g., src/index.css) */
@import "tailwindcss";
```

**Note:** Tailwind v4 uses `@import "tailwindcss"` instead of the old `@tailwind` directives.

## Common Utility Classes

### Layout

```html
<!-- Display -->
<div class="block">Block element</div>
<div class="inline-block">Inline-block element</div>
<div class="flex">Flex container</div>
<div class="grid">Grid container</div>
<div class="hidden">Hidden element</div>

<!-- Container -->
<div class="container">Centered container with max-width</div>
<div class="mx-auto">Center horizontally</div>
```

### Flexbox

```html
<!-- Direction -->
<div class="flex flex-row">Row direction</div>
<div class="flex flex-col">Column direction</div>

<!-- Justify Content -->
<div class="flex justify-start">Justify start</div>
<div class="flex justify-center">Justify center</div>
<div class="flex justify-between">Justify space-between</div>
<div class="flex justify-around">Justify space-around</div>

<!-- Align Items -->
<div class="flex items-start">Align start</div>
<div class="flex items-center">Align center</div>
<div class="flex items-end">Align end</div>

<!-- Gap -->
<div class="flex gap-4">Gap of 1rem (16px)</div>
<div class="flex gap-x-2">Horizontal gap of 0.5rem (8px)</div>
<div class="flex gap-y-4">Vertical gap of 1rem (16px)</div>
```

### Grid

```html
<!-- Columns -->
<div class="grid grid-cols-2">2 columns</div>
<div class="grid grid-cols-3">3 columns</div>
<div class="grid grid-cols-4">4 columns</div>

<!-- Rows -->
<div class="grid grid-rows-2">2 rows</div>

<!-- Gap -->
<div class="grid gap-4">Gap of 1rem (16px)</div>

<!-- Span -->
<div class="col-span-2">Span 2 columns</div>
<div class="row-span-2">Span 2 rows</div>
```

### Spacing

Tailwind uses a spacing scale where 1 = 0.25rem (4px)

```html
<!-- Margin -->
<div class="m-4">Margin all sides (1rem / 16px)</div>
<div class="mx-4">Margin horizontal (left & right)</div>
<div class="my-4">Margin vertical (top & bottom)</div>
<div class="mt-4">Margin top</div>
<div class="mr-4">Margin right</div>
<div class="mb-4">Margin bottom</div>
<div class="ml-4">Margin left</div>

<!-- Padding -->
<div class="p-4">Padding all sides (1rem / 16px)</div>
<div class="px-4">Padding horizontal</div>
<div class="py-4">Padding vertical</div>
<div class="pt-4">Padding top</div>

<!-- Common spacing values -->
<!-- 0 = 0px -->
<!-- 1 = 4px -->
<!-- 2 = 8px -->
<!-- 4 = 16px -->
<!-- 8 = 32px -->
<!-- 16 = 64px -->
```

### Sizing

```html
<!-- Width -->
<div class="w-full">Width 100%</div>
<div class="w-1/2">Width 50%</div>
<div class="w-64">Width 16rem (256px)</div>
<div class="w-auto">Width auto</div>

<!-- Height -->
<div class="h-full">Height 100%</div>
<div class="h-screen">Height 100vh</div>
<div class="h-64">Height 16rem (256px)</div>

<!-- Min/Max -->
<div class="min-w-0">Min-width 0</div>
<div class="max-w-lg">Max-width 32rem (512px)</div>
<div class="max-w-screen-xl">Max-width 1280px</div>
```

### Typography

```html
<!-- Font Family -->
<p class="font-sans">Sans-serif font</p>
<p class="font-serif">Serif font</p>
<p class="font-mono">Monospace font</p>

<!-- Font Size -->
<p class="text-xs">Extra small (0.75rem)</p>
<p class="text-sm">Small (0.875rem)</p>
<p class="text-base">Base (1rem)</p>
<p class="text-lg">Large (1.125rem)</p>
<p class="text-xl">Extra large (1.25rem)</p>
<p class="text-2xl">2XL (1.5rem)</p>
<p class="text-3xl">3XL (1.875rem)</p>

<!-- Font Weight -->
<p class="font-light">Light (300)</p>
<p class="font-normal">Normal (400)</p>
<p class="font-medium">Medium (500)</p>
<p class="font-semibold">Semibold (600)</p>
<p class="font-bold">Bold (700)</p>

<!-- Text Alignment -->
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>

<!-- Text Decoration -->
<p class="underline">Underlined text</p>
<p class="line-through">Line through text</p>
<p class="no-underline">No underline</p>

<!-- Text Transform -->
<p class="uppercase">UPPERCASE</p>
<p class="lowercase">lowercase</p>
<p class="capitalize">Capitalize</p>

<!-- Line Height -->
<p class="leading-tight">Tight line height</p>
<p class="leading-normal">Normal line height</p>
<p class="leading-relaxed">Relaxed line height</p>
```

### Colors

```html
<!-- Text Color -->
<p class="text-black">Black text</p>
<p class="text-white">White text</p>
<p class="text-gray-500">Gray text</p>
<p class="text-red-500">Red text</p>
<p class="text-blue-500">Blue text</p>

<!-- Background Color -->
<div class="bg-white">White background</div>
<div class="bg-gray-100">Light gray background</div>
<div class="bg-blue-500">Blue background</div>

<!-- Color Scale: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950 -->
<!-- Available colors: slate, gray, red, orange, yellow, green, blue, indigo, purple, pink -->
```

### Borders

```html
<!-- Border Width -->
<div class="border">1px border all sides</div>
<div class="border-2">2px border all sides</div>
<div class="border-t">Border top only</div>
<div class="border-r">Border right only</div>

<!-- Border Color -->
<div class="border border-gray-300">Gray border</div>
<div class="border border-blue-500">Blue border</div>

<!-- Border Radius -->
<div class="rounded">Border radius 0.25rem</div>
<div class="rounded-md">Border radius 0.375rem</div>
<div class="rounded-lg">Border radius 0.5rem</div>
<div class="rounded-full">Fully rounded (circle/pill)</div>
```

### Effects

```html
<!-- Shadow -->
<div class="shadow">Small shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-none">No shadow</div>

<!-- Opacity -->
<div class="opacity-0">0% opacity</div>
<div class="opacity-50">50% opacity</div>
<div class="opacity-100">100% opacity</div>
```

### Responsive Design

Tailwind uses mobile-first breakpoints:

```html
<!-- sm = 640px, md = 768px, lg = 1024px, xl = 1280px, 2xl = 1536px -->

<!-- Default (mobile): full width, Tablet+: half width -->
<div class="w-full md:w-1/2">Responsive width</div>

<!-- Hidden on mobile, visible on tablet+ -->
<div class="hidden md:block">Hidden on mobile</div>

<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col lg:flex-row">Responsive flex</div>

<!-- Small text on mobile, large on desktop -->
<p class="text-sm lg:text-xl">Responsive text</p>
```

### Hover, Focus, and Other States

```html
<!-- Hover -->
<button class="bg-blue-500 hover:bg-blue-600">Hover to change</button>

<!-- Focus -->
<input class="border focus:border-blue-500" />

<!-- Active -->
<button class="active:bg-blue-700">Click me</button>

<!-- Disabled -->
<button class="disabled:opacity-50" disabled>Disabled</button>

<!-- Group Hover (hover on parent affects child) -->
<div class="group">
  <p class="group-hover:text-blue-500">Hover parent to change</p>
</div>
```

### Common Patterns

#### Card Component

```html
<div class="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md">
  <h2 class="mb-2 text-2xl font-bold">Card Title</h2>
  <p class="text-gray-700">Card content goes here.</p>
</div>
```

#### Button

```html
<button class="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600">
  Click Me
</button>
```

#### Centered Container

```html
<div class="container mx-auto max-w-4xl px-4">
  <p>Centered content with padding</p>
</div>
```

#### Flexbox Centering

```html
<div class="flex h-screen items-center justify-center">
  <p>Perfectly centered</p>
</div>
```

## Dark Mode

Tailwind v4 supports dark mode out of the box:

```html
<!-- Light mode: white bg, Dark mode: dark bg -->
<div class="bg-white dark:bg-gray-900">
  <p class="text-black dark:text-white">Adaptive text</p>
</div>
```

## Custom Values

Use arbitrary values with square brackets:

```html
<!-- Custom width -->
<div class="w-[347px]">Custom width</div>

<!-- Custom color -->
<p class="text-[#1da1f2]">Twitter blue</p>

<!-- Custom spacing -->
<div class="p-[13px]">Custom padding</div>
```

## Tips

- **Mobile-first:** Design for mobile, then add larger breakpoints
- **Composition:** Combine utilities to create complex designs
- **Use editor extensions:** Install Tailwind CSS IntelliSense for VS Code
- **Official docs:** https://tailwindcss.com/docs
- **Search docs:** The Tailwind docs have excellent search

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)
- [Headless UI (accessible components)](https://headlessui.com/)
- [Tailwind Cheat Sheet](https://tailwindcomponents.com/cheatsheet/)
