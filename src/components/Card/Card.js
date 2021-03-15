/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import utilsApi from '../../utils/apiUtils';
import styles from './Card.module.scss';

const Card = ({
  id, albumArtUrl, songName, artistName,
}) => {
  const [like, setLike] = useState({});
  const [btnLike, setBtnLike] = useState(true);

  // like has like,count

  useEffect(async () => {
    try {
      const songLikes = await utilsApi.getLikes(id);
      setLike(songLikes);
    } catch (e) {
    //   setError(e);
    }
  }, []);

  //   const handleChange = () => {
  //     if (btnLike) {
  //       console.log('trie');
  //       likeValue += 1;
  //       setBtnLike(false);
  //       console.log(likeValue);
  //     } else {
  //       console.log('ff');
  //       likeValue -= 1;
  //       setBtnLike(true);
  //       console.log(likeValue);
  //     }
  //   };

  return (
    <div className={styles.card}>
      <img src={albumArtUrl} alt="song" />
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

export default Card;
