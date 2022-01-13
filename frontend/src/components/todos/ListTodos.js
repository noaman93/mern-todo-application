import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdCloudDone } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { RiDeleteBin7Fill } from "react-icons/ri";

import "../../styles/listTodo.css";

const ListTodos = () => {
  return (
    <Row>
      <Col xs={{ span: 9, offset: 1 }} md={{ span: 7, offset: 2 }}>
        <div
          className="shadow-lg"
          style={{
            marginTop: "2em",
            border: "1px solid #808080",
            padding: "1.2em 1.2em 1.8em 1.2em",
            borderRadius: "0.5em",
          }}
        >
          <h3>Your Todo List</h3>
          <div
            style={{
              marginTop: "2em",
              border: "1px solid #808080",
              padding: "0.9em",
              borderRadius: "0.5em",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h4>Learn React</h4>
              <p style={{ marginBottom: "0px" }}>Author Nomi</p>
              <p style={{ marginTop: "0px" }}>Added 4 Days Ago</p>
            </div>
            <div>
              <MdCloudDone className="icons" style={{ color: "green" }} />
              <BiPencil className="icons" style={{ color: "blue" }} />
              <RiDeleteBin7Fill className="icons" style={{ color: "red" }} />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ListTodos;
