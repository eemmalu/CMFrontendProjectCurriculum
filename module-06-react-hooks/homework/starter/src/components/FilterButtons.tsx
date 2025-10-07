import { useTasks } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';
import { FilterType } from '../types';

/**
 * FilterButtons Component
 * TODO: Complete this component
 *
 * Requirements:
 * - Three buttons: All, Active, Completed
 * - Highlight the active filter
 * - Call setFilter when clicked
 * - Style based on theme
 */

function FilterButtons() {
  // TODO: Get filter and setFilter from useTasks hook
  // TODO: Get theme from useTheme hook

  // TODO: Create helper function to get button style
  // - Should take a filterType parameter
  // - Return different styles if filterType === current filter (highlighted)
  const getButtonStyle = (filterType: FilterType) => {
    // TODO: Return object with backgroundColor, color, padding, border, etc.
    // Active button should have different background color
    return {};
  };

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        gap: '10px',
        borderBottom: '1px solid #ddd',
        // TODO: Add backgroundColor based on theme
      }}
    >
      {/* TODO: Add three buttons */}
      {/* Button 1: "All" - onClick={() => setFilter('all')} */}
      {/* Button 2: "Active" - onClick={() => setFilter('active')} */}
      {/* Button 3: "Completed" - onClick={() => setFilter('completed')} */}
      {/* Each button should use getButtonStyle with its filter type */}
    </div>
  );
}

export default FilterButtons;
