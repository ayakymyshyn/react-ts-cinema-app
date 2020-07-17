import { cleanup } from '@testing-library/react';
import { testHooks } from '../testUtils/TestHooks';
import { useMovieDetails } from '../Movie/MovieDetails/hooks/useMovieDetails';

let movieDetails = {};

beforeEach(() => {
  testHooks(() => {
    movieDetails = useMovieDetails();
  });
});
afterEach(() => {
  cleanup();
});

describe('useMovieDetails', () => {
  test('should return a setSelectedDate function', () => {
    expect(movieDetails.setSelectedDate).toBeInstanceOf(Function);
  });

  test('should return a cleanSeats function', () => {
    expect(movieDetails.cleanSeats).toBeInstanceOf(Function);
  });
});
