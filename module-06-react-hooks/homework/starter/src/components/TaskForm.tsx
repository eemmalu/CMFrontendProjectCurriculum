import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';

/**
 * TaskForm Component
 * TODO: Complete this component
 *
 * Requirements:
 * - Input for task title (required)
 * - Textarea for task description (optional)
 * - Submit button
 * - Clear form after submission
 * - Validate that title is not empty
 * - Style based on theme
 */

function TaskForm() {
  // TODO: Create state for title and description
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');

  // TODO: Get addTask from useTasks hook
  // TODO: Get theme from useTheme hook

  // TODO: Create handleSubmit function
  // - Prevent default form submission
  // - Validate that title is not empty (trim whitespace)
  // - Call addTask(title, description)
  // - Clear both inputs (setTitle(''), setDescription(''))
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement validation and add task logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: '20px',
        borderBottom: '1px solid #ddd',
        // TODO: Add backgroundColor based on theme
      }}
    >
      <h2>Add New Task</h2>

      {/* TODO: Add input for title */}
      {/* - type="text" */}
      {/* - value={title} */}
      {/* - onChange={(e) => setTitle(e.target.value)} */}
      {/* - placeholder="Task title..." */}
      {/* - required */}

      {/* TODO: Add textarea for description */}
      {/* - value={description} */}
      {/* - onChange={(e) => setDescription(e.target.value)} */}
      {/* - placeholder="Task description (optional)..." */}
      {/* - rows={3} */}

      {/* TODO: Add submit button */}
      {/* - type="submit" */}
      {/* - text: "Add Task" */}
    </form>
  );
}

export default TaskForm;
