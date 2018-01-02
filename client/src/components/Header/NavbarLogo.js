import React from 'react';
import { NavbarBrand, NavbarItem, NavbarBurger } from 'bloomer';

export const NavbarLogo = () =>
  <NavbarBrand>
    <NavbarItem>
      <img style={{margin: '0'}} src='./transp-gotta-go.png' alt='gotta-go' />
    </NavbarItem>
    <NavbarBurger onClick={this.onClick} style={{ color: '#ffffff' }} />
  </NavbarBrand>;
