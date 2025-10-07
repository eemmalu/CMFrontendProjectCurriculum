import { useTasks } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';
import { useTaskStats } from '../hooks/useTaskStats';

/**
 * TaskStats Component
 * TODO: Complete this component
 *
 * Requirements:
 * - Use useTaskStats hook to get statistics
 * - Display: total, active, completed, completion percentage
 * - Style clearly and based on theme
 */

function TaskStats() {
  // TODO: Get tasks from useTasks hook
  // TODO: Get theme from useTheme hook
  // TODO: Get stats from useTaskStats hook (pass tasks array)

  return (
    <div
      style={{
        padding: '20px',
        borderBottom: '1px solid #ddd',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        // TODO: Add backgroundColor based on theme
      }}
    >
      {/* TODO: Create 4 stat boxes */}

      {/* Stat 1: Total Tasks */}
      {/* - Show stats.total */}
      {/* - Label: "Total Tasks" */}

      {/* Stat 2: Active Tasks */}
      {/* - Show stats.active */}
      {/* - Label: "Active" */}

      {/* Stat 3: Completed Tasks */}
      {/* - Show stats.completed */}
      {/* - Label: "Completed" */}

      {/* Stat 4: Completion Percentage */}
      {/* - Show stats.completionPercentage + '%' */}
      {/* - Label: "Completion Rate" */}

      {/* Style each stat box with: */}
      {/* - textAlign: 'center' */}
      {/* - Large number for the stat */}
      {/* - Smaller label below */}
    </div>
  );
}

export default TaskStats;
