import React from 'react';
import { NavbarItem, NavbarDropdown } from 'bloomer';

export const NavbarMenu = props =>
  <NavbarItem hasDropdown isHoverable style={{ background: '#39405f', display: props.isHidden ? 'none' : 'block' }}>
    <NavbarDropdown style={{ background: '#39405f' }}>
      { props.children }
    </NavbarDropdown>
  </NavbarItem>;
