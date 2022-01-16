import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { MdCloudDone } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

//import getTodo action creater here
import {
  getTodos,
  checkTodo,
  deleteTodo,
} from "../../store/actions/todoActions";

import "../../styles/listTodo.css";

const ListTodos = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  // console.log(todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const handleUpdateClick = (todo) => {
    // console.log(todo);
    setTodo(todo);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleStatusChange = (todo) => {
    // console.log(todo);
    dispatch(checkTodo(todo._id));
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <Row>
      <Col xs={{ span: 9, offset: 1 }} md={{ span: 7, offset: 2 }}>
        <h3 style={{ marginTop: "1.6em" }}>
          {todos.length > 0 ? "Your TodoList" : "Not Yet Any Todo"}
        </h3>
        {todos &&
          todos.map((todo) => {
            return (
              <div
                key={todo._id}
                className="shadow"
                style={{
                  marginTop: "2em",
                  border: "1px solid #808080",
                  padding: "1.2em 1.2em 1.8em 1.2em",
                  borderRadius: "0.5em",
                }}
              >
                <div
                  key={todo._id}
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
                    <h4 className={todo.isComplete ? "yesComplete" : ""}>
                      {todo.name}
                    </h4>
                    <p style={{ marginBottom: "0px" }}>{todo.author}</p>
                    <p style={{ marginTop: "0px" }}>
                      Added : {moment(todo.date).fromNow()}
                    </p>
                  </div>
                  <div>
                    <MdCloudDone
                      className={
                        todo.isComplete ? "icons green yesComplete" : "icons"
                      }
                      onClick={() => handleStatusChange(todo)}
                    />
                    <BiPencil
                      className="icons"
                      style={{ color: "blue" }}
                      onClick={() => handleUpdateClick(todo)}
                    />
                    <RiDeleteBin7Fill
                      className="icons"
                      style={{ color: "red" }}
                      onClick={() => handleDeleteClick(todo._id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </Col>
    </Row>
  );
};

export default ListTodos;
