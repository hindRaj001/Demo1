
import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="py-0">
      <Container>
        <Navbar.Brand className="mx-auto fw-bold ">
          Diamond Add Form
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
