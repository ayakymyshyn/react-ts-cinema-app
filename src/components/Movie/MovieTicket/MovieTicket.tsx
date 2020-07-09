/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
// Core
import React, { ReactElement } from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
// Styles
import './MovieTicket.scss';
// import { styles } from './styles';
// Types
import { Seat } from '../../../types/movieTypes';

type PropTypes = {
  title: string,
  selectedSeats: Seat[],
  movieId?: string
};

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MovieTicket = ({ title, selectedSeats, movieId = '' }: PropTypes): ReactElement => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{title}</Text>
      </View>
      <View style={styles.section}>
        <Text>Date: </Text>
        <Text>
          {selectedSeats && selectedSeats[0].stringDate}
        </Text>
        {selectedSeats
            && selectedSeats.map((s) => {
              const { row, seat } = s;
              const r = row || 0;
              const st = seat || 0;
              return (
                <Text key={s._id}>
                  <Text>Row: </Text>
                  {r + 1}
                  <Text>, Seat:</Text>
                  {st + 1}
                  <Text>
                    <Text>SeatID:</Text>
                    {s.seatNum}
                  </Text>
                  <Text>
                    <Text>MovieID:</Text>
                    {movieId}
                  </Text>
                </Text>
              );
            })}
      </View>
    </Page>
  </Document>
);

export default MovieTicket;
