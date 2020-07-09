// Types
import { Seat } from '../types/movieTypes';

export type SeatsArgs = {
  bookedSeats: Array<Seat> | []
};

export const bookTicket = async (url = '', data: SeatsArgs): Promise<boolean | Error> => {
  try {
    const res = await fetch(url, {
      method: 'PATCH',
      cache: 'default',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return res.status === 200;
  } catch (err) {
    return err.json({ message: err });
  }
};
