import React from 'react';
import Navigation from './Navigation';
import "../css/header.css";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Navid M.</h1>
      <Navigation />
    </header>
  );
};

export default Header;
