/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// Core
import React, { ReactElement } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Sector from '../../Booking/Sector/Sector';
import { displayDateCorrectly } from '../../../utils/displayDateCorrectly';
import { displayFilmTime } from '../../../utils/displayFilmTime';
// Components
import { Spinner } from './elements/Spinner';
// Other
import { useGetSingleFilm } from './hooks/useGetSingleFilm';
import { useMovieDetails } from './hooks/useMovieDetails';
// Styles
import '../../../css/style.css';
import './MovieDetails.scss';

// Types
type MatchParams = {
  params: {
    movieId: string
  };
};
type Props = {
  match: MatchParams;
};

const MovieDetails = ({ match }: Props): ReactElement => {
  const {
    selectedDate, setSelectedDate, cleanSeats, changeBookStatus,
  } = useMovieDetails();
  const { movie, movieLoaded } = useGetSingleFilm(match.params.movieId, changeBookStatus);
  // Separated JSX logic
  const dateNavigationJSX = movie.dates
    ? (movie.dates.map((date, i) => (
      <li
        key={date._id}
        className="nav-item date-list-item"
        onClick={() => {
          setSelectedDate({ ...date, idx: i });
          cleanSeats();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setSelectedDate({ ...date, idx: i });
            cleanSeats();
          }
        }}
      >
        {`${displayDateCorrectly(date.date)} - 
      ${displayFilmTime(date.date)}`}
      </li>
    ))) : <Redirect to="/" />;

  const selectedDateJSX = (selectedDate.date
    ? `Selected date: ${displayDateCorrectly(
      selectedDate.date,
    )} - 
  ${displayFilmTime(selectedDate.date)}`
    : 'Select date, please');

  return movieLoaded ? (
    <div className="movie-details">
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-area-content">
                <h1>{movie.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="transformers-area">
        <div className="container">
          <div className="transformers-box">
            <div className="row flexbox-center">
              <div className="col-lg-5 text-lg-left text-center">
                <div className="transformers-content">
                  <img
                    src={movie.image}
                    alt="about"
                    className="detail-movie-image"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="transformers-content">
                  <div className="details-overview">
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                  </div>
                </div>
                <h3 style={{ color: '#fff' }}>
                  {selectedDateJSX}
                </h3>
                <ul className="nav">
                  {dateNavigationJSX}
                </ul>
                <Sector
                  movie={movie}
                  filmDate={selectedDate.date}
                  dateIndex={selectedDate.idx}
                  stringDate={`${displayDateCorrectly(selectedDate.date)} - 
                  ${displayFilmTime(selectedDate.date)}`}
                />
                <Link to="/" className="theme-btn">Back To Main Page</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : <Spinner />;
};

export default MovieDetails;
