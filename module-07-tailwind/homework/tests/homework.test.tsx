import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../starter/src/App'

describe('Module 7 Homework: Task Manager Styling', () => {
  describe('Layout & Structure', () => {
    it('should have a properly styled container', () => {
      render(<App />)
      const container = screen.getByText('Task Manager').closest('div')
      expect(container).toBeInTheDocument()
      // Students should add bg-white, rounded-lg, shadow classes
    })

    it('should have responsive padding classes', () => {
      render(<App />)
      const mainContainer = screen.getByText('Task Manager').parentElement
      expect(mainContainer).toBeInTheDocument()
      // Students should add p-6 md:p-8 or similar
    })
  })

  describe('Header Section', () => {
    it('should render the header with proper styling', () => {
      render(<App />)
      const header = screen.getByText('Task Manager')
      expect(header).toBeInTheDocument()
      expect(header.tagName).toBe('H1')
      // Students should add text-3xl md:text-4xl, font-bold, text-center
    })
  })

  describe('Task Input Form', () => {
    it('should render an input field', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      expect(input).toBeInTheDocument()
      // Students should add border, rounded, px-4 py-2, focus states
    })

    it('should render an add button', () => {
      render(<App />)
      const button = screen.getByText('Add Task')
      expect(button).toBeInTheDocument()
      // Students should add bg-blue-500, hover:bg-blue-600, text-white
    })

    it('should allow adding a task', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const button = screen.getByText('Add Task')

      fireEvent.change(input, { target: { value: 'Test task' } })
      fireEvent.click(button)

      expect(screen.getByText('Test task')).toBeInTheDocument()
    })
  })

  describe('Task List', () => {
    it('should display tasks with proper styling', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const button = screen.getByText('Add Task')

      fireEvent.change(input, { target: { value: 'Task 1' } })
      fireEvent.click(button)

      const task = screen.getByText('Task 1')
      expect(task).toBeInTheDocument()
      // Students should add proper spacing, borders, shadows
    })

    it('should have checkboxes for tasks', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const button = screen.getByText('Add Task')

      fireEvent.change(input, { target: { value: 'Test task' } })
      fireEvent.click(button)

      const checkboxes = screen.getAllByRole('checkbox')
      expect(checkboxes.length).toBeGreaterThan(0)
    })

    it('should have delete buttons for tasks', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const addButton = screen.getByText('Add Task')

      fireEvent.change(input, { target: { value: 'Test task' } })
      fireEvent.click(addButton)

      const deleteButton = screen.getByText('Delete')
      expect(deleteButton).toBeInTheDocument()
      // Students should add bg-red-500, hover:bg-red-600, text-white
    })

    it('should toggle task completion', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const button = screen.getByText('Add Task')

      fireEvent.change(input, { target: { value: 'Test task' } })
      fireEvent.click(button)

      const checkbox = screen.getByRole('checkbox')
      fireEvent.click(checkbox)

      // Task should still be visible (just styled differently)
      expect(screen.getByText('Test task')).toBeInTheDocument()
    })

    it('should delete tasks', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const addButton = screen.getByText('Add Task')

      fireEvent.change(input, { target: { value: 'Test task' } })
      fireEvent.click(addButton)

      const deleteButton = screen.getByText('Delete')
      fireEvent.click(deleteButton)

      expect(screen.queryByText('Test task')).not.toBeInTheDocument()
    })
  })

  describe('Filter Buttons', () => {
    it('should render filter buttons', () => {
      render(<App />)
      expect(screen.getByText('All')).toBeInTheDocument()
      expect(screen.getByText('Active')).toBeInTheDocument()
      expect(screen.getByText('Completed')).toBeInTheDocument()
      // Students should style with bg-blue-500 for active, bg-gray-200 for inactive
    })

    it('should filter active tasks', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const addButton = screen.getByText('Add Task')

      // Add two tasks
      fireEvent.change(input, { target: { value: 'Task 1' } })
      fireEvent.click(addButton)
      fireEvent.change(input, { target: { value: 'Task 2' } })
      fireEvent.click(addButton)

      // Complete one task
      const checkboxes = screen.getAllByRole('checkbox')
      fireEvent.click(checkboxes[0])

      // Filter to active
      const activeButton = screen.getByText('Active')
      fireEvent.click(activeButton)

      // Should only see Task 2
      expect(screen.queryByText('Task 1')).not.toBeInTheDocument()
      expect(screen.getByText('Task 2')).toBeInTheDocument()
    })

    it('should filter completed tasks', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const addButton = screen.getByText('Add Task')

      // Add two tasks
      fireEvent.change(input, { target: { value: 'Task 1' } })
      fireEvent.click(addButton)
      fireEvent.change(input, { target: { value: 'Task 2' } })
      fireEvent.click(addButton)

      // Complete one task
      const checkboxes = screen.getAllByRole('checkbox')
      fireEvent.click(checkboxes[0])

      // Filter to completed
      const completedButton = screen.getByText('Completed')
      fireEvent.click(completedButton)

      // Should only see Task 1
      expect(screen.getByText('Task 1')).toBeInTheDocument()
      expect(screen.queryByText('Task 2')).not.toBeInTheDocument()
    })
  })

  describe('Task Counter', () => {
    it('should display task count', () => {
      render(<App />)
      expect(screen.getByText(/0 tasks remaining/i)).toBeInTheDocument()
    })

    it('should update task count when tasks are added', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const button = screen.getByText('Add Task')

      fireEvent.change(input, { target: { value: 'Task 1' } })
      fireEvent.click(button)

      expect(screen.getByText(/1 task remaining/i)).toBeInTheDocument()

      fireEvent.change(input, { target: { value: 'Task 2' } })
      fireEvent.click(button)

      expect(screen.getByText(/2 tasks remaining/i)).toBeInTheDocument()
    })

    it('should not count completed tasks', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const addButton = screen.getByText('Add Task')

      // Add two tasks
      fireEvent.change(input, { target: { value: 'Task 1' } })
      fireEvent.click(addButton)
      fireEvent.change(input, { target: { value: 'Task 2' } })
      fireEvent.click(addButton)

      // Complete one task
      const checkbox = screen.getAllByRole('checkbox')[0]
      fireEvent.click(checkbox)

      expect(screen.getByText(/1 task remaining/i)).toBeInTheDocument()
    })
  })

  describe('Empty States', () => {
    it('should show empty state message when no tasks', () => {
      render(<App />)
      expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument()
    })

    it('should show appropriate message for empty active filter', () => {
      render(<App />)
      const input = screen.getByPlaceholderText(/what needs to be done/i)
      const addButton = screen.getByText('Add Task')

      // Add a task and complete it
      fireEvent.change(input, { target: { value: 'Task 1' } })
      fireEvent.click(addButton)
      const checkbox = screen.getByRole('checkbox')
      fireEvent.click(checkbox)

      // Filter to active
      const activeButton = screen.getByText('Active')
      fireEvent.click(activeButton)

      expect(screen.getByText(/no active tasks/i)).toBeInTheDocument()
    })

    it('should show appropriate message for empty completed filter', () => {
      render(<App />)
      const completedButton = screen.getByText('Completed')
      fireEvent.click(completedButton)

      expect(screen.getByText(/no completed tasks yet/i)).toBeInTheDocument()
    })
  })
})
