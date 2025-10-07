import { useState } from 'react';

// TODO: Define CounterProps interface
// All props are optional:
// - initialValue (number, default 0)
// - step (number, default 1)
// - min (number, no default)
// - max (number, no default)
// - onChange (function that takes number, no default)

function Counter(/* TODO: Add props with proper typing and default values */) {
  // TODO: Create state for current count using useState
  // Initialize with initialValue (or 0 if not provided)

  // TODO: Create increment function
  // - Add step to count
  // - Check if new value exceeds max (if max is defined)
  // - Call onChange if provided

  // TODO: Create decrement function
  // - Subtract step from count
  // - Check if new value is below min (if min is defined)
  // - Call onChange if provided

  // TODO: Create reset function
  // - Set count back to initialValue
  // - Call onChange if provided

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      {/* TODO: Display current count in large text */}
      <div>
        {/* TODO: Add three buttons: Decrement, Reset, Increment */}
      </div>
      {/* TODO: Display min/max range if either is defined */}
    </div>
  );
}

export default Counter;
