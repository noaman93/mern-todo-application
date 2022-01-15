import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { signIn } from "../../store/actions/authActions";

const SignIn = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
    setCreds({
      email: "",
      password: "",
    });
  };

  if (auth._id) return <Navigate to="/"></Navigate>;

  return (
    <div className="shadow-lg mx-auto signin-box">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          SignIn
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
