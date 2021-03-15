import { render, screen } from '@testing-library/react';
import React from 'react';
import NavBar from '../NavBar';

describe(NavBar.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
