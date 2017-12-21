import React from 'react';
import { NavbarItem, Icon } from 'bloomer';

export const Plus = () =>
  <NavbarItem isHidden='mobile'>
    <a>
      <Icon>
          <span className="fa fa-plus-circle fa-inverse fa-2x"/>
      </Icon>
    </a>
  </NavbarItem>
