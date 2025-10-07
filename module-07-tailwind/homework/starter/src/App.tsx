import { useState } from 'react'
import { Task, FilterType } from './types'
import { TaskInput } from './components/TaskInput'
import { TaskItem } from './components/TaskItem'
import { FilterButtons } from './components/FilterButtons'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FilterType>('all')
  const [nextId, setNextId] = useState(1)

  const addTask = (text: string) => {
    const newTask: Task = {
      id: nextId,
      text,
      completed: false,
    }
    setTasks([...tasks, newTask])
    setNextId(nextId + 1)
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const activeCount = tasks.filter(task => !task.completed).length

  return (
    /* TODO: Style the outer container:
       - Min height: min-h-screen
       - Background: bg-gray-100
       - Padding: p-4 md:p-8
    */
    <div className="">
      {/* TODO: Style the inner container:
         - Max width: max-w-2xl
         - Margin: mx-auto
         - Background: bg-white
         - Rounded: rounded-lg
         - Shadow: shadow-lg
         - Padding: p-6 md:p-8
      */}
      <div className="">
        {/* Header */}
        {/* TODO: Style the header:
           - Text size: text-3xl md:text-4xl
           - Font: font-bold
           - Text color: text-gray-800
           - Text align: text-center
           - Margin bottom: mb-8
        */}
        <h1 className="">
          Task Manager
        </h1>

        {/* Task Input Form */}
        <TaskInput onAddTask={addTask} />

        {/* Filter Buttons */}
        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        {/* Task List */}
        {/* TODO: Style the task list container:
           - Display: space-y-3 (adds vertical spacing between children)
           - Margin bottom: mb-6
        */}
        <div className="">
          {filteredTasks.length === 0 ? (
            /* TODO: Style the empty state message:
               - Text align: text-center
               - Text color: text-gray-500
               - Padding: py-8
            */
            <p className="">
              {filter === 'completed'
                ? 'No completed tasks yet'
                : filter === 'active'
                  ? 'No active tasks'
                  : 'No tasks yet. Add one above!'}
            </p>
          ) : (
            filteredTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </div>

        {/* Task Counter */}
        {/* TODO: Style the counter:
           - Text size: text-sm
           - Text color: text-gray-600
           - Text align: text-center
           - Margin top: mt-4
           - Padding top: pt-4
           - Border top: border-t border-gray-200
        */}
        <div className="">
          {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
        </div>
      </div>
    </div>
  )
}

export default App
