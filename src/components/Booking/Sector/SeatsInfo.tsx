/* eslint-disable no-underscore-dangle */
// Core
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
// Types
import { AppState } from '../../../redux/reducers/rootReducer';
import { SeatsArgs } from '../../../utils/bookTicket';

type BookFunction = (url: string, data: SeatsArgs) => void;
type PropTypes = {
  bookFunc: BookFunction,
  url: string,
  data: SeatsArgs
};
const SeatsInfo = ({ bookFunc, url, data }: PropTypes): ReactElement => {
  let total = 0;
  const info = useSelector((state: AppState) => state.moviesReducer.selectedSeats);
  const movie = useSelector((state: AppState) => state.moviesReducer.movie);
  // Separated logic
  const ticketInfoJSX = (info
    && info.map((el) => {
      const { price, row, seat } = el;
      const r = row || 0;
      const s = seat || 0;
      const rowSeatInfo = `Row: ${r + 1}, seat: ${s + 1}`;
      if (price) {
        total += price;
      }
      return <h5 key={el._id}>{rowSeatInfo}</h5>;
    }));

  return (
    <div className="">
      <div className="row justify-content-end">
        {info.length > 0 ? (
          <div className="summary-info">
            {ticketInfoJSX}
            <h4>
              Total:
              {total}
              $
            </h4>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                bookFunc(url, data);
                localStorage.removeItem('bookedMovie');
                localStorage.setItem('bookedMovie', JSON.stringify({ movie: { ...movie }, seats: [...info] }));
              }}
            >
              Book ticket
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SeatsInfo;
