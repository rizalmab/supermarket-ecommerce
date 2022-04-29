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
import { Link } from "react-router-dom";

// Redux
import { selectNoOfItemsInCart } from "../features/shop/shopSlice";
import { useSelector } from "react-redux";

// let cartItems = 0;
// console.log("store/shop", store.getState().shop);
// console.log(selectNoOfItemsInCart(store.getState()));

const NavBar = () => {
  const itemsInCart = useSelector(selectNoOfItemsInCart);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <FontAwesomeIcon icon={solid("bag-shopping")} />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand href="#home">Supermarket-Ecommerce</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Link
              to="/"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              Home
            </Link> */}
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
        <Link to="/cart" style={{ color: "black" }}>
          <FontAwesomeIcon icon={solid("cart-shopping")} />
        </Link>
        <p>{itemsInCart}</p>
      </Container>
    </Navbar>
  );
};

export default NavBar;
