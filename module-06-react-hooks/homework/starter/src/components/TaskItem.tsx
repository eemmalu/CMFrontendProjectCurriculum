import { Task } from '../types';
import { useTasks } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';

/**
 * TaskItem Component
 * TODO: Complete this component
 *
 * Requirements:
 * - Display task title and description
 * - Checkbox to toggle completion status
 * - Delete button
 * - Different styling for completed tasks (strikethrough title)
 * - Style based on theme
 */

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  // TODO: Get toggleTask and deleteTask from useTasks hook
  // TODO: Get theme from useTheme hook

  return (
    <div
      style={{
        padding: '15px',
        marginBottom: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        display: 'flex',
        gap: '15px',
        alignItems: 'flex-start',
        // TODO: Add backgroundColor based on theme
        // Light: '#fff', Dark: '#333'
      }}
    >
      {/* TODO: Add checkbox input */}
      {/* - type="checkbox" */}
      {/* - checked={task.completed} */}
      {/* - onChange={() => toggleTask(task.id)} */}

      <div style={{ flex: 1 }}>
        {/* TODO: Add h3 for task title */}
        {/* - Apply textDecoration: 'line-through' if task.completed */}
        {/* - Style color based on theme */}

        {/* TODO: Add p for task description (if description exists) */}
        {/* - Style color based on theme (lighter/gray) */}

        {/* TODO: Add small text showing created date */}
        {/* - Use: new Date(task.createdAt).toLocaleDateString() */}
      </div>

      {/* TODO: Add delete button */}
      {/* - onClick={() => deleteTask(task.id)} */}
      {/* - text: "Delete" or "×" */}
      {/* - Style: red color, padding, cursor pointer */}
    </div>
  );
}

export default TaskItem;
