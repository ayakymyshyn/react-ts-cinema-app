// Core
import { useEffect } from 'react';
// Other
import { useSelector, useDispatch } from 'react-redux';
import { getSingleMovie } from '../../../../redux/actions/getSingleMovie';
// Types
import { AppState } from '../../../../redux/reducers/rootReducer';
import { Movie } from '../../../../types/movieTypes';

type UseGetSingleFilm = {
  movie: Movie,
  movieLoaded: boolean
};
type CallBack = (flag: boolean) => void;

export const useGetSingleFilm = (id: string, cb: CallBack): UseGetSingleFilm => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleMovie(id));
    return () => cb && cb(false);
  }, [dispatch]);

  const film = useSelector((state: AppState) => state.moviesReducer.movie);
  const movieLoaded = useSelector((state: AppState) => state.moviesReducer.movieLoaded);

  const movie = film;

  return { movie, movieLoaded };
};
