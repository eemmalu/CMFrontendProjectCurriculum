# Exercise 3: State Practice

## Objective
Create interactive components that use state to respond to user actions.

**Estimated Time:** 25 minutes
**Difficulty:** ⭐⭐

## Learning Goals
- Use the `useState` hook
- Update state in response to events
- Type state with TypeScript
- Handle click events
- Build multiple stateful components

## Instructions

### Step 1: Set Up Your Project
1. Create a new Vite React TypeScript project:
   ```bash
   npm create vite@latest state-practice-exercise -- --template react-ts
   cd state-practice-exercise
   npm install
   ```

### Step 2: Create a Counter Component
2. Create `src/components/Counter.tsx`
3. Use `useState` to track a count (initial value: 0)
4. Add three buttons:
   - "Increment" - adds 1 to count
   - "Decrement" - subtracts 1 from count
   - "Reset" - sets count back to 0
5. Display the current count

### Step 3: Create a Text Input Component
6. Create `src/components/TextMirror.tsx`
7. Use `useState` to track input text (initial value: empty string)
8. Create an input field that updates state `onChange`
9. Display the text below the input as you type

### Step 4: Create a Toggle Component
10. Create `src/components/LightSwitch.tsx`
11. Use `useState` to track if the light is on/off (initial value: false)
12. Add a button that toggles the state
13. Display "💡 ON" when true, "🌑 OFF" when false
14. Bonus: Change the background color based on state

### Step 5: Use All Components in App
15. Import all three components into `App.tsx`
16. Render all three components

## Example Code

### Counter.tsx
```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

### TextMirror.tsx
```tsx
import { useState } from 'react';

function TextMirror() {
  const [text, setText] = useState('');

  return (
    <div>
      <h2>Text Mirror</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
      <p>Length: {text.length} characters</p>
    </div>
  );
}

export default TextMirror;
```

### LightSwitch.tsx
```tsx
import { useState } from 'react';

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: isOn ? 'yellow' : 'gray',
      transition: 'background-color 0.3s'
    }}>
      <h2>Light Switch</h2>
      <p>{isOn ? '💡 ON' : '🌑 OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle Light
      </button>
    </div>
  );
}

export default LightSwitch;
```

### App.tsx
```tsx
import Counter from './components/Counter';
import TextMirror from './components/TextMirror';
import LightSwitch from './components/LightSwitch';

function App() {
  return (
    <div>
      <h1>State Practice</h1>
      <Counter />
      <hr />
      <TextMirror />
      <hr />
      <LightSwitch />
    </div>
  );
}

export default App;
```

## Expected Outcome
You should see:
1. **Counter** - Clicking buttons changes the count
2. **TextMirror** - Typing in the input displays the text below
3. **LightSwitch** - Clicking the button toggles between ON/OFF and changes background

## Bonus Challenges
- 🌟 Add a "Double" button to the counter that multiplies count by 2
- 🌟 In TextMirror, add a button to reverse the text
- 🌟 In TextMirror, show the text in uppercase, lowercase, and title case
- 🌟 Create a `ColorPicker` component with buttons for different colors
- 🌟 Create a `Likes` component with a heart button that increments likes
- 🌟 Add a `StepCounter` with an input to set the step size (increment by 1, 5, 10, etc.)

## Common Issues

**Issue:** State doesn't update immediately
**Solution:** State updates are asynchronous. React re-renders with the new value.

**Issue:** Input doesn't type
**Solution:** Make sure you have both `value={text}` and `onChange`

**Issue:** TypeScript error with event
**Solution:** The event type is `React.ChangeEvent<HTMLInputElement>`

**Issue:** Can't access previous state
**Solution:** Use functional update: `setCount(c => c + 1)`

## Practice Checkpoint ✅

Before moving on, make sure you can:
- [ ] Import and use the `useState` hook
- [ ] Create state with an initial value
- [ ] Update state using the setter function
- [ ] Handle button click events
- [ ] Handle input change events
- [ ] Use state to conditionally render content

## What You Learned
✅ How to add state to components with `useState`
✅ How to update state in response to user events
✅ How to handle click and change events
✅ How to use state for conditional rendering
✅ That each component instance has its own state

## Advanced Challenge: Multi-Step Form

Try creating a component with multiple state variables:
- First name (text input)
- Last name (text input)
- Age (number input)
- Favorite color (select dropdown)

Display all the information below the form as the user fills it out!

---

**Next Exercise:** [Component Library](../04-component-library/README.md)
