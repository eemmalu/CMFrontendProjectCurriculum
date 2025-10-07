# Lesson 1: Flexbox and CSS Grid

## Lesson Objectives

By the end of this lesson, you will:
- Understand when to use Flexbox vs CSS Grid
- Create flexible row and column layouts with Flexbox
- Build complex two-dimensional layouts with Grid
- Use common Flexbox and Grid properties

---

## The Layout Problem

Remember how hard it was to line things up with just `margin` and `padding`? Old-school CSS layouts were frustrating! Modern CSS gives us two powerful tools: **Flexbox** and **CSS Grid**.

Think of it like organizing your room:
- **Flexbox** is like lining up your shoes in a row (or stacking books in a column)
- **Grid** is like organizing items on shelves - rows AND columns at the same time

---

## Flexbox: One-Dimensional Layouts

Flexbox is perfect for laying out items in a single direction - either a row OR a column.

### Basic Flexbox Setup

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex; /* This is the magic! */
}

.item {
  background-color: lightblue;
  padding: 20px;
  margin: 10px;
}
```

**Result:** The three items line up in a row automatically!

### Flexbox Direction

Control whether items go in rows or columns:

```css
/* Items in a row (default) */
.container {
  display: flex;
  flex-direction: row;
}

/* Items in a column (stacked) */
.container {
  display: flex;
  flex-direction: column;
}
```

### Aligning Items with Flexbox

Flexbox has two axes: the **main axis** (direction items flow) and the **cross axis** (perpendicular to main).

```css
.container {
  display: flex;

  /* Align along main axis (horizontal if row) */
  justify-content: center;  /* Options: flex-start, center, flex-end, space-between, space-around */

  /* Align along cross axis (vertical if row) */
  align-items: center;      /* Options: flex-start, center, flex-end, stretch */

  /* Add space between items */
  gap: 20px;                /* Modern way to add spacing */
}
```

### Common Flexbox Patterns

**Navbar (items spread across)**
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

**Centered Content**
```css
.center-everything {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
}
```

**Cards in a Row**
```css
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap; /* Items wrap to next line if needed */
}
```

---

## CSS Grid: Two-Dimensional Layouts

Grid lets you control rows AND columns at the same time. Perfect for complex layouts!

### Basic Grid Setup

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
  gap: 20px;
}

.grid-item {
  background-color: lightcoral;
  padding: 20px;
}
```

**Result:** 6 items arranged in a 3-column grid (2 rows automatically created)!

### Defining Grid Columns and Rows

```css
/* Three equal columns */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

/* Repeat for less typing */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* Mixed column widths */
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr; /* First column fixed, others flexible */
}

/* Define rows */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px; /* First row 100px, second 200px */
}
```

**What does `fr` mean?**
- `fr` = "fraction" - it divides up available space
- `1fr 1fr 1fr` = three equal parts
- `1fr 2fr 1fr` = middle column is twice as wide as the sides

### Spanning Items Across Multiple Cells

Make items take up more space:

```css
.grid-item-wide {
  grid-column: span 2; /* Take up 2 columns */
}

.grid-item-tall {
  grid-row: span 2; /* Take up 2 rows */
}

.grid-item-large {
  grid-column: span 2;
  grid-row: span 2; /* Take up a 2x2 area */
}
```

### Common Grid Patterns

**Photo Gallery**
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

**Page Layout (Header, Sidebar, Content, Footer)**
```css
.page-grid {
  display: grid;
  grid-template-columns: 250px 1fr; /* Sidebar and main content */
  grid-template-rows: auto 1fr auto; /* Header, content, footer */
  gap: 20px;
  min-height: 100vh;
}

.header {
  grid-column: 1 / -1; /* Span all columns */
}

.footer {
  grid-column: 1 / -1; /* Span all columns */
}
```

---

## Flexbox vs Grid: When to Use Each

| Use Flexbox When... | Use Grid When... |
|---------------------|------------------|
| You're laying out items in one direction (row or column) | You need both rows and columns |
| You want items to wrap naturally | You want precise control over placement |
| You're building navigation bars, toolbars | You're building complex page layouts |
| Items are similar sizes | Items are different sizes |

**Pro tip:** You can use both! A grid layout might have flexbox inside individual grid items.

---

## Common Pitfalls

### Forgetting `display: flex` or `display: grid`
```css
/* ❌ This won't work - no display property */
.container {
  justify-content: center;
}

/* ✅ This works */
.container {
  display: flex;
  justify-content: center;
}
```

### Applying Flex/Grid Properties to Wrong Element
Flexbox and Grid properties only work on:
- The **container** (parent): `display`, `justify-content`, `align-items`, etc.
- The **items** (children): `flex-grow`, `grid-column`, etc.

### Using Flexbox for Complex Layouts
If you're fighting with Flexbox and adding lots of nested containers, you probably want Grid instead!

---

## Practice Questions

<details>
<summary>How would you center a div both horizontally and vertically?</summary>

```css
.container {
  display: flex;
  justify-content: center;  /* Horizontal */
  align-items: center;      /* Vertical */
  height: 100vh;
}
```

Or with Grid:
```css
.container {
  display: grid;
  place-items: center;  /* Shorthand for both */
  height: 100vh;
}
```
</details>

<details>
<summary>How would you create a 4-column photo grid with 10px gaps?</summary>

```css
.photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
```
</details>

<details>
<summary>How would you make a navigation bar with logo on left, links on right?</summary>

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```
</details>

---

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox and Grid Demo</title>
  <style>
    /* Flexbox Navigation */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #333;
      color: white;
      padding: 1rem 2rem;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    /* Grid Photo Gallery */
    .gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      padding: 2rem;
    }

    .photo {
      background-color: lightgray;
      aspect-ratio: 1; /* Square photos */
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <!-- Flexbox Navbar -->
  <nav class="navbar">
    <div class="logo">My Site</div>
    <ul class="nav-links">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>

  <!-- Grid Gallery -->
  <div class="gallery">
    <div class="photo">Photo 1</div>
    <div class="photo">Photo 2</div>
    <div class="photo">Photo 3</div>
    <div class="photo">Photo 4</div>
    <div class="photo">Photo 5</div>
    <div class="photo">Photo 6</div>
  </div>
</body>
</html>
```

---

## Next Steps

In the next lesson, you'll learn how to make these layouts work perfectly on mobile, tablet, and desktop with **responsive design**!
