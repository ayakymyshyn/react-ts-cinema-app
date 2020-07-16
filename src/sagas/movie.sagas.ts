// Core
import {
  put, call, takeLeading,
} from 'redux-saga/effects';
// Types
import { AnyAction } from 'redux';
// Actions
import { GET_MOVIES, GET_SINGLE_MOVIE } from '../types/reduxTypes';
import { getMovies } from '../redux/actions/getMovies';
import { getSingleMovie } from '../redux/actions/getSingleMovie';
// Helpers
import { fetchMovies } from '../api/fetchMovies';
import { fetchSingleMovie } from '../api/fetchSingleMovie';

// Workers
export function* loadMovies() {
  let loaded = false;
  const movies = yield call(fetchMovies);
  if (movies) {
    loaded = true;
  }
  yield put(getMovies(movies, loaded));
}

export function* loadSingleMovie(action: AnyAction) {
  let loaded = false;
  const { id } = action;
  const movie = yield call(fetchSingleMovie, id);
  if (movie) {
    loaded = true;
  }
  yield put(getSingleMovie(id, movie, loaded));
}
// Watchers
export function* watchFetchMovies() {
  yield takeLeading(GET_MOVIES, loadMovies);
}
export function* watchFetchSingleMovie() {
  yield takeLeading(GET_SINGLE_MOVIE, loadSingleMovie);
}
