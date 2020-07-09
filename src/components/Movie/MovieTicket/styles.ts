import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  ticket: {
    display: 'flex',
    justifyContent: 'center',
  },
  stub: {
    minHeight: '250px',
    width: '250px',
    color: 'white',
    padding: '20px',
    position: 'relative',
  },
  heading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '28px',
    paddingBottom: '5px',
    marginBottom: '5px',
    fontWeight: 'bold',
    lineHeight: '35px',
    backgroundColor: '#333',
  },
  subheader: {
    fontSize: '18px',
    paddingBottom: '5px',
    marginBottom: '5px',
    fontWeight: 'bold',
    lineHeight: '25px',
    color: '#333',
  },
  block: {
    margin: '10px 0',
    color: '#333',
  },
  blackBorder: {
    borderBottom: '3px solid #333',
    color: '#333',
  },
});
