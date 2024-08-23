import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation-container">
      <NavLink to="/" exact className="nav-link" activeClassName="active">About Me</NavLink>
      <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
      <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
      <NavLink to="/resume" className="nav-link" activeClassName="active">Resume</NavLink>
    </nav>
  );
};

export default Navigation;
