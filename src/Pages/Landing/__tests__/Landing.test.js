import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Landing from '../Landing';

describe(Landing.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<Landing />);
    expect(container).toMatchSnapshot();
  });

  test('should display intro content', () => {
    render(<Landing />);
    expect(screen.getByText(':(('));
    expect(screen.getByText('Seems a bit empty in here'));
  });

  test('should display a sync  started button', () => {
    render(<BrowserRouter><Landing /></BrowserRouter>);
    const gettingStartedElement = screen.getByText('sync');
    expect(gettingStartedElement.tagName).toBe('BUTTON');
    fireEvent.click(gettingStartedElement);
    expect(document.location.href).toBe('http://localhost/songs');
  });
});
