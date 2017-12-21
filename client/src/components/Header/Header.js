import React from 'react';
import { Navbar } from 'bloomer';

export const Header = (props) =>
  <Navbar style={{backgroundColor: '#393f60', justifyContent: 'space-between'}}>
    {props.children}
  </Navbar>;
