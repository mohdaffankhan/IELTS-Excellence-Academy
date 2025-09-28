import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from '../components/Card';

describe('Card Component', () => {
  it('renders children content', () => {
    render(
      <Card>
        <div>Test content</div>
      </Card>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default classes', () => {
    render(
      <Card>
        <div>Test content</div>
      </Card>
    );
    const card = screen.getByText('Test content').parentElement;
    expect(card).toHaveClass('bg-white', 'rounded-xl', 'shadow-lg');
  });

  it('applies hover effects by default', () => {
    render(
      <Card>
        <div>Test content</div>
      </Card>
    );
    const card = screen.getByText('Test content').parentElement;
    expect(card).toHaveClass('hover:shadow-xl', 'hover:-translate-y-1');
  });

  it('disables hover effects when hover is false', () => {
    render(
      <Card hover={false}>
        <div>Test content</div>
      </Card>
    );
    const card = screen.getByText('Test content').parentElement;
    expect(card).not.toHaveClass('hover:shadow-xl', 'hover:-translate-y-1');
  });

  it('applies custom className', () => {
    render(
      <Card className="custom-class">
        <div>Test content</div>
      </Card>
    );
    const card = screen.getByText('Test content').parentElement;
    expect(card).toHaveClass('custom-class');
  });
});
