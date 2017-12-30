import React, { Component } from 'react';
import { NavbarItem, NavbarLink, NavbarDropdown } from 'bloomer';

class NavMenu extends Component {

  state = {
    isActive: ""
  };

  render(props) {
    return (
      <NavbarItem hasDropdown isHoverable isHidden='mobile'>
        <NavbarLink style={{ background: '#39405f', color: '#ffffff', fontWeight: '700' }}
          href=''>Menu
        </NavbarLink>
        <NavbarDropdown style={{ background: '#39405f' }}>
          {props}
        </NavbarDropdown>
      </NavbarItem>
    );
  }
};

export default NavMenu;
