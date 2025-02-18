import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Employee Management</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Card View</Nav.Link>
          <Nav.Link href="/table">Table View</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
