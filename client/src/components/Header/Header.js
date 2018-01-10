import React, { Component } from 'react';
import { Navbar } from 'bloomer';
import { Plus, NavbarMenu, MenuItem } from '../../components/Header';
import { NavbarBrand, NavbarItem, NavbarBurger } from 'bloomer';


class Header extends Component {
  state = {
    isHidden: true
  }

  onClickBurger = event => {
    event.preventDefault();
    if (this.state.isHidden) {
      this.setState({isHidden:false})
    }
    else this.setState({isHidden:true})
  }

  render () {
    return (
      <Navbar style={{backgroundColor: '#393f60'}}>
        <NavbarBrand style={{ justifyContent: 'space-between' }}>
          <Plus />
          <NavbarItem>
            <img style={{margin: '0'}} src='./../transp-gotta-go.png' alt='gotta-go' />
          </NavbarItem>
          <NavbarItem>
            <NavbarBurger onClick={this.onClickBurger} style={{ color: '#ffffff' }}></NavbarBurger>
          </NavbarItem>
        </NavbarBrand>
        <NavbarMenu isHidden={this.state.isHidden}>
          <MenuItem href='/landing/list'>Nearby</MenuItem>
          <MenuItem href='/account'>Account</MenuItem>
          <MenuItem href='/login'>Log in</MenuItem>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Header;
