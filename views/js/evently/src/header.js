import React from 'react';
import logo from './bitly-logo-white.png';
import './header.css';

function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <img width="50" height="50" src = {logo}></img>
      </div>
      <h1>Evently</h1>
    </div>
  );
}
export default Header