import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <header>
      <h1>BookMyShow</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Go to Home!</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
