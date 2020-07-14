// Core
import { all } from 'redux-saga/effects';
// Sagas
import { watchFetchMovies, watchFetchSingleMovie } from './movie.sagas';

export function* rootSaga() {
  yield all([watchFetchMovies(), watchFetchSingleMovie()]);
}
