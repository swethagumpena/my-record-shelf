/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './Songs.module.scss';

const Songs = ({ songs }) => {
  const history = useHistory();
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.heading}>all songs</p>
        <button className={styles.toggle} type="button" onClick={() => history.push('/genres')}>T</button>
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
};

export default Songs;
