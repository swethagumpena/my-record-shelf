import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './Genres.module.scss';

const Genres = ({ filteredSongs }) => {
  const history = useHistory();
  const songsByCategory = Object.keys(filteredSongs).map((category) => (
    <div key={category}>
      <div className={styles.genreHeader}>
        <div className={styles.genreImage}>
          <img src={`assets/genre-${category}.png`} alt="genre-img" />
        </div>
        <div className={styles.songsContainer}>
          {category}
        </div>
      </div>

      <div className={styles.card}>
        {filteredSongs[category].map((eachSong) => (
          <Card
            key={eachSong.id}
            id={eachSong.id}
            albumArtUrl={eachSong.albumArtUrl}
            songName={eachSong.name}
            genreName={eachSong.genre.name}
            artistName={eachSong.artist.name}
          />
        ))}
      </div>
    </div>
  ));

  return (
    <div>
      <div className={styles.header}>
        <p className={styles.heading}>genres</p>
        <Link
          to="/songs"
          onClick={() => history.push('/songs')}
        >
          <img data-testid="toggle" className={styles.toggleImg} src="assets/icon-grid.svg" alt="toggle view" />
        </Link>
      </div>
      <div data-testid="home" className="songs">
        {songsByCategory}
      </div>
    </div>

  );
};

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

Genres.propTypes = {
  filteredSongs: PropTypes.objectOf(PropTypes.arrayOf(songShape)).isRequired,
};

export default Genres;
