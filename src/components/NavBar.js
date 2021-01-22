/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <a>Logo</a>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/calculator">Calculator</NavLink></li>
      <li><NavLink to="/quote">Quote</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
