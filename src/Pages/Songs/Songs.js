/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../../components/Card/Card';
import styles from './Songs.module.scss';

const Songs = ({ songs }) => (
  <div>
    <div className={styles.header}>
      <p className={styles.heading}>all songs</p>
      <button className={styles.toggle} type="button">T</button>
    </div>

    <div className={styles.songsContainer}>
      <div className={styles.card}>
        {songs.map((song) => (
          <Card
            key={song.id}
            id={song.id}
            albumArtUrl={song.albumArtUrl}
            songName={song.name}
            genreName={song.genre.name}
            artistName={song.artist.name}
          />
        ))}
      </div>
    </div>

  </div>
);

export default Songs;
