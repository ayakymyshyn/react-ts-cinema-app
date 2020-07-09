// Core
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
// Other
import T from 'prop-types';

export const MovieContentHeader = ({ id = '', title = '' }): ReactElement => (
  <div className="movie-content-header">
    <Link to={`/movie/${id}`}>
      <h3 className="movie-title">{title}</h3>
    </Link>
    <div className="imax-logo" />
  </div>
);

MovieContentHeader.propTypes = {
  id: T.string.isRequired,
  title: T.string.isRequired,
};
