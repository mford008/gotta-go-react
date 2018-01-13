import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarItem } from 'bloomer';

export const MenuItem = props =>
  <NavbarItem style={{ color: '#ffffff' }}>
    <Link to={props.href} style={{ color: 'white' }}>
      {props.children}
    </Link>
  </NavbarItem>;
