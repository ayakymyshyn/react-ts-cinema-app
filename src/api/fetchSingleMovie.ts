import { Movie } from '../types/movieTypes';

export const fetchSingleMovie = async (id: string): Promise<Array<Movie>> => {
  const res = await fetch(`https://afternoon-woodland-86059.herokuapp.com/movies/${id}`);
  const movie = await res.json();
  return movie;
};
