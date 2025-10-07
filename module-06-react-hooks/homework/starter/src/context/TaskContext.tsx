import { createContext, useContext, ReactNode } from 'react';
import { Task, FilterType } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Task Context - manages tasks and filtering
 * TODO: Complete this context
 *
 * Requirements:
 * - Manage tasks array with useLocalStorage
 * - Manage current filter state
 * - Provide functions: addTask, toggleTask, deleteTask, setFilter
 * - Provide filtered tasks based on current filter
 */

interface TaskContextType {
  tasks: Task[];
  filter: FilterType;
  filteredTasks: Task[];
  addTask: (title: string, description: string) => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  setFilter: (filter: FilterType) => void;
}

const TaskContext = createContext<TaskContextType | null>(null);

export function TaskProvider({ children }: { children: ReactNode }) {
  // TODO: Use useLocalStorage to manage tasks
  // - Key: 'tasks'
  // - Initial value: [] (empty array)
  // Hint: const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

  // TODO: Use regular useState for filter (no need to persist)
  // - Initial value: 'all'
  // Hint: const [filter, setFilter] = useState<FilterType>('all');

  // TODO: Implement addTask function
  // - Takes title and description as parameters
  // - Creates new task object with:
  //   - id: crypto.randomUUID() or Date.now().toString()
  //   - title
  //   - description
  //   - completed: false
  //   - createdAt: Date.now()
  // - Adds new task to tasks array
  const addTask = (title: string, description: string) => {
    // TODO: Create new task object
    // TODO: Add to tasks array using setTasks([...tasks, newTask])
  };

  // TODO: Implement toggleTask function
  // - Takes task id as parameter
  // - Finds task with matching id
  // - Toggles its completed status
  // - Updates tasks array
  const toggleTask = (id: string) => {
    // TODO: Use setTasks with tasks.map to update the task
    // Hint: tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
  };

  // TODO: Implement deleteTask function
  // - Takes task id as parameter
  // - Removes task from array
  const deleteTask = (id: string) => {
    // TODO: Use setTasks with tasks.filter to remove the task
    // Hint: tasks.filter(task => task.id !== id)
  };

  // TODO: Calculate filteredTasks based on current filter
  // - If filter is 'all': return all tasks
  // - If filter is 'active': return tasks where completed === false
  // - If filter is 'completed': return tasks where completed === true
  const filteredTasks: Task[] = []; // Replace with actual filtering logic

  const value: TaskContextType = {
    tasks: [], // Replace with actual tasks state
    filter: 'all', // Replace with actual filter state
    filteredTasks,
    addTask,
    toggleTask,
    deleteTask,
    setFilter: () => {}, // Replace with actual setFilter
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within TaskProvider');
  }
  return context;
}
