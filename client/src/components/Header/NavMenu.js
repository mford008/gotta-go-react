import React from 'react';
import { NavbarItem, NavbarLink, NavbarDivider, NavbarDropdown } from 'bloomer';

export const NavMenu = () =>
<NavbarItem hasDropdown isHoverable isHidden='mobile'>
    <NavbarLink style={{ color: '#ffffff', fontWeight: '700', padding: '20' }} href='#/documentation'>Menu</NavbarLink>
    <NavbarDropdown>
        <NavbarItem style={{color: '#393f60' }} href='/account'>Account</NavbarItem>
        <NavbarItem style={{color: '#393f60' }} href='/landing'>Search Nearby</NavbarItem>
        <NavbarDivider />
        <NavbarItem style={{color: '#393f60' }} href='/'>Log out</NavbarItem>
    </NavbarDropdown>
</NavbarItem>;
