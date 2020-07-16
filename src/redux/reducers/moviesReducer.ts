// Action types
import {
  GET_MOVIES,
  GET_SINGLE_MOVIE,
  SET_SEATS,
  REMOVE_SEAT,
  CLEAN_SEATS_ARRAY,
  SET_BOOK_STATUS,
  MoviesState,
  MoviesAction,
} from '../../types/reduxTypes';

// State
export const moviesState: MoviesState = {
  movies: [],
  movie: {
    _id: '',
    title: '',
    description: '',
    dates: [],
    image: '',
    price: 0,
  },
  selectedSeats: [],
  isOk: false,
  loaded: false,
  movieLoaded: false,
};

const moviesReducer = (state: MoviesState = moviesState, action: MoviesAction): MoviesState => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.movies,
        loaded: action.loaded,
      };
    case GET_SINGLE_MOVIE:
      return {
        ...state,
        movie: action.movie,
        movieLoaded: action.movieLoaded,
      };
    case SET_SEATS:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats].concat(action.seats),
      };
    case REMOVE_SEAT:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats.filter((val) => val.seatNum !== action.seat)],
      };
    case CLEAN_SEATS_ARRAY:
      return {
        ...state,
        selectedSeats: [],
      };
    case SET_BOOK_STATUS:
      return {
        ...state,
        isOk: action.status,
      };
    default:
      return state;
  }
};

export default moviesReducer;
