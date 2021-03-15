import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Genres from '../Genres';

describe(Genres.name, () => {
  const mockGenre = {
    Bollywood:
    [
      {
        albumArtUrl: 'https://i.scdn.co/image/ab67616d0000b273dc1f496d2a8d75f7fda092b6',
        artist:
            {
              id: 'b22d7ed5-3ded-4958-a036-60453b7fc102',
              name: 'Neha Kakkar',
            },
        genre:
            {
              id: '37146752-2c95-4204-a845-a32f3cdce9c8',
              name: 'Bollywood',
            },
        id: '07075cdb-9e5c-41ec-8c09-9a1322dd92d8',
        name: 'Aankh Marey (From Simmba)',
        publishedAt: '2018-12-06T00:00:00',
      },
    ],
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should match snapshot', () => {
    const { container } = render(<Genres filteredSongs={mockGenre} />);
    expect(container).toMatchSnapshot();
  });

  test('should display all songs', () => {
    render(<Genres filteredSongs={mockGenre} />);
    expect(screen.getByText('genres'));
  });

  test('should display a X button', () => {
    render(<BrowserRouter><Genres filteredSongs={mockGenre} /></BrowserRouter>);
    const songElement = screen.getByText('X');
    expect(songElement.tagName).toBe('BUTTON');
    fireEvent.click(songElement);
    expect(document.location.href).toBe('http://localhost/songs');
  });
});
