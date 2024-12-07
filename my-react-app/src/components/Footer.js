import React from 'react';
import './Footer.css';
import logo from '../assest/navgurukul.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="NavGurukul Logo" />
      <p>Class Project</p>
      <p>@React</p>
    </footer>
  );
};

export default Footer;
