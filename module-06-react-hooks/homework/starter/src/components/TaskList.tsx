import { useTasks } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';
import TaskItem from './TaskItem';

/**
 * TaskList Component
 * TODO: Complete this component
 *
 * Requirements:
 * - Display all filtered tasks
 * - Show message if no tasks match filter
 * - Render TaskItem for each task
 * - Style based on theme
 */

function TaskList() {
  // TODO: Get filteredTasks from useTasks hook
  // TODO: Get theme from useTheme hook

  // TODO: If filteredTasks is empty, show a message
  // - "No tasks yet. Add one above!" if no tasks at all
  // - "No active tasks" if filter is 'active'
  // - "No completed tasks" if filter is 'completed'

  return (
    <div
      style={{
        padding: '20px',
        // TODO: Add backgroundColor based on theme
      }}
    >
      {/* TODO: Map over filteredTasks and render TaskItem for each */}
      {/* - Use task.id as key */}
      {/* - Pass task as prop */}

      {/* TODO: If filteredTasks.length === 0, show empty message */}
    </div>
  );
}

export default TaskList;
