import { useTheme } from '../context/ThemeContext';

/**
 * Header Component
 * TODO: Complete this component
 *
 * Requirements:
 * - Display app title "Task Manager"
 * - Show theme toggle button
 * - Style based on current theme (light/dark)
 */

function Header() {
  // TODO: Get theme and toggleTheme from useTheme hook

  return (
    <header
      style={{
        padding: '20px',
        borderBottom: '2px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // TODO: Add backgroundColor based on theme
        // Light: '#f5f5f5', Dark: '#2d2d2d'
        // TODO: Add color based on theme
        // Light: '#000', Dark: '#fff'
      }}
    >
      {/* TODO: Add h1 with app title */}
      {/* TODO: Add button that calls toggleTheme */}
      {/* Button text should show "Switch to Dark/Light Mode" based on current theme */}
    </header>
  );
}

export default Header;
