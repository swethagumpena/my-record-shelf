/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({
  albumArtUrl, songName, artistName,
}) => (
  <>
    <img src={albumArtUrl} alt="song" />
    <p>{songName}</p>
    <p>{artistName}</p>
    <hr />
  </>
);

export default Card;
