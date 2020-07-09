// Types
import { Seat, Row } from '../../types/movieTypes';
import { MoviesAction } from '../../types/reduxTypes';

export const setSeats = (seats: Array<Seat>, row: Row): MoviesAction => ({
  type: 'SET_SEATS',
  seats,
  row,
});
