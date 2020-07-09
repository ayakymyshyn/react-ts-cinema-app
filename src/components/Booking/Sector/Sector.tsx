/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
// Core
import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Row from './Row';
import SeatsInfo from './SeatsInfo';
// Other
import { bookTicket, SeatsArgs } from '../../../utils/bookTicket';
import { setBookStatus } from '../../../redux/actions/setBookStatus';
// Types
import { Movie } from '../../../types/movieTypes';
import { AppState } from '../../../redux/reducers/rootReducer';

type Props = {
  movie: Movie,
  filmDate: string,
  dateIndex: number,
  stringDate: string,
};

const Sector = ({
  movie,
  filmDate,
  dateIndex,
  stringDate,
}: Props): ReactElement => {
  const dispatch = useDispatch();
  const ticketInfo = useSelector((state: AppState) => state.moviesReducer.selectedSeats);
  const setBookingStatus = (status: boolean) => dispatch(setBookStatus(status));
  const seatsData = {
    bookedSeats: ticketInfo,
  };
  const url = `https://afternoon-woodland-86059.herokuapp.com/movies/${movie._id}`;
  const bookFunc = (
    uri: string,
    data: SeatsArgs,
  ) => bookTicket(uri, data) && setBookingStatus(true);
  return (
    <div className="sector">
      <h4 className="screen">SCREEN</h4>
      <div className="cinema-seats">
        {movie.dates
          && movie.dates.map((date) => (
            date.date === filmDate
              && date.rows.map((row, i) => (
                <>
                  <Row
                    seats={row.seats}
                    key={row._id}
                    rowNum={i}
                    date={dateIndex}
                    price={movie.price}
                    stringDate={stringDate}
                  />
                  <br />
                </>
              ))
          ))}
      </div>
      <SeatsInfo
        bookFunc={bookFunc}
        url={url}
        data={seatsData}
      />
    </div>
  );
};

export default Sector;
