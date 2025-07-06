import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout from '../layout';

describe('RootLayout', () => {
  it('renders provided children', () => {
    render(<RootLayout><p>test child</p></RootLayout>);
    expect(screen.getByText('test child')).toBeInTheDocument();
  });

  it('renders without errors when Google Analytics scripts are included', () => {
    // This test verifies that our GA scripts don't break the layout rendering
    expect(() => {
      render(<RootLayout><div>test content</div></RootLayout>);
    }).not.toThrow();
    
    // Verify the test content is rendered
    expect(screen.getByText('test content')).toBeInTheDocument();
  });
});
