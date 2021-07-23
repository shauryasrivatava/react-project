import React from 'react';
import { Nav, NavbarContainer, NavLogo, MobileIcon,NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElement';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Logo</NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar
