// Types
import { MoviesAction } from '../../types/reduxTypes';

export const removeSeat = (seat: string): MoviesAction => ({
  type: 'REMOVE_SEAT',
  seat,
});
