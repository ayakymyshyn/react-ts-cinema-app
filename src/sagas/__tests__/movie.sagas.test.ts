/* eslint-disable no-underscore-dangle */
// Core
import { runSaga } from 'redux-saga';
// Types
import { AnyAction } from 'redux';
import { MoviesAction } from '../../types/reduxTypes';
// Sagas
import { loadMovies, loadSingleMovie } from '../movie.sagas';
// Mock data
import { films } from '../../mockData/films';
import { film } from '../../mockData/film';
// Other
import * as movies from '../../api/fetchMovies';
import * as movie from '../../api/fetchSingleMovie';
import { getMovies } from '../../redux/actions/getMovies';
import { getSingleMovie } from '../../redux/actions/getSingleMovie';

test('should load all movies properly', async () => {
  const dispatchedActions: Array<AnyAction> = [];
  // Mocked fetchMovies function
  movies.fetchMovies = jest.fn(() => Promise.resolve(films));

  const fakeStore = {
    getState: () => ({ movies: films, loaded: true }),
    dispatch: (action: AnyAction) => dispatchedActions.push(action),
  };

  await runSaga(fakeStore, loadMovies).toPromise();
  expect(movies.fetchMovies.mock.calls.length).toBe(1);
  expect(dispatchedActions).toContainEqual(getMovies(films, true));
});

describe('loadSingleMovie', () => {
  test('should load single movie details', async () => {
    const dispatchedActions: Array<AnyAction> = [];
    movie.fetchSingleMovie = jest.fn(() => Promise.resolve(film));
    const fakeStore = {
      getState: () => ({ movie: film, loaded: true }),
      dispatch: (action: MoviesAction) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, loadSingleMovie, getSingleMovie(film._id, film, true)).toPromise();
    expect(movie.fetchSingleMovie.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(getSingleMovie(film._id, film, true));
  });
});
