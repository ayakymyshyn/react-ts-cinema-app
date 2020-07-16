// Core
import React, { ReactElement } from 'react';

type PropTypes = {
  background: string,
  backgroundSize?: string
};

export const MovieCardHeader = ({ background = '', backgroundSize = 'cover' }: PropTypes): ReactElement => (
  <div
    className="movie-header"
    style={{ background: `url(${background})`, backgroundSize }}
  />
);
