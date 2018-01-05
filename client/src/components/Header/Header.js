import React, { Component } from 'react';
import { Navbar } from 'bloomer';
import { Plus, NavbarLogo, NavbarMenu, MenuItem } from '../../components/Header';

class Header extends Component {
  state = {
    isHidden: ''
  }

  // onClickBurger = () => {
  //   if (this.state.isHidden) {
  //     this.setState.isHidden =
  //   }
  // }

  render () {
    return (
      <Navbar style={{backgroundColor: '#393f60', justifyContent: 'space-between'}}>

        <Plus />
        <NavbarLogo />
        <NavbarMenu>
          <MenuItem href='/landing'>Nearby</MenuItem>
          <MenuItem href='/account'>Account</MenuItem>
          <MenuItem href='/login'>Log in</MenuItem>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default Header;
