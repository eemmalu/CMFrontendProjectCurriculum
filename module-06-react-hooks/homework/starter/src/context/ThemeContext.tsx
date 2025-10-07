import { createContext, useContext, ReactNode } from 'react';
import { Theme } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Theme Context - manages light/dark theme
 * TODO: Complete this context
 *
 * Requirements:
 * - Provide current theme ('light' or 'dark')
 * - Provide toggleTheme function
 * - Persist theme to localStorage using useLocalStorage hook
 * - Export custom useTheme hook
 */

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// TODO: Create context with createContext
// Initial value should be null (will be provided by ThemeProvider)
const ThemeContext = createContext<ThemeContextType | null>(null);

// ThemeProvider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // TODO: Use useLocalStorage hook to manage theme state
  // - Key: 'theme'
  // - Initial value: 'light'
  // Hint: const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');

  // TODO: Create toggleTheme function
  // - Should switch between 'light' and 'dark'
  // - Use setTheme to update the theme
  const toggleTheme = () => {
    // TODO: Implement toggle logic
  };

  // TODO: Create value object with theme and toggleTheme
  const value = {
    theme: 'light' as Theme, // Replace with actual theme state
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);

  // TODO: Check if context is null (means not wrapped in provider)
  // If null, throw an error: 'useTheme must be used within ThemeProvider'
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
