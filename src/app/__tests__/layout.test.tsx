import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RootLayout from '../layout';

describe('RootLayout', () => {
  it('renders provided children', () => {
    render(<RootLayout><p>test child</p></RootLayout>);
    expect(screen.getByText('test child')).toBeInTheDocument();
  });
});
