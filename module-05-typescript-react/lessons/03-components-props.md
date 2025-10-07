# Lesson 3: Components & Props

## Learning Objectives
- Understand what React components are
- Create functional components
- Pass data to components using props
- Type props with TypeScript interfaces
- Compose components together
- Use the special `children` prop

---

## What Are Components?

Think of components like LEGO blocks for your website. Just like you can combine LEGO blocks to build complex structures, you can combine components to build complex user interfaces.

A **component** is a reusable piece of UI that:
- Has its own logic
- Can accept data (props)
- Returns JSX to describe what should appear on screen

### Why Use Components?

**Without components:**
```tsx
function App() {
  return (
    <div>
      <div className="card">
        <img src="avatar1.jpg" />
        <h2>Alice</h2>
        <p>Web Developer</p>
      </div>
      <div className="card">
        <img src="avatar2.jpg" />
        <h2>Bob</h2>
        <p>Designer</p>
      </div>
      <div className="card">
        <img src="avatar3.jpg" />
        <h2>Charlie</h2>
        <p>Product Manager</p>
      </div>
    </div>
  );
}
```

**With components:**
```tsx
function UserCard({ avatar, name, role }: { avatar: string; name: string; role: string }) {
  return (
    <div className="card">
      <img src={avatar} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard avatar="avatar1.jpg" name="Alice" role="Web Developer" />
      <UserCard avatar="avatar2.jpg" name="Bob" role="Designer" />
      <UserCard avatar="avatar3.jpg" name="Charlie" role="Product Manager" />
    </div>
  );
}
```

Components let you:
- ✅ Reuse code (no copy-pasting!)
- ✅ Keep code organized
- ✅ Make updates in one place
- ✅ Break complex UIs into manageable pieces

---

## Creating Functional Components

A functional component is just a JavaScript function that returns JSX:

### Basic Component
```tsx
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

That's it! A function that returns JSX is a React component.

### Component Naming Rules
- **Must start with a capital letter** - `Greeting`, not `greeting`
- **Use PascalCase** - `UserProfile`, not `userProfile` or `user-profile`

```tsx
// ✅ Correct
function WelcomeMessage() {
  return <p>Welcome!</p>;
}

// ❌ Wrong - lowercase
function welcomeMessage() {
  return <p>Welcome!</p>;
}
```

### File Organization

In React, each component typically lives in its own file:

```tsx
// src/components/Button.tsx
function Button() {
  return <button>Click me</button>;
}

export default Button;
```

Then import it where needed:
```tsx
// src/App.tsx
import Button from './components/Button';

function App() {
  return <Button />;
}
```

---

## Props: Passing Data to Components

**Props** (short for "properties") are how you pass data from a parent component to a child component. Think of props like function parameters - they let you customize how a component behaves.

### Basic Props Example

```tsx
// Define a component that accepts props
function Greeting(props: { name: string }) {
  return <h1>Hello, {props.name}!</h1>;
}

// Use the component and pass data
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}
```

Result:
```
Hello, Alice!
Hello, Bob!
Hello, Charlie!
```

### Props Are Read-Only

**Important:** You can never change props inside a component. They're read-only!

```tsx
function Greeting(props: { name: string }) {
  // ❌ NEVER do this - props are read-only
  props.name = 'Something else';

  // ✅ Just use them
  return <h1>Hello, {props.name}!</h1>;
}
```

Props flow **one way**: from parent to child. This is called "one-way data flow."

---

## Typing Props with TypeScript

TypeScript lets you specify exactly what props a component expects. This catches errors before you run your code!

### Method 1: Inline Type

```tsx
function UserCard(props: { name: string; age: number; email: string }) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}
```

### Method 2: Interface (Recommended)

Defining an interface makes your code cleaner and reusable:

```tsx
interface UserCardProps {
  name: string;
  age: number;
  email: string;
}

function UserCard(props: UserCardProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

// Usage
<UserCard name="Alice" age={14} email="alice@example.com" />
```

### Optional Props

Make a prop optional with `?`:

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;  // Optional - can be undefined
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} disabled={props.disabled}>
      {props.label}
    </button>
  );
}

// Both valid:
<Button label="Click" onClick={handleClick} />
<Button label="Click" onClick={handleClick} disabled={true} />
```

### Default Values

Provide default values for optional props:

```tsx
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

function Button({ label, variant = 'primary' }: ButtonProps) {
  return <button className={variant}>{label}</button>;
}

// Uses default 'primary'
<Button label="Save" />

// Overrides default
<Button label="Cancel" variant="secondary" />
```

---

## Destructuring Props

Instead of writing `props.name`, `props.age` everywhere, you can **destructure** props:

### Without Destructuring
```tsx
function UserCard(props: { name: string; age: number }) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}
```

### With Destructuring (Preferred)
```tsx
function UserCard({ name, age }: { name: string; age: number }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

Much cleaner! This is the most common pattern in React.

---

## Different Types of Props

Props can be any JavaScript value:

### String Props
```tsx
<Greeting name="Alice" />
```

### Number Props (Use Curly Braces)
```tsx
<Counter initialValue={0} />
```

### Boolean Props
```tsx
<Button disabled={true} />
{/* Shorthand for true: */}
<Button disabled />
```

### Array Props
```tsx
<TodoList items={['Buy milk', 'Walk dog', 'Code']} />
```

### Object Props
```tsx
<UserProfile user={{ name: 'Alice', age: 14 }} />
```

### Function Props
```tsx
<Button onClick={() => alert('Clicked!')} />
```

---

## Component Composition

Components can contain other components, just like HTML elements can contain other elements:

```tsx
function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>Welcome to my website!</p>
      </main>
      <Footer />
    </div>
  );
}
```

This is called **composition** - building complex UIs by combining simple components.

---

## The `children` Prop

The `children` prop is special - it contains whatever you put between the component's opening and closing tags:

```tsx
interface CardProps {
  children: React.ReactNode;  // Special type for children
}

function Card({ children }: CardProps) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage
function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>Card content goes here!</p>
    </Card>
  );
}
```

The text and elements between `<Card>` and `</Card>` become the `children` prop.

### Another Example: Button with Icon

```tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// Can include text, icons, or any JSX
<Button onClick={handleSave}>
  💾 Save
</Button>

<Button onClick={handleDelete}>
  <TrashIcon /> Delete
</Button>
```

---

## Common Pitfalls

### Pitfall 1: Lowercase Component Names
```tsx
// ❌ React thinks this is an HTML tag
function button() {
  return <button>Click</button>;
}

// ✅ Capital letter - React knows it's a component
function Button() {
  return <button>Click</button>;
}
```

### Pitfall 2: Forgetting to Pass Required Props
```tsx
interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}</h1>;
}

// ❌ TypeScript error - missing 'name' prop
<Greeting />

// ✅ Correct
<Greeting name="Alice" />
```

### Pitfall 3: Trying to Modify Props
```tsx
function Counter({ count }: { count: number }) {
  // ❌ Can't do this - props are read-only
  count = count + 1;

  return <p>Count: {count}</p>;
}

// Use state instead (we'll learn this next!)
```

### Pitfall 4: Using Quotes for Non-String Props
```tsx
// ❌ Wrong - makes it a string "5", not number 5
<Counter value="5" />

// ✅ Correct - number 5
<Counter value={5} />
```

---

## Practice Checkpoint ✅

Try building these components:

1. **ProfileCard** - accepts `name`, `bio`, and `imageUrl` props
2. **Button** - accepts `label` and `onClick` props
3. **Alert** - accepts a `message` prop and displays it in a styled box
4. **Container** - accepts `children` and wraps them in a styled div

---

## Key Takeaways

1. **Components are reusable UI pieces** - like functions that return JSX
2. **Component names must start with a capital letter** - `Button`, not `button`
3. **Props pass data from parent to child** - like function parameters
4. **Props are read-only** - never modify them
5. **Use TypeScript interfaces to type props** - catches errors early
6. **Destructure props for cleaner code** - `{ name, age }` instead of `props.name`
7. **Components can contain other components** - composition is powerful
8. **`children` prop** contains content between component tags

---

## Additional Resources

- [React Components Documentation](https://react.dev/learn/your-first-component)
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [TypeScript with React Components](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)

---

**Next Lesson:** [State Basics](./04-state-basics.md) - Learn how to make your components interactive with state!
