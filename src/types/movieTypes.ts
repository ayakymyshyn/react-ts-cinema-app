/* eslint-disable @typescript-eslint/ban-types */
export type Seat = {
  _id: string;
  booked: boolean;
  seatNum?: string;
  stringDate?: string;
  price?: number;
  seat?: number;
  row?: number;
  date?: number;
};

export type Row = {
  seats: Seat[];
  _id: string;
};

export type Date = {
  rows: Row[];
  _id: string;
  date: string;
};

export type Movie = {
  _id: string;
  title: string;
  description: string;
  dates: Array<Date>;
  price: number;
  image: string;
};
