import { ThemeProvider, useTheme } from './context/ThemeContext';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import FilterButtons from './components/FilterButtons';
import TaskStats from './components/TaskStats';
import TaskList from './components/TaskList';

/**
 * AppContent Component
 * TODO: Complete this component
 *
 * This component uses the theme to style the entire app
 */
function AppContent() {
  // TODO: Get theme from useTheme hook

  return (
    <div
      style={{
        minHeight: '100vh',
        // TODO: Add backgroundColor based on theme
        // Light: '#ffffff', Dark: '#1a1a1a'
        // TODO: Add color based on theme
        // Light: '#000000', Dark: '#ffffff'
      }}
    >
      {/* TODO: Render all components in order: */}
      {/* 1. Header */}
      {/* 2. TaskStats */}
      {/* 3. TaskForm */}
      {/* 4. FilterButtons */}
      {/* 5. TaskList */}
    </div>
  );
}

/**
 * App Component
 * TODO: Complete this component
 *
 * Wrap the app with both providers
 */
function App() {
  return (
    // TODO: Wrap with ThemeProvider
    // TODO: Wrap with TaskProvider (inside ThemeProvider)
    // TODO: Render AppContent
    <div>App placeholder - replace with providers and AppContent</div>
  );
}

export default App;
