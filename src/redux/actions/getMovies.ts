// Types
import { MoviesAction } from '../../types/reduxTypes';
import { Movie } from '../../types/movieTypes';

export const getMovies = (movies: Array<Movie>, loaded: boolean): MoviesAction => ({
  type: 'GET_MOVIES',
  movies,
  loaded,
});
