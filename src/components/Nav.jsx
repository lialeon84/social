
import { Routes, Route } from "react-router-dom";
import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { ReactComponent as Logo } from "./img/logo4.svg";
import { useNavigate } from 'react-router-dom';

const Navig = () => {
  const navigate = useNavigate();
  const handleLinkClickFeed = (e) => {
    e.preventDefault();
    navigate('/feed');
  }
  const handleLinkClickProfile = (e) => {
    e.preventDefault();
    navigate('/profile');
  }
  const handleLinkClickLogout = () => {
    
    navigate('/logout');
  }
  const handleLinkClickAPI = (e) => {
    e.preventDefault();
    navigate('/fakeapi');
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
    <Container>
      <Navbar.Brand href="/">
         {/* <div className='coderChic'>
      <img src={process.env.PUBLIC_URL + './IMG_1980.PNG'} alt="Image" className='logopic'></img> </div> */}
      {/* <Logo
          alt=""
          width="30"
          height="30"
          border-radius="50%!important"
          className="d-inline-block align-top"
        /> */}
       Social
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link href="/feed" onClick={handleLinkClickFeed}>Home</Nav.Link>
        <Nav.Link href="/profile" onClick={handleLinkClickProfile}>Profile</Nav.Link>
        <Nav.Link href="/fakeapi" onClick={handleLinkClickAPI}>FakeApi</Nav.Link>
        {/* <Nav.Link href="/#" >something</Nav.Link> */}
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/logout" onClick={handleLinkClickLogout}>Logout</NavDropdown.Item>
        {/* <NavDropdown.Item href="/contact">
        Contact
        </NavDropdown.Item>
        <NavDropdown.Item href="/#something">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/#action">
          Separated link
        </NavDropdown.Item> */}
      </NavDropdown>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  
  </>
  )
}


export default Navig;