/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import './Normalize.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import utilsApi from './utils/apiUtils';
import NavBar from './components/NavBar/NavBar';
import Landing from './Pages/Landing/Landing';
import Songs from './Pages/Songs/Songs';
import Genres from './Pages/Genres/Genres';

const App = () => {
  const [error, setError] = useState(null);
  const [songs, setSongs] = useState([]);
  const [isLoaded, setIsLoaded] = useState('false');
  const [filteredSongs, setFilteredSongs] = useState({});

  const groupByCategory = (songsArr) => {
    const groupedByCategory = songsArr.reduce((groupedSongs, item) => {
      const currentCategory = item.genre.name;
      const prevSongsOfSameCategory = groupedSongs[currentCategory] || [];
      return {
        ...groupedSongs,
        [currentCategory]: [...prevSongsOfSameCategory, item],
      };
    }, {});
    console.log('grouped', groupedByCategory);
    return groupedByCategory;
  };

  useEffect(async () => {
    try {
      const songData = await utilsApi.getSongs();
      // console.log('up', songData);
      setSongs(songData);
      setFilteredSongs(groupByCategory(songData));
      // console.log('heree', songs);
    } catch (e) {
      setError(e);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/songs">
            <Songs
              songs={songs}
            />
          </Route>
          <Route path="/genres">
            <Genres
              filteredSongs={filteredSongs}
            />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
};

export default App;
