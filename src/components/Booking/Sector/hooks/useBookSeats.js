// Core
import { useSelector, useDispatch } from 'react-redux';
// Other
import { setSeats } from '../../../../redux/actions/setSeats';
import { removeSeat } from '../../../../redux/actions/removeSeat';

export const useBookSeats = () => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector((state) => state.moviesReducer.selectedSeats);
  const setChosenSeats = (seats) => dispatch(setSeats(seats));
  const deleteSeat = (seat) => dispatch(removeSeat(seat));

  return {
    selectedSeats,
    setChosenSeats,
    deleteSeat,
  };
};
