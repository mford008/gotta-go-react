import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarItem, Icon } from 'bloomer';

export const Plus = () =>
  <NavbarItem>
    <Link to='/addloo'>
      <Icon>
        <span className='fa fa-plus-circle fa-inverse fa-2x' />
      </Icon>
    </Link>
  </NavbarItem>;
