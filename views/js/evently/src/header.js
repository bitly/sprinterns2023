import React from 'react';
import logo from './bitly-logo.png';
import './header.css';

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="Bitly Logo"></img>
      </div>
      <h1>Evently</h1>
    </div>
  );
}
export default Header