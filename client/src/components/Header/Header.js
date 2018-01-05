import React, { Component } from 'react';
import { Navbar } from 'bloomer';
import { Plus, NavbarLogo, NavbarMenu, MenuItem } from '../../components/Header';

class Header extends Component {
  state = {
    isHidden: ''
  }

  onClickBurger() {
    console.log('meow!')
  }
  render () {
    return (
      <Navbar style={{backgroundColor: '#393f60', justifyContent: 'space-between'}}>
        <Plus />
        <NavbarLogo isHidden={this.state.isHidden} onClick={this.onClickBurger}></NavbarLogo>
        <NavbarMenu>
          <MenuItem href='/landing'>Nearby</MenuItem>
          <MenuItem href='/account'>Account</MenuItem>
          <MenuItem href='/login'>Log in</MenuItem>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Header;
