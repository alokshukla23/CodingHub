import React from 'react';
import './Header.css';
import logo from '../assest/Movie.png';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <img src={logo} alt="Movie Hub Logo" className="logo-image" />
        <div className="logo">Movie Hub</div>
      </div>
      <nav className="right-section">
        <ul className="nav-links">
          <li>Watch</li>
          <li>Add Movie</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
