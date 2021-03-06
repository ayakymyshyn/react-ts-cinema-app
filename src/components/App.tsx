/* eslint-disable no-underscore-dangle */
// Core
import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
// Components
import MovieGrid from './Movie/MovieGrid/MovieGrid';
import MovieDetails from './Movie/MovieDetails/MovieDetails';
import Sector from './Booking/Sector/Sector';
import DownloadTicket from './Movie/MovieTicket/DownloadTicket';
// Styles
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// Other
import { useMovies } from './hooks/useMovies';

const App = (): ReactElement => {
  const {
    movies,
    isOk,
    loaded,
  } = useMovies();
  return loaded ? (
    <Router>
      <div className="main-app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <MovieGrid movies={movies} />
              </>
            )}
          />
          <Route path="/movie/:movieId" component={MovieDetails}>
            {isOk && <Redirect to="/download-ticket" />}
          </Route>
          <Route path="/seats" component={Sector} />
          <Route
            render={() => (
              <DownloadTicket />
            )}
          />
          <Route path="*" render={() => <h2>404</h2>} />
        </Switch>
      </div>
    </Router>
  ) : (
    <div className="spinner">
      <img src="https://www.defined.com/images/animated_loading__by__amiri.gif" alt="Loading..." />
    </div>
  );
};

export default App;
