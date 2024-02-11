import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import Cart from '../Assets/download.png';
import './NavBar.css';
export default function NavBar() {
    const[menu,setMenu] = useState("home")
return (
    <div>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='text-success fs-3' style={{ fontWeight: 'bold' }}>VEGEFOODS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <li onClick={()=>{setMenu("home")}}><Link to="/" className="text-dark fs-5" style={{textDecoration:'none'}}>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("about")}}><Link to="/about" className="text-dark fs-5" style={{textDecoration:'none'}}>About</Link>{menu==="about"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("shop")}}><Link to="/shop" className="text-dark fs-5"style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("blog")}}><Link to="/blog" className="text-dark fs-5" style={{textDecoration:'none'}}>Blog</Link>{menu==="blog"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("contact")}}><Link to="/contact" className="text-dark fs-5" style={{textDecoration:'none'}}>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
                    </Nav>
                </Navbar.Collapse>
                <div className="login-logo">
                    <Link onClick={()=>{setMenu("contact")}} to="/login"><Button type="login">Login</Button></Link>
                    <div className="logo">
                        <li onClick={()=>{setMenu("cart")}}><Link to="/cart" className="cart-logo"><img src={Cart} alt="img"/></Link>{menu==="cart"?<hr/>:<></>}</li>
                    </div>
                </div>
            </Container>
        </Navbar>
    </div>
);
}
