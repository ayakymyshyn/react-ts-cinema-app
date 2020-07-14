// Types
import { Seat } from '../../types/movieTypes';
import { MoviesAction } from '../../types/reduxTypes';

export const setSeats = (seats: Array<Seat>): MoviesAction => ({
  type: 'SET_SEATS',
  seats,
});
