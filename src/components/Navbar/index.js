import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const NavbarC = () => {

    return (


        <Navbar
            expand="md"
            style={{ backgroundColor: '#34495e' }}
        >
            <NavbarBrand style={{ color: 'white' }} href="/">
                Todo App
            </NavbarBrand>
        </Navbar>

    )
}

export default NavbarC;