# Lesson 4: Event Handling

## Lesson Objectives

By the end of this lesson, you will:
- Understand how events work in the browser
- Handle various event types (clicks, keyboard, forms)
- Use event objects to get information
- Prevent default behavior and stop propagation
- Build interactive web applications

---

## What Are Events?

Events are actions that happen in the browser:
- User clicks a button
- User types on the keyboard
- Page finishes loading
- Form is submitted
- Mouse hovers over an element

JavaScript can "listen" for these events and respond to them.

---

## Adding Event Listeners

### addEventListener Method

```javascript
let button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// Can also use named functions
function handleClick() {
  console.log('Button clicked!');
}
button.addEventListener('click', handleClick);
```

### Common Event Types

```javascript
// Mouse events
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler); // Double click
element.addEventListener('mouseenter', handler); // Mouse enters
element.addEventListener('mouseleave', handler); // Mouse leaves
element.addEventListener('mousemove', handler); // Mouse moves

// Keyboard events
element.addEventListener('keydown', handler); // Key pressed
element.addEventListener('keyup', handler); // Key released
element.addEventListener('keypress', handler); // Key pressed (deprecated)

// Form events
form.addEventListener('submit', handler);
input.addEventListener('input', handler); // Value changes
input.addEventListener('change', handler); // Value changes and loses focus
input.addEventListener('focus', handler); // Element gains focus
input.addEventListener('blur', handler); // Element loses focus

// Document events
window.addEventListener('load', handler); // Page fully loaded
document.addEventListener('DOMContentLoaded', handler); // DOM ready
window.addEventListener('resize', handler); // Window resized
window.addEventListener('scroll', handler); // Page scrolled
```

---

## The Event Object

Event handlers receive an event object with information:

```javascript
button.addEventListener('click', function(event) {
  console.log(event); // Event object

  // Common properties:
  console.log(event.type); // 'click'
  console.log(event.target); // Element that triggered event
  console.log(event.currentTarget); // Element with listener
  console.log(event.timeStamp); // When event occurred
});
```

### Mouse Event Properties

```javascript
element.addEventListener('click', function(event) {
  console.log(event.clientX); // Mouse X position (viewport)
  console.log(event.clientY); // Mouse Y position (viewport)
  console.log(event.button); // Which button clicked (0=left, 1=middle, 2=right)
  console.log(event.shiftKey); // Was Shift key held?
  console.log(event.ctrlKey); // Was Ctrl key held?
});
```

### Keyboard Event Properties

```javascript
document.addEventListener('keydown', function(event) {
  console.log(event.key); // The key pressed ('a', 'Enter', 'ArrowUp')
  console.log(event.code); // Physical key code ('KeyA', 'Enter', 'ArrowUp')
  console.log(event.shiftKey); // Shift held?
  console.log(event.ctrlKey); // Ctrl held?
  console.log(event.altKey); // Alt held?

  // Example: Detect specific keys
  if (event.key === 'Enter') {
    console.log('Enter key pressed!');
  }
});
```

---

## Form Events

### Handling Form Submission

```javascript
let form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop form from submitting normally

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;

  console.log(`Username: ${username}`);
  console.log(`Email: ${email}`);

  // Validate or process form data here
});
```

### Input Events

```javascript
let input = document.getElementById('searchBox');

// Fires on every keystroke
input.addEventListener('input', function(event) {
  console.log('Current value:', event.target.value);
});

// Fires when value changes and input loses focus
input.addEventListener('change', function(event) {
  console.log('Final value:', event.target.value);
});
```

### Checkbox and Radio Button Events

```javascript
let checkbox = document.getElementById('agree');

checkbox.addEventListener('change', function(event) {
  if (event.target.checked) {
    console.log('Checkbox is checked');
  } else {
    console.log('Checkbox is unchecked');
  }
});
```

---

## Event Delegation

Handle events on multiple elements efficiently by listening on a parent:

```javascript
// Instead of adding listener to each button:
let buttons = document.querySelectorAll('.button');
buttons.forEach(function(button) {
  button.addEventListener('click', handleClick); // Works but inefficient
});

// Use event delegation (listen on parent):
let container = document.getElementById('button-container');
container.addEventListener('click', function(event) {
  if (event.target.classList.contains('button')) {
    // A button was clicked
    console.log('Button clicked:', event.target.textContent);
  }
});
```

**Benefits:**
- Works for dynamically added elements
- More efficient (one listener instead of many)
- Less memory usage

---

## Preventing Default Behavior

```javascript
// Prevent link from navigating
let link = document.getElementById('myLink');
link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Link clicked but not navigating');
});

// Prevent form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle form with JavaScript instead
});

// Prevent context menu (right-click)
element.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  console.log('Right-click prevented');
});
```

---

## Removing Event Listeners

```javascript
function handleClick() {
  console.log('Clicked!');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener (must use same function reference)
button.removeEventListener('click', handleClick);
```

**Note:** You can't remove anonymous functions!

---

## Practical Examples

### Button Click Counter

```javascript
let count = 0;
let button = document.getElementById('counter');
let display = document.getElementById('count-display');

button.addEventListener('click', function() {
  count++;
  display.textContent = count;
});
```

### Keyboard Shortcut

```javascript
document.addEventListener('keydown', function(event) {
  // Ctrl+S to save
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault(); // Don't trigger browser save
    console.log('Saving...');
    // Your save logic here
  }
});
```

### Live Search Filter

```javascript
let searchInput = document.getElementById('search');
let items = document.querySelectorAll('.item');

searchInput.addEventListener('input', function(event) {
  let searchTerm = event.target.value.toLowerCase();

  items.forEach(function(item) {
    let text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
```

### Form Validation

```javascript
let form = document.getElementById('registration');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let errorDiv = document.getElementById('errors');

  let errors = [];

  if (!email.includes('@')) {
    errors.push('Invalid email address');
  }

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }

  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join('<br>');
    errorDiv.style.color = 'red';
  } else {
    errorDiv.textContent = 'Form is valid!';
    errorDiv.style.color = 'green';
    // Submit form or process data
  }
});
```

---

## Common Pitfalls

### Anonymous Functions Can't Be Removed
```javascript
// ❌ Can't remove this listener
button.addEventListener('click', function() {
  console.log('Clicked');
});

// ✅ Can remove this listener
function handleClick() {
  console.log('Clicked');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

### Forgetting preventDefault
```javascript
// ❌ Form submits and page reloads
form.addEventListener('submit', function() {
  console.log('Submitted');
});

// ✅ Prevents default submission
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Submitted');
});
```

### Event Listener on Wrong Element
```javascript
// ❌ Listening to container, not buttons
container.addEventListener('click', function() {
  console.log('Button clicked?'); // Fires for any click!
});

// ✅ Check what was actually clicked
container.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked!');
  }
});
```

---

## Complete Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Todo List</title>
</head>
<body>
  <input type="text" id="todoInput" placeholder="New task">
  <button id="addBtn">Add</button>
  <ul id="todoList"></ul>

  <script>
    let input = document.getElementById('todoInput');
    let addBtn = document.getElementById('addBtn');
    let list = document.getElementById('todoList');

    function addTodo() {
      let text = input.value.trim();
      if (!text) return;

      let li = document.createElement('li');
      li.textContent = text;

      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
        li.remove();
      });

      li.appendChild(deleteBtn);
      list.appendChild(li);
      input.value = '';
    }

    addBtn.addEventListener('click', addTodo);

    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        addTodo();
      }
    });
  </script>
</body>
</html>
```

---

## Summary

Events make web pages interactive:
- Use `addEventListener` to listen for events
- Event object provides information about what happened
- `event.preventDefault()` stops default behavior
- Event delegation is efficient for multiple elements
- Combine events with DOM manipulation for dynamic apps!

You now have all the JavaScript fundamentals needed to build real interactive applications!
