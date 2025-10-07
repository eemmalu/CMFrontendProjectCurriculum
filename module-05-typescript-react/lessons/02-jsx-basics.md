# Lesson 2: JSX Basics

## Learning Objectives
- Understand what JSX is and why React uses it
- Write valid JSX syntax
- Embed JavaScript expressions in JSX
- Render conditional content
- Render lists from arrays

---

## What is JSX?

JSX stands for **JavaScript XML**. It's a syntax extension for JavaScript that lets you write HTML-like code in your JavaScript files.

Here's the cool part: **JSX is not HTML**. It looks like HTML, but it's actually JavaScript that creates React elements.

### Without JSX (Pure JavaScript)
```typescript
const element = React.createElement('h1', null, 'Hello, World!');
```

### With JSX
```typescript
const element = <h1>Hello, World!</h1>;
```

Much easier to read, right? JSX lets you describe what your UI should look like in a natural way.

---

## JSX Syntax Rules

JSX looks like HTML but has some important differences:

### Rule 1: All Tags Must Close

In HTML, some tags don't need closing:
```html
<!-- HTML - this works -->
<input>
<img src="photo.jpg">
<br>
```

In JSX, **every tag must close**:
```jsx
{/* JSX - must close all tags */}
<input />
<img src="photo.jpg" />
<br />
```

### Rule 2: Use `className` Instead of `class`

Because `class` is a reserved word in JavaScript:
```jsx
{/* Wrong ❌ */}
<div class="container">Content</div>

{/* Correct ✅ */}
<div className="container">Content</div>
```

### Rule 3: Use camelCase for Attributes

HTML attributes like `onclick` become `onClick` in JSX:
```jsx
{/* HTML */}
<button onclick="handleClick()">Click Me</button>

{/* JSX */}
<button onClick={handleClick}>Click Me</button>
```

Common attribute conversions:
- `onclick` → `onClick`
- `onchange` → `onChange`
- `tabindex` → `tabIndex`
- `maxlength` → `maxLength`

### Rule 4: Must Return a Single Root Element

JSX expressions must have one parent element:

```jsx
{/* Wrong ❌ - two root elements */}
function MyComponent() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  );
}

{/* Correct ✅ - wrapped in a div */}
function MyComponent() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  );
}

{/* Also correct ✅ - using a Fragment */}
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  );
}
```

The `<>` syntax is called a **Fragment** - it groups elements without adding extra DOM nodes.

---

## Embedding JavaScript Expressions

The power of JSX comes from mixing HTML-like syntax with JavaScript. Use **curly braces `{}`** to embed any JavaScript expression:

### Variables
```tsx
const name = "Alice";
const element = <h1>Hello, {name}!</h1>;
// Renders: <h1>Hello, Alice!</h1>
```

### Expressions
```tsx
const a = 5;
const b = 10;
const element = <p>The sum is: {a + b}</p>;
// Renders: <p>The sum is: 15</p>
```

### Function Calls
```tsx
function formatName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}

const element = <h1>Welcome, {formatName('Jane', 'Doe')}!</h1>;
// Renders: <h1>Welcome, Jane Doe!</h1>
```

### Objects (Accessing Properties)
```tsx
const user = {
  name: 'Bob',
  age: 14,
  grade: '8th'
};

const element = (
  <div>
    <h2>{user.name}</h2>
    <p>Age: {user.age}, Grade: {user.grade}</p>
  </div>
);
```

### Template Literals
```tsx
const temperature = 72;
const element = <p>{`It's ${temperature}°F outside`}</p>;
// Renders: <p>It's 72°F outside</p>
```

---

## You Can't Embed Objects or Booleans Directly

JSX can display strings and numbers, but not objects or booleans:

```tsx
const user = { name: 'Alice' };

{/* Wrong ❌ - can't render objects */}
<p>{user}</p>

{/* Correct ✅ - access properties */}
<p>{user.name}</p>

{/* Booleans don't render (they're ignored) */}
<p>{true}</p>  {/* Renders nothing */}
<p>{false}</p> {/* Renders nothing */}

{/* Convert to string if needed */}
<p>{String(true)}</p>  {/* Renders: <p>true</p> */}
```

---

## Conditional Rendering

There are several ways to show/hide content based on conditions:

### Method 1: Ternary Operator (Most Common)
```tsx
const isLoggedIn = true;

const element = (
  <div>
    {isLoggedIn ? (
      <h1>Welcome back!</h1>
    ) : (
      <h1>Please log in</h1>
    )}
  </div>
);
```

### Method 2: Logical AND (`&&`)
Use when you only want to show something if a condition is true:
```tsx
const hasNotifications = true;
const notificationCount = 5;

const element = (
  <div>
    <h1>Dashboard</h1>
    {hasNotifications && <p>You have {notificationCount} new notifications</p>}
  </div>
);
// If hasNotifications is true, the <p> renders
// If hasNotifications is false, nothing renders
```

### Method 3: Variable Assignment
For complex conditions, assign JSX to a variable:
```tsx
function Greeting({ timeOfDay }: { timeOfDay: string }) {
  let message;

  if (timeOfDay === 'morning') {
    message = <h1>Good morning!</h1>;
  } else if (timeOfDay === 'afternoon') {
    message = <h1>Good afternoon!</h1>;
  } else {
    message = <h1>Good evening!</h1>;
  }

  return <div>{message}</div>;
}
```

---

## Rendering Lists

To render multiple items from an array, use the `.map()` method:

### Basic List
```tsx
const fruits = ['Apple', 'Banana', 'Orange'];

const element = (
  <ul>
    {fruits.map((fruit) => (
      <li>{fruit}</li>
    ))}
  </ul>
);
// Renders:
// <ul>
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Orange</li>
// </ul>
```

### Lists Need Keys

React needs a unique `key` prop for each item to track changes efficiently:

```tsx
const fruits = ['Apple', 'Banana', 'Orange'];

const element = (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

**Better: Use unique IDs when available:**
```tsx
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const element = (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

### Why Keys Matter

Keys help React identify which items changed, were added, or removed. Without keys, React may re-render unnecessarily or lose track of items.

**Rule of thumb:** Use the array index as a key only if:
- The list never changes order
- Items aren't added or removed
- Items don't have unique IDs

Otherwise, use a unique identifier like an ID.

---

## Styling in JSX

### Inline Styles (Not Recommended for Most Cases)

In JSX, inline styles use an object with camelCase properties:

```tsx
const element = (
  <div style={{
    backgroundColor: 'blue',
    fontSize: '20px',
    padding: '10px'
  }}>
    Styled content
  </div>
);
```

Notice: `background-color` becomes `backgroundColor`, values are strings.

### CSS Classes (Recommended)

It's better to use CSS classes:

```tsx
// In your CSS file:
// .highlight { background-color: yellow; }

const element = <p className="highlight">Important text</p>;
```

---

## Comments in JSX

JSX comments use JavaScript comment syntax inside curly braces:

```tsx
const element = (
  <div>
    {/* This is a comment */}
    <h1>Hello World</h1>
    {/*
      Multi-line
      comment
    */}
  </div>
);
```

---

## Common Pitfalls

### Pitfall 1: Forgetting Curly Braces
```tsx
{/* Wrong ❌ - treated as literal text */}
<h1>Hello, name</h1>

{/* Correct ✅ */}
<h1>Hello, {name}</h1>
```

### Pitfall 2: Using Quotes with Expressions
```tsx
{/* Wrong ❌ - quotes make it a string */}
<img src="{imageUrl}" />

{/* Correct ✅ */}
<img src={imageUrl} />
```

### Pitfall 3: Forgetting to Close Tags
```tsx
{/* Wrong ❌ */}
<input>

{/* Correct ✅ */}
<input />
```

### Pitfall 4: Forgetting Keys in Lists
```tsx
{/* Wrong ❌ - no key */}
{items.map(item => <li>{item}</li>)}

{/* Correct ✅ */}
{items.map((item, index) => <li key={index}>{item}</li>)}
```

---

## Practice Checkpoint ✅

Try creating these JSX snippets:

1. A heading with your name from a variable
2. A paragraph showing the result of `10 * 5`
3. A div that shows "Adult" if age >= 18, otherwise "Minor"
4. A list of three favorite hobbies using `.map()`

---

## Key Takeaways

1. **JSX looks like HTML but is JavaScript** - it creates React elements
2. **All tags must close** - use `<input />` not `<input>`
3. **Use `className` not `class`** - class is a JavaScript keyword
4. **Curly braces `{}` embed JavaScript** - use them for variables and expressions
5. **Conditionals use ternary or `&&`** - `condition ? true : false`
6. **Lists use `.map()`** - and always include a `key` prop
7. **One root element per return** - wrap multiple elements in a div or Fragment `<>`

---

## Additional Resources

- [React JSX Documentation](https://react.dev/learn/writing-markup-with-jsx)
- [JSX In Depth](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Rendering Lists](https://react.dev/learn/rendering-lists)

---

**Next Lesson:** [Components & Props](./03-components-props.md) - Learn how to create reusable components!
