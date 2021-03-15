/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../../components/Card/Card';

const Songs = ({ songs }) => (
  <>
    <div>all songs</div>
    {songs.map((song) => (
      <Card
        key={song.id}
        albumArtUrl={song.albumArtUrl}
        songName={song.name}
        genreName={song.genre.name}
        artistName={song.artist.name}
      />
    ))}
  </>
);

export default Songs;
