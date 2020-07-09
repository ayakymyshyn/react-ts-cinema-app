import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

export const rootReducer = combineReducers({ moviesReducer });
export type AppState = ReturnType<typeof rootReducer>;
