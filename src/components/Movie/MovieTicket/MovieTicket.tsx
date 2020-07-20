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
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    margin: '25px',
  },
  section: {
    margin: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '34px',
    fontWeight: 'bold',
    top: '20px',
  },
  date: {
    fontSize: '14px',
  },
  seats: {
    display: 'flex',
    flexDirection: 'column',
  },
  movieid: {
    fontSize: '10px',
    textTransform: 'uppercase',
  },
});

const MovieTicket = ({ title, selectedSeats, movieId = '' }: PropTypes): ReactElement => (
  <Document>
    <Page size="LETTER" style={styles.page} orientation="landscape">
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.movieid}>
          {movieId}
        </Text>
      </View>
      <View style={styles.section}>
        <View>
          <Text style={styles.date}>Date: </Text>
          <Text style={styles.date}>
            {selectedSeats && selectedSeats[0].stringDate}
          </Text>
        </View>
        <View style={styles.seats}>
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
                </Text>
              );
            })}
        </View>
      </View>
    </Page>
  </Document>
);

export default MovieTicket;
