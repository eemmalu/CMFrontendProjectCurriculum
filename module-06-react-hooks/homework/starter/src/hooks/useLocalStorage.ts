import { useState, useEffect } from 'react';

/**
 * Custom hook for syncing state with localStorage
 * TODO: Implement this hook
 *
 * Requirements:
 * - Read initial value from localStorage (use JSON.parse)
 * - If localStorage is empty, use initialValue
 * - Save to localStorage whenever value changes (use JSON.stringify)
 * - Handle errors gracefully with try/catch
 * - Return [value, setValue] tuple like useState
 */

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // TODO: Create state with initial value from localStorage
  // Hint: Use useState with a function to read from localStorage
  const [value, setValue] = useState<T>(() => {
    // TODO: Try to read from localStorage
    // - Use window.localStorage.getItem(key)
    // - If item exists, parse it with JSON.parse
    // - If no item or error, return initialValue
    return initialValue; // Replace this
  });

  // TODO: Create useEffect to save to localStorage when value changes
  useEffect(() => {
    // TODO: Save value to localStorage
    // - Use window.localStorage.setItem(key, JSON.stringify(value))
    // - Wrap in try/catch for error handling
  }, [/* TODO: Add dependencies */]);

  return [value, setValue];
}
