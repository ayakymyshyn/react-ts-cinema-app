/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-empty-pattern */
import { cleanup } from '@testing-library/react';
import { testHooks } from '../testUtils/TestHooks';
import { useBookSeats } from '../Booking/Sector/hooks/useBookSeats';

let bookInfo = {};
beforeEach(() => {
  testHooks(() => {
    bookInfo = useBookSeats();
  });
});
afterEach(() => {
  cleanup();
});
describe('useBookSeats', () => {
  test('should have setChosenSeats function', () => {
    expect(bookInfo.setChosenSeats).toBeInstanceOf(Function);
  });
});
