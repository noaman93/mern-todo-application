import React from "react";
import { Form, Button } from "react-bootstrap";

const SignIn = () => {
  return (
    <div className="shadow-lg mx-auto signin-box">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          SignIn
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
