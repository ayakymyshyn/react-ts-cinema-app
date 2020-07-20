/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
// Core
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
// Other
import { PDFDownloadLink } from '@react-pdf/renderer';
// Components
import MovieTicket from './MovieTicket';

const DownloadTicket = (): ReactElement => {
  const movieData = JSON.parse(localStorage.getItem('bookedMovie') || '{}');
  return (
    <>
      <MovieTicket
        title={movieData.title}
        selectedSeats={movieData.seats}
        movieId={movieData._id}
      />
      <PDFDownloadLink
        document={(
          <MovieTicket
            title={movieData.title}
            selectedSeats={movieData.seats}
            movieId={movieData._id}
          />
)}
        fileName="ticket.pdf"
      >
        <div className="theme-btn">Download Ticket Info in PDF</div>
        <Link to="/" className="theme-btn">Back to main page</Link>
      </PDFDownloadLink>
    </>
  );
};

export default DownloadTicket;
