import React from 'react';
import { Navbar } from 'bloomer';
import { Plus, NavbarLogo, NavbarMenu, MenuItem } from '../../components/Header';

export const Header = props =>
  <Navbar style={{backgroundColor: '#393f60', justifyContent: 'space-between'}}>

    <Plus />
    <NavbarLogo />
    <NavbarMenu>
      <MenuItem href='/landing'>Nearby</MenuItem>
      <MenuItem href='/account'>Account</MenuItem>
      <MenuItem href='/login'>Log in</MenuItem>
    </NavbarMenu>
  </Navbar>;
