/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import utilsApi from '../../utils/apiUtils';

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
    <>
      <img src={albumArtUrl} alt="song" />
      <p>{songName}</p>
      <p>{artistName}</p>
      <p>{like.count}</p>
      <hr />
    </>
  );
};

export default Card;
