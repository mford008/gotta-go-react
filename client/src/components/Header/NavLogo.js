import React from 'react';
import { NavbarBrand, NavbarItem, NavbarBurger } from 'bloomer';

export const NavLogo = () =>
<NavbarBrand>
  <NavbarItem>
      <img style={{margin: '0'}} src='./transp-gotta-go.png' alt='gotta-go'/>
  </NavbarItem>
  <NavbarBurger style={{color: '#ffffff'}}/>
</NavbarBrand>;
