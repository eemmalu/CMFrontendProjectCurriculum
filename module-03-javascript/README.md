# Module 3: JavaScript Deep Dive

**Estimated Time:** 1-2 weeks
**Prerequisites:** Module 2 (JavaScript basics, HTML, CSS)

## Overview

Now that you've written your first JavaScript code, it's time to dive deeper! In this module, you'll learn the core programming concepts that make JavaScript powerful: working with data structures (arrays and objects), controlling program flow (loops and conditionals), manipulating the DOM like a pro, and handling all kinds of user events.

## Concepts Covered

- **Arrays**: Storing and manipulating lists of data
- **Objects**: Organizing related data together
- **Loops**: Repeating code efficiently
- **Conditionals**: Making decisions in code
- **DOM Manipulation**: Selecting, creating, and modifying HTML elements
- **Event Handling**: Responding to clicks, keyboard input, and more

## Learning Objectives

By the end of this module, you will be able to:

- [ ] Create and manipulate arrays (add, remove, access items)
- [ ] Create and use objects to organize data
- [ ] Write loops to repeat actions
- [ ] Use if/else statements to make decisions
- [ ] Select and modify multiple DOM elements
- [ ] Create new HTML elements with JavaScript
- [ ] Handle various user events (clicks, key presses, form submissions)
- [ ] Build interactive web applications from scratch

## File Structure

```
module-03-javascript/
├── README.md (you are here!)
├── lessons/
│   ├── 01-arrays-objects.md
│   ├── 02-loops-conditionals.md
│   ├── 03-dom-manipulation.md
│   ├── 04-events.md
│   └── assets/
│       └── event-flow-diagram.png
├── exercises/
│   ├── 01-data-structures/
│   │   ├── README.md
│   │   ├── index.html
│   │   └── script.js
│   ├── 02-control-flow/
│   │   ├── README.md
│   │   ├── index.html
│   │   └── script.js
│   ├── 03-dom-practice/
│   │   ├── README.md
│   │   ├── index.html
│   │   └── script.js
│   └── 04-event-handling/
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
| 1 | Arrays & Objects | 45 min | Data structures for organizing information |
| 2 | Loops & Conditionals | 45 min | Control flow and decision making |
| 3 | DOM Manipulation | 45 min | Creating and modifying HTML with JavaScript |
| 4 | Event Handling | 45 min | Responding to user interactions |

## Exercises

| # | Title | Difficulty | Skills Practiced |
|---|-------|------------|------------------|
| 1 | Shopping List Manager | ⭐⭐ Medium | Arrays, objects, array methods |
| 2 | Number Guessing Game | ⭐⭐ Medium | Loops, conditionals, logic |
| 3 | Dynamic Content Generator | ⭐⭐⭐ Medium-Hard | DOM manipulation, creating elements |
| 4 | Interactive Form | ⭐⭐ Medium | Event listeners, form handling, validation |

## Homework Assignment

**Interactive To-Do List Application**

Build a fully functional to-do list app where users can:
- Add new tasks
- Mark tasks as complete
- Delete tasks
- Filter tasks (all, active, completed)

This combines everything from Module 3: arrays, objects, DOM manipulation, and event handling!

**Testing:** Run `npm run test:module-03` to check your work.

## Resources

- [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN: DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [JavaScript.info: Events](https://javascript.info/events)

## Teacher Notes

### Pacing Suggestions
- **Week 1, Class 1**: Lesson 1 (Arrays/Objects) + Exercise 1
- **Week 1, Class 2**: Lesson 2 (Loops/Conditionals) + Exercise 2
- **Week 2, Class 1**: Lesson 3 (DOM Manipulation) + Exercise 3
- **Week 2, Class 2**: Lesson 4 (Events) + Exercise 4
- **Week 3**: Homework completion and help

### Common Challenges
- **Array indexing**: Students may forget arrays start at 0
- **Loop infinite loops**: Watch for conditions that never become false
- **DOM selection timing**: Elements must exist before selecting them
- **Event listener syntax**: The function syntax can be confusing at first
- **Scope**: Understanding where variables are accessible

### Assessment Criteria
- Homework tests check for:
  - Proper use of arrays to store tasks
  - DOM manipulation to add/remove tasks
  - Event listeners for user interactions
  - Conditional logic for filtering
  - Clean, well-commented code

### What's Next
Module 4 introduces modern JavaScript (ES6+) and TypeScript basics, building on the JavaScript foundation from this module.

---

[← Back to Module 2](../module-02-html-css-javascript/README.md) | [Continue to Module 4 →](../module-04-javascript-typescript/README.md)
