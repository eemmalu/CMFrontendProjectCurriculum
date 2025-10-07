/**
 * Module 6 Homework Tests
 * Task Management Application
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '../starter/src/context/ThemeContext';
import { TaskProvider } from '../starter/src/context/TaskContext';
import { useLocalStorage } from '../starter/src/hooks/useLocalStorage';
import { useTaskStats } from '../starter/src/hooks/useTaskStats';
import App from '../starter/src/App';

// Helper to render with providers
function renderWithProviders(component: React.ReactElement) {
  return render(
    <ThemeProvider>
      <TaskProvider>{component}</TaskProvider>
    </ThemeProvider>
  );
}

describe('useLocalStorage Hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with initial value', () => {
    const TestComponent = () => {
      const [value] = useLocalStorage('test-key', 'initial');
      return <div>{value}</div>;
    };

    render(<TestComponent />);
    expect(screen.getByText('initial')).toBeInTheDocument();
  });

  it('should save to localStorage when value changes', () => {
    const TestComponent = () => {
      const [value, setValue] = useLocalStorage('test-key', 'initial');
      return (
        <div>
          <span>{value}</span>
          <button onClick={() => setValue('updated')}>Update</button>
        </div>
      );
    };

    render(<TestComponent />);
    fireEvent.click(screen.getByText('Update'));
    expect(localStorage.getItem('test-key')).toBe(JSON.stringify('updated'));
  });

  it('should read from localStorage on mount', () => {
    localStorage.setItem('test-key', JSON.stringify('stored-value'));

    const TestComponent = () => {
      const [value] = useLocalStorage('test-key', 'initial');
      return <div>{value}</div>;
    };

    render(<TestComponent />);
    expect(screen.getByText('stored-value')).toBeInTheDocument();
  });
});

describe('useTaskStats Hook', () => {
  it('should calculate stats for empty array', () => {
    const TestComponent = () => {
      const stats = useTaskStats([]);
      return (
        <div>
          <span data-testid="total">{stats.total}</span>
          <span data-testid="active">{stats.active}</span>
          <span data-testid="completed">{stats.completed}</span>
          <span data-testid="percentage">{stats.completionPercentage}</span>
        </div>
      );
    };

    render(<TestComponent />);
    expect(screen.getByTestId('total')).toHaveTextContent('0');
    expect(screen.getByTestId('active')).toHaveTextContent('0');
    expect(screen.getByTestId('completed')).toHaveTextContent('0');
    expect(screen.getByTestId('percentage')).toHaveTextContent('0');
  });

  it('should calculate stats correctly', () => {
    const tasks = [
      { id: '1', title: 'Task 1', description: '', completed: false, createdAt: Date.now() },
      { id: '2', title: 'Task 2', description: '', completed: true, createdAt: Date.now() },
      { id: '3', title: 'Task 3', description: '', completed: true, createdAt: Date.now() },
    ];

    const TestComponent = () => {
      const stats = useTaskStats(tasks);
      return (
        <div>
          <span data-testid="total">{stats.total}</span>
          <span data-testid="active">{stats.active}</span>
          <span data-testid="completed">{stats.completed}</span>
          <span data-testid="percentage">{stats.completionPercentage}</span>
        </div>
      );
    };

    render(<TestComponent />);
    expect(screen.getByTestId('total')).toHaveTextContent('3');
    expect(screen.getByTestId('active')).toHaveTextContent('1');
    expect(screen.getByTestId('completed')).toHaveTextContent('2');
    expect(screen.getByTestId('percentage')).toHaveTextContent('67'); // 2/3 * 100 = 66.666... rounded
  });
});

describe('Theme Context', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should start with light theme by default', () => {
    renderWithProviders(<App />);
    // Check for elements that should exist
    expect(screen.getByText(/Task Manager/i)).toBeInTheDocument();
  });

  it('should persist theme to localStorage', async () => {
    renderWithProviders(<App />);

    // Find and click theme toggle button
    const themeButton = screen.getByText(/Switch to/i);
    fireEvent.click(themeButton);

    await waitFor(() => {
      const theme = localStorage.getItem('theme');
      expect(theme).toBeTruthy();
    });
  });
});

describe('Task Management', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add a new task', async () => {
    renderWithProviders(<App />);

    // Find the title input
    const titleInput = screen.getByPlaceholderText(/task title/i);
    const submitButton = screen.getByText(/Add Task/i);

    // Enter a task
    fireEvent.change(titleInput, { target: { value: 'Test Task' } });
    fireEvent.click(submitButton);

    // Task should appear in the list
    await waitFor(() => {
      expect(screen.getByText('Test Task')).toBeInTheDocument();
    });
  });

  it('should not add task with empty title', () => {
    renderWithProviders(<App />);

    const submitButton = screen.getByText(/Add Task/i);
    const initialTaskCount = screen.queryAllByRole('checkbox').length;

    fireEvent.click(submitButton);

    // Task count should not increase
    const newTaskCount = screen.queryAllByRole('checkbox').length;
    expect(newTaskCount).toBe(initialTaskCount);
  });

  it('should toggle task completion', async () => {
    renderWithProviders(<App />);

    // Add a task
    const titleInput = screen.getByPlaceholderText(/task title/i);
    const submitButton = screen.getByText(/Add Task/i);

    fireEvent.change(titleInput, { target: { value: 'Test Task' } });
    fireEvent.click(submitButton);

    // Find and click the checkbox
    await waitFor(() => {
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
      fireEvent.click(checkbox);
    });

    // Checkbox should be checked
    await waitFor(() => {
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });
  });

  it('should delete a task', async () => {
    renderWithProviders(<App />);

    // Add a task
    const titleInput = screen.getByPlaceholderText(/task title/i);
    const submitButton = screen.getByText(/Add Task/i);

    fireEvent.change(titleInput, { target: { value: 'Test Task' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Test Task')).toBeInTheDocument();
    });

    // Delete the task
    const deleteButton = screen.getByText(/Delete|×/);
    fireEvent.click(deleteButton);

    // Task should be gone
    await waitFor(() => {
      expect(screen.queryByText('Test Task')).not.toBeInTheDocument();
    });
  });

  it('should filter tasks by status', async () => {
    renderWithProviders(<App />);

    // Add two tasks
    const titleInput = screen.getByPlaceholderText(/task title/i);
    const submitButton = screen.getByText(/Add Task/i);

    fireEvent.change(titleInput, { target: { value: 'Task 1' } });
    fireEvent.click(submitButton);

    fireEvent.change(titleInput, { target: { value: 'Task 2' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Task 1')).toBeInTheDocument();
      expect(screen.getByText('Task 2')).toBeInTheDocument();
    });

    // Complete first task
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    // Click "Active" filter
    const activeButton = screen.getByText('Active');
    fireEvent.click(activeButton);

    // Only Task 2 should be visible
    await waitFor(() => {
      expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
      expect(screen.getByText('Task 2')).toBeInTheDocument();
    });

    // Click "Completed" filter
    const completedButton = screen.getByText('Completed');
    fireEvent.click(completedButton);

    // Only Task 1 should be visible
    await waitFor(() => {
      expect(screen.getByText('Task 1')).toBeInTheDocument();
      expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
    });
  });

  it('should persist tasks to localStorage', async () => {
    renderWithProviders(<App />);

    // Add a task
    const titleInput = screen.getByPlaceholderText(/task title/i);
    const submitButton = screen.getByText(/Add Task/i);

    fireEvent.change(titleInput, { target: { value: 'Persistent Task' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const tasks = localStorage.getItem('tasks');
      expect(tasks).toBeTruthy();
      const parsed = JSON.parse(tasks!);
      expect(parsed).toHaveLength(1);
      expect(parsed[0].title).toBe('Persistent Task');
    });
  });
});

describe('Task Statistics', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should show correct statistics', async () => {
    renderWithProviders(<App />);

    // Add three tasks
    const titleInput = screen.getByPlaceholderText(/task title/i);
    const submitButton = screen.getByText(/Add Task/i);

    for (let i = 1; i <= 3; i++) {
      fireEvent.change(titleInput, { target: { value: `Task ${i}` } });
      fireEvent.click(submitButton);
    }

    await waitFor(() => {
      expect(screen.getByText('Task 3')).toBeInTheDocument();
    });

    // Complete one task
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);

    // Check statistics
    await waitFor(() => {
      // Should show 3 total, 2 active, 1 completed, ~33% completion
      expect(screen.getByText(/3/)).toBeInTheDocument(); // Total
      expect(screen.getByText(/33%|34%/)).toBeInTheDocument(); // Completion percentage
    });
  });
});

describe('Integration Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render all components', () => {
    renderWithProviders(<App />);

    // Header
    expect(screen.getByText(/Task Manager/i)).toBeInTheDocument();

    // Form
    expect(screen.getByPlaceholderText(/task title/i)).toBeInTheDocument();

    // Filter buttons
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();

    // Stats should be visible
    expect(screen.getByText(/Total/i)).toBeInTheDocument();
  });

  it('should handle complete workflow', async () => {
    renderWithProviders(<App />);

    // 1. Add task
    const titleInput = screen.getByPlaceholderText(/task title/i);
    fireEvent.change(titleInput, { target: { value: 'Complete Workflow Task' } });
    fireEvent.click(screen.getByText(/Add Task/i));

    await waitFor(() => {
      expect(screen.getByText('Complete Workflow Task')).toBeInTheDocument();
    });

    // 2. Mark complete
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(checkbox).toBeChecked();
    });

    // 3. Filter to completed
    fireEvent.click(screen.getByText('Completed'));

    await waitFor(() => {
      expect(screen.getByText('Complete Workflow Task')).toBeInTheDocument();
    });

    // 4. Delete task
    fireEvent.click(screen.getByText(/Delete|×/));

    await waitFor(() => {
      expect(screen.queryByText('Complete Workflow Task')).not.toBeInTheDocument();
    });
  });
});
