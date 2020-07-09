import React, { ReactElement } from 'react';

export const Spinner = (): ReactElement => (
  <div className="spinner">
    <img
      src="https://www.defined.com/images/animated_loading__by__amiri.gif"
      alt="Loading..."
    />
  </div>
);
