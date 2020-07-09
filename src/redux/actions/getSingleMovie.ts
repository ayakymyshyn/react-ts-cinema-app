// Types
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { MoviesAction, MoviesState } from '../../types/reduxTypes';

export type AppThunk = ThunkAction<void, MoviesState, null, Action<MoviesAction>>;

export const getSingleMovie = (match: string): AppThunk => {
  let movieLoaded = false;
  return async (dispatch: Dispatch<MoviesAction>) => {
    const res = await fetch(`https://afternoon-woodland-86059.herokuapp.com/movies/${match}`);
    const movie = await res.json();
    movieLoaded = true;
    return dispatch({
      type: 'GET_SINGLE_MOVIE',
      movie,
      movieLoaded,
    });
  };
};
