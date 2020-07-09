/* eslint-disable react/forbid-prop-types */
// Core
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
// Other
import { PDFDownloadLink } from '@react-pdf/renderer';
// Components
import MovieTicket from './MovieTicket';
// Types
import { Seat } from '../../../types/movieTypes';

type PropTypes = {
  title: string,
  selectedSeats: Seat[],
  movieId: string
};

const DownloadTicket = ({ title, selectedSeats, movieId }: PropTypes): ReactElement => (
  <>
    <MovieTicket title={title} selectedSeats={selectedSeats} />
    <PDFDownloadLink
      document={<MovieTicket title={title} selectedSeats={selectedSeats} movieId={movieId} />}
      fileName="ticket.pdf"
    >
      <div className="theme-btn">Download Ticket Info in PDF</div>
      <Link to="/" className="theme-btn">Back to main page</Link>
    </PDFDownloadLink>
  </>
);

export default DownloadTicket;
