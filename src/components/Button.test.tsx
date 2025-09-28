import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from '../components/Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('renders as link when href is provided', () => {
    render(<Button href="/test">Link button</Button>);
    expect(screen.getByRole('link', { name: 'Link button' })).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    render(<Button>Primary button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-600');
  });

  it('applies secondary variant when specified', () => {
    render(<Button variant="secondary">Secondary button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-gray-600');
  });

  it('applies outline variant when specified', () => {
    render(<Button variant="outline">Outline button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border-2', 'border-blue-600');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  });
});
