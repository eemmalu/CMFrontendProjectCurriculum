import { useState } from 'react'

interface TaskInputProps {
  onAddTask: (text: string) => void
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAddTask(inputValue)
      setInputValue('')
    }
  }

  return (
    /* TODO: Style the form container:
       - Margin bottom: mb-6
       - Display: flex
       - Flex direction: column on mobile, row on md+
       - Gap: gap-2 or gap-4
    */
    <form className="" onSubmit={handleSubmit}>
      {/* TODO: Style the input:
         - Width: w-full
         - Padding: px-4 py-2
         - Border: border border-gray-300
         - Rounded: rounded-md
         - Focus: focus:border-blue-500 focus:ring-2 focus:ring-blue-200
         - Outline: focus:outline-none
         - Text: text-gray-800
         - Placeholder: placeholder:text-gray-400
         - Transition: transition-colors
      */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
        className=""
      />

      {/* TODO: Style the button:
         - Background: bg-blue-500
         - Hover: hover:bg-blue-600
         - Active: active:bg-blue-700
         - Text: text-white
         - Font: font-medium
         - Padding: px-6 py-2
         - Rounded: rounded-md
         - Transition: transition-colors
         - Width on mobile: w-full md:w-auto
      */}
      <button
        type="submit"
        className=""
      >
        Add Task
      </button>
    </form>
  )
}
