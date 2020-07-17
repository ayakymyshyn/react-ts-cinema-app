/* eslint-disable no-underscore-dangle */
// Core
import moviesReducer, { moviesState } from '../reducers/moviesReducer';
// Mock data
import { film } from '../../mockData/film';
import { films } from '../../mockData/films';
import { seats } from '../../mockData/seat';
// Actions
import { getMovies } from '../actions/getMovies';
import { getSingleMovie } from '../actions/getSingleMovie';
import { setSeats } from '../actions/setSeats';
import { removeSeat } from '../actions/removeSeat';
import { cleanSeatsArray } from '../actions/cleanSeatsArray';
import { setBookStatus } from '../actions/setBookStatus';

const initialState = { ...moviesState };

describe('Movies reducer', () => {
  test('should handle GET_MOVIES', () => {
    expect(moviesReducer(initialState, getMovies(films, true))).toEqual({
      ...initialState,
      movies: films,
      loaded: true,
    });
  });

  test('should handle GET_SINGLE_MOVIE', () => {
    expect(moviesReducer(initialState, getSingleMovie(film._id, film, true))).toEqual({
      ...initialState,
      movie: film,
      movieLoaded: true,
    });
  });

  test('should handle SET_SEATS', () => {
    expect(moviesReducer(initialState, setSeats(seats))).toEqual({
      ...initialState,
      selectedSeats: [...initialState.selectedSeats].concat(seats),
    });
  });

  test('should handle REMOVE_SEAT', () => {
    expect(moviesReducer(initialState, removeSeat('2'))).toEqual({
      ...initialState,
      selectedSeats: [...initialState.selectedSeats.filter((seat) => seat.seatNum !== '2')],
    });
  });

  test('should handle CLEAN_SEATS_ARRAY', () => {
    expect(moviesReducer(initialState, cleanSeatsArray())).toEqual({
      ...initialState,
      selectedSeats: [],
    });
  });

  test('should handle SET_BOOK_STATUS', () => {
    expect(moviesReducer(initialState, setBookStatus(true))).toEqual({
      ...initialState,
      isOk: true,
    });
  });
});
