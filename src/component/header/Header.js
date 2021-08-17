import React, { useState, useEffect } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, } from 'reactstrap';

function Header({ card }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (card.length >= 1) {
            document.title = `(${card.length}) E-commerce `
        } else {
            document.title = `E-commerce `
        }
    })

    return (
        <div>
            <Navbar color="dark" dark expand="md" >
                <div className="container">
                    <NavbarBrand href="/">ShoesShop</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink activeClassName="active" to="/" >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" to="/shop" >Shop</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" to="/blog" >Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" to="/card" >Card <span> {
                                    `(${card.length})`
                                }
                                </span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" to="/login" >Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="active" to="/signup" >Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header;
