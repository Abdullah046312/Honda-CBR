import React from 'react'
import "./navber.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navber = () => {
  return (
    <section id='nav_ber'>
      <Navbar expand="lg" className="ami">
        <Container>
          <Navbar.Brand href="#home">Be Humble</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#home">Shop</Nav.Link>
              <Nav.Link href="#home">News</Nav.Link>
              <Nav.Link href="#home">Contact Us </Nav.Link>
       
              <Nav.Link href="#link">Login</Nav.Link>
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

    </section>
    
  )
}

export default Navber
