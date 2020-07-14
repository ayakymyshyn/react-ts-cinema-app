// Types
import { MoviesAction } from '../../types/reduxTypes';
import { Movie } from '../../types/movieTypes';

export const getSingleMovie = (id: string, movie: Movie, movieLoaded: boolean): MoviesAction => ({
  type: 'GET_SINGLE_MOVIE',
  movie,
  movieLoaded,
  id,
});
