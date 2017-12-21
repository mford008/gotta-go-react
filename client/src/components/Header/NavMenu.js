import React from 'react';
import { NavbarItem, NavbarLink, NavbarDropdown } from 'bloomer';

export const NavMenu = props   =>
  <NavbarItem hasDropdown isHoverable isHidden='mobile'>
    <NavbarLink style={{ color: '#ffffff', fontWeight: '700' }} href=''>Menu</NavbarLink>
    <NavbarDropdown>
      {props.children}
    </NavbarDropdown>
  </NavbarItem>;
