/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
// Core
import React, { ReactElement } from 'react';
// Components
import { MovieCardHeader } from './elements/MovieCardHeader';
import { MovieContentHeader } from './elements/MovieContentHeader';
import { MovieInfo } from './elements/MovieInfo';
// Styles
import './MovieCard.scss';
// Styles
import { Movie } from '../../../types/movieTypes';

type PropTypes = {
  movie: Movie,
  stringDate?: string
};

const MovieCard = ({ movie, stringDate = '' }: PropTypes): ReactElement => (
  <div className="movie-card" data-test="movie-card">
    <MovieCardHeader background={movie.image} />
    <div className="movie-content">
      <MovieContentHeader id={movie._id} title={movie.title} />
      <MovieInfo stringDate={stringDate} date={movie.dates[0].date} price={movie.price} />
    </div>
  </div>
);

export default MovieCard;
