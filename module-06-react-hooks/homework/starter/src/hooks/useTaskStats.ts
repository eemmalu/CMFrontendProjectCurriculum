import { useMemo } from 'react';
import { Task } from '../types';

interface TaskStats {
  total: number;
  active: number;
  completed: number;
  completionPercentage: number;
}

/**
 * Custom hook for calculating task statistics
 * TODO: Implement this hook
 *
 * Requirements:
 * - Calculate total number of tasks
 * - Calculate number of active (incomplete) tasks
 * - Calculate number of completed tasks
 * - Calculate completion percentage (0-100)
 * - Use useMemo to avoid recalculating on every render
 */

export function useTaskStats(tasks: Task[]): TaskStats {
  // TODO: Use useMemo to calculate statistics
  // This prevents recalculating unless tasks array changes
  const stats = useMemo(() => {
    // TODO: Calculate total (length of tasks array)
    const total = 0; // Replace this

    // TODO: Calculate completed (count tasks where completed === true)
    const completed = 0; // Replace this

    // TODO: Calculate active (count tasks where completed === false)
    const active = 0; // Replace this

    // TODO: Calculate completion percentage
    // - If total is 0, percentage should be 0
    // - Otherwise: (completed / total) * 100
    // - Round to nearest integer
    const completionPercentage = 0; // Replace this

    return { total, active, completed, completionPercentage };
  }, [/* TODO: Add dependencies */]);

  return stats;
}
