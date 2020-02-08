import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
    return(
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  
};

export default Navigation;