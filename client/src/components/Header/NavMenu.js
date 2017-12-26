import React from 'react';
import { NavbarItem, NavbarLink, NavbarDropdown } from 'bloomer';
import './Header.css';

export const NavMenu = props =>
  <NavbarItem hasDropdown isHoverable isHidden='mobile'>
    <NavbarLink style={{ background: '#39405f', color: '#ffffff', fontWeight: '700' }} href=''>Menu</NavbarLink>
    <NavbarDropdown style={{ background: '#39405f' }}>
      {props.children}
    </NavbarDropdown>
  </NavbarItem>;
