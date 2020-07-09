// Types
import { Movie } from '../types/movieTypes';

export const getMovie = (movies: Array<Movie>, target: string): Array<Movie> => movies.filter(
  (movie) => movie.title.toLowerCase().replace(/ /g, '-') === target,
);
