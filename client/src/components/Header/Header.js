import React from 'react';
import { Navbar } from 'bloomer';
import { Plus, NavLogo, MenuItem } from '../../components/Header';
import NavMenu from './NavMenu';

export const Header = () =>
  <Navbar style={{backgroundColor: '#393f60', justifyContent: 'space-between'}}>
    <Plus />
    <NavLogo />
    <NavMenu>
      <MenuItem href='/landing'>Nearby</MenuItem>
      <MenuItem href='/account'>Account</MenuItem>
      <MenuItem href='/login'>Log in</MenuItem>
    </NavMenu>
  </Navbar>;
