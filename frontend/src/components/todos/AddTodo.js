import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { IoSendSharp } from "react-icons/io5";

const AddTodo = () => {
  return (
    <Row>
      <Col xs={{ span: 9, offset: 1 }} md={{ span: 7, offset: 2 }}>
        <Form
          className="shadow-lg"
          style={{
            marginTop: "2em",
            border: "1px solid #808080",
            padding: "1.6em",
            borderRadius: "0.5em",
          }}
        >
          <Row>
            <Col xs={{ span: 9, offset: 0 }} md={{ span: 8, offset: 1 }}>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" placeholder="Enter New Todo" />
              </Form.Group>
            </Col>
            <Col xs={2} md={2}>
              <Button>
                <IoSendSharp></IoSendSharp>
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default AddTodo;
