# Lesson 1: Vite Setup

## Learning Objectives
- Understand what Vite is and why it's useful
- Create a React + TypeScript project using Vite
- Understand the default project structure
- Run the development server

---

## What is Vite?

Vite (pronounced "veet", French for "fast") is a modern build tool that makes developing web applications super fast. Think of it like a helpful assistant that:
- Starts your development server instantly
- Updates your browser immediately when you save a file
- Bundles all your code for production

### Why Use Vite?

Before tools like Vite, starting a development server could take minutes! Vite uses modern JavaScript features to start in milliseconds. It's perfect for React development because:
- ⚡ Lightning-fast server start
- 🔥 Instant updates (Hot Module Replacement)
- 📦 Optimized production builds
- 🛠️ Built-in TypeScript support

---

## Creating Your First React App

Let's create a new React project with Vite!

### Step 1: Run the Create Command

Open your terminal and run:

```bash
npm create vite@latest my-first-react-app -- --template react-ts
```

This command does several things:
- `npm create vite@latest` - Uses the latest version of Vite's project creator
- `my-first-react-app` - Names your project (you can change this!)
- `--template react-ts` - Uses the React + TypeScript template

### Step 2: Navigate to Your Project

```bash
cd my-first-react-app
```

### Step 3: Install Dependencies

```bash
npm install
```

This downloads all the packages your project needs (React, TypeScript, etc.)

### Step 4: Start the Development Server

```bash
npm run dev
```

You should see something like:
```
VITE v5.0.0  ready in 300 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open `http://localhost:5173/` in your browser and you'll see your React app running! 🎉

---

## Understanding the Project Structure

Let's explore what Vite created for you:

```
my-first-react-app/
├── node_modules/        # All installed packages (don't edit this!)
├── public/              # Static files (images, fonts, etc.)
├── src/                 # Your source code goes here
│   ├── App.css         # Styles for App component
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point - starts your React app
│   └── index.css       # Global styles
├── index.html          # The HTML file that loads your app
├── package.json        # Lists dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

### Key Files to Know

#### `src/main.tsx` - The Entry Point
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

This file:
1. Imports React and ReactDOM
2. Finds the `div` with id "root" in your HTML
3. Renders your `<App />` component into that div

#### `src/App.tsx` - Your Main Component
```typescript
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <button onClick={() => setCount(count + 1)}>
        Count is: {count}
      </button>
    </div>
  )
}

export default App
```

This is a React component! Don't worry about understanding everything yet - we'll learn about components in the next lessons.

#### `index.html` - The HTML Shell
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

This HTML file has a `div` with id "root" where React will inject your app.

#### `package.json` - Project Configuration
```json
{
  "name": "my-first-react-app",
  "scripts": {
    "dev": "vite",           // Start development server
    "build": "tsc && vite build",  // Build for production
    "preview": "vite preview"      // Preview production build
  },
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.0",
    "typescript": "^5.5.0",
    "vite": "^5.4.0"
  }
}
```

---

## How Vite Works

When you run `npm run dev`, here's what happens:

1. **Vite starts a development server** on port 5173
2. **Vite serves your `index.html`** file
3. **The browser loads `main.tsx`** (the script tag in HTML)
4. **React renders your `App` component** into the `#root` div
5. **Vite watches for changes** - when you edit a file, it instantly updates the browser!

This is called **Hot Module Replacement (HMR)** - it's like magic! ✨

---

## Making Your First Change

Let's modify the app to make sure everything works:

1. Open `src/App.tsx` in your code editor
2. Find the `<h1>` tag and change the text:
   ```typescript
   <h1>My First React App!</h1>
   ```
3. Save the file
4. Watch your browser - it updates instantly without refreshing! 🚀

---

## Common Pitfalls

### Pitfall 1: Port Already in Use
**Error:** `Port 5173 is already in use`

**Solution:** Either stop the other server, or Vite will automatically try port 5174, 5175, etc.

### Pitfall 2: Module Not Found
**Error:** `Cannot find module 'react'`

**Solution:** Make sure you ran `npm install` to download all dependencies.

### Pitfall 3: TypeScript Errors
**Error:** Red squiggly lines everywhere in your editor

**Solution:** Your editor might need a moment to load TypeScript. Wait a few seconds or reload VS Code.

---

## Practice Checkpoint ✅

Before moving on, make sure you can:
- [ ] Create a new Vite React project
- [ ] Start the development server
- [ ] Identify the main files (main.tsx, App.tsx, index.html)
- [ ] Make a change and see it update in the browser

---

## Key Takeaways

1. **Vite is a fast build tool** for modern web development
2. **`npm create vite` creates a new project** with all necessary files
3. **`npm run dev` starts the development server** with hot reloading
4. **Your app starts in `main.tsx`** and renders into `index.html`
5. **The `src/` folder** contains all your React components

---

## Additional Resources

- [Vite Official Guide](https://vitejs.dev/guide/)
- [Why Vite?](https://vitejs.dev/guide/why.html)
- [Scaffolding Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

---

**Next Lesson:** [JSX Basics](./02-jsx-basics.md) - Learn how to write JSX, React's syntax for describing UI!
