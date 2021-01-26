/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => (
  <nav>
    <div className="navbar d-flex space-btw align-center">
      <a className="logo">Math Magicians</a>
      <ul className="d-flex">
        <li><NavLink to="/" className="nav-links">Home</NavLink></li>
        <li><NavLink to="/calculator" className="nav-links">Calculator</NavLink></li>
        <li><NavLink to="/quote" className="nav-links">Quote</NavLink></li>
      </ul>
    </div>

  </nav>
);

export default NavBar;
