/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// Core
import React, { ReactElement } from 'react';
// Other
import { useBookSeats } from './hooks/useBookSeats';
import booked from '../../../images/booked.png';
import free from '../../../images/free.png';
import './Sector.scss';
// Types
import { Seat } from '../../../types/movieTypes';

const styles = {
  color: '#fff',
  maxWidth: '50px',
  margin: '5px',
  cursor: 'pointer',
  borderRadius: '50%',
  padding: '10px',
};

const Row = ({
  seats,
  date,
  rowNum,
  price,
  stringDate,
}: {
  seats: Array<Seat>,
  date: number,
  rowNum: number,
  price: number,
  stringDate: string
}): ReactElement => {
  const { selectedSeats, setChosenSeats, deleteSeat } = useBookSeats();
  return (
    <>
      {seats.map((seat, i) => {
        const found = selectedSeats.find((el: Seat) => el.seatNum === seat._id);

        const clickHandler = (e: React.SyntheticEvent<EventTarget>) => {
          if (!seat.booked && e.target instanceof HTMLImageElement) {
            e.target.classList.toggle('selected');
          }
          return !seat.booked && !found ? setChosenSeats([{
            row: rowNum,
            seatNum: seat._id,
            _id: seat._id,
            booked: seat.booked,
            seat: i,
            date,
            price,
            stringDate,
          }]) : deleteSeat(seat._id);
        };
        return (
          <>
            <img
              key={seat._id}
              src={seat.booked ? booked : free}
              alt="Movie"
              style={{ ...styles }}
              onClick={clickHandler}
            />
          </>
        );
      })}
    </>
  );
};

export default Row;
