import React from 'react';
import logo from './bitly-logo.svg';
import './header.css';

function Header() {
  return (
    <div className="Header">
            <img width="100" height="100" src = {logo}></img>
            <h1>Evently</h1>
    </div>
  );
}
export default Header