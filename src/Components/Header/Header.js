import React from 'react'
import './Header.css'
import { FormControl, Form, NavDropdown, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,NavLink, withRouter} from "react-router-dom"
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
const Header = () => {
    return (
        <div>
            <Navbar  expand="lg">
           <Nav.Link as={NavLink} to='/'>
               <Navbar.Brand className='header-Home'></Navbar.Brand> </Nav.Link>
               <HomeRoundedIcon/>
               <Navbar.Toggle/>
            </Navbar>
        </div>
    )
}

export default Header
