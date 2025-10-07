# Lesson 4: State Basics

## Learning Objectives
- Understand what state is and why it's important
- Use the `useState` hook to manage component state
- Update state correctly
- Type state with TypeScript
- Handle user events in React
- Understand the difference between state and props

---

## What is State?

**State** is data that can **change over time** in your component. When state changes, React automatically re-renders your component to show the updated data.

Think of state like a component's memory:
- A counter remembers how many times you clicked
- A form remembers what you typed
- A toggle remembers if it's on or off

### State vs Props

| **State** | **Props** |
|-----------|-----------|
| Data that **can change** | Data that is **passed in** |
| Managed **inside** the component | Passed from **parent** component |
| **Mutable** (can be updated) | **Immutable** (read-only) |
| Component's private data | Component's configuration |

---

## The `useState` Hook

React provides a function called `useState` that lets you add state to your components.

### Basic Syntax

```tsx
import { useState } from 'react';

function Counter() {
  // Declare a state variable called 'count'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

Let's break this down:

```tsx
const [count, setCount] = useState(0);
//     ^       ^            ^      ^
//     |       |            |      |
//     |       |            |      Initial value
//     |       |            useState hook
//     |       Function to update the state
//     Current state value
```

- `count` - The current value of the state (starts at `0`)
- `setCount` - A function to update the state
- `useState(0)` - Creates state with initial value `0`

### How It Works

1. React renders your component
2. `useState(0)` creates a state variable with value `0`
3. When you call `setCount(1)`, React:
   - Updates the state to `1`
   - Re-renders the component
   - Shows the new value

---

## Simple Examples

### Example 1: Counter

```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### Example 2: Text Input

```tsx
import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
```

### Example 3: Toggle

```tsx
import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>The light is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
    </div>
  );
}
```

---

## Typing State with TypeScript

TypeScript usually **infers** the type from the initial value:

```tsx
// TypeScript infers count is a number
const [count, setCount] = useState(0);

// TypeScript infers name is a string
const [name, setName] = useState('');

// TypeScript infers isActive is a boolean
const [isActive, setIsActive] = useState(false);
```

### Explicit Types

Sometimes you need to specify the type explicitly:

```tsx
// State that can be null
const [user, setUser] = useState<string | null>(null);

// Later:
setUser('Alice');  // ✅ OK
setUser(null);     // ✅ OK
setUser(123);      // ❌ Error - must be string or null
```

### Complex Types

Use interfaces for object state:

```tsx
interface User {
  name: string;
  age: number;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useState<User>({
    name: 'Alice',
    age: 14,
    email: 'alice@example.com'
  });

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

### Array State

```tsx
function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
```

---

## Updating State Correctly

### Rule 1: Always Use the Setter Function

```tsx
const [count, setCount] = useState(0);

// ❌ NEVER directly modify state
count = count + 1;

// ✅ Use the setter function
setCount(count + 1);
```

### Rule 2: State Updates Are Asynchronous

State doesn't update immediately:

```tsx
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  console.log(count);  // Still shows old value! (0)
}
```

React batches state updates for performance. The new value appears on the next render.

### Rule 3: Use Functional Updates for Multiple Updates

If you're updating state based on the previous state, use a function:

```tsx
// ❌ May not work as expected
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// Might only increment by 1!

// ✅ Correct way
setCount(c => c + 1);
setCount(c => c + 1);
setCount(c => c + 1);
// Increments by 3!
```

The function receives the **most recent** state value.

### Rule 4: Don't Mutate Objects or Arrays

State should be treated as **immutable**. Create new objects/arrays instead of modifying existing ones:

```tsx
// ❌ Wrong - mutating state directly
const [user, setUser] = useState({ name: 'Alice', age: 14 });
user.age = 15;  // Don't do this!

// ✅ Correct - create a new object
setUser({ ...user, age: 15 });
```

```tsx
// ❌ Wrong - mutating array
const [items, setItems] = useState(['a', 'b']);
items.push('c');  // Don't do this!

// ✅ Correct - create a new array
setItems([...items, 'c']);
```

---

## Event Handling in React

React uses camelCase event names and you pass functions as event handlers:

### Click Events

```tsx
function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}

// Or inline:
<button onClick={() => alert('Clicked!')}>Click me</button>
```

### Input Events

```tsx
function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return <input value={text} onChange={handleChange} />;
}
```

### Form Events

```tsx
function Form() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent page reload
    alert(`Submitted: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Common Events

- `onClick` - Button/element clicks
- `onChange` - Input/select value changes
- `onSubmit` - Form submission
- `onMouseEnter` - Mouse enters element
- `onMouseLeave` - Mouse leaves element
- `onFocus` - Element receives focus
- `onBlur` - Element loses focus

---

## Multiple State Variables

You can use `useState` multiple times in one component:

```tsx
function Profile() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input type="number" value={age} onChange={e => setAge(Number(e.target.value))} />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
  );
}
```

Or use a single object:

```tsx
interface ProfileState {
  name: string;
  age: number;
  email: string;
}

function Profile() {
  const [profile, setProfile] = useState<ProfileState>({
    name: '',
    age: 0,
    email: ''
  });

  return (
    <div>
      <input
        value={profile.name}
        onChange={e => setProfile({ ...profile, name: e.target.value })}
      />
      <input
        type="number"
        value={profile.age}
        onChange={e => setProfile({ ...profile, age: Number(e.target.value) })}
      />
      <input
        type="email"
        value={profile.email}
        onChange={e => setProfile({ ...profile, email: e.target.value })}
      />
    </div>
  );
}
```

---

## Practical Example: Todo List

Here's a more complete example combining everything:

```tsx
import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInput('');  // Clear input
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Common Pitfalls

### Pitfall 1: Modifying State Directly

```tsx
// ❌ Wrong
const [count, setCount] = useState(0);
count = 5;  // This doesn't work!

// ✅ Correct
setCount(5);
```

### Pitfall 2: Using Stale State

```tsx
// ❌ This might not work as expected
setCount(count + 1);
setCount(count + 1);  // Uses same 'count' value!

// ✅ Use functional update
setCount(c => c + 1);
setCount(c => c + 1);
```

### Pitfall 3: Mutating Objects

```tsx
// ❌ Wrong - mutates state
const [user, setUser] = useState({ name: 'Alice' });
user.name = 'Bob';

// ✅ Correct - creates new object
setUser({ ...user, name: 'Bob' });
```

### Pitfall 4: Expecting Immediate Updates

```tsx
// ❌ Won't work as expected
setCount(5);
console.log(count);  // Still shows old value!

// ✅ State updates on next render
// Use the value in your JSX or in an effect (Module 6)
```

---

## Practice Checkpoint ✅

Build these components to practice state:

1. **Counter** - Button that increments/decrements a number
2. **TextInput** - Input that displays what you type below it
3. **ToggleButton** - Button that switches between "ON" and "OFF"
4. **ColorPicker** - Buttons that change background color of a div
5. **SimpleTodo** - Add items to a list

---

## Key Takeaways

1. **State is component memory** - data that can change over time
2. **`useState` adds state to components** - `const [value, setValue] = useState(initial)`
3. **Always use the setter function** - never modify state directly
4. **State updates trigger re-renders** - React automatically updates the UI
5. **State is local to each component** - each instance has its own state
6. **Type state with TypeScript** - usually inferred, but can be explicit
7. **Events use camelCase** - `onClick`, `onChange`, etc.
8. **Don't mutate objects/arrays** - create new ones with spread operator

---

## Additional Resources

- [React State Documentation](https://react.dev/learn/state-a-components-memory)
- [useState Hook](https://react.dev/reference/react/useState)
- [Responding to Events](https://react.dev/learn/responding-to-events)
- [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)
- [Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)

---

**Congratulations!** You've learned the fundamentals of React. Now it's time to practice with exercises and homework!
