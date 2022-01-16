import React from "react";
import { useDispatch } from "react-redux";

import { Form, Button, Col, Row } from "react-bootstrap";
import { IoSendSharp } from "react-icons/io5";

//import addTodo action creater here
import { addTodo, updateTodo } from "../../store/actions/todoActions";

const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      const id = todo._id;
      const updatedTodo = {
        name: todo.name,
        isComplete: todo.isComplete,
        date: todo.date,
        author: todo.author,
        uid: todo.uid,
      };
      dispatch(updateTodo(updatedTodo, id));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      dispatch(addTodo(newTodo));
    }

    setTodo({
      name: " ",
      isComplete: false,
    });
  };

  return (
    <Row>
      <Col xs={{ span: 9, offset: 1 }} md={{ span: 7, offset: 2 }}>
        <Form
          onSubmit={handleSubmit}
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
                <Form.Control
                  type="text"
                  placeholder="Enter New Todo"
                  value={todo.name}
                  onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                />
              </Form.Group>
            </Col>
            <Col xs={2} md={2}>
              <Button onClick={handleSubmit}>
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
