import React from 'react';
import { NavbarItem } from 'bloomer';

export const MenuItem = props =>
  <NavbarItem style={{ color: '#ffffff' }} {...props}>
    {props.children}
  </NavbarItem>;
