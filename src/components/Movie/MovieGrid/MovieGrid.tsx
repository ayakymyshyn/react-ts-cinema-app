/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
// Core
import React, { ReactElement } from 'react';
// Components
import MovieCard from '../MovieCard/MovieCard';
// Types
import { Movie } from '../../../types/movieTypes';

const MovieGrid = ({ movies }: {movies: Array<Movie>}): ReactElement => (
  <section className="portfolio-area">
    <div className="container">
      <div className="section-title">
        <h1>Spotlight This Month</h1>
      </div>
      <hr />
      <div className="col-lg-12 align-center">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  </section>
);

export default MovieGrid;
