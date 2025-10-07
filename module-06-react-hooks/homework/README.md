# Module 6 Homework: Task Management Application

## Assignment Overview
Build a complete task management application that demonstrates mastery of useEffect, useContext, custom hooks, and all previously learned React concepts.

**Estimated Time:** 4-5 hours
**Difficulty:** ⭐⭐⭐

## Learning Objectives
By completing this homework, you will demonstrate:
- Proficiency with useEffect for data persistence
- Understanding of useContext for global state management
- Ability to create and use custom hooks
- Skills in component composition and state management
- Clean code organization and TypeScript typing

## Application Requirements

### Features

Your task manager must support:

1. ✅ **Add tasks** - Create new tasks with title and description
2. ✅ **Mark tasks complete/incomplete** - Toggle task status
3. ✅ **Delete tasks** - Remove tasks permanently
4. ✅ **Filter tasks** - View All, Active, or Completed tasks
5. ✅ **Persist data** - Save tasks to localStorage (survive page refresh)
6. ✅ **Theme switching** - Light/dark mode with persistence
7. ✅ **Task statistics** - Show count of total, active, and completed tasks

---

## Technical Requirements

### 1. Task Context (Required) ✅
**File:** `src/context/TaskContext.tsx`

Create a context that manages all task-related state:

**State to manage:**
- `tasks` (array of Task objects)
- `filter` (current filter: 'all' | 'active' | 'completed')

**Functions to provide:**
- `addTask(title: string, description: string)`
- `toggleTask(id: string)`
- `deleteTask(id: string)`
- `setFilter(filter: FilterType)`

**Task interface:**
```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
```

---

### 2. Theme Context (Required) ✅
**File:** `src/context/ThemeContext.tsx`

Create a context for theme management:

**State to manage:**
- `theme` ('light' or 'dark')

**Functions to provide:**
- `toggleTheme()`

**Must persist to localStorage** so theme is remembered across sessions.

---

### 3. Custom Hook: useLocalStorage (Required) ✅
**File:** `src/hooks/useLocalStorage.ts`

Create a reusable hook for localStorage sync:

```typescript
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void]
```

- Reads initial value from localStorage
- Saves to localStorage on every change
- Handles errors gracefully
- Properly typed with TypeScript generics

---

### 4. Custom Hook: useTaskStats (Required) ✅
**File:** `src/hooks/useTaskStats.ts`

Create a hook that calculates task statistics:

```typescript
function useTaskStats(tasks: Task[]): {
  total: number;
  active: number;
  completed: number;
  completionPercentage: number;
}
```

---

### 5. Components (Required) ✅

#### TaskForm Component
**File:** `src/components/TaskForm.tsx`

- Input for task title (required)
- Textarea for task description (optional)
- Submit button
- Uses task context to add tasks
- Clears form after submission
- Validates that title is not empty

#### TaskItem Component
**File:** `src/components/TaskItem.tsx`

- Displays task title and description
- Checkbox to toggle completion
- Delete button
- Different styling for completed tasks (e.g., strikethrough)
- Uses task context for toggle and delete

#### TaskList Component
**File:** `src/components/TaskList.tsx`

- Displays filtered tasks
- Uses task context to get tasks and current filter
- Shows message if no tasks match filter
- Renders TaskItem for each task

#### FilterButtons Component
**File:** `src/components/FilterButtons.tsx`

- Three buttons: All, Active, Completed
- Highlights active filter
- Uses task context to set filter

#### TaskStats Component
**File:** `src/components/TaskStats.tsx`

- Uses useTaskStats hook
- Displays: total tasks, active tasks, completed tasks
- Shows completion percentage
- Styled clearly

#### Header Component
**File:** `src/components/Header.tsx`

- App title
- Theme toggle button
- Uses theme context
- Styled based on current theme

#### App Component
**File:** `src/App.tsx`

- Wraps everything in TaskProvider and ThemeProvider
- Renders all components
- Applies theme-based styling to entire app

---

## Starter Code

The `starter/` folder contains:
- Basic Vite React TypeScript setup
- Component files with TODOs
- Context files with structure
- Hook files to implement
- Type definitions

**Your job:** Complete all TODOs!

---

## File Structure

```
homework/starter/
├── src/
│   ├── components/
│   │   ├── TaskForm.tsx
│   │   ├── TaskItem.tsx
│   │   ├── TaskList.tsx
│   │   ├── FilterButtons.tsx
│   │   ├── TaskStats.tsx
│   │   └── Header.tsx
│   ├── context/
│   │   ├── TaskContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   └── useTaskStats.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Testing Your Work

### Manual Testing
1. Navigate to `homework/starter`
2. Run `npm install`
3. Run `npm run dev`
4. Test all features:
   - Add tasks with and without descriptions
   - Mark tasks complete/incomplete
   - Delete tasks
   - Filter by All/Active/Completed
   - Toggle theme
   - Refresh page - data and theme should persist

### Automated Testing
Run the test suite:
```bash
npm run test:module-06
```

All tests must pass for full credit!

---

## Grading Rubric

| Category | Points | Criteria |
|----------|--------|----------|
| **Task Context** | 15 | All state and functions work correctly |
| **Theme Context** | 10 | Theme switching and persistence work |
| **useLocalStorage Hook** | 15 | Generic, reusable, error handling |
| **useTaskStats Hook** | 10 | Correctly calculates all statistics |
| **TaskForm Component** | 10 | Add tasks with validation |
| **TaskItem Component** | 10 | Toggle and delete work correctly |
| **TaskList Component** | 10 | Displays filtered tasks correctly |
| **FilterButtons Component** | 5 | Filter switching works |
| **TaskStats Component** | 5 | Shows correct statistics |
| **Data Persistence** | 10 | Tasks and theme survive refresh |
| **TypeScript Types** | 5 | All types correct, no `any` |
| **Code Quality** | 5 | Clean, organized, readable |
| **Total** | **110** | Extra credit possible! |

---

## Bonus Challenges (Optional)

Want to go further? Try these:

- 🌟 **Edit tasks** - Add ability to edit task title/description
- 🌟 **Due dates** - Add due dates to tasks and sort by them
- 🌟 **Categories** - Add task categories/tags
- 🌟 **Search** - Search tasks by title/description
- 🌟 **Drag & drop** - Reorder tasks with drag & drop
- 🌟 **Export/Import** - Export tasks to JSON file
- 🌟 **Priority levels** - High/Medium/Low priority
- 🌟 **Animations** - Add smooth transitions for task operations
- 🌟 **Accessibility** - Keyboard navigation, ARIA labels

---

## Common Issues & Solutions

### Issue: Tasks don't persist
**Solution:** Make sure you're using useLocalStorage in TaskContext and saving tasks whenever they change

### Issue: Filter doesn't work
**Solution:** Check that you're filtering tasks correctly based on completed status

### Issue: Theme doesn't persist
**Solution:** Use useLocalStorage for theme state in ThemeContext

### Issue: TypeScript errors
**Solution:** Make sure all interfaces are properly defined and imported

### Issue: Stats don't update
**Solution:** useTaskStats should recalculate whenever tasks array changes

---

## Submission Checklist

Before submitting, ensure:
- [ ] All components are complete
- [ ] Both contexts work correctly
- [ ] Both custom hooks are implemented
- [ ] Tasks persist to localStorage
- [ ] Theme persists to localStorage
- [ ] All filters work
- [ ] Statistics are accurate
- [ ] TypeScript has no errors
- [ ] All automated tests pass
- [ ] App runs without errors
- [ ] Code is well-formatted and organized

---

## What You'll Learn

This homework will solidify your understanding of:
- Managing complex global state with context
- Persisting data with localStorage
- Creating reusable custom hooks
- Composing multiple hooks together
- Organizing a larger React application
- TypeScript in a real-world scenario
- Component communication patterns

---

## Getting Help

If you're stuck:
1. Review the lessons in `module-06-react-hooks/lessons/`
2. Check the exercise solutions
3. Read error messages carefully
4. Check `resources/common-errors.md`
5. Ask your teacher!

---

Good luck! This is a comprehensive project that brings together everything you've learned. Take your time and make it polished! 🚀
