/**
 * Module 5 Homework Tests
 * These tests verify that all components are implemented correctly
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../starter/src/components/Button';
import Card from '../starter/src/components/Card';
import Input from '../starter/src/components/Input';
import Counter from '../starter/src/components/Counter';
import ToggleSwitch from '../starter/src/components/ToggleSwitch';

describe('Button Component', () => {
  it('should render with label', () => {
    const mockClick = vi.fn();
    render(<Button label="Click me" onClick={mockClick} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const mockClick = vi.fn();
    render(<Button label="Click me" onClick={mockClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const mockClick = vi.fn();
    render(<Button label="Click me" onClick={mockClick} disabled={true} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(mockClick).not.toHaveBeenCalled();
  });

  it('should render with different variants', () => {
    const { rerender } = render(<Button label="Primary" onClick={() => {}} variant="primary" />);
    expect(screen.getByText('Primary')).toBeInTheDocument();

    rerender(<Button label="Secondary" onClick={() => {}} variant="secondary" />);
    expect(screen.getByText('Secondary')).toBeInTheDocument();

    rerender(<Button label="Success" onClick={() => {}} variant="success" />);
    expect(screen.getByText('Success')).toBeInTheDocument();

    rerender(<Button label="Danger" onClick={() => {}} variant="danger" />);
    expect(screen.getByText('Danger')).toBeInTheDocument();
  });

  it('should render with different sizes', () => {
    const { rerender } = render(<Button label="Small" onClick={() => {}} size="small" />);
    expect(screen.getByText('Small')).toBeInTheDocument();

    rerender(<Button label="Medium" onClick={() => {}} size="medium" />);
    expect(screen.getByText('Medium')).toBeInTheDocument();

    rerender(<Button label="Large" onClick={() => {}} size="large" />);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });
});

describe('Card Component', () => {
  it('should render title and children', () => {
    render(
      <Card title="Test Card">
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('should render footer when provided', () => {
    render(
      <Card title="Test Card" footer="Footer text">
        <p>Content</p>
      </Card>
    );
    expect(screen.getByText('Footer text')).toBeInTheDocument();
  });

  it('should not render footer when not provided', () => {
    render(
      <Card title="Test Card">
        <p>Content</p>
      </Card>
    );
    expect(screen.queryByText('Footer text')).not.toBeInTheDocument();
  });

  it('should accept elevation prop', () => {
    render(
      <Card title="Elevated" elevation={3}>
        <p>Content</p>
      </Card>
    );
    expect(screen.getByText('Elevated')).toBeInTheDocument();
  });
});

describe('Input Component', () => {
  it('should render label and input', () => {
    const mockChange = vi.fn();
    render(<Input label="Name" value="" onChange={mockChange} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should display current value', () => {
    const mockChange = vi.fn();
    render(<Input label="Name" value="Alice" onChange={mockChange} />);
    expect(screen.getByDisplayValue('Alice')).toBeInTheDocument();
  });

  it('should call onChange when typing', () => {
    const mockChange = vi.fn();
    render(<Input label="Name" value="" onChange={mockChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Bob' } });
    expect(mockChange).toHaveBeenCalled();
  });

  it('should display error message when provided', () => {
    const mockChange = vi.fn();
    render(<Input label="Email" value="" onChange={mockChange} error="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('should render with different input types', () => {
    const mockChange = vi.fn();
    const { rerender } = render(<Input label="Email" value="" onChange={mockChange} type="email" />);
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email');

    rerender(<Input label="Password" value="" onChange={mockChange} type="password" />);
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');
  });

  it('should display placeholder', () => {
    const mockChange = vi.fn();
    render(<Input label="Name" value="" onChange={mockChange} placeholder="Enter your name" />);
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });
});

describe('Counter Component', () => {
  it('should render with initial value', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should increment when increment button clicked', () => {
    render(<Counter initialValue={0} />);
    const incrementButton = screen.getByText(/\+/);
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should decrement when decrement button clicked', () => {
    render(<Counter initialValue={5} />);
    const decrementButton = screen.getByText(/-/);
    fireEvent.click(decrementButton);
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('should reset to initial value', () => {
    render(<Counter initialValue={10} />);
    const incrementButton = screen.getByText(/\+/);
    const resetButton = screen.getByText(/reset/i);

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('12')).toBeInTheDocument();

    fireEvent.click(resetButton);
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('should respect max boundary', () => {
    render(<Counter initialValue={9} max={10} />);
    const incrementButton = screen.getByText(/\+/);

    fireEvent.click(incrementButton);
    expect(screen.getByText('10')).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(screen.getByText('10')).toBeInTheDocument(); // Should not exceed max
  });

  it('should respect min boundary', () => {
    render(<Counter initialValue={1} min={0} />);
    const decrementButton = screen.getByText(/-/);

    fireEvent.click(decrementButton);
    expect(screen.getByText('0')).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(screen.getByText('0')).toBeInTheDocument(); // Should not go below min
  });

  it('should use custom step value', () => {
    render(<Counter initialValue={0} step={5} />);
    const incrementButton = screen.getByText(/\+ 5/);

    fireEvent.click(incrementButton);
    expect(screen.getByText('5')).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('should call onChange when count changes', () => {
    const mockChange = vi.fn();
    render(<Counter initialValue={0} onChange={mockChange} />);
    const incrementButton = screen.getByText(/\+/);

    fireEvent.click(incrementButton);
    expect(mockChange).toHaveBeenCalledWith(1);
  });
});

describe('ToggleSwitch Component', () => {
  it('should render with label', () => {
    const mockChange = vi.fn();
    render(<ToggleSwitch label="Notifications" checked={false} onChange={mockChange} />);
    expect(screen.getByText('Notifications')).toBeInTheDocument();
  });

  it('should call onChange with opposite value when clicked', () => {
    const mockChange = vi.fn();
    render(<ToggleSwitch label="Toggle" checked={false} onChange={mockChange} />);

    const toggle = screen.getByText('Toggle').parentElement;
    if (toggle) {
      fireEvent.click(toggle);
      expect(mockChange).toHaveBeenCalledWith(true);
    }
  });

  it('should not call onChange when disabled', () => {
    const mockChange = vi.fn();
    render(<ToggleSwitch label="Toggle" checked={false} onChange={mockChange} disabled={true} />);

    const toggle = screen.getByText('Toggle').parentElement;
    if (toggle) {
      fireEvent.click(toggle);
      expect(mockChange).not.toHaveBeenCalled();
    }
  });

  it('should visually represent checked state', () => {
    const mockChange = vi.fn();
    const { rerender } = render(<ToggleSwitch label="Toggle" checked={false} onChange={mockChange} />);
    expect(screen.getByText('Toggle')).toBeInTheDocument();

    rerender(<ToggleSwitch label="Toggle" checked={true} onChange={mockChange} />);
    expect(screen.getByText('Toggle')).toBeInTheDocument();
  });
});

describe('TypeScript Types', () => {
  it('Button should accept correct prop types', () => {
    // This test passes if TypeScript compilation succeeds
    const validButton = (
      <Button
        label="Test"
        onClick={() => {}}
        variant="primary"
        size="medium"
        disabled={false}
      />
    );
    expect(validButton).toBeTruthy();
  });

  it('Card should accept correct prop types', () => {
    const validCard = (
      <Card title="Test" footer="Footer" elevation={2}>
        <p>Content</p>
      </Card>
    );
    expect(validCard).toBeTruthy();
  });

  it('Input should accept correct prop types', () => {
    const validInput = (
      <Input
        label="Test"
        value="test"
        onChange={() => {}}
        type="email"
        placeholder="test"
        error="error"
      />
    );
    expect(validInput).toBeTruthy();
  });

  it('Counter should accept correct prop types', () => {
    const validCounter = (
      <Counter
        initialValue={0}
        step={1}
        min={0}
        max={100}
        onChange={() => {}}
      />
    );
    expect(validCounter).toBeTruthy();
  });

  it('ToggleSwitch should accept correct prop types', () => {
    const validToggle = (
      <ToggleSwitch
        label="Test"
        checked={false}
        onChange={() => {}}
        disabled={false}
      />
    );
    expect(validToggle).toBeTruthy();
  });
});
