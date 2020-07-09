// Types
import { MoviesAction } from '../../types/reduxTypes';

export const CLEAN_SEATS_ARRAY = 'CLEAN_SEATS_ARRAY';

export const cleanSeatsArray = (): MoviesAction => ({
  type: 'CLEAN_SEATS_ARRAY',
});
