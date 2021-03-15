/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './Genres.module.scss';

// eslint-disable-next-line no-unused-vars
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
        <button className={styles.toggle} type="button" onClick={() => history.push('/songs')}>X</button>
      </div>
      <div data-testid="home" className="songs">
        {songsByCategory}
      </div>
    </div>

  );
};

// {
//   return (
//     <div>
//       <div className={styles.header}>
//         <p className={styles.heading}>genres</p>
//         <button className={styles.toggle} type="button" onClick={() => history.push('/songs')}>X</button>
//       </div>

//       {/* <div className={styles.songsContainer}>
//           <div className={styles.card}>
//             {songs.map((song) => (
//               <Card
//                 key={song.id}
//                 id={song.id}
//                 albumArtUrl={song.albumArtUrl}
//                 songName={song.name}
//                 genreName={song.genre.name}
//                 artistName={song.artist.name}
//               />
//             ))}
//           </div>
//         </div> */}

//     </div>
//   );
// };

export default Genres;
