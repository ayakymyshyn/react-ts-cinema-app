// Core
import { useSelector, useDispatch } from 'react-redux';
// Other
import { setSeats } from '../../../../redux/actions/setSeats';
import { removeSeat } from '../../../../redux/actions/removeSeat';
// Types
import { AppState } from '../../../../redux/reducers/rootReducer';
import { Seat } from '../../../../types/movieTypes';

type UseBookSeats = {
  selectedSeats: Seat[],
  deleteSeat: (seat: string) => void,
  setChosenSeats: (seats: Seat[]) => void,
};
export const useBookSeats = (): UseBookSeats => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state: AppState) => state.moviesReducer.selectedSeats);
  const setChosenSeats = (seats: Seat[]) => dispatch(setSeats(seats));
  const deleteSeat = (seat: string) => dispatch(removeSeat(seat));

  return {
    selectedSeats,
    setChosenSeats,
    deleteSeat,
  };
};
