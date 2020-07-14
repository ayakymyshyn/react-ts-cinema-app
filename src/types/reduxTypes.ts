// Types
import { Movie, Seat, Row } from './movieTypes';

// State
export type MoviesState = {
  movies: Array<Movie>,
  movie: Movie,
  selectedSeats: Array<Seat>,
  isOk: boolean,
  loaded: boolean,
  movieLoaded: boolean,
};

// Actions
export const CLEAN_SEATS_ARRAY = 'CLEAN_SEATS_ARRAY';
type CleanSeatsArray = {
  type: typeof CLEAN_SEATS_ARRAY;
};

export const GET_MOVIES = 'GET_MOVIES';
type GetMovies = {
  type: typeof GET_MOVIES;
  movies: Array<Movie>;
  loaded: boolean;
};

export const GET_SINGLE_MOVIE = 'GET_SINGLE_MOVIE';
type GetSingleMovie = {
  type: typeof GET_SINGLE_MOVIE;
  movie: Movie,
  movieLoaded: boolean,
  id: string,
};

export const REMOVE_SEAT = 'REMOVE_SEAT';
type RemoveSeat = {
  type: typeof REMOVE_SEAT;
  seat: string,
};

export const SET_BOOK_STATUS = 'SET_BOOK_STATUS';
type SetBookStatus = {
  type: typeof SET_BOOK_STATUS;
  status: boolean
};

export const SET_SEATS = 'SET_SEATS';
type SetSeats = {
  type: typeof SET_SEATS;
  seats: Array<Seat>,
};

export type MoviesAction =
CleanSeatsArray |
GetMovies |
GetSingleMovie |
RemoveSeat |
SetBookStatus |
SetSeats;
