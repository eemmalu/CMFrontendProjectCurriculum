# Lesson 3: DOM Manipulation

## Lesson Objectives

By the end of this lesson, you will:
- Select multiple DOM elements at once
- Create new HTML elements with JavaScript
- Modify element attributes and classes
- Add and remove elements from the page
- Build dynamic content

---

## Selecting Multiple Elements

### querySelectorAll

Returns a NodeList of all matching elements:

```javascript
// Select all paragraphs
let paragraphs = document.querySelectorAll('p');

// Select all elements with class 'card'
let cards = document.querySelectorAll('.card');

// Select all buttons inside a specific div
let buttons = document.querySelectorAll('#container button');

// Loop through selected elements
cards.forEach(function(card) {
  console.log(card.textContent);
});
```

### getElementsByClassName and getElementsByTagName

```javascript
// Get elements by class (returns HTMLCollection)
let items = document.getElementsByClassName('item');

// Get elements by tag name
let divs = document.getElementsByTagName('div');

// Note: These return "live" collections that update automatically
// Convert to array if needed:
let itemsArray = Array.from(items);
```

---

## Creating Elements

### createElement

```javascript
// Create a new paragraph
let newParagraph = document.createElement('p');
newParagraph.textContent = 'This is new text';

// Create a button
let newButton = document.createElement('button');
newButton.textContent = 'Click me';
newButton.className = 'btn btn-primary';

// Create a div with multiple children
let card = document.createElement('div');
card.className = 'card';

let title = document.createElement('h3');
title.textContent = 'Card Title';

let description = document.createElement('p');
description.textContent = 'Card description';

card.appendChild(title);
card.appendChild(description);
```

---

## Adding Elements to the Page

```javascript
// Append to end of parent
let container = document.getElementById('container');
let newDiv = document.createElement('div');
newDiv.textContent = 'New content';
container.appendChild(newDiv);

// Prepend to beginning of parent
container.prepend(newDiv);

// Insert before a specific element
let referenceElement = document.getElementById('item-3');
container.insertBefore(newDiv, referenceElement);

// Insert adjacent (modern way)
container.insertAdjacentElement('beforebegin', newDiv); // Before container
container.insertAdjacentElement('afterbegin', newDiv);  // First child
container.insertAdjacentElement('beforeend', newDiv);   // Last child
container.insertAdjacentElement('afterend', newDiv);    // After container
```

---

## Removing Elements

```javascript
// Remove element
let elementToRemove = document.getElementById('old-content');
elementToRemove.remove();

// Remove child from parent
let parent = document.getElementById('list');
let child = document.getElementById('item-2');
parent.removeChild(child);

// Remove all children
let container = document.getElementById('container');
container.innerHTML = ''; // Quick but not ideal
// Or loop and remove:
while (container.firstChild) {
  container.removeChild(container.firstChild);
}
```

---

## Modifying Elements

### Changing Content

```javascript
let element = document.getElementById('message');

// Change text content
element.textContent = 'New text';

// Change HTML content
element.innerHTML = '<strong>Bold text</strong>';

// Change input value
let input = document.getElementById('username');
input.value = 'NewUsername';
```

### Modifying Attributes

```javascript
let image = document.getElementById('profile-pic');

// Set attribute
image.setAttribute('src', 'new-image.jpg');
image.setAttribute('alt', 'Profile picture');

// Get attribute
let source = image.getAttribute('src');

// Remove attribute
image.removeAttribute('title');

// Direct property access (common for standard attributes)
image.src = 'another-image.jpg';
image.alt = 'Another picture';

// Data attributes
let element = document.getElementById('product');
element.setAttribute('data-id', '12345');
element.setAttribute('data-price', '29.99');
console.log(element.dataset.id); // '12345'
console.log(element.dataset.price); // '29.99'
```

### Modifying Classes

```javascript
let button = document.getElementById('myButton');

// Add class
button.classList.add('active');

// Remove class
button.classList.remove('disabled');

// Toggle class (add if not present, remove if present)
button.classList.toggle('highlighted');

// Check if class exists
if (button.classList.contains('active')) {
  console.log('Button is active');
}

// Replace class
button.classList.replace('old-class', 'new-class');
```

### Modifying Styles

```javascript
let box = document.getElementById('box');

// Set individual styles
box.style.backgroundColor = 'blue';
box.style.width = '200px';
box.style.padding = '20px';

// Note: CSS properties use camelCase
box.style.fontSize = '16px'; // Not font-size
box.style.borderRadius = '10px'; // Not border-radius

// Set multiple styles with cssText
box.style.cssText = 'background-color: red; width: 300px; height: 200px;';
```

---

## Practical Examples

### Building a List Dynamically

```javascript
let fruits = ['Apple', 'Banana', 'Orange', 'Grape'];
let ul = document.getElementById('fruit-list');

fruits.forEach(function(fruit) {
  let li = document.createElement('li');
  li.textContent = fruit;
  ul.appendChild(li);
});
```

### Creating Cards from Data

```javascript
let products = [
  { name: 'Laptop', price: 999 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 }
];

let container = document.getElementById('products');

products.forEach(function(product) {
  let card = document.createElement('div');
  card.className = 'product-card';

  let name = document.createElement('h3');
  name.textContent = product.name;

  let price = document.createElement('p');
  price.textContent = `$${product.price}`;

  card.appendChild(name);
  card.appendChild(price);
  container.appendChild(card);
});
```

### Removing Items from a List

```javascript
function removeItem(itemId) {
  let item = document.getElementById(itemId);
  item.remove();
}

// Add remove buttons to list items
let items = document.querySelectorAll('.item');
items.forEach(function(item, index) {
  let removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.onclick = function() {
    item.remove();
  };
  item.appendChild(removeBtn);
});
```

---

## Common Pitfalls

### Modifying Collection While Looping
```javascript
// ❌ Don't modify while looping
let items = document.querySelectorAll('.item');
items.forEach(function(item) {
  item.remove(); // This can cause issues
});

// ✅ Convert to array first
let itemsArray = Array.from(items);
itemsArray.forEach(function(item) {
  item.remove();
});
```

### Forgetting to Append
```javascript
// ❌ Element created but never added to page
let div = document.createElement('div');
div.textContent = 'Hello';
// It's created but invisible!

// ✅ Add it to the DOM
document.body.appendChild(div);
```

### innerHTML Security Risk
```javascript
// ❌ Dangerous if content comes from users
let userInput = '<script>alert("hacked")</script>';
element.innerHTML = userInput; // Can execute scripts!

// ✅ Use textContent for user data
element.textContent = userInput; // Safe, displays as text
```

---

## Complete Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Task Manager</title>
  <style>
    .task { padding: 10px; margin: 5px; background: #f0f0f0; }
    .completed { text-decoration: line-through; opacity: 0.6; }
  </style>
</head>
<body>
  <div id="app">
    <input type="text" id="taskInput" placeholder="New task">
    <button id="addButton">Add Task</button>
    <div id="taskList"></div>
  </div>

  <script>
    let taskList = document.getElementById('taskList');
    let taskInput = document.getElementById('taskInput');
    let addButton = document.getElementById('addButton');

    function addTask() {
      let taskText = taskInput.value.trim();
      if (!taskText) return;

      // Create task element
      let taskDiv = document.createElement('div');
      taskDiv.className = 'task';

      let taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = function() {
        taskDiv.remove();
      };

      let completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.onclick = function() {
        taskDiv.classList.toggle('completed');
      };

      taskDiv.appendChild(taskSpan);
      taskDiv.appendChild(completeBtn);
      taskDiv.appendChild(deleteBtn);
      taskList.appendChild(taskDiv);

      taskInput.value = '';
    }

    addButton.onclick = addTask;
  </script>
</body>
</html>
```

---

## Next Steps

In the next lesson, you'll learn about event handling in depth - responding to clicks, keyboard input, form submissions, and more!
