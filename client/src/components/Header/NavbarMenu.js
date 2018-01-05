import React from 'react';
import { NavbarItem, NavbarLink, NavbarDropdown } from 'bloomer';

export const NavbarMenu = props =>
  <NavbarItem hasDropdown isHoverable style={{ background: '#39405f' }}>
    <NavbarLink style={{ background: '#39405f', color: '#ffffff', fontWeight: '700' }} href=''>Menu</NavbarLink>
    <NavbarDropdown style={{ background: '#39405f' }}>
      { props.children }
    </NavbarDropdown>
  </NavbarItem>;
