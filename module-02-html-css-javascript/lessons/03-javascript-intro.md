# Lesson 3: Introduction to JavaScript

## Lesson Objectives

By the end of this lesson, you will:
- Understand what JavaScript does in web development
- Write variables, functions, and basic logic in JavaScript
- Connect JavaScript to HTML
- Use the browser console for debugging
- Make your first interactive webpage

---

## What is JavaScript?

You've learned:
- **HTML** = Structure (the skeleton)
- **CSS** = Style (the appearance)
- **JavaScript** = Behavior (the interactivity!)

JavaScript makes things happen when users interact with your page:
- Buttons that respond to clicks
- Forms that validate input
- Content that updates without reloading
- Animations and effects
- And much more!

**Fun fact:** Despite the similar names, JavaScript and Java are completely different languages!

---

## Where Does JavaScript Go?

### Option 1: In a `<script>` Tag

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Demo</title>
</head>
<body>
  <h1 id="greeting">Hello!</h1>

  <script>
    // JavaScript code goes here
    console.log('The page loaded!');
  </script>
</body>
</html>
```

**Best practice:** Put `<script>` tags at the end of `<body>` so HTML loads first.

### Option 2: External JavaScript File (Better!)

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Demo</title>
</head>
<body>
  <h1 id="greeting">Hello!</h1>

  <!-- Link to external JavaScript file -->
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js
console.log('The page loaded!');
```

External files keep your code organized, just like external CSS files!

---

## The Browser Console

The console is your best friend when writing JavaScript!

**How to open it:**
- **Chrome/Edge:** F12 or Right-click → Inspect → Console tab
- **Firefox:** F12 or Right-click → Inspect Element → Console tab
- **Mac:** Cmd + Option + J

### console.log() - Your Debugging Tool

```javascript
console.log('Hello, world!');
console.log(5 + 3);
console.log('The answer is', 42);
```

Open your console and try it! `console.log()` prints messages to the console - super useful for debugging.

---

## Variables: Storing Information

Variables store data you want to use later.

### Declaring Variables

```javascript
// let - for values that can change
let age = 14;
let name = 'Alex';
let isStudent = true;

// const - for values that won't change
const schoolName = 'Middle School';
const pi = 3.14159;

// You can change let variables
age = 15; // ✅ This works

// But not const variables
// schoolName = 'High School'; // ❌ Error!
```

**Coming from Python/C++?**
- Similar to Python variables, but use `let` or `const`
- Similar to C++ variables, but no data type declarations
- Use `let` by default, `const` when you know it won't change

### Data Types

JavaScript has several data types:

```javascript
// Numbers (no separate int and float like C++)
let age = 14;
let price = 19.99;
let negative = -5;

// Strings (text)
let firstName = 'Taylor';
let lastName = "Smith"; // Single or double quotes work
let message = `Hello, ${firstName}!`; // Template literal (backticks)

// Booleans
let isLoggedIn = true;
let hasPermission = false;

// Arrays (lists)
let colors = ['red', 'blue', 'green'];
let numbers = [1, 2, 3, 4, 5];

// Objects (like dictionaries in Python)
let person = {
  name: 'Alex',
  age: 14,
  grade: 9
};

// null and undefined
let nothing = null;        // Intentionally empty
let notDefined;            // Declared but not assigned (undefined)
```

---

## Functions: Reusable Code

Functions let you write code once and use it many times.

### Function Declaration

```javascript
function greet() {
  console.log('Hello!');
}

// Call the function
greet(); // Prints: Hello!
greet(); // Prints: Hello! (again)
```

### Functions with Parameters

```javascript
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Taylor');  // Prints: Hello, Taylor!
greet('Alex');    // Prints: Hello, Alex!
```

### Functions that Return Values

```javascript
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // Prints: 8

let total = add(10, 20);
console.log(total); // Prints: 30
```

### Template Literals (Modern String Formatting)

Instead of concatenating strings with `+`, use template literals:

```javascript
function greet(name, age) {
  // Old way
  console.log('Hello, ' + name + '! You are ' + age + ' years old.');

  // New way (easier!)
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet('Taylor', 14);
```

**Note the backticks!** They let you embed variables with `${variable}`.

---

## Basic Operators

### Math Operators

```javascript
let sum = 5 + 3;        // 8
let difference = 10 - 4; // 6
let product = 4 * 5;     // 20
let quotient = 20 / 4;   // 5
let remainder = 10 % 3;  // 1 (modulo - the remainder)

// Increment and decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0 again
```

### Comparison Operators

```javascript
5 === 5   // true (equal to)
5 !== 3   // true (not equal to)
5 > 3     // true (greater than)
5 < 10    // true (less than)
5 >= 5    // true (greater than or equal to)
3 <= 10   // true (less than or equal to)
```

**Note:** Use `===` (triple equals) instead of `==` in JavaScript. It's more reliable!

### Logical Operators

```javascript
true && true   // true (AND - both must be true)
true && false  // false
true || false  // true (OR - at least one must be true)
false || false // false
!true          // false (NOT - flips the value)
!false         // true
```

---

## Connecting JavaScript to HTML

### Selecting Elements

To change HTML with JavaScript, first you need to select elements:

```javascript
// Select element by ID
let heading = document.getElementById('main-heading');

// Select element by class (returns first match)
let firstCard = document.querySelector('.card');

// Select all elements by class (returns list)
let allCards = document.querySelectorAll('.card');
```

### Changing Content

```javascript
// Change text content
let heading = document.getElementById('main-heading');
heading.textContent = 'New Heading!';

// Change HTML content
let div = document.getElementById('content');
div.innerHTML = '<p>New paragraph!</p>';

// Change styles
heading.style.color = 'blue';
heading.style.fontSize = '48px';
```

### Responding to Events

Make things happen when users interact:

```javascript
// Get a button element
let button = document.getElementById('my-button');

// Add a click event listener
button.addEventListener('click', function() {
  console.log('Button was clicked!');
  alert('Hello!');
});
```

---

## Complete Interactive Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 2rem;
      text-align: center;
    }

    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
      margin: 10px;
    }

    button:hover {
      background-color: #0056b3;
    }

    #output {
      margin-top: 2rem;
      padding: 1rem;
      background-color: #f0f0f0;
      border-radius: 5px;
      min-height: 50px;
    }
  </style>
</head>
<body>
  <h1 id="heading">JavaScript Interactive Demo</h1>

  <button id="change-text-btn">Change Heading</button>
  <button id="change-color-btn">Change Color</button>
  <button id="count-btn">Click Counter</button>

  <div id="output"></div>

  <script>
    // Click counter
    let clickCount = 0;

    // Change heading text
    document.getElementById('change-text-btn').addEventListener('click', function() {
      let heading = document.getElementById('heading');
      heading.textContent = 'The heading changed!';
    });

    // Change heading color
    document.getElementById('change-color-btn').addEventListener('click', function() {
      let heading = document.getElementById('heading');
      let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      heading.style.color = randomColor;
    });

    // Count clicks
    document.getElementById('count-btn').addEventListener('click', function() {
      clickCount++;
      let output = document.getElementById('output');
      output.textContent = `Button clicked ${clickCount} times!`;
    });
  </script>
</body>
</html>
```

Try this code! Click the buttons and see what happens.

---

## Common Pitfalls

### Forgetting Semicolons
JavaScript often works without semicolons, but it's good practice to include them:

```javascript
// ✅ Good practice
let name = 'Alex';
console.log(name);

// ⚠️ Works but not recommended
let name = 'Alex'
console.log(name)
```

### Using `var` Instead of `let`/`const`
Old JavaScript used `var`. Modern JavaScript uses `let` and `const`. Stick with the new way!

```javascript
// ❌ Old way
var age = 14;

// ✅ New way
let age = 14;
const schoolName = 'My School';
```

### Selecting Elements Before They Exist
JavaScript runs top-to-bottom. If you try to select an element before it's created in HTML, it won't work:

```html
<!-- ❌ This won't work - script runs before button exists -->
<script>
  let button = document.getElementById('my-button');
  console.log(button); // null
</script>
<button id="my-button">Click me</button>

<!-- ✅ This works - button exists when script runs -->
<button id="my-button">Click me</button>
<script>
  let button = document.getElementById('my-button');
  console.log(button); // <button> element
</script>
```

**Solution:** Put `<script>` tags at the end of `<body>`!

### Confusing `=` and `===`
- `=` is assignment (setting a value)
- `===` is comparison (checking if equal)

```javascript
let age = 14;       // ✅ Assignment
if (age === 14) {   // ✅ Comparison
  console.log('You are 14!');
}
```

---

## Practice Questions

<details>
<summary>What's the difference between `let` and `const`?</summary>

`let` is for variables that can change values later. `const` is for variables that won't change (constants). Use `const` by default and `let` only when you need to reassign the variable.
</details>

<details>
<summary>How do you select an element with the ID "header"?</summary>

```javascript
let header = document.getElementById('header');
```

Or:

```javascript
let header = document.querySelector('#header');
```
</details>

<details>
<summary>How do you make a button do something when clicked?</summary>

```javascript
let button = document.getElementById('my-button');
button.addEventListener('click', function() {
  // Code to run when clicked
  console.log('Clicked!');
});
```
</details>

---

## Debugging Tips

1. **Check the console** - Errors appear in red with line numbers
2. **Use console.log()** - Print values to see what's happening
3. **Check your spelling** - JavaScript is case-sensitive! `getElementById` is not the same as `getElementByID`
4. **Make sure elements exist** - Put scripts at the end of the body
5. **Check for typos** - Missing quotes, brackets, or parentheses cause errors

---

## Next Steps

Congratulations! You've written your first JavaScript code. In the next module, you'll dive deeper into:
- Arrays and objects
- Loops and conditionals
- More advanced DOM manipulation
- Event handling

Keep experimenting with the console and making interactive pages!
