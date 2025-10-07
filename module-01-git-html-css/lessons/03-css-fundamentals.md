# Lesson 3: CSS Fundamentals

## 🎯 Learning Objectives

By the end of this lesson, you will:
- Understand what CSS is and how it works
- Know how to link CSS to HTML
- Use CSS selectors to target elements
- Understand the box model
- Apply colors, fonts, and basic styling
- Create simple layouts

---

## What is CSS?

**CSS** stands for **Cascading Style Sheets**. While HTML provides structure, CSS provides style and layout.

Think of it this way:
- HTML = the skeleton and organs
- CSS = the skin, clothes, and appearance

Without CSS, every website would look like a plain text document!

---

## Adding CSS to HTML

There are three ways to add CSS to your HTML:

### 1. External Stylesheet (Recommended)

Create a separate `.css` file and link to it:

```html
<!-- In your HTML file -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* In styles.css */
body {
    background-color: lightblue;
}
```

**Best practice!** Keeps your HTML and CSS separate and organized.

### 2. Internal Stylesheet

Put CSS in a `<style>` tag in the `<head>`:

```html
<head>
    <style>
        body {
            background-color: lightblue;
        }
    </style>
</head>
```

Useful for small projects or testing, but not ideal for larger sites.

### 3. Inline Styles

Add styles directly to HTML elements:

```html
<p style="color: red; font-size: 18px;">This text is red.</p>
```

**Avoid this!** It mixes HTML and CSS, making your code harder to maintain.

---

## CSS Syntax

CSS is made up of **rules**. Each rule has a selector and declarations:

```css
selector {
    property: value;
    property: value;
}
```

**Example:**

```css
h1 {
    color: blue;
    font-size: 32px;
    text-align: center;
}
```

- **Selector:** `h1` (targets all `<h1>` elements)
- **Declarations:** Everything inside the `{ }`
- **Properties:** `color`, `font-size`, `text-align`
- **Values:** `blue`, `32px`, `center`

---

## CSS Selectors

Selectors let you target specific elements to style.

### Element Selector

Targets all elements of a type:

```css
p {
    color: darkgray;
}

h1 {
    font-size: 36px;
}
```

### Class Selector

Targets elements with a specific class (can be reused):

```html
<p class="intro">This is the introduction.</p>
<p class="intro">This is also an introduction.</p>
```

```css
.intro {
    font-size: 20px;
    font-weight: bold;
}
```

Use a `.` before the class name in CSS.

### ID Selector

Targets a single element with a specific ID (should be unique):

```html
<div id="header">Header content</div>
```

```css
#header {
    background-color: navy;
    color: white;
}
```

Use a `#` before the ID name in CSS.

### Combining Selectors

You can combine selectors for more specific targeting:

```css
/* All paragraphs with class "highlight" */
p.highlight {
    background-color: yellow;
}

/* All elements with class "button" inside a div */
div .button {
    padding: 10px;
}

/* Multiple selectors with the same styles */
h1, h2, h3 {
    color: darkblue;
}
```

---

## The Box Model

Every HTML element is a rectangular box. The **box model** describes how that box is sized.

![CSS Box Model](./assets/box-model.png)

From inside to outside:
1. **Content** - The actual content (text, images, etc.)
2. **Padding** - Space between content and border
3. **Border** - A line around the padding
4. **Margin** - Space outside the border (between this element and others)

```css
div {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}
```

### Margin and Padding Shorthand

You can set all four sides at once:

```css
/* All sides */
margin: 20px;

/* Vertical | Horizontal */
margin: 20px 40px;

/* Top | Horizontal | Bottom */
margin: 10px 20px 30px;

/* Top | Right | Bottom | Left (clockwise) */
margin: 10px 20px 30px 40px;
```

The same shorthand works for `padding`.

### Individual Sides

Or target each side individually:

```css
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;
```

---

## Colors

There are several ways to specify colors in CSS:

### Color Names

```css
color: red;
background-color: lightblue;
border-color: darkgreen;
```

There are [140 named colors](https://htmlcolorcodes.com/color-names/).

### Hex Codes

```css
color: #FF0000;        /* Red */
background-color: #00FF00;  /* Green */
border-color: #0000FF;      /* Blue */
```

Hex codes are six-character codes representing red, green, and blue values.

### RGB

```css
color: rgb(255, 0, 0);           /* Red */
background-color: rgb(0, 255, 0);     /* Green */
```

### RGBA (with transparency)

```css
background-color: rgba(0, 0, 0, 0.5);  /* Black at 50% opacity */
```

The fourth value (alpha) controls transparency: 0 = fully transparent, 1 = fully opaque.

---

## Typography

CSS gives you lots of control over text:

```css
p {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    text-decoration: underline;
    line-height: 1.5;
    letter-spacing: 2px;
}
```

### Font Families

Always provide fallback fonts:

```css
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
```

If the first font isn't available, the browser tries the next one.

Generic font families (always include one at the end):
- `serif` - Fonts with decorative strokes (like Times New Roman)
- `sans-serif` - Clean, modern fonts (like Arial)
- `monospace` - Fixed-width fonts (like Courier, used for code)

---

## Common Properties

### Width and Height

```css
div {
    width: 300px;
    height: 200px;
    max-width: 100%;  /* Won't get wider than its container */
    min-height: 400px; /* Won't get shorter than 400px */
}
```

### Display

Controls how an element is displayed:

```css
div {
    display: block;   /* Takes full width, starts on new line */
    display: inline;  /* Only as wide as content, stays in line */
    display: none;    /* Hides the element completely */
}
```

### Background

```css
div {
    background-color: lightgray;
    background-image: url('pattern.png');
    background-size: cover;
    background-position: center;
}
```

### Border

```css
div {
    border: 2px solid black;
    border-radius: 10px;  /* Rounded corners */
}
```

Or specify each property separately:

```css
div {
    border-width: 2px;
    border-style: solid;  /* solid, dashed, dotted, etc. */
    border-color: black;
}
```

---

## Layout Basics

### Centering Elements

Center a block element horizontally:

```css
div {
    width: 300px;
    margin: 0 auto;  /* 0 top/bottom, auto left/right */
}
```

Center text inside an element:

```css
div {
    text-align: center;
}
```

### Float (Older technique)

```css
img {
    float: left;
    margin-right: 20px;
}
```

**Note:** In later modules, you'll learn modern layout techniques like Flexbox and Grid that are better than floats!

---

## The Cascade

The "C" in CSS stands for "Cascading" - styles flow from top to bottom, and later rules override earlier ones:

```css
p {
    color: blue;
}

p {
    color: red;  /* This wins - paragraphs will be red */
}
```

### Specificity

If there are conflicting rules, the more specific selector wins:

```css
p {
    color: blue;
}

p.intro {
    color: red;  /* More specific - intro paragraphs will be red */
}

#special {
    color: green;  /* Most specific - this element will be green */
}
```

**Specificity hierarchy (from weakest to strongest):**
1. Element selectors (`p`, `div`, `h1`)
2. Class selectors (`.intro`, `.button`)
3. ID selectors (`#header`, `#main`)
4. Inline styles (`style="..."`)

---

## Common Pitfalls

### Pitfall 1: Forgetting Semicolons

❌ **Wrong:**
```css
p {
    color: red
    font-size: 16px
}
```

✅ **Correct:**
```css
p {
    color: red;
    font-size: 16px;
}
```

### Pitfall 2: Wrong Selector Prefix

❌ **Wrong:**
```css
#intro {  /* Using # for a class */
    color: red;
}
```

```html
<p class="intro">Text</p>
```

✅ **Correct:**
```css
.intro {  /* Use . for classes */
    color: red;
}
```

### Pitfall 3: Typos in Property Names

❌ **Wrong:**
```css
p {
    colour: red;  /* British spelling doesn't work! */
    font-weight: bolder;  /* Should be "bold" */
}
```

✅ **Correct:**
```css
p {
    color: red;
    font-weight: bold;
}
```

---

## Practice Questions

1. **What's the difference between a class and an ID?**
   <details>
   <summary>Click to reveal answer</summary>
   Classes can be reused on multiple elements (`.classname`), while IDs should be unique to one element (`#idname`).
   </details>

2. **What's the difference between margin and padding?**
   <details>
   <summary>Click to reveal answer</summary>
   Padding is space inside an element (between content and border). Margin is space outside an element (between the border and other elements).
   </details>

3. **If you have conflicting styles, which one wins?**
   <details>
   <summary>Click to reveal answer</summary>
   The more specific selector wins. IDs beat classes, classes beat elements. If specificity is equal, the last rule wins.
   </details>

---

## Putting It Together

Here's a complete example styling a simple card:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Profile Card</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="card">
        <img src="avatar.jpg" alt="Profile picture" class="avatar">
        <h2>Jane Doe</h2>
        <p class="title">Web Developer</p>
        <p>I love creating beautiful websites!</p>
    </div>
</body>
</html>
```

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 40px;
}

.card {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;  /* Makes it circular */
    border: 3px solid #4CAF50;
}

h2 {
    color: #333;
    margin: 10px 0 5px 0;
}

.title {
    color: #666;
    font-style: italic;
    margin: 0 0 15px 0;
}
```

---

## Summary

You've learned:
- ✅ What CSS is and how to add it to HTML
- ✅ CSS syntax and selectors
- ✅ The box model (content, padding, border, margin)
- ✅ How to apply colors, fonts, and styling
- ✅ Basic layout techniques
- ✅ How the cascade and specificity work

---

## Additional Resources

- [MDN CSS Tutorial](https://developer.mozilla.org/en-US/docs/Learn/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Check browser support for CSS features
- [CSS Reference](../../resources/cheatsheets/css-reference.md)

---

**Next Steps:** Now that you've completed all three lessons, you're ready to practice with the [exercises](../exercises/) and complete the [homework assignment](../homework/)!
