/* eslint-disable jsx-a11y/label-has-associated-control */
// Core
import React, { ReactElement } from 'react';
// Other
import T from 'prop-types';
import { displayDateCorrectly } from '../../../../utils/displayDateCorrectly';
import { displayFilmTime } from '../../../../utils/displayFilmTime';

// Types
type PropTypes = {
  stringDate: string,
  date: string,
  price: number
};

export const MovieInfo = ({ stringDate, date, price }: PropTypes): ReactElement => {
  const dateJSX = stringDate ? (<span id="cinema-date">{stringDate}</span>) : (
    <span>
      {displayDateCorrectly(date)}
      {' - '}
      {displayFilmTime(date)}
    </span>
  );

  return (
    <div className="movie-info">
      <div className="info-section">
        <label htmlFor="cinema-date">Date & Time</label>
        {dateJSX}
      </div>
      <div className="info-section">
        <label>Price</label>
        <span>{price}</span>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  stringDate: T.string.isRequired,
  date: T.string.isRequired,
  price: T.number.isRequired,
};
