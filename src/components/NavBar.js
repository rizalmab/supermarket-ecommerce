import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

let cartItems = 0;

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <FontAwesomeIcon icon={solid("bag-shopping")} />
        <Navbar.Brand href="#home">Supermarket-Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav.Link href="#login">Login</Nav.Link>
        <FontAwesomeIcon icon={solid("cart-shopping")} />
        <p>{cartItems}</p>
      </Container>
    </Navbar>
  );
};

export default NavBar;
