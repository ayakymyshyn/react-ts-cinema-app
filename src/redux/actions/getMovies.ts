// Types
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { MoviesAction, MoviesState } from '../../types/reduxTypes';

export type AppThunk = ThunkAction<void, MoviesState, null, Action<MoviesAction>>;

export const getMovies = (): AppThunk => {
  let loaded = false;
  return async (dispatch: Dispatch<MoviesAction>) => {
    const res = await fetch('https://afternoon-woodland-86059.herokuapp.com/movies');
    const movies = await res.json();
    loaded = true;
    return dispatch({
      type: 'GET_MOVIES',
      movies,
      loaded,
    });
  };
};
