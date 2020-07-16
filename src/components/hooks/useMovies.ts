// Core
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Other
import { getMovies } from '../../redux/actions/getMovies';
// Types
import { AppState } from '../../redux/reducers/rootReducer';
import { Movie, Seat } from '../../types/movieTypes';

type ReturnType = {
  movies: Array<Movie>,
  isOk: boolean,
  selectedSeats: Array<Seat>,
  movie: Movie,
  loaded: boolean
};

export const useMovies = (): ReturnType => {
  const dispatch = useDispatch();
  const {
    movies, isOk, selectedSeats, movie, loaded,
  } = useSelector((state: AppState) => ({
    movies: state.moviesReducer.movies,
    isOk: state.moviesReducer.isOk,
    selectedSeats: state.moviesReducer.selectedSeats,
    movie: state.moviesReducer.movie,
    loaded: state.moviesReducer.loaded,
  }));
  const fetchMovies = () => dispatch(getMovies(movies, loaded));

  useEffect(() => {
    console.log('mounting...');
    fetchMovies();
  }, [dispatch]);

  console.log(movies);

  return {
    movies,
    isOk,
    selectedSeats,
    movie,
    loaded,
  };
};
