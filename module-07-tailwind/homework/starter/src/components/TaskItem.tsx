import { Task } from '../types'

interface TaskItemProps {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    /* TODO: Style the task item container:
       - Display: flex
       - Align items: items-center
       - Justify: justify-between
       - Background: bg-white
       - Padding: p-4
       - Rounded: rounded-lg
       - Border: border border-gray-200
       - Hover: hover:shadow-md
       - Transition: transition-shadow
    */
    <div className="">
      {/* Left side: checkbox and text */}
      {/* TODO: Style this container:
         - Display: flex
         - Align items: items-center
         - Gap: gap-3
         - Flex: flex-1
      */}
      <div className="">
        {/* TODO: Style the checkbox:
           - Width and height: w-5 h-5
           - Rounded: rounded
           - Border: border-gray-300
           - Focus: focus:ring-2 focus:ring-blue-500
           - Cursor: cursor-pointer
        */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className=""
        />

        {/* TODO: Style the task text:
           - Text color: text-gray-800 (or text-gray-400 if completed)
           - Text decoration: line-through if completed
           - Transition: transition-colors
           - Word break: break-words
        */}
        <span className={task.completed ? '' : ''}>
          {task.text}
        </span>
      </div>

      {/* Delete button */}
      {/* TODO: Style the delete button:
         - Background: bg-red-500
         - Hover: hover:bg-red-600
         - Active: active:bg-red-700
         - Text: text-white text-sm
         - Font: font-medium
         - Padding: px-3 py-1
         - Rounded: rounded-md
         - Transition: transition-colors
      */}
      <button
        onClick={() => onDelete(task.id)}
        className=""
      >
        Delete
      </button>
    </div>
  )
}
