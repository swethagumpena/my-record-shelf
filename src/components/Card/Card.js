import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import utilsApi from '../../utils/apiUtils';
import styles from './Card.module.scss';

const Card = ({
  id, albumArtUrl, songName, artistName,
}) => {
  const [like, setLike] = useState({});
  // like has like,count

  useEffect(async () => {
    try {
      const songLikes = await utilsApi.getLikes(id);
      setLike(songLikes);
    } catch (e) {
    //   setError(e);
    }
  }, []);

  return (
    <div className={styles.card}>
      <img data-testid="song-image" src={albumArtUrl} alt="song" />
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.song}>{songName}</p>
          <p className={styles.artist}>{artistName}</p>
        </div>
        <div className={styles.likeButton}>
          <button type="button">{like.count}</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  albumArtUrl: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default Card;
