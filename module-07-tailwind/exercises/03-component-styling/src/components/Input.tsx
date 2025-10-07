interface InputProps {
  label: string
  type?: string
  error?: string
  placeholder?: string
}

export function Input({ label, type = 'text', error, placeholder }: InputProps) {
  // TODO: Define base classes for the input
  // Include: width, padding, border, rounded corners, transition
  const baseClasses = ''

  // TODO: Define focus classes
  // - Blue border on focus
  // - Ring effect on focus
  // - Remove default outline
  const focusClasses = ''

  // TODO: Define error classes
  // If there's an error, use red border instead of gray
  const errorClasses = error ? '' : ''

  // TODO: Combine all input classes
  // Don't forget to add the 'peer' class so the label can react to focus state
  const inputClasses = ''

  return (
    <div className="mb-4">
      {/* TODO: Style the label
          - Block display
          - Small/medium text size
          - Dark gray color by default
          - Change to blue when input is focused (use peer-focus:)
          - Bottom margin
          - Font weight medium
          - Transition for smooth color change
      */}
      <label className="">
        {label}
      </label>

      {/* The input field */}
      <input
        type={type}
        placeholder={placeholder}
        className={inputClasses}
      />

      {/* TODO: Style the error message
          - Red text color
          - Small text size
          - Top margin
          - Only show if error exists
      */}
      {error && (
        <p className="">
          {error}
        </p>
      )}
    </div>
  )
}
