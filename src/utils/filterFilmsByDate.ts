// Types
import { Movie, Date } from '../types/movieTypes';
// Other
import { displayDateCorrectly } from './displayDateCorrectly';
import { displayFilmTime } from './displayFilmTime';

const filterDate = (dates: Array<Date>, neededDate: string) => dates.filter((date) => {
  const dateStr = `${displayDateCorrectly(
    date.date,
  ).toString()} ${displayFilmTime(date.date).toString()}`;
  return dateStr === neededDate.toString();
});

export const filterFilmsByDate = (movies: Array<Movie>, date: string): Array<Movie> => movies
  .filter(
    (movie) => filterDate(movie.dates, date).length > 0 && movie,
  );
