import React from 'react';
import { Navbar } from 'bloomer';
import { Plus, NavLogo, NavMenu, MenuItem } from '../../components/Header';

export const Header = () =>
  <Navbar style={{backgroundColor: '#393f60', justifyContent: 'space-between'}}>
    <Plus/>
    <NavLogo/>
    <NavMenu>
      <MenuItem href='/landing'>Whats Nearby</MenuItem>
      <MenuItem href='/account'>Account</MenuItem>
      <MenuItem href='/login'>Log in</MenuItem>
    </NavMenu>
  </Navbar>;
