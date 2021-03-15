import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './Songs.module.scss';

const Songs = ({ songs }) => {
  const history = useHistory();
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.heading}>all songs</p>
        <Link
          to="/genres"
          onClick={() => history.push('/genres')}
        >
          <img data-testid="toggle" className={styles.toggleImg} src="assets/icon-genre.svg" alt="toggle view" />
        </Link>
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

// albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273dc1f496d2a8d75f7fda092b6"
// artist: {id: "b22d7ed5-3ded-4958-a036-60453b7fc102", name: "Neha Kakkar"}
// genre: {id: "37146752-2c95-4204-a845-a32f3cdce9c8", name: "Bollywood"}
// id: "07075cdb-9e5c-41ec-8c09-9a1322dd92d8"
// name: "Aankh Marey (From "Simmba")"
// publishedAt: "2018-12-06T00:00:00"

const artistShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

const songShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  albumArtUrl: PropTypes.string.isRequired,
  artist: PropTypes.objectOf(artistShape),
  genre: PropTypes.objectOf(artistShape),
});

Songs.propTypes = {
  songs: PropTypes.arrayOf(songShape).isRequired,
};
export default Songs;
