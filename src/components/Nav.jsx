//import About from './About';
import Home from './Home';
//import Sm30days from './Sm30days';
//import Contact from './Contact';
//import Impostor from './Impostor';
import Logout from './Logout';


import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { ReactComponent as Logo } from "./img/logo4.svg";



const Navig = () =>
    <>
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
    <Container>
      <Navbar.Brand href="/" >
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
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/#">something</Nav.Link>
        <Nav.Link href="/#">something</Nav.Link>
        <Nav.Link href="/#">something</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/#">Logout</NavDropdown.Item>
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
  <Routes>
    {/* <Route path="/" element={<Home/>} /> */}
    {/* <Route path="/sm30days" element={<Sm30days/>} /> */}
    {/* <Route path="/impostor" element={<Impostor/>} /> */}
    {/* <Route path="/learning" element={<Learning/>} /> */}
    {/* <Route path="/logout" element={<Logout/>} /> */}
    {/* <Route path="/contact" element={<Contact/>} /> */}
    
  </Routes>
  
  </>


export default Navig;