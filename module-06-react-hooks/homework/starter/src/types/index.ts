// Task type definition
export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// Filter type definition
export type FilterType = 'all' | 'active' | 'completed';

// Theme type definition
export type Theme = 'light' | 'dark';
