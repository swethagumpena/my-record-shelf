/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.css';
import './Normalize.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import utilsApi from './utils/apiUtils';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import SongsPage from './components/SongsPage/SongsPage';

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState('false');
  useEffect(async () => {
    try {
      const songData = await utilsApi.getSongs();
      console.log('up', songData);
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
            <LandingPage />
          </Route>
          <Route path="/songs">
            <SongsPage />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
};

export default App;
