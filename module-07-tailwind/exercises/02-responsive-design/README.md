# Exercise 2: Responsive Design

## Objective

Learn to build responsive layouts using Tailwind's breakpoint system and mobile-first approach.

**Difficulty:** ⭐⭐ (Intermediate)
**Estimated Time:** 30-40 minutes

---

## What You'll Practice

- Mobile-first responsive design
- Using Tailwind breakpoints (sm:, md:, lg:)
- Creating responsive grids
- Responsive typography and spacing
- Hiding/showing elements on different screen sizes

---

## Instructions

In this exercise, you'll create a responsive product card grid that adapts to different screen sizes. The layout will stack vertically on mobile, show 2 columns on tablets, and 4 columns on desktop.

### Step 1: Set Up the Exercise

1. Open `module-07-tailwind/exercises/02-responsive-design/src/App.tsx`
2. You'll see a grid container with product cards

### Step 2: Make the Grid Responsive

The grid should:
- **Mobile (< 768px):** 1 column
- **Tablet (≥ 768px):** 2 columns
- **Desktop (≥ 1024px):** 4 columns

Use `grid-cols-1`, `md:grid-cols-2`, and `lg:grid-cols-4`.

### Step 3: Add Responsive Padding

The container padding should grow on larger screens:
- **Mobile:** 16px (p-4)
- **Tablet:** 32px (md:p-8)
- **Desktop:** 48px (lg:p-12)

### Step 4: Make Typography Responsive

The heading should be:
- **Mobile:** 2xl (text-2xl)
- **Tablet:** 3xl (md:text-3xl)
- **Desktop:** 4xl (lg:text-4xl)

### Step 5: Add Responsive Card Hover Effects

On desktop (not mobile), cards should:
- Lift slightly on hover with transform
- Show a "View Details" button that's hidden by default

### Step 6: Test Responsive Behavior

```bash
npm run dev
```

Resize your browser window to see the layout adapt! Try these widths:
- 375px (mobile)
- 768px (tablet)
- 1024px (desktop)

---

## Expected Outcome

You should see:
- A responsive grid that adapts to screen size
- Cards that stack vertically on mobile
- Proper spacing at different breakpoints
- Smooth transitions on hover (desktop only)

---

## Learning Goals

By completing this exercise, you'll understand:
- Mobile-first design philosophy
- How to use Tailwind breakpoints
- Creating responsive grids
- Responsive spacing and typography
- Conditional display based on screen size

---

## Bonus Challenges

If you finish early, try these:

1. **Add a Responsive Navigation Bar:** Create a hamburger menu on mobile, full nav on desktop
2. **Responsive Images:** Use different aspect ratios on mobile vs. desktop
3. **Grid Gap Responsive:** Make the gap between cards larger on desktop
4. **Add a Sidebar:** Show a sidebar on desktop only, hidden on mobile

---

## Helpful Resources

- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind Grid](https://tailwindcss.com/docs/grid-template-columns)
- [Tailwind Breakpoints](https://tailwindcss.com/docs/breakpoints)
- Lesson 2: Responsive Tailwind

---

## Need Help?

- Review Lesson 2: Responsive Tailwind
- Check the breakpoint reference in the Tailwind docs
- Use your browser's dev tools to test different screen sizes
- Ask your teacher if you're stuck
