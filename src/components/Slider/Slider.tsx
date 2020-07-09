/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
// Core
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
// Types
import { Movie } from '../../types/movieTypes';

const TestSlider = ({ movie }: {movie: Movie}): ReactElement => (
  <section className="hero-area" id="home">
    <div className="container">
      <div className="hero-area-slider">
        <div className="row hero-area-slide">
          <div className="col-lg-6 col-md-5">
            <div className="hero-area-content">
              <img src={movie && movie.image} alt="about" />
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="hero-area-content pr-50">
              <h2>{movie && movie.title}</h2>
              <p>{movie && movie.description}</p>
              <Link className="theme-btn" to={`/movie/${movie && movie._id}`}>
                <i className="icofont icofont-ticket" />
                Buy tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestSlider;
