import React from 'react';
import './Header.css';
import Nav from './Nav';

export const Header = () =>
  <nav className="navbar is-info" role="navigation" aria-label="main navigation">
    <div className="navbar-brand is-centered">
      <a className="navbar-item" href="/landing_map">
        <img src="./public/transp-gotta-go.png" alt="Gotta Go" />
      </a>
      <div className="navbar-burger burger" data-target="navbarStuff">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <Nav />
  </nav>;

// export default Header;
