import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodos from "./ListTodos";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Todos = () => {
  const [todo, setTodo] = useState({
    name: " ",
    isComplete: false,
  });

  const auth = useSelector((state) => state.auth);
  if (!auth._id) return <Navigate to="/signin"></Navigate>;
  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo}></AddTodo>
      <ListTodos todo={todo} setTodo={setTodo}></ListTodos>
    </>
  );
};

export default Todos;
