/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { rootReducer } from '../../redux/reducers/rootReducer';

const store = createStore(rootReducer);

const TestHooks = ({ cb }: {cb: Function}) => {
  cb();
  return null;
};

export const testHooks = (cb: Function) => render(<Provider store={store}><TestHooks cb={cb} /></Provider>);
