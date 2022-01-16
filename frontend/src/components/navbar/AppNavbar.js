import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

import { signOut } from "../../store/actions/authActions";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);
  // console.log(state);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/signin");
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TodoApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {auth._id && (
              <Nav.Link style={{ color: "#FFFFFF" }}>
                {auth.name}'s Dashboard
              </Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            {auth._id ? (
              <Nav.Link style={{ color: "#FFFFFF" }} onClick={handleSignOut}>
                SIGNOUT
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/signin" style={{ color: "#FFFFFF" }}>
                  SIGNIN
                </Nav.Link>

                <Nav.Link as={Link} to="/signup" style={{ color: "#FFFFFF" }}>
                  SIGNUP
                </Nav.Link>
              </>
            )}

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
