import {
  filterByProperty,
  mapToProperty,
  removeDuplicates,
  capitalize,
  slugify,
  truncate,
  delay
} from '../starter/index';

describe('Module 4 Homework: Typed Utility Functions', () => {

  describe('Array Utilities', () => {
    test('filterByProperty filters correctly', () => {
      const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 }
      ];
      const result = filterByProperty(users, 'age', 25);
      expect(result).toHaveLength(2);
    });

    test('mapToProperty extracts property', () => {
      const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
      ];
      const names = mapToProperty(users, 'name');
      expect(names).toEqual(['Alice', 'Bob']);
    });

    test('removeDuplicates removes duplicates', () => {
      const result = removeDuplicates([1, 2, 2, 3, 3, 3]);
      expect(result).toEqual([1, 2, 3]);
    });
  });

  describe('String Utilities', () => {
    test('capitalize capitalizes first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('slugify converts to slug', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
    });

    test('truncate truncates string', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...');
    });
  });

  describe('Async Utilities', () => {
    test('delay waits specified time', async () => {
      const start = Date.now();
      await delay(100);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeGreaterThanOrEqual(100);
    });
  });
});
