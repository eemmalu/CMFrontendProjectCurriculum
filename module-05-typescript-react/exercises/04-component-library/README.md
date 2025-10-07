# Exercise 4: Component Library

## Objective
Build a small library of reusable, typed components that you can use in any React project.

**Estimated Time:** 30 minutes
**Difficulty:** ⭐⭐⭐

## Learning Goals
- Create multiple reusable components
- Type props with TypeScript interfaces
- Use union types for variant props
- Combine props and state
- Build a component showcase

## Instructions

### Step 1: Set Up Your Project
1. Create a new Vite React TypeScript project:
   ```bash
   npm create vite@latest component-library-exercise -- --template react-ts
   cd component-library-exercise
   npm install
   ```

### Step 2: Create a Button Component
2. Create `src/components/Button.tsx`
3. Props should include:
   - `label` (string) - button text
   - `onClick` (function) - click handler
   - `variant` (optional) - 'primary', 'secondary', or 'danger'
   - `disabled` (optional boolean)
4. Style the button differently based on variant

### Step 3: Create a Card Component
5. Create `src/components/Card.tsx`
6. Props should include:
   - `title` (string)
   - `children` (React.ReactNode) - card content
   - `footer` (optional string)
7. Display the title, children content, and optional footer

### Step 4: Create an Input Component
8. Create `src/components/Input.tsx`
9. Props should include:
   - `label` (string)
   - `value` (string)
   - `onChange` (function)
   - `placeholder` (optional string)
   - `type` (optional) - 'text', 'email', 'password', etc.
10. Use state internally to manage the value

### Step 5: Create a Counter Component
11. Create `src/components/Counter.tsx`
12. Props should include:
   - `initialValue` (optional number, default 0)
   - `step` (optional number, default 1)
   - `min` (optional number)
   - `max` (optional number)
13. Should have increment/decrement buttons
14. Respect min/max bounds if provided

### Step 6: Create a Showcase
15. In `App.tsx`, import and demonstrate all components
16. Show each component with different configurations

## Example Code

### Button.tsx
```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

function Button({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  const getButtonStyle = () => {
    const baseStyle = {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      fontSize: '16px'
    };

    const variantStyles = {
      primary: { backgroundColor: '#007bff', color: 'white' },
      secondary: { backgroundColor: '#6c757d', color: 'white' },
      danger: { backgroundColor: '#dc3545', color: 'white' }
    };

    return { ...baseStyle, ...variantStyles[variant] };
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={getButtonStyle()}
    >
      {label}
    </button>
  );
}

export default Button;
```

### Card.tsx
```tsx
interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: string;
}

function Card({ title, children, footer }: CardProps) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3>{title}</h3>
      <div>{children}</div>
      {footer && (
        <div style={{
          marginTop: '10px',
          paddingTop: '10px',
          borderTop: '1px solid #eee',
          fontSize: '14px',
          color: '#666'
        }}>
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;
```

### Input.tsx
```tsx
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
}

function Input({ label, value, onChange, placeholder, type = 'text' }: InputProps) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '16px'
        }}
      />
    </div>
  );
}

export default Input;
```

### Counter.tsx
```tsx
import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

function Counter({ initialValue = 0, step = 1, min, max }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(c => {
      const newValue = c + step;
      if (max !== undefined && newValue > max) return c;
      return newValue;
    });
  };

  const decrement = () => {
    setCount(c => {
      const newValue = c - step;
      if (min !== undefined && newValue < min) return c;
      return newValue;
    });
  };

  const reset = () => setCount(initialValue);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2 style={{ fontSize: '48px', margin: '10px 0' }}>{count}</h2>
      <div>
        <button onClick={decrement} style={{ margin: '0 5px', padding: '10px 20px' }}>
          - {step}
        </button>
        <button onClick={reset} style={{ margin: '0 5px', padding: '10px 20px' }}>
          Reset
        </button>
        <button onClick={increment} style={{ margin: '0 5px', padding: '10px 20px' }}>
          + {step}
        </button>
      </div>
      {(min !== undefined || max !== undefined) && (
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          Range: {min ?? '-∞'} to {max ?? '∞'}
        </p>
      )}
    </div>
  );
}

export default Counter;
```

### App.tsx
```tsx
import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import Counter from './components/Counter';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Component Library Showcase</h1>

      <Card title="Buttons" footer="Multiple button variants">
        <Button label="Primary Button" onClick={() => alert('Primary!')} />
        <Button label="Secondary Button" onClick={() => alert('Secondary!')} variant="secondary" />
        <Button label="Danger Button" onClick={() => alert('Danger!')} variant="danger" />
        <Button label="Disabled Button" onClick={() => {}} disabled />
      </Card>

      <Card title="Form Inputs">
        <Input
          label="Your Name"
          value={name}
          onChange={setName}
          placeholder="Enter your name"
        />
        <Input
          label="Email Address"
          value={email}
          onChange={setEmail}
          type="email"
          placeholder="your@email.com"
        />
        {name && email && (
          <p>Hello, {name}! We'll contact you at {email}.</p>
        )}
      </Card>

      <Card title="Basic Counter">
        <Counter />
      </Card>

      <Card title="Counter with Step and Bounds" footer="Step: 5, Range: 0-100">
        <Counter initialValue={50} step={5} min={0} max={100} />
      </Card>

      <Card title="Nested Card Example">
        <p>This is a card inside another card!</p>
        <Card title="Inner Card" footer="Nested footer">
          <p>Component composition is powerful! 🚀</p>
        </Card>
      </Card>
    </div>
  );
}

export default App;
```

## Expected Outcome
You should see a showcase page displaying:
- Different button variants (primary, secondary, danger, disabled)
- Input fields that work with state
- Counters with different configurations
- Cards containing different content
- All components properly typed with TypeScript

## Bonus Challenges
- 🌟 Add a `Badge` component (shows notification count)
- 🌟 Add an `Alert` component with variants (info, success, warning, error)
- 🌟 Add a `ProgressBar` component (accepts percentage 0-100)
- 🌟 Add a `Tabs` component (switches between different content)
- 🌟 Add a `Modal` component (popup dialog)
- 🌟 Create CSS files for better styling instead of inline styles
- 🌟 Add hover effects using CSS
- 🌟 Export all components from a single `index.ts` file

## Common Issues

**Issue:** TypeScript error with children prop
**Solution:** Use `React.ReactNode` type

**Issue:** Buttons don't look different
**Solution:** Make sure you're applying different styles based on the `variant` prop

**Issue:** Counter doesn't respect min/max
**Solution:** Check the value before updating state

**Issue:** Components aren't reusable
**Solution:** Make sure you're using props, not hard-coded values

## Practice Checkpoint ✅

Before moving on, make sure you can:
- [ ] Create components with multiple props
- [ ] Use TypeScript union types for variants
- [ ] Make props optional with default values
- [ ] Use the `children` prop
- [ ] Combine props and state in a component
- [ ] Build a showcase that demonstrates all components

## What You Learned
✅ How to build reusable component libraries
✅ How to type complex props with TypeScript
✅ How to use union types for variants
✅ How to provide default values for optional props
✅ How to use the `children` prop for flexible composition
✅ How to combine props and state effectively
✅ How to document components with examples

## Real-World Connection
Component libraries like this are how professional UI libraries work! Libraries like shadcn/ui, Material-UI, and Chakra UI are built on these same principles - reusable, typed components that you can customize with props.

---

**Next Step:** Complete the [Module 5 Homework](../../homework/README.md) to test your skills!
