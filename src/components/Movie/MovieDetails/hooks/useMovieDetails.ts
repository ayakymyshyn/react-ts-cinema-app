// Core
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// Other
import { cleanSeatsArray } from '../../../../redux/actions/cleanSeatsArray';
import { setBookStatus } from '../../../../redux/actions/setBookStatus';
// Types
import { MoviesAction } from '../../../../types/reduxTypes';

type SelectedDate = {
  date: string,
  idx: number,
};
type CleanSeats = () => MoviesAction;
type ChangeBookStatus = (flag: boolean) => MoviesAction;
type UseMovieDetails = {
  selectedDate: SelectedDate,
  setSelectedDate: (arg: SelectedDate) => void,
  cleanSeats: CleanSeats,
  changeBookStatus: ChangeBookStatus,
};

export const useMovieDetails = (): UseMovieDetails => {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>({
    idx: 1,
    date: '',
  });
  // Actions
  const dispatch = useDispatch();
  const cleanSeats = () => dispatch(cleanSeatsArray());
  const changeBookStatus = (status: boolean) => dispatch(setBookStatus(status));

  return {
    selectedDate, setSelectedDate, cleanSeats, changeBookStatus,
  };
};
