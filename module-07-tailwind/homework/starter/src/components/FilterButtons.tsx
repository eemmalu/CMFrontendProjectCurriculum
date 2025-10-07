import { FilterType } from '../types'

interface FilterButtonsProps {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

export function FilterButtons({ currentFilter, onFilterChange }: FilterButtonsProps) {
  const filters: { value: FilterType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ]

  return (
    /* TODO: Style the container:
       - Display: flex
       - Gap: gap-2
       - Margin bottom: mb-4
       - Flex wrap: flex-wrap
    */
    <div className="">
      {filters.map((filter) => {
        const isActive = currentFilter === filter.value

        /* TODO: Style the filter buttons:
           If active (isActive === true):
             - Background: bg-blue-500
             - Text: text-white
           If not active:
             - Background: bg-gray-200
             - Text: text-gray-700
             - Hover: hover:bg-gray-300

           All buttons:
             - Padding: px-4 py-2
             - Rounded: rounded-md
             - Font: font-medium
             - Transition: transition-colors
        */
        return (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={isActive ? '' : ''}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
