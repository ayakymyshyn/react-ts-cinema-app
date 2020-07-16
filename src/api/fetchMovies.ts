import { Movie } from '../types/movieTypes';

export let fetchMovies = async (): Promise<Array<Movie>> => {
  const data = await fetch('https://afternoon-woodland-86059.herokuapp.com/movies');
  const movies = await data.json();
  return movies;
};
