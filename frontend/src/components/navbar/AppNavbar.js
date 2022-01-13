import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TodoApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link as={Link} to="/" style={{ color: "#FFFFFF" }}>
              Todo
            </Nav.Link> */}
            <Nav.Link as={Link} to="/signin" style={{ color: "#FFFFFF" }}>
              SIGNIN
            </Nav.Link>
            <Nav.Link as={Link} to="#" style={{ color: "#FFFFFF" }}>
              SIGNOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" style={{ color: "#FFFFFF" }}>
              SIGNUP
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
