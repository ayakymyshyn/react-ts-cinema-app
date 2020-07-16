// Core
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

type PropTypes = {
  id: string,
  title: string,
};

export const MovieContentHeader = ({ id = '', title = '' }: PropTypes): ReactElement => (
  <div className="movie-content-header">
    <Link to={`/movie/${id}`}>
      <h3 className="movie-title">{title}</h3>
    </Link>
    <div className="imax-logo" />
  </div>
);
