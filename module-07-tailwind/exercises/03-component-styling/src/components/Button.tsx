interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick
}: ButtonProps) {
  // TODO: Define base classes that apply to all buttons
  // Include: rounded corners, font weight, transition for smooth hover effects
  const baseClasses = ''

  // TODO: Define variant classes for different button styles
  // primary: blue background, white text, darker blue on hover
  // secondary: gray background, dark text, darker gray on hover
  // danger: red background, white text, darker red on hover
  const variantClasses = {
    primary: '',
    secondary: '',
    danger: '',
  }

  // TODO: Define size classes for different button sizes
  // sm: smaller padding and text
  // md: medium padding and text
  // lg: larger padding and text
  const sizeClasses = {
    sm: '',
    md: '',
    lg: '',
  }

  // TODO: Combine all classes
  // Don't forget to add disabled state styling: opacity-50 cursor-not-allowed
  const buttonClasses = ''

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  )
}
