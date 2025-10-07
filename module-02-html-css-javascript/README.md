# Module 2: Advanced HTML/CSS and JavaScript Introduction

**Estimated Time:** 1-2 weeks
**Prerequisites:** Module 1 (Git, HTML, CSS fundamentals)

## Overview

In this module, you'll level up your HTML and CSS skills by learning modern layout techniques (Flexbox and Grid), making your pages work on any screen size (responsive design), and writing your first JavaScript code to make pages interactive!

## Concepts Covered

- **Flexbox**: One-dimensional layouts (rows and columns)
- **CSS Grid**: Two-dimensional layouts (complex grids)
- **Responsive Design**: Media queries and mobile-first approach
- **JavaScript Basics**: Variables, data types, functions
- **DOM Interaction**: Basic JavaScript to change HTML

## Learning Objectives

By the end of this module, you will be able to:

- [ ] Use Flexbox to create flexible row and column layouts
- [ ] Build complex layouts with CSS Grid
- [ ] Make websites that look good on mobile, tablet, and desktop
- [ ] Write basic JavaScript with variables and functions
- [ ] Use JavaScript to change HTML content when things happen
- [ ] Understand the difference between HTML (structure), CSS (style), and JavaScript (behavior)

## File Structure

```
module-02-html-css-javascript/
├── README.md (you are here!)
├── lessons/
│   ├── 01-flexbox-grid.md
│   ├── 02-responsive-design.md
│   ├── 03-javascript-intro.md
│   └── assets/
│       ├── flexbox-diagram.png
│       ├── grid-diagram.png
│       └── responsive-example.png
├── exercises/
│   ├── 01-flexbox-layout/
│   │   ├── README.md
│   │   ├── index.html
│   │   └── styles.css
│   ├── 02-grid-layout/
│   │   ├── README.md
│   │   ├── index.html
│   │   └── styles.css
│   └── 03-first-javascript/
│       ├── README.md
│       ├── index.html
│       └── script.js
└── homework/
    ├── README.md
    ├── starter/
    │   ├── index.html
    │   ├── styles.css
    │   └── script.js
    └── tests/
        ├── homework.test.js
        └── test-utils.js
```

## Lessons

| # | Topic | Estimated Time | Description |
|---|-------|----------------|-------------|
| 1 | Flexbox & Grid | 30 min | Modern CSS layout systems |
| 2 | Responsive Design | 30 min | Making sites work on all devices |
| 3 | JavaScript Introduction | 45 min | Your first programming with JavaScript |

## Exercises

| # | Title | Difficulty | Skills Practiced |
|---|-------|------------|------------------|
| 1 | Flexbox Navigation Bar | ⭐⭐ Medium | Flexbox, alignment, spacing |
| 2 | Photo Grid | ⭐⭐ Medium | CSS Grid, responsive images |
| 3 | Button Click Counter | ⭐ Easy | JavaScript variables, functions, DOM |

## Homework Assignment

**Responsive Portfolio Page with Interactivity**

Build a responsive personal portfolio page that:
- Uses Flexbox or Grid for layout
- Looks good on mobile, tablet, and desktop
- Has JavaScript to make it interactive (like a theme toggle or image gallery)

**Testing:** Run `npm run test:module-02` to check your work.

## Resources

- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Web Design Basics](https://web.dev/responsive-web-design-basics/)
- [JavaScript.info - The Modern JavaScript Tutorial](https://javascript.info/)

## Teacher Notes

### Pacing Suggestions
- **Week 1, Class 1**: Lesson 1 (Flexbox/Grid) + Exercise 1
- **Week 1, Class 2**: Lesson 2 (Responsive) + Exercise 2
- **Week 2, Class 1**: Lesson 3 (JavaScript) + Exercise 3
- **Week 2, Class 2**: Start homework, get help with blockers

### Common Challenges
- **Flexbox vs Grid confusion**: Emphasize Flexbox is for 1D (single row OR column), Grid is for 2D (rows AND columns)
- **Responsive breakpoints**: Students may try to make designs pixel-perfect. Encourage fluid layouts.
- **JavaScript syntax**: Coming from Python/C++, students may forget semicolons or struggle with `let`/`const`
- **Browser console**: Make sure students know how to open DevTools and see console.log output

### Assessment Criteria
- Homework tests check for:
  - Flexbox or Grid used in layout
  - At least 2 media queries for responsive design
  - JavaScript that responds to user interaction
  - Clean, organized code with comments

### What's Next
Module 3 dives deeper into JavaScript with arrays, objects, loops, DOM manipulation, and event handling.

---

[← Back to Module 1](../module-01-git-html-css/README.md) | [Continue to Module 3 →](../module-03-javascript/README.md)
