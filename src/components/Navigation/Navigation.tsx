/* eslint-disable jsx-a11y/anchor-is-valid */
// Core
import React, { ReactElement } from 'react';
// Styles
import './Navigation.scss';

const Navigation = (): ReactElement => (
  <nav className="navigation">
    <ul className="menu">
      <li className="menu__item">
        <a className="link" href="#">
          <i className="icon fas fa-ticket-alt main-app__nav__icon" />
          {' '}
          <span className="option">my tickets</span>
        </a>
      </li>
      <li className="menu__item">
        <a className="link" href="#">
          <i className="icon fas fa-heart" />
          {' '}
          <span className="option">favorites</span>
        </a>
      </li>
      <li className="menu__item">
        <a className="link" href="#">
          <i className="icon fas fa-info-circle" />
          {' '}
          <span className="option">about us</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
