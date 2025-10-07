interface CardProps {
  title: string
  children: React.ReactNode
  hoverable?: boolean
}

export function Card({ title, children, hoverable = false }: CardProps) {
  // TODO: Define base classes for the card
  // Include: white background, rounded corners, shadow, padding
  const baseClasses = ''

  // TODO: If hoverable is true, add hover effects
  // - Larger shadow on hover
  // - Slight lift effect with transform
  // - Smooth transition
  // Use the 'group' class for the container
  const hoverClasses = hoverable ? '' : ''

  // TODO: Combine classes for the card container
  const cardClasses = ''

  return (
    <div className={cardClasses}>
      {/* TODO: Style the card title
          - Large text size
          - Bold font
          - Dark gray color
          - Bottom margin
          - If card is hoverable, change color on group hover (group-hover:text-blue-600)
      */}
      <h3 className="">
        {title}
      </h3>

      {/* TODO: Style the card content area
          - Gray text color
          - Appropriate line height
      */}
      <div className="">
        {children}
      </div>
    </div>
  )
}
