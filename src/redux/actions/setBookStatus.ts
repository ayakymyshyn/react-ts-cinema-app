// Type
import { MoviesAction } from '../../types/reduxTypes';

export const setBookStatus = (status: boolean): MoviesAction => ({
  type: 'SET_BOOK_STATUS',
  status,
});
