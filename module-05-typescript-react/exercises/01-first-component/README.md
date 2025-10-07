# Exercise 1: First Component

## Objective
Create your first React component that displays a personalized welcome message.

**Estimated Time:** 15 minutes
**Difficulty:** ⭐

## Learning Goals
- Create a functional component
- Write JSX
- Run a Vite React app

## Instructions

### Step 1: Set Up Your Project
1. Create a new Vite React TypeScript project:
   ```bash
   npm create vite@latest first-component-exercise -- --template react-ts
   cd first-component-exercise
   npm install
   ```

### Step 2: Create Your Component
2. Open `src/App.tsx`
3. Clear the existing code and create a new component called `Welcome`
4. Make it return a `div` containing:
   - An `h1` with the text "Welcome to React!"
   - A `p` paragraph with your name and grade
   - A `p` paragraph describing what you're excited to learn

### Step 3: Run Your App
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser to the URL shown (usually `http://localhost:5173`)
7. You should see your welcome message!

### Step 4: Experiment
8. Try adding more JSX elements:
   - Add another heading
   - Add a list of your hobbies using `<ul>` and `<li>`
   - Add an image using `<img src="..." />`

## Expected Outcome

Your component should look something like:

```tsx
function Welcome() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>My name is Alice and I'm in 8th grade.</p>
      <p>I'm excited to learn how to build interactive web apps!</p>
    </div>
  );
}

export default Welcome;
```

And display in your browser with your welcome message.

## Bonus Challenges
- 🌟 Add CSS styling (create a CSS file and import it)
- 🌟 Use inline styles to change colors
- 🌟 Add multiple components (create a `Header` and `Footer` component)

## Common Issues

**Issue:** "Cannot find module" error
**Solution:** Make sure you ran `npm install`

**Issue:** Page doesn't update when I save
**Solution:** Make sure the dev server is running (`npm run dev`)

**Issue:** Nothing appears in the browser
**Solution:** Check the browser console for errors. Make sure you exported your component with `export default`

## What You Learned
✅ How to create a React functional component
✅ How to write JSX
✅ How to run a Vite development server
✅ How components render to the browser

---

**Next Exercise:** [Props Practice](../02-props-practice/README.md)
