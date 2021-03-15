import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../Card';

describe('example', () => {
  test('sanity check', () => {
    expect(1 + 1).toBe(2);
  });
});

// const mockLikeCount = 2;

describe(Card.name, () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<Card id="1" albumArtUrl="mock" songName="mock" artistName="mock" />);
    expect(container).toMatchSnapshot();
  });

  test('should display song information', () => {
    render(<Card id="1" albumArtUrl="image" songName="song" artistName="artist" />);
    expect(screen.getByText('song'));
    expect(screen.getByText('artist'));
    screen.getByTestId('song-image');
  });

  test('should display button of  count', () => {
    render(<Card id="1" albumArtUrl="image" songName="song" artistName="artist" />);
    // const likeElement = screen.getByText({ mockLikeCount });
    // expect(likeElement.tagName).toBe('BUTTON');
    // fireEvent.click(likeElement);
  });
});
