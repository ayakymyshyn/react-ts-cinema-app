// Core
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
// Component
import MovieCard from '../Movie/MovieCard/MovieCard';
// Mock data
import { film } from '../../mockData/film';

describe('Movie card', () => {
  afterEach(() => {
    cleanup();
  });
  test('Renders without errors', () => {
    render(
      <Router>
        <MovieCard movie={film} />
      </Router>,
    );
  });
});
